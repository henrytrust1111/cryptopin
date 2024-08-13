import Link from "next/link";
import React from "react";
import { FaClock, FaShieldAlt } from "react-icons/fa";
import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const Abt = () => {
  return (
   <div className="bg-[#EAEEF1] grid place-items-center mt-8">
     <div className="w-[93%] sm:w-[95%] md:w-[90%] lg:w-[80%] grid grid-cols-1 lg:grid-cols-2 gap-11 py-16">
      {/* Left Section */}
      <div className="flex flex-col justify-start space-y-6">
        <h1 className={`text-3xl sm:text-4xl font-bold text-gray-900 ${ubuntu.className}`}>
          Explore Endless <br /> Possibilities With{" "}
          <span className="text-pink-500">Cryptop</span>
        </h1>
        <p className="text-gray-500">
          Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit Sed Do Eiusmod
          Tempor Incididunt Ut Labore Et Dolore Magna Aliqua Ut Dolor Sit
        </p>
        <div className="flex space-x-4">
          {/* 24/7 Support Button */}
          <button className="flex items-center space-x-2 px-4 py-2 bg-pink-100 text-pink-600 rounded-full">
            <FaClock />
            <span>24/7 Support</span>
          </button>
          {/* 99% Secured Button */}
          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-100 text-blue-600 rounded-full">
            <FaShieldAlt />
            <span>99% Secured</span>
          </button>
        </div>
        <Link href="#" passHref>
        <button className="px-8 py-3 text-lg font-medium text-[#212326] bg-white hover:bg-gray-300 rounded-full flex items-center justify-center">
          {/* Get Started <FaArrowRight className="ml-2" /> */}
          Get Started
        </button>
      </Link>
      </div>

      {/* Right Section */}
      <div className="relative">
        <img src="/imgs/abt.png" alt="" className="animate-float" />
      </div>
    </div>
   </div>
  );
};

export default Abt;
