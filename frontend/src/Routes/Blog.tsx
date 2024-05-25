import React from "react";
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
        <input type="text" placeholder="Title" className="text-3xl mt-5" />
        <input
          type="text"
          placeholder="Tell your story..."
          className="text-xl"
        ></input>
      </div>
    </>
  );
}

export default Blog;
