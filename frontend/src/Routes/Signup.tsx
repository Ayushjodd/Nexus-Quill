import React from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate("/signin");
  };

  return (
    <>
      <div className="h-screen flex flex-col md:flex-row">
        <div className="flex justify-center items-center w-full md:w-1/2 p-4">
          <div className="border-gray-300 mt-20 md:mt-0 rounded-md p-10 border-[0.1px] w-full max-w-md">
            <div className="text-3xl font-bold">Create an account</div>
            <div className="text-gray-400 mt-2">
              Already have an account?{' '}
              <span
                onClick={handleLoginClick}
                className="text-blue-400 underline hover:text-blue-500 cursor-pointer"
              >
                Login
              </span>
            </div>
            <div className="font-bold pt-4">Username</div>
            <input
              type="text"
              placeholder="Enter your username"
              className="border border-gray-400 rounded-md p-1 px-4 w-full"
            />
            <div className="font-bold pt-4">Email</div>
            <input
              type="text"
              placeholder="Enter your email"
              className="border border-gray-400 rounded-md p-1 px-4 w-full"
            />
            <div className="font-bold pt-4">Password</div>
            <input
              type="password"
              placeholder="example@123"
              className="border border-gray-400 p-1 rounded-md px-4 w-full"
            />
            <div className="pt-3">
              <button className="bg-sky-400 rounded-full px-4 py-1 mt-4 text-white hover:bg-sky-500 border-gray-600 border-[0.5px]">
                Sign Up
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center w-full md:w-1/2 bg-blue-200 p-4 md:p-0">
          <div className="text-center mx-[20%] md:mx-0 md:w-[80%] lg:w-[60%]">
            <div className="font-bold text-3xl">
              A Platform where you can share your knowledge and discuss with others
            </div>
            <div className="text-lg pt-3">Nexus Quill</div>
            <div className="text-gray-400 text-lg">Nexus Quill @2024</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
