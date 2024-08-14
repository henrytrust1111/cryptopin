import React from "react";
import { FaBitcoin, FaCoins } from "react-icons/fa";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const Process = () => {
  return (
    <div className="w-full bg-[#EEF2F3] flex justify-center items-center">
      <div className="w-[93%] sm:w-[95%] md:w-[90%] lg:w-[80%] py-6 lg:py-12">
        {/* Title */}
        <h2 className={`text-2xl lg:text-3xl font-bold text-center my-10 ${ubuntu.className}`}>
          Become A{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Crypto
          </span>{" "}
          Trader <br /> In Seconds
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side - Image */}
          <div className="flex justify-center">
            <img
              src="/imgs/process1.png"
              alt="Crypto Dashboard"
              className=" max-w-full h-auto"
            />
          </div>

          {/* Right Side - Content */}
          <div className="flex flex-col space-y-6">
            <div className="space-y-4">
              {/* Learn Crypto */}
              <div className="flex items-start space-x-4">
                <img src="/icons/learnCrypto.svg" className="w-10" alt="" />
                <div>
                  <h3 className={`text-xl font-semibold mb-1 ${ubuntu.className}`}>Learn Crypto</h3>
                  <p className="text-gray-500 text-sm">
                    Completely Synergize Resource Taxing Niche Markets.
                    Professionally Cultivate One-To-One Customer Service With
                    Robust Ideas. Dynamically.
                  </p>
                </div>
              </div>

              {/* Buy Crypto */}
              <div className="flex items-start space-x-4">
                <img src="/icons/buyCrypto.svg" className="w-10" alt="" />
                <div>
                  <h3 className={`text-xl font-semibold mb-1 ${ubuntu.className}`}>Buy Crypto</h3>
                  <p className="text-gray-500 text-sm">
                    Completely Synergize Resource Taxing Niche Markets.
                    Professionally Cultivate One-To-One Customer Service With
                    Robust Ideas. Dynamically.
                  </p>
                </div>
              </div>

              {/* Trade Anywhere */}
              <div className="flex items-start space-x-4">
              <img src="/icons/tradeAnywhere.svg" className="w-10" alt="" />
                <div>
                  <h3 className={`text-xl font-semibold mb-1 ${ubuntu.className}`}>Trade Anywhere</h3>
                  <p className="text-gray-500 text-sm">
                    Completely Synergize Resource Taxing Niche Markets.
                    Professionally Cultivate One-To-One Customer Service With
                    Robust Ideas. Dynamically.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
