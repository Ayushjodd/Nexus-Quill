import { Appbar } from "../components/Appbar";
import { Avatar, BlogCard } from "../components/BlogCard";
import { useBlogs } from "../Hooks";
import logo from "../assets/images/logo.png";
import { BlogsSkeleton } from "../components/BlogsSkeleton";
export default function Blogs() {
  const { loading, blogs } = useBlogs();

  if (loading) {
    return <div>
          <Appbar authorName="Rudra"/>
          <div className="flex justify-center mt-3">
      <div>
      <BlogsSkeleton/>
      <BlogsSkeleton/>
      <BlogsSkeleton/>

      </div>
    </div>
    </div>
  }

  // Handle case where blogs might still be undefined
  if (!blogs || blogs.length === 0) {
    return <div>No blogs found.</div>; // Handle empty state gracefully
  }

  return (
    <>
      <div className="flex justify-between shadow-md">
        <div className="pl-10 py-3">
          <img
            alt="logo image"
            className="pl-2"
            src={logo}
            width={70}
            height={70}
          />
        </div>
        <span className="text-lg p-4">
          <Avatar name="Ayush" />
        </span>
      </div>
      <div className="mx-96 mt-4">
        <Appbar authorName="Rudra" />
        <div className="text-lg border-b p-2">For you</div>
        <div className="border-black mt-8">
          {blogs.map((blog: any) => (
            <BlogCard
              key={blog.id}
              id={blog.id}
              authorName={blog.author.name || "Anonymous"}
              title={blog.title}
              content={
                blog.content.length > 100
                  ? blog.content.substring(0, 100) + "..."
                  : blog.content
              }
              publishedDate={blog.publishedDate}
            />
          ))}
        </div>
      </div>
    </>
  );
}
