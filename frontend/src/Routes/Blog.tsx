import { useBlog } from "../Hooks";
import { useParams } from "react-router-dom";
import { Appbar } from "../components/Appbar";
function Blog() {
  const { id } = useParams();
  const { loading, blog } = useBlog({
    id: id || "",
  });
  if (loading || !blog) {
    return (
      <div>
        <h1>loading</h1>
      </div>
    );
  }
  return (
    <>
      <div>
        <Appbar authorName={blog.author.name} />
      </div>
      <div>
        <div className="flex flex-col items-center justify-center mt-8">
        <div className="py-4">{blog.title}</div>
        <div>{blog.content===""?"description null":blog.content}</div>
        <div className="py-4">{blog.id}</div>
        </div>
      </div>
    </>
  );
}

export default Blog;
