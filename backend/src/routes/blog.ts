import { Hono } from "hono";
import { withAccelerate } from "@prisma/extension-accelerate";
import { PrismaClient } from "@prisma/client/edge";
import { sign, verify } from "hono/jwt";
import {
  createBlogInput,
  updateBlogInput,
} from "@rudrasankha/common-nexusquill";

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>();

blogRouter.use(async (c, next) => {
  const jwt = c.req.header("Authorization") || "";
  try {
    const user: any = await verify(jwt, c.env.JWT_SECRET);
    if (user) {
      c.set("userId", user.id);
      await next();
    } else {
      c.status(403);
      return c.json({
        message: "You are not logged in",
      });
    }
  } catch (error) {
    console.error("JWT verification failed:", error);
    c.status(403);
    return c.json({
      message: "Invalid token or authorization failed",
    });
  }
});

blogRouter.post("/", async (c) => {
  const body: any = await c.req.json();
  const authorId = c.get("userId");
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const result = createBlogInput.safeParse(body);

  if (!result.success) {
    c.status(400);
    return c.json({
      message: "Incorrect inputs",
      errors: result.error.errors,
    });
  }
  //2a1eecde-796f-44e9-b77a-94ddce833baa
  const { title, content } = result.data;

  try {
    const blog = await prisma.post.create({
      data: {
        title: title,
        content: content,
        authorId: authorId,
        publishedAt:new Date()
      },
    });
    return c.json({
      id: blog.id,
    });
  } catch (error) {
    console.error(error);
    c.status(500);
    return c.json({
      message: "Error during blog creation",
    });
  }
});

blogRouter.put("/", async (c) => {
  const userId = c.get("userId");
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  const body: any = await c.req.json();
  const result = updateBlogInput.safeParse(body);

  if (!result.success) {
    c.status(400);
    return c.json({
      message: "Incorrect inputs",
      errors: result.error.errors,
    });
  }

  const { id, title, content } = result.data;

  try {
    await prisma.post.update({
      where: {
        id: id,
        authorId: userId,
      },
      data: {
        title: title,
        content: content,
      },
    });
    return c.text("Updated post");
  } catch (error) {
    console.error(error);
    c.status(500);
    return c.json({
      message: "Error during blog update",
    });
  }
});

blogRouter.get("/bulk", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const posts = await prisma.post.findMany({
      select: {
        content: true,
        title: true,
        id: true,
        author: {
          select: {
            name: true,
          },
        },
        publishedAt:true
      },
    });
    return c.json(posts);
  } catch (error) {
    console.error(error);
    return c.json({
      message: "error occured",
    });
  }
});

blogRouter.get("/:id", async (c) => {
  const id = c.req.param("id");

  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const post = await prisma.post.findUnique({
      where: {
        id: id,
      },
      select: {
        title: true,
        content: true,
        author: {
          select: {
            name: true,
          },
        },
        publishedAt:true
      },
    });

    return c.json(post);
  } catch (error) {
    console.error(error);
    return c.json({
      message: "error",
    });
  }
});
