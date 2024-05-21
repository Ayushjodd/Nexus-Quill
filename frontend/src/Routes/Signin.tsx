import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const handleSignupClick = () => {
    navigate("/signup");
  };
  return (
    <>
      <div className="h-screen flex">
        <div className="w-1/2 justify-items-center text-center">
          <div className=" border-gray-300 mx-72 mt-[30%] rounded-md p-14 border-[0.1px]">
            <div className="text-3xl font-bold">Welcome back</div>
            <div className="text-gray-400 pt-2">
              Didn't have a account?
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
              placeholder="enter your email"
              className="border border-gray-400 rounded-md p-1 px-4"
            ></input>
            <div className="font-bold pt-5">Password</div>
            <input
              placeholder="example@123"
              className="border border-gray-400 p-1 rounded-md  px-4"
            ></input>
            <div className="pt-3">
              <button className=" bg-sky-400 rounded-full px-4 py-1 mt-4 text-white hover:bg-sky-500  border-gray-600 border-[0.5px]">
                Log In
              </button>
            </div>
          </div>
        </div>
        <div className="w-1/2 bg-blue-200 justify-center items-center">
          <div className="font-bold text-3xl mx-[20%] mt-[40%]">
           A Platform where you can share your knowledge and discuss with others
            <div className="text-lg pt-3">Nexus Quill</div>
            <div className="text-gray-400 text-lg">Nexus Quill@2024</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
