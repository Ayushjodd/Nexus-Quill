import { Avatar, BlogCard } from "../components/BlogCard";
import { useBlogs } from "../Hooks";
export default function Blogs() {
  const { loading, blogs } = useBlogs();
  if (loading) {
    return <div>Loading...</div>; //gonna add shimmer ui later
  }
  return (
    <>
      <div className="flex justify-between shadow-md">
        <img
          alt="logo image"
          className="pl-2"
          src="https://imgs.search.brave.com/eK0nra-pmATQjdb8_HyzlZSpJlTeKX0jM8xczuq7_3g/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9sb2dv/d2lrLmNvbS9jb250/ZW50L3VwbG9hZHMv/aW1hZ2VzL21lZGl1/bTQ4NjQuanBn"
          width={150}
          height={150}
        />
        <span className="text-lg p-4">
          <Avatar name="Ayush" />
        </span>
      </div>
      <div className=" mx-96 mt-4">
        <div className="text-lg border-b p-2 ">For you</div>
        <div className="border-b mt-8">
          {blogs.map((blog: any) => (
            <BlogCard
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
