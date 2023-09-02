import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import BasicAccordion from "./Accordion";
import Image from "next/image";
import Sop from "./Sop";

const Shopall = () => {
  return (
    <>
      {" "}
      <div>
        <div className="flex items-center space-x-2">
          <div className="font-semibold">Shop All</div>
          <div>
            <AiOutlineRight className="font-bold" />
          </div>
          <div className="text-slate-500 font-semibold">
            {" "}
            SOP Generation - Study Visa
          </div>
        </div>
        <div className="my-10 flex  justify-between ">
          <div className="w-[50%] ">
            <Image src="/sop.jpeg" width={500} height={900} alt="" />
          </div>
          <div className="w-[50%]">
            {" "}
            <Sop />
            <BasicAccordion />
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-20 mb-10">
        <div className="text-xl font-semibold">Effizient Immigration Inc.</div>
        <div>© 2023</div>
        <div className="flex gap-3">
          <div className="">
            <BsFacebook size={22} className="" color="blue" />
          </div>
          <div>
            <FaInstagramSquare size={22} color="red" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Shopall;
