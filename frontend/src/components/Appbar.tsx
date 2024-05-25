import React from "react";
import { Avatar } from "./BlogCard";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

interface AppbarProps {
  authorName: string;
}

export const Appbar: React.FC<AppbarProps> = ({ authorName }) => {
  return (
    <div className="border-b flex justify-between px-10 py-4">
      <div className="flex items-center">
        <Link to={"/blogs"}>
          <img src={logo} alt="Logo" className="h-10 w-10 mr-2" />
        </Link>
        <span>Post Own Blogs ,{authorName}</span>
      </div>
      <div className="flex items-center">
        <Link to={"/publish"}>
          <button className="bg-green-400 hover:bg-green-500 rounded-full p-2 text-base mr-2 px-3">
            Publish
          </button>
        </Link>
        <Link to={"/blogs"}>
          <button className="bg-green-400 hover:bg-green-500 rounded-full p-2 text-base mr-2">
            Home
          </button>
        </Link>
        <Avatar name={authorName} />
      </div>
    </div>
  );
};
