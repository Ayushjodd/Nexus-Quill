import { useBlog } from "../Hooks";
import { Link, useParams } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { TfiWrite } from "react-icons/tfi";
import { Avatar } from "../components/BlogCard";
import { BlogsSkeleton } from "../components/BlogsSkeleton";
export default function Blog() {
  const { id } = useParams();
  const { loading, blog } = useBlog({
    id: id || "",
  });
  if (loading || !blog) {
    return (
      <div>
        <div className="flex justify-center mt-3">
          <div>
            <BlogsSkeleton />
            <BlogsSkeleton />
            <BlogsSkeleton />
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="flex justify-between  px-10 shadow-md">
        <img src={logo} className="h-20 w-20 m-2 " />
        <div className="flex text-gray-600 text-xl mt-5">
          <Link to={"/publish"}>
            <div className="flex text-gray-600 text-2xl ">
              <span className="flex p-1 cursor-pointer mt-2">
                <TfiWrite />
                <span className="pl-2 ">Write</span>
              </span>
            </div>
          </Link>
          <span className="pl-7">
            <Avatar name="User" />
          </span>
        </div>
      </div>
      <div className=" mt-16 text-center mx-[20%]">
        <div>
          <div className="text-5xl font-bold">{blog.title}</div>
          <div className="pt-5 text-lg font-medium ">
            {blog.content === "" ? "description null" : blog.content}
          </div>
          <div>{blog.id}</div>
        </div>
      </div>
    </>
  );
}

