import React from 'react';
import { FaChartLine, FaDollarSign, FaUniversity } from 'react-icons/fa';

const Content = () => {
  return (
    <div className="bg-red-300 p-8 grid gap-4 lg:grid-cols-2 items-center">
      {/* Text Section */}
      <div>
        <h1 className="text-3xl lg:text-5xl font-bold text-black">
          Your Money...Your Choice
        </h1>
        <p className="mt-2 text-lg text-gray-200">
          Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit Sed Do Eiusmod Tempor Incididunt
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
  );
};

export default Content;
