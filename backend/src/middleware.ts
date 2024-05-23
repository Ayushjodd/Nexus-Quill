
export function authMiddleware(app:any){
app.use("/api/v1/blog/*", async (c:any, next:any) => {
    const header = c.req.header("authorization") || "";
    const token = header.split(" ")[1];
    //@ts-ignore
    const response = await verify(token,c.env.JWT_SECRET);
    if (response.id) {
        c.set("userId", response.id);
      next();
    } else {
      c.status(403);
      return c.json({ error: "unauthorzed" });
    }
  });
}