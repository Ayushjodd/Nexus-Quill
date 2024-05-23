import { useNavigate } from "react-router-dom";
import { useState } from "react";
import data from "../data";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Landing() {
  const github1Handler = () => {
    window.open("https://github.com/Rudra-Sankha-Sinhamahapatra/Nexus-Quill");
  };
  const rudratwitterHandler = () => {
    window.open("https://twitter.com/RudraSankha");
  };
  const rudraLinkedInHandler = () => {
    window.open(
      "https://www.linkedin.com/in/rudra-sankha-sinhamahapatra-6311aa1bb/"
    );
  };
  const ayushTwitterHandler = () => {
    window.open("https://x.com/AyushIsCoding");
  };
  const ayushLinkedInHandler = () => {
    window.open("https://www.linkedin.com/in/ayush-jangra-9992a82a3/");
  };
  const [selected, setSelected] = useState(null);
  function handleSingleSelection(getCurrentId:any) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }
  const route = useNavigate();
  const onClickHandler = () => {
    route("/signup");
  };
  return (
    <>
      <div className="fixed inset-0 -z-10 min-h-screen w-full bg-[radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <div className="flex flex-col lg:flex-row justify-center items-center text-center lg:text-left">
        <div>
          <h1 className="select-none pt-3 text-4xl text-gray-200 hover:pt-1 transition-all hover:text-[#402094]">
            Discover and Share Your Stories
          </h1>
          <h3 className="text-gray-200 mt-3 text-lg">
            Join a community of writers, readers, and thinkers
          </h3>
        </div>
        <div className="flex mt-5 lg:mt-0 lg:ml-10">
          <button
            onClick={onClickHandler}
            className="hover:bg-gray-200 transition-all hover:text-[#402094] text-white p-3 mt-3 bg-[#402094] border border-gray-400 rounded-full"
          >
            JOIN NOW!
          </button>
          <span
            onClick={github1Handler}
            className="text-white text-4xl mt-4 pl-2 cursor-pointer"
          >
            <FaGithub />
          </span>
        </div>
      </div>

      <div className="text-center text-green-500 text-xl pt-10 lg:pt-[6%]">
        <div className="m-5 lg:m-10 p-7 text-3xl text-pretty justify-items-center">
          <div>
            {data && data.length > 0 ? (
              data.map((dataItem) => (
                <div key={dataItem.id}>
                  <div
                    className="title pt-5 pb-5 cursor-pointer"
                  >
                    <h3>{dataItem.question}</h3>
                    <button className="bg-[#402094] text-white text-2xl rounded-full p-2 px-4 hover:bg-white hover:text-[#402094] transition-all"   onClick={() => handleSingleSelection(dataItem.id)}>
                      +
                    </button>
                  </div>
                  {selected === dataItem.id ? (
                    <div className="text-md text-white">{dataItem.answer}</div>
                  ) : null}
                </div>
              ))
            ) : (
              <div>data not found</div>
            )}
          </div>
        </div>
      </div>
      <div className="text-center mt-10 text-gray-200">
        <div>
          <div>
            Made in colabaration by
            <div>
              Rudra{" "}
              <span>
                <FaTwitter
                  onClick={rudratwitterHandler}
                  className="inline-block mr-2"
                />
                <FaLinkedin
                  onClick={rudraLinkedInHandler}
                  className="inline-block mr-2"
                />
              </span>
            </div>
            <div>
              Ayush{" "}
              <span>
                <FaTwitter
                  onClick={ayushTwitterHandler}
                  className="inline-block mr-2"
                />
                <FaLinkedin
                  onClick={ayushLinkedInHandler}
                  className="inline-block mr-2"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
