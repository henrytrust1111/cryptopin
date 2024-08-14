import React from "react";
import {
  FaExchangeAlt,
  FaWallet,
  FaShieldAlt,
  FaClipboardCheck,
  FaPaperPlane,
  FaChartBar,
} from "react-icons/fa";
import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const WhyUs = () => {
  return (
    <section className="w-[93%] sm:w-[95%] md:w-[90%] lg:w-[80%] py-16">
      <div className=" mb-12">
        <h2 className={`lg:w-[50%] text-2xl md:text-3xl font-bold text-center lg:text-start ${ubuntu.className}`}>
          Fully Featured To Buy, Trade And  Invest In {" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
            Cryptop
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="relative flex flex-col bg-[#F3F3F3] p-6 rounded-lg shadow-md">
          {/* <FaExchangeAlt className="text-4xl text-blue-500 mb-4" /> */}
          <img src="/icons/whyus/realTime.svg" className="mb-4 w-9" alt="" />
          <img src="/icons/whyus/realTimeBig.svg" className="absolute top-0 right-0 z-10 w-[100px]" alt="" />
          <h3 className={`text-xl font-semibold mb-2 z-10 ${ubuntu.className}`}>Real-Time Trading</h3>
          <p className="text-gray-500 text-sm z-10">
            Organically Grow The Holistic World View Of Disruptive Innovati
            Workplace Diversity Empowerment.
          </p>
        </div>

        <div className="relative flex flex-col bg-[#F3F3F3] p-6 rounded-lg shadow-md">
          {/* <FaWallet className="text-4xl text-pink-500 mb-4" /> */}
          <img src="/icons/whyus/wallet.svg" className="mb-4 w-9" alt="" />
          <img src="/icons/whyus/walletBig.svg" className="absolute top-0 right-0 z-10 w-[100px]" alt="" />
          <h3 className={`text-xl font-semibold mb-2 z-10 ${ubuntu.className}`}>Easy To Create Wallet</h3>
          <p className="text-gray-500 text-sm z-10">
            Organically Grow The Holistic World View Of Disruptive Innovati
            Workplace Diversity Empowerment.
          </p>
        </div>

        <div className="relative flex flex-col bg-[#F3F3F3] p-6 rounded-lg shadow-md">
          {/* <FaShieldAlt className="text-4xl text-orange-500 mb-4" /> */}
          <img src="/icons/whyus/safe.svg" className="mb-4 w-9" alt="" />
          <img src="/icons/whyus/safeBig.svg" className="absolute top-0 right-0 z-10 w-[100px]" alt="" />
          <h3 className={`text-xl font-semibold mb-2 z-10 ${ubuntu.className}`}>Safe & Secure</h3>
          <p className="text-gray-500 text-sm z-10">
            Organically Grow The Holistic World View Of Disruptive Innovati
            Workplace Diversity Empowerment.
          </p>
        </div>

        <div className="relative flex flex-col bg-[#F3F3F3] p-6 rounded-lg shadow-md">
          {/* <FaClipboardCheck className="text-4xl text-blue-400 mb-4" /> */}
          <img src="/icons/whyus/fast.svg" className="mb-4 w-9" alt="" />
          <img src="/icons/whyus/fastBig.svg" className="absolute top-0 right-0 z-10 w-[100px]" alt="" />
          <h3 className={`text-xl font-semibold mb-2 z-10 ${ubuntu.className}`}>Super Fast KYC</h3>
          <p className="text-gray-500 text-sm z-10">
            Organically Grow The Holistic World View Of Disruptive Innovati
            Workplace Diversity Empowerment.
          </p>
        </div>

        <div className="relative flex flex-col bg-[#F3F3F3] p-6 rounded-lg shadow-md">
          {/* <FaPaperPlane className="text-4xl text-green-500 mb-4" /> */}
          <img src="/icons/whyus/send.svg" className="mb-4 w-9" alt="" />
          <img src="/icons/whyus/sendBig.svg" className="absolute top-0 right-0 z-10 w-[100px]" alt="" />
          <h3 className={`text-xl font-semibold mb-2 z-10 ${ubuntu.className}`}>Send & Receive Anytime</h3>
          <p className="text-gray-500 text-sm z-10">
            Organically Grow The Holistic World View Of Disruptive Innovati
            Workplace Diversity Empowerment.
          </p>
        </div>

        <div className="relative flex flex-col bg-[#F3F3F3] p-6 rounded-lg shadow-md">
          {/* <FaChartBar className="text-4xl text-pink-400 mb-4" /> */}
          <img src="/icons/whyus/report.svg" className="mb-4 w-9" alt="" />
          <img src="/icons/whyus/reportBig.svg" className="absolute top-0 right-0 z-10 w-[100px]" alt="" />
          <h3 className={`text-xl font-semibold mb-2 z-10 ${ubuntu.className}`}>Reports & Analytics</h3>
          <p className="text-gray-500 text-sm z-10">
            Organically Grow The Holistic World View Of Disruptive Innovati
            Workplace Diversity Empowerment.
          </p>
        </div>
      </div>

      <div className="flex justify-center md:justify-start mt-12">
        <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 px-8 rounded-full mr-4 text-sm md:text-base">
          Get Started
        </button>
        <button className="border border-gray-300 py-2 px-8 rounded-full text-sm md:text-base">
          View More
        </button>
      </div>
    </section>
  );
};

export default WhyUs;
