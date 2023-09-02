import React from "react";
import { SiSquare } from "react-icons/si";

const Footer = () => {
  return (
    <div className="absolute w-full h-[20%] bg-slate-700 text-white  ">
      <div className="">
        <div className="text-center items-center pt-4 cursor-pointer">
          Powered by <span className="font-semibold">Square</span>{" "}
        </div>
      </div>
    </div>
  );
};

export default Footer;
