import { useNavigate } from "react-router-dom";

function Signin() {
  const navigate = useNavigate();
  const handleSignupClick = () => {
    navigate("/signup");
  };

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
              type="text"
              placeholder="Enter your email"
              className="border border-gray-400 rounded-md p-1 px-4 w-full"
            />
            <div className="font-bold pt-5">Password</div>
            <input
              type="password"
              placeholder="example@123"
              className="border border-gray-400 p-1 rounded-md px-4 w-full"
            />
            <div className="pt-3">
              <button className="bg-sky-400 rounded-full px-4 py-1 mt-4 text-white hover:bg-sky-500 border-gray-600 border-[0.5px] w-full">
                Log In
              </button>
            </div>
          </div>
        </div>
        <div className="hidden md:flex md:w-1/2 bg-blue-200 justify-center items-center">
          <div className="font-bold text-3xl mx-10 text-center">
            A Platform where you can share your knowledge and discuss with
            others
            <div className="text-lg pt-3">Nexus Quill</div>
            <div className="text-gray-400 text-lg">Nexus Quill@2024</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signin;