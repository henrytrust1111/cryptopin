import React from "react";
import { FaChartPie, FaChartBar, FaRegChartBar } from "react-icons/fa";

const Investment = () => {
  return (
    <div className="bg-white rounded-[40px] shadow-lg z-10 ">
      <div className="w-full flex justify-end space-x-1 p-5 ">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
      </div>
      <hr />
      <div className=" flex flex-col lg:flex-row items-center pb-8 md:p-8 space-y-8 lg:space-y-0 lg:space-x-8">
        {/* Left Section: Graphic */}
        <div className="hidden flex-1 md:flex justify-center lg:justify-start">
          <img
            src="/imgs/investment.png"
            alt="Investment Graphic"
            className="max-w-full h-auto"
          />
        </div>

        {/* Right Section: Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-block bg-orange-200 text-orange-700 rounded-full px-3 py-1 mb-4">
            Invest In Everything
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black">
            6.7%{" "}
            <span className="text-indigo-500 text-sm sm:text-base">
              Interest Rate
            </span>
          </h2>
          <p className="mt-4 text-gray-500">
            Proactively Envisioned Multimedia Based Expertise And Cross-Media
            Growth Strategies. Seamlessly Visualize Quality Intellectual Capital
            Without Superior.
          </p>
          <button className="mt-8 bg-[#F3F3F3] text-black text-sm sm:text-base py-3 px-6 rounded-full shadow-md hover:bg-gray-300 transform hover:scale-105 transition duration-300 ease-in-out">
            Create Account For Free
          </button>
        </div>
      </div>
    </div>
  );
};

export default Investment;
