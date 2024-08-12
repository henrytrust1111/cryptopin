"use client";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { Ubuntu } from "next/font/google";



const ubuntu = Ubuntu({
  subsets: ["latin"],  // Specify the subsets you need
  weight: ["400", "700"],  // Specify the weights you need (e.g., regular and bold)
  style: ["normal", "italic"],  // Optional: Specify the styles (e.g., normal and italic)
});

const Hero = () => {
  return (
    <div className="relative w-[93%] sm:w-[95%] md:w-[90%] lg:w-[80%] flex flex-col items-center justify-center text-center py-16 ">
      <img src="/imgs/hero/coin.png" alt="" width={100} className="absolute -right-16 top-20" />
      <img src="/imgs/hero/pattern.png" alt="" width={100} className="absolute -left-16 top-32  " />
      <img src="/imgs/hero/image.png" alt="" width={150} className="absolute right-0 bottom-6  " />
      <span className="text-sm text-green-600 bg-green-100 px-2 py-1 rounded-full">
        Updated On March 31, 2022
      </span>
      {/* <h1 className="lg:w-[80%] w-full mt-4 text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl "> */}
      <h1 className={`lg:w-[80%] w-full mt-4 text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl z-20 ${ubuntu.className}`}>
        Build Wealth{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
          Automatically
        </span>{" "}
        With Crypto
      </h1>
      <p className="relative mt-4 text-base text-gray-500 max-w-xl">
        Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit Sed Do Eiusmod
        Tempor Incididunt Ut Labore Et Dolore Magna Aliqua Ut Dolor Sit
      <img src="/imgs/hero/chart.png" alt="" width={100} className="absolute -bottom-24 left-8 sm:-left-24 sm:-bottom-12  " />
      </p>
      <Link href="#" passHref>
        <button className="mt-8 px-8 py-3 text-sm font-medium text-[#212326] bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center cursor-pointer">
          {/* Get Started <FaArrowRight className="ml-2" /> */}
          Get Started
        </button>
      </Link>
    </div>
  );
};

export default Hero;
