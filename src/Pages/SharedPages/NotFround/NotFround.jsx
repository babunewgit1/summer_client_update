import React from "react";
import notfound from "../../../assets/404.gif";
import { Link } from "react-router-dom";

const NotFround = () => {
  return (
    <div className="h-screen text-center relative bg-[#14AA84] flex items-center justify-center">
      <div className="images max-w-[800px]">
        <img className="w-full h-full" src={notfound} alt="not found page" />
      </div>
      <div className="absolute w-full bottom-5">
        <Link
          className="text-white text-2xl bg-[#DBB984] font-semibold py-4 px-20 inline-block "
          to="/"
        >
          Go To HomePage
        </Link>
      </div>
    </div>
  );
};

export default NotFround;
