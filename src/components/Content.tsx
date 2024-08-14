import React from "react";
import { FaChartLine, FaDollarSign, FaUniversity } from "react-icons/fa";
import { Ubuntu } from "next/font/google";
import Investment from "./Investment";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});
const Content = () => {
  return (
    <div className="relative w-full px-8 md:px-14 lg:px-24 grid gap-8 items-center rounded-xl bg-gradient-to-r from-blue-300 via-pink-200 to-orange-200 my-6">
      <div className="absolute w-full h-14 bg-white bottom-0"></div>
      <img
        src="/imgs/product/web.png"
        alt=""
        className="absolute bottom-10 right-0"
        width={500}
      />
      <div className="w-full grid gap-4 lg:grid-cols-2 items-center mt-16">
        {/* Text Section */}
        <div>
          <h1
            className={`text-2xl lg:text-3xl font-bold text-black ${ubuntu.className}`}
          >
            Your Money...Your Choice
          </h1>
          <p className="mt-2 text-sm   sm:text-base text-gray-200">
            Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit Sed Do
            Eiusmod Tempor Incididunt
          </p>
        </div>


        {/* Options Section */}
        <div className="flex flex-col lg:flex-row justify-end gap-4">
          <div className="flex items-center bg-white text-black py-2 px-4 rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
            <FaChartLine className="text-blue-500 mr-2" />
            <span>Stock</span>
          </div>
          <div className="flex items-center bg-red-200 text-black py-2 px-4 rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
            <FaDollarSign className="text-pink-500 mr-2" />
            <span>US Stock</span>
          </div>
          <div className="flex items-center bg-red-200 text-black py-2 px-4 rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
            <FaUniversity className="text-blue-500 mr-2" />
            <span>FDs</span>
          </div>
        </div>
      </div>

      {/* Bottom Section: Image and Information */}
      <Investment />
    </div>
  );
};

export default Content;
