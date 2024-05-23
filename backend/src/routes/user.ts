import { Hono } from "hono";
import bcrypt from 'bcryptjs'; 
import { withAccelerate } from "@prisma/extension-accelerate";
import { PrismaClient } from "@prisma/client/edge";
import { sign, verify } from "hono/jwt";
import { signupInput,signinInput } from '@rudrasankha/common-nexusquill';

export const userRouter=new Hono<
{
    Bindings:{
        DATABASE_URL:string;
        JWT_SECRET:string
    }
}>();

userRouter.post("/signup", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const result = signupInput.safeParse(body);

  if (!result.success) {
      c.status(400);
      return c.json({
          message: "Incorrect inputs",
          errors: result.error.errors,
      });
  }

  const { email, password, name } = result.data;

  const existingUser = await prisma.user.findUnique({
      where: {
          email: email,
      },
  });

  if (existingUser) {
      c.status(403);
      return c.json({
          message: "User already exists",
      });
  }

  try {
      const hashedPassword = await bcrypt.hash(password, 10);

      const user = await prisma.user.create({
          data: {
              email: email,
              password: hashedPassword,
              name: name
          },
      });

      const token = await sign({ id: user.id }, c.env.JWT_SECRET);

      return c.json({
          jwt: token,
      });
  } catch (error) {
      console.error(error);
      c.status(500);
      return c.json({
          message: "Error during signup",
      });
  }
});

userRouter.post("/signin", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const result = signinInput.safeParse(body);

  if (!result.success) {
      c.status(400); 
      return c.json({
          message: "Incorrect inputs",
          errors: result.error.errors,
      });
  }

  const { email, password } = result.data;

  try {
      const user = await prisma.user.findUnique({
          where: {
              email: email,
          },
      });

      if (!user) {
          c.status(403);
          return c.json({
              error: "User not found",
          });
      }

      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
          c.status(403);
          return c.json({
              error: "Invalid password",
          });
      }

      const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
      return c.json({ jwt });
  } catch (error) {
      console.error(error);
      c.status(500); // Return 500 status for server errors
      return c.json({
          message: "Error during signin",
      });
  }
});
