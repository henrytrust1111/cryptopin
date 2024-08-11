import React from 'react';
import { FaChartPie, FaChartBar, FaRegChartBar } from 'react-icons/fa';

const Investment = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center bg-white rounded-lg shadow-lg p-8">
      {/* Left Section: Image & Icons */}
      <div className="flex-1 flex flex-col items-center">
    <img src="/imgs/investment.png" alt="" />
      </div>

      {/* Right Section: Text Content */}
      <div className="flex-1 mt-8 lg:mt-0 lg:ml-8 text-center lg:text-left">
        <div className="inline-block bg-orange-200 text-orange-700 rounded-full px-3 py-1 mb-4">
          Invest In Everything
        </div>
        <h2 className="text-5xl font-bold text-black">
          6.7% <span className="text-indigo-500">Interest Rate</span>
        </h2>
        <p className="mt-4 text-gray-500">
          Proactively Envisioned Multimedia Based Expertise And Cross-Media Growth Strategies. Seamlessly Visualize Quality Intellectual Capital Without Superior.
        </p>
        <button className="mt-8 bg-gray-200 text-black py-3 px-6 rounded-full shadow-md hover:bg-gray-300 transform hover:scale-105 transition duration-300 ease-in-out">
          Create Account For Free
        </button>
      </div>
    </div>
  );
};

export default Investment;
