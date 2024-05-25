import React from "react";
import { Avatar } from "./BlogCard";
import { Link } from "react-router-dom";

interface AppbarProps {
  authorName: string;
}

export const Appbar: React.FC<AppbarProps> = ({ authorName }) => {
  return (
    <div className="border-b flex justify-between">
      <div className="flex items-center">
        <Link to={"/blogs"}>
          <img
            src="https://imgs.search.brave.com/WvUskPUKMUxpKtzOSqOWueKCGUvKX5xfdHjQ7Ufy_yw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0L3Vh/enc2Z0ZRdUVDMjlt/eE1NNTVUcGItMzIw/LTgwLmpwZw"
            alt="Logo"
            className="h-10 w-10 mr-2"
          />
        </Link>
        <span>Draft in {authorName}</span>
      </div>
      <div className="flex items-center">
        <button className="bg-green-400 hover:bg-green-500 rounded-full p-2 text-base mr-2">
          Publish
        </button>
        <Avatar name={authorName} />
      </div>
    </div>
  );
};
