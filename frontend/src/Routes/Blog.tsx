import { useBlog } from "../Hooks";
import { useParams } from "react-router-dom";
import { BlogsSkeleton } from "../components/BlogsSkeleton";
import { useEffect, useState } from "react";
import { Backend_url } from "../conf";
import axios from "axios";
import { Appbar } from "../components/Appbar";
export default function Blog() {
  const [userData, setUserData] = useState<any>(null);
  const { id } = useParams();
  const { loading, blog } = useBlog({
    id: id || "",
  });

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

  if (loading || !blog) {
    return (
      <div>
        <Appbar authorName={userData ? userData.name : "User"}/>
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
    <div> 
      <Appbar authorName={userData ? userData.name : "User"} />
      <div className=" mt-16 text-center mx-[20%]">
        <div>
          <div className="text-5xl font-bold">{blog.title}</div>
          <div className="pt-5 text-lg font-medium ">
            {blog.content === "" ? "description null" : blog.content}
          </div>
          <div>{blog.id}</div>
        </div>
      </div>
      </div>
    </>
  );
}

