import React from "react";
import Cart from "./Cart";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between relative w-[100%] mb-10 text-center">
      <div className="flex space-x-10 items-start left-0 text-sm font-semibold">
        <Link href="/">
          <div
            className="no-underline hover:underline  before:origin-right hover:before:origin-left
"
          >
            Book
          </div>
        </Link>
        <Link href="/Shopall">
          <div className="hover:underline underline-black">Shop All</div>
        </Link>
      </div>
      <Link href="/">
        {" "}
        <div className="justify-center  items-center">
          <h1 className="font-bold text-xl items-center mx-4">
            Effizient Immigration Inc.
          </h1>
        </div>
      </Link>
      <div className="place-items-end right-0 text-black">
        <Link href="#">
          {" "}
          <Cart />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
