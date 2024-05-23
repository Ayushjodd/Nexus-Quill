import { useNavigate } from "react-router-dom";
import { useState } from "react";
import data from "../data";
import { FaGithub } from "react-icons/fa";
export default function Landing() {
  const github1Handler = () => {
    window.open("https://github.com/Rudra-Sankha-Sinhamahapatra/Nexus-Quill");
  };
  const [selected, setSelected] = useState(null);
  function handleSingleSelection(getCurrentId: any) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }
  const route = useNavigate();
  const onClickHandler = () => {
    route("/signup");
  };
  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <div className="flex ml-[37%]">
        <h1 className=" select-none pt-3 text-4xl text-gray-200 hover:pt-1 transition-all text-center hover:text-[#402094]">
          Discover and Share Your Stories
        </h1>
        <div className="flex ">
          <button
            onClick={onClickHandler}
            className=" hover:bg-gray-200 transition-all hover:text-[#402094] text-white p-3 mt-3 bg-[#402094] ml-96 border border-gray-400 rounded-full"
          >
            JOIN NOW !
          </button>
          <span
            onClick={github1Handler}
            className="text-white text-4xl mt-4 pl-2 cursor-pointer"
          >
            <FaGithub />
          </span>
        </div>
      </div>
      <h3 className="text-gray-200 text-center mt-3 text-lg">
        Join a community of writers, readers, and thinkers
      </h3>

      <div className="text-center text-green-500 text-xl pt-[6%]">
        <div className=" m-10 p-7 text-3xl text-pretty justify-items-center">
          <div>
            {data && data.length > 0 ? (
              data.map((dataItem) => (
                <div>
                  <div
                    onClick={() => handleSingleSelection(dataItem.id)}
                    className="title pt-5 pb-5"
                  >
                    <h3>{dataItem.question}</h3>
                    <button className=" bg-[#402094] text-white text-2xl rounded-full p-2 px-4 hover:bg-white hover:text-[#402094] transition-all">
                      +
                    </button>
                  </div>
                  {selected === dataItem.id ? (
                    <div className=" text-md text-white">{dataItem.answer}</div>
                  ) : null}
                </div>
              ))
            ) : (
              <div>data not found</div>
            )}
          </div>
        </div>
      </div>
      <div className="text-end text-white text-xl">
        Made in colabraration by :<div className="">Ayush</div>
        <div className="">Rudra</div>
      </div>
    </>
  );
}
