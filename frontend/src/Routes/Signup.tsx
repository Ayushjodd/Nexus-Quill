import { signupInput } from "@rudrasankha/common-nexusquill";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Backend_url } from "../conf";
import axios from "axios";

function Signup() {
  const [postInputs, setPostInputs] = useState<signupInput>({
    name: "",
    password: "",
    email: "",
  });
  const navigate = useNavigate();

  async function sendReq() {
    try {
      const res = await axios.post(
        `${Backend_url}/api/v1/user/signup`,
        postInputs
      );
      const jwt = res.data.jwt;
      localStorage.setItem("Sign-Up-Token", jwt);
      navigate("/blogs");
    } catch (e) {
      alert("error occurred");
    }
  }

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
              Already have an account?{" "}
              <span
                onClick={handleLoginClick}
                className="text-blue-400 underline hover:text-blue-500 cursor-pointer"
              >
                Login
              </span>
            </div>
            <div className="font-bold pt-4">Name</div>
            <input
              onChange={(e) => {
                setPostInputs({
                  ...postInputs,
                  name: e.target.value,
                });
              }}
              type="text"
              placeholder="Enter your username"
              className="border border-gray-300 rounded-md p-1 px-4 w-full focus:border-sky-400"
            />
            <div className="font-bold pt-4">Email</div>
            <input
              onChange={(e) => {
                setPostInputs({
                  ...postInputs,
                  email: e.target.value,
                });
              }}
              type="text"
              placeholder="Enter your email"
              className="border border-gray-300 rounded-md p-1 px-4 w-full focus:border-sky-400"
            />
            <div className="font-bold pt-4">Password</div>
            <input
              onChange={(e) => {
                setPostInputs({
                  ...postInputs,
                  password: e.target.value,
                });
              }}
              type="password"
              placeholder="example@123"
              className="border border-gray-300 p-1 rounded-md px-4 w-full focus:border-sky-400"
            />
            <div className="pt-3">
              <button
                onClick={sendReq}
                className="bg-sky-400 rounded-full px-4 py-1 mt-4 text-white hover:bg-sky-500 border-gray-600 border-[0.5px]"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center w-full md:w-1/2 bg-blue-200 p-4 md:p-0">
          <div className="text-center mx-[20%] md:mx-0 md:w-[80%] lg:w-[60%]">
            <div className="font-bold text-3xl">
              A Platform where you can share your knowledge and discuss with
              others
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
