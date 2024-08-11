import React from "react";
import { FaPlus, FaStar } from "react-icons/fa";

const Counter = () => {
  return (
    <div className="w-[93%] sm:w-[95%] md:w-[90%] lg:w-[80%] grid grid-cols-1 lg:grid-cols-2 gap-8 py-14">
      {/* Statistics Section */}
      <div className="grid sm:grid-cols-2 grid-cols-1  gap-8">
        {/* Statistic 1 */}
        <div className="flex items-center space-x-4">
          <h2 className="flex text-4xl font-bold text-gray-900">
            $12B
            <span className="text-pink-500">
              <FaPlus className="inline ml-1" />
            </span>
          </h2>
          <div className="text-gray-500">
            <p>Assets</p>
            <p>Management</p>
          </div>
        </div>
        {/* Statistic 2 */}
        <div className="flex items-center space-x-4">
          <h2 className="flex text-4xl font-bold text-gray-900">
            0.10
            <span className="text-blue-500">%</span>
          </h2>
          <div className="text-gray-500">
            <p>Lowest</p>
            <p>Transaction Fees</p>
          </div>
        </div>
        {/* Statistic 3 */}
        <div className="flex items-center space-x-4">
          <h2 className="flex text-4xl font-bold text-gray-900">
            200
            <span className="text-blue-500">
              <FaPlus className="inline ml-1" />
            </span>
          </h2>
          <div className="text-gray-500 text-sm">
            <p>Supported Crypto Currencies</p>
            {/* <p>Crypto Currencies</p> */}
          </div>
        </div>
        {/* Statistic 4 */}
        <div className="flex items-center space-x-4">
          <h2 className="flex text-4xl font-bold text-gray-900">
            5M
            <span className="text-orange-500">
              <FaPlus className="inline ml-1" />
            </span>
          </h2>
          <div className="text-gray-500">
            <p>Crypto Users</p>
            <p>Worldwide</p>
          </div>
        </div>
      </div>

      {/* Badge Section */}
      <div className="rounded-xl flex flex-col items-center justify-center text-white">
        <img src="/imgs/Rating.png" alt="" />
      </div> 
    </div>
  );
};

export default Counter;
