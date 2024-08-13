import React from "react";
import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const Work = () => {
  return (
    <div className="w-[93%] sm:w-[95%] md:w-[90%] lg:w-[80%] container mx-auto py-16 px-4">
      {/* Header */}
      <h2 className={`text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 ${ubuntu.className}`}>
        Invest & Grow Your <br /> Cryptocurrency{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
          Portfolio
        </span>
      </h2>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {/* Card 1 */}
        <div className="bg-[#F3F3F3] rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className={`text-xl font-semibold text-[#212326] mb-4 ${ubuntu.className}`}>
            More Than A Typical Crypto Wallet
          </h3>
          <p className="text-gray-500 mb-6">
            Lorem Ipsum Dolor Sit Amet Consect Eturadipiscing Elusmod
          </p>
          <a href="#" className="text-[#7782FF] font-medium hover:text-blue-600">
            Read More
          </a>
          <hr className="my-11" />
          <div className="mt-6">
          <img
              src="/imgs/cryptoWallet.png" 
              alt="Future Crypto Wallet"
              className="mx-auto"
            />
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-[#F3F3F3] rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="mb-4">
            <img
               src="/imgs/binancePay.png"
              alt="Crypto Portfolio"
              className="mx-auto"
            />
          <hr className="my-11" />
          </div>
          <h3 className={`text-xl font-semibold text-[#212326] ${ubuntu.className}`}>
            Grow Your Business With Binance Pay
          </h3>
          <p className="text-gray-500 mb-6">
            Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elusmod
          </p>
          <a href="#" className="text-[#7782FF] font-medium hover:text-blue-600">
            Read More
          </a>
         
        </div>

        {/* Card 3 */}
        <div className="bg-[#F3F3F3] rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className={`text-xl font-semibold text-[#212326] mb-4 ${ubuntu.className}`}>
            A Crypto Wallet From The Future
          </h3>
          <p className="text-gray-500 mb-6">
            Lorem Ipsum Dolor Sit Amet Consec Tetur Adipiscing Elusmod
          </p>
          <a href="#" className="text-[#7782FF] font-medium hover:text-blue-600">
            Read More
          </a>
          <hr className="my-11" />
          <div className="mt-6">
            <img
              src="/imgs/cryptoWallet1.png" 
              alt="Future Crypto Wallet"
              className="mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
