import { Appbar } from "../components/Appbar";
import { BlogCard } from "../components/BlogCard";
import { useBlogs } from "../Hooks";
import { BlogsSkeleton } from "../components/BlogsSkeleton";
import { useEffect, useState } from "react";
import axios from "axios";
import { Backend_url } from "../conf";

export default function Blogs() {
  const { loading, blogs } = useBlogs();
  const [userData, setUserData] = useState<any>(null);

  let memory = null
  if (localStorage.getItem("Sign-In-Token") !== null) {
    memory = localStorage.getItem("Sign-In-Token")
  } else {
    memory = localStorage.getItem("Sign-Up-Token")
  }

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = memory;
        if (token) {
          const response = await axios.get(`${Backend_url}/api/v1/user/me`, {
            headers: {
              Authorization: token,
            },
          });
          setUserData(response.data);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [memory]);

  if (loading) {
    return (
      <div>
        <Appbar authorName={userData ? userData.name : "Loading..."} />
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

  if (!blogs || blogs.length === 0) {
    return (
      <div>
        <Appbar authorName={userData ? userData.name : "User"} />
        <div className="text-center mt-8 text-lg">No blogs found.</div>
      </div>
    );
  }

  return (
    <div>
      <Appbar authorName={userData ? userData.name : "User"} />
      <div className="max-w-screen-lg mx-auto mt-4 px-4 sm:px-6 md:px-8">
        <div className="text-lg border-b pb-2">For you</div>
        {blogs.map((blog: any) => (
          <div className="mt-8 border-b" key={blog.id}>
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
          </div>
        ))}
      </div>
    </div>
  );
}
