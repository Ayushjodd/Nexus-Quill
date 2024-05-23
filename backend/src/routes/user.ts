import { Hono } from "hono";
import bcrypt from 'bcryptjs'; 
import { withAccelerate } from "@prisma/extension-accelerate";
import { PrismaClient } from "@prisma/client/edge";
import { sign, verify } from "hono/jwt";

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
  
    const existingUser = await prisma.user.findUnique({
      where: {
        email: body.email,
      },
    });
  
    try{
  
    if (existingUser) {
      c.status(403);
      return c.json({
        message: "User already exists",
      });
    }
  
    const hashedPassword = await bcrypt.hash(body.password, 10);
  
    const user = await prisma.user.create({
      data: {
        email: body.email,
        password: hashedPassword, 
        name:body.name
      },
    });
  
    const token = await sign({ id: user.id }, c.env.JWT_SECRET);
  
    return c.json({
      jwt: token,
    });
  }
  catch(error){
    console.error(error);
  c.json({
    message:"Error during signup"
  })
  }
  });
  
  userRouter.post("/signin", async (c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
  
    const body = await c.req.json();
  
    try{
    const user = await prisma.user.findUnique({
      where: {
        email: body.email,
      },
    });
  
    if (!user) {
      c.status(403);
      return c.json({
        error: "User not found",
      });
    }
  
    const validPassword = await bcrypt.compare(body.password, user.password);
    if (!validPassword) {
      c.status(403);
      return c.json({
        error: "Invalid password",
      });
    }
  
    const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
    return c.json({ jwt });
  }
  catch(error){
    console.error(error);
    c.json({
      message:"Error during signin"
    })
  }
  });