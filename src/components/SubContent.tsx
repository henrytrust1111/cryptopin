import React from "react";
import { FaArrowRight } from "react-icons/fa";

const SubContent = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-4 p-4">
      <div className="text-center lg:text-left">
        <h1 className="text-sm font-bold">
          Lorem Ipsum Dolor Sit Amet Consectetur {" "}
          <span className="mt-2 text-gray-500">
          Ut Labore Et <span className="text-orange-500">Dolore Magna</span>{" "}
          Aliqua Ut Dolor Sit
        </span>
        </h1> 
      </div>
      <div className="flex justify-center lg:justify-end">
        <button className="text-sm flex items-center bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white py-4 px-4 rounded-full hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default SubContent;
