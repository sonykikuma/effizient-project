import React from "react";
import Navbar from "../components/Navbar";
import Shopall from "../components/Shopall";
import Footer from "../components/Footer";

const shop = () => {
  return (
    <>
      <div className=" px-20 pt-10 bg-white  mx-auto">
        <Navbar />
        <Shopall />{" "}
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default shop;
