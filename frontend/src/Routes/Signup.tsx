import React from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate("/signin");
  };
  return (
    <>
      <div className="h-screen flex">
        <div className="w-1/2 justify-items-center text-center ">
          <div className=" border-gray-300 mx-72 mt-[30%] rounded-md p-10 border-[0.1px]">
            <div className="text-3xl font-bold">Create an account</div>
            <div className="text-gray-400">
              Already have an account?
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
              placeholder="enter your username"
              className="border border-gray-400 rounded-md  p-1 px-4"
            ></input>
            <div className="font-bold pt-4">Email</div>
            <input
              type="text"
              placeholder="enter your email"
              className="border border-gray-400 rounded-md p-1 px-4"
            ></input>
            <div className="font-bold pt-4">Password</div>
            <input
              placeholder="example@123"
              className="border border-gray-400 p-1 rounded-md  px-4"
            ></input>
            <div className="pt-3">
              <button className=" bg-sky-400 rounded-full px-4 py-1 mt-4 text-white hover:bg-sky-500  border-gray-600 border-[0.5px]">
                Sign Up
              </button>
            </div>
          </div>
        </div>
        <div className="w-1/2 bg-gray-200 justify-center items-center">
          <div className="font-bold text-3xl mx-[20%] mt-[40%]">
            "The customer service I received was exceptional. The support team
            went above and beyond to address my concerns."
            <div className="text-lg pt-3">Jules Winnfield</div>
            <div className="text-gray-400 text-lg">CEO, Acme Inc</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
