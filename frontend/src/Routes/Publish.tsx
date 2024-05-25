import { Appbar } from "../components/Appbar";
import axios from "axios";
import { Backend_url } from "../conf";
import { useState } from "react";
import TextEditor from "../components/TextEditor";
import { useNavigate } from "react-router-dom";

export default function Publish() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  return (
    <>
      <div>
        <Appbar authorName="Rudra" />
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
