import React from "react";
import { FaBitcoin } from "react-icons/fa";

const Work = () => {
  return (
    <div className="w-[93%] sm:w-[95%] md:w-[90%] lg:w-[80%] container mx-auto py-16 px-4">
      {/* Header */}
      <h2 className="text-center text-4xl font-bold text-gray-900">
        Invest & Grow Your <br /> Cryptocurrency{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
          Portfolio
        </span>
      </h2>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {/* Card 1 */}
        <div className="bg-gray-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            More Than A Typical Crypto Wallet
          </h3>
          <p className="text-gray-500 mb-6">
            Lorem Ipsum Dolor Sit Amet Consect Eturadipiscing Elusmod
          </p>
          <a href="#" className="text-blue-500 hover:text-blue-600">
            Read More
          </a>
          <div className="mt-6">
          <img
              src="/imgs/cryptoWallet.png" 
              alt="Future Crypto Wallet"
              className="mx-auto"
            />
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="mb-4">
            <img
               src="/imgs/binancePay.png"
              alt="Crypto Portfolio"
              className="mx-auto"
            />
          </div>
          <h3 className="text-xl font-bold text-gray-900 ">
            Grow Your Business With Binance Pay
          </h3>
          <p className="text-gray-500 mb-6">
            Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elusmod
          </p>
          <a href="#" className="text-blue-500 hover:text-blue-600">
            Read More
          </a>
         
        </div>

        {/* Card 3 */}
        <div className="bg-gray-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            A Crypto Wallet From The Future
          </h3>
          <p className="text-gray-500 mb-6">
            Lorem Ipsum Dolor Sit Amet Consec Tetur Adipiscing Elusmod
          </p>
          <a href="#" className="text-blue-500 hover:text-blue-600">
            Read More
          </a>
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
