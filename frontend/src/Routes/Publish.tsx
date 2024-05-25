import { Appbar } from "../components/Appbar";
import axios from "axios";
import { Backend_url } from "../conf";
import { useEffect, useState } from "react";
import TextEditor from "../components/TextEditor";
import { useNavigate } from "react-router-dom";
import { useBlogs } from "../Hooks";
import { BlogsSkeleton } from "../components/BlogsSkeleton";

export default function Publish() {
  const { loading } = useBlogs();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
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
  }, []);

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

  return (
    <>
      <div>
        <Appbar authorName={userData ? userData.name : "User"} />
        <div className="flex justify-center w-full">
          <div className="max-w-screen-lg w-full mt-4">
            <input
              type="text"
              className="w-full  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
            />
            <TextEditor
              onChange={(e) => {
                setContent(e.target.value);
              }}
            />
            <div className="flex justify-center">
              <button
                onClick={async () => {
                  const response = await axios.post(
                    `${Backend_url}/api/v1/blog`,
                    {
                      title,
                      content,
                    },
                    {
                      headers: {
                        Authorization: localStorage.getItem("token"),
                      },
                    }
                  );
                  navigate(`/blog/${response.data.id}`);
                }}
                type="submit"
                className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800 mt-4"
              >
                Publish post
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
