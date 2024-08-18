import React from "react";
import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const Mobile: React.FC = () => {
  return (
    <div className="w-full bg-[#263238] flex items-center justify-center py-12 my-12">
      {/* Full-width container */}
      <div className="w-[93%] sm:w-[95%] md:w-[90%] lg:w-[80%] grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Side: Text and Icons */}
        <div className="flex flex-col justify-center text-center lg:text-left space-y-4">
          <h2 className={`text-white text-2xl md:text-3xl lg:text-4xl font-bold ${ubuntu.className}`}>
            Try The Future, Today.
            <br />
            Download{" "}
            <span className="text-2xl md:text-3xl lg:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500">
              Crytop
            </span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-md">
            Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit Sed Do
            Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua Ut Dolor
            Sit
          </p>
          <div className="flex justify-center lg:justify-start items-center space-x-4">
            <div className="bg-white p-2 rounded-lg shadow-lg">
              <img src="/imgs/Qr.png" alt="QR Code" className="w-16 h-16" />
            </div>
            <div className="flex flex-col">
              <p className="text-gray-400 text-sm">
                Scan To Download
                <br />
                <span className="font-bold text-white">IOS & Android</span>
              </p>
              <div className="flex space-x-2 pt-2">
                <img src="/imgs/AppStroe.png" alt="Apple Store" className="w-8" />
                <img src="/imgs/Andriod.png" alt="Android Store" className="w-8" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Mobile Image */}
        <div className="flex justify-center">
          <img
            src="/imgs/mobile.png"
            alt="Mobile App Display"
            className="w-full max-w-xs md:max-w-sm lg:max-w-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Mobile;
















// import React from "react";

// const Mobile: React.FC = () => {
//   return (
//     <div className="grid lg:grid-cols-2 gap-8 items-center bg-gray-900 p-8 rounded-lg">
//       {/* Left Side: Text and Icons */}
//       <div className="flex flex-col justify-center text-center lg:text-left space-y-4">
//         <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold">
//           Try The Future, Today.
//           <br />
//           Download{" "}
//           <span className="text-gradient bg-gradient-to-r from-purple-500 to-pink-500">
//             Cry<span className="text-blue-400">top</span>
//           </span>
//         </h2>
//         <p className="text-gray-400 text-sm md:text-base max-w-md">
//           Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit Sed Do Eiusmod
//           Tempor Incididunt Ut Labore Et Dolore Magna Aliqua Ut Dolor Sit
//         </p>
//         <div className="flex justify-center lg:justify-start items-center space-x-4">
//           <div className="bg-white p-2 rounded-lg shadow-lg">
//             <img src="/imgs/Qr.png" alt="QR Code" className="w-16 h-16" />
//           </div>
//           <p className="text-gray-400 text-sm">
//             Scan To Download
//             <br />
//             <span className="font-bold text-white">IOS & Android</span>
//           </p>
//         </div>
//         <div className="flex justify-center lg:justify-start space-x-6 pt-4">
//           <img src="/imgs/AppStroe.png" alt="" className="w-10" />
//           <img src="/imgs/Andriod.png" alt="" className="w-10" />
//         </div>
//       </div>

//       {/* Right Side: Mobile Image */}
//       <div className="flex justify-center">
//         <img
//           src="/imgs/mobile.png"
//           alt="Mobile App Display"
//           className="w-full max-w-xs md:max-w-sm lg:max-w-md"
//         />
//       </div>
//     </div>
//   );
// };

// export default Mobile;
