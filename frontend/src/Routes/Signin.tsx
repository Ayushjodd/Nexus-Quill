import { signinInput } from "@rudrasankha/common-nexusquill";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Backend_url } from "../conf";
import axios from "axios";

function Signin() {
  const [postInputs, setPostInputs] = useState<signinInput>({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleSignupClick = () => {
    navigate("/signup");
  };

  async function sendReq() {
    try {
      const res = await axios.post(
        `${Backend_url}/api/v1/user/signin`,

        postInputs
      );
      const jwt = res.data.jwt;
      localStorage.setItem("token", jwt);
      navigate("/blogs");
    } catch (e) {
      alert("error occurred");
    }
  }
  return (
    <>
      <div className="h-screen flex flex-col md:flex-row">
        <div className="flex justify-center items-center w-full md:w-1/2 p-4">
          <div className="border-gray-300 rounded-md p-8 border-[0.1px] w-full max-w-md">
            <div className="text-3xl font-bold">Welcome back</div>
            <div className="text-gray-400 pt-2">
              Didn't have an account?{" "}
              <span
                onClick={handleSignupClick}
                className="text-blue-400 underline hover:text-blue-500 cursor-pointer"
              >
                Sign up
              </span>
            </div>
            <div className="font-bold pt-5">Email</div>
            <input
              onChange={(e) => {
                setPostInputs({
                  ...postInputs,
                  email: e.target.value,
                });
              }}
              type="text"
              placeholder="Enter your email"
              className="border border-gray-400 rounded-md p-1 px-4 w-full"
            />
            <div className="font-bold pt-5">Password</div>
            <input
              onChange={(e) => {
                setPostInputs({
                  ...postInputs,
                  password: e.target.value,
                });
              }}
              type="password"
              placeholder="example@123"
              className="border border-gray-400 p-1 rounded-md px-4 w-full"
            />
            <div className="pt-3">
              <button
                onClick={sendReq}
                className="bg-sky-400 rounded-full px-4 py-1 mt-4 text-white hover:bg-sky-500 border-gray-600 border-[0.5px] w-full"
              >
                Log In
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

export default Signin;
