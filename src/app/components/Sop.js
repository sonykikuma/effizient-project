"use client";

import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const Sop = () => {
  const [count, setCount] = useState(1);

  const increaseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
    if (count > 1) {
      setCount(count - 1);
    } else {
      return 1;
    }
  };

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-2xl font-[Square Market] tracking-wide font-semibold">
        SOP Generation - Study Visa
      </h1>
      <h3 className="my-2 text-xl">CAD$ 200.00</h3>
      <div className="my-2 flex space-x-6 mb-4">
        <div
          className="bg-slate-100 p-2 px-3 cursor-pointer"
          onClick={decreaseCount}
        >
          -
        </div>
        <div className=" p-2 px-3 "> {count}</div>
        <div
          className="bg-slate-50 p-2 px-3 cursor-pointer"
          onClick={increaseCount}
        >
          +
        </div>
      </div>
      <div className="mt-4 bg-blue-500 w-[50%] h-15 text-center mb-10 py-4 text-l text-[#f8fafc] font-semibold">
        {" "}
        Add to Cart{" "}
        <span className="text-[#e2e8f0] text-base font-normal">
          CAD$ 200.00
        </span>
      </div>
    </div>
  );
};

export default Sop;
//        <Button variant="contained" size="large">
//        </Button>
