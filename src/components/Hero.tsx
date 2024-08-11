"use client";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="w-[93%] sm:w-[95%] md:w-[90%] lg:w-[80%] flex flex-col items-center justify-center text-center bg-white py-16 ">
      <span className="text-sm text-green-600 bg-green-100 px-2 py-1 rounded-full">
        Updated On March 31, 2022
      </span>
      <h1 className="mt-4 text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl ">
        Build Wealth{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
          Automatically
        </span>{" "}
        With Crypto
      </h1>
      <p className="mt-4 text-lg text-gray-500 max-w-xl">
        Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit Sed Do Eiusmod
        Tempor Incididunt Ut Labore Et Dolore Magna Aliqua Ut Dolor Sit
      </p>
      <Link href="#" passHref>
        <button className="mt-8 px-8 py-3 text-lg font-medium text-[#212326] bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center">
          {/* Get Started <FaArrowRight className="ml-2" /> */}
          Get Started
        </button>
      </Link>
    </div>
  );
};

export default Hero;
