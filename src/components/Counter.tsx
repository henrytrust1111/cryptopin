"use client"

import React from "react";
import { FaPlus } from "react-icons/fa";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});


const Counter: React.FC = () => {
  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true });
  const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true });
  const { ref: ref4, inView: inView4 } = useInView({ triggerOnce: true });

  return (
    <div className="w-[93%] sm:w-[95%] md:w-[90%] lg:w-[80%] grid grid-cols-1 lg:grid-cols-2 gap-8 py-14">
      {/* Statistics Section */}
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-8">
        {/* Statistic 1 */}
        <div ref={ref1} className="flex items-center space-x-4">
          <h2 className={`flex text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 ${ubuntu.className}`}>
            {inView1 && (
              <CountUp start={0} end={12} prefix="$" suffix="B" separator="," duration={2.5} />
            )}
            <span className="text-pink-500">
              <FaPlus className="inline ml-1" />
            </span>
          </h2>
          <div className="text-gray-500 text-sm sm:text-base">
            <p>Assets</p>
            <p>Management</p>
          </div>
        </div>
        {/* Statistic 2 */}
        <div ref={ref2} className="flex items-center space-x-4">
          <h2 className={`flex text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 ${ubuntu.className}`}>
            {inView2 && (
              <CountUp start={0} end={0.1} suffix="%" duration={2.5} decimals={2} />
            )}
          </h2>
          <div className="text-gray-500 text-sm sm:text-base">
            <p>Lowest</p>
            <p>Transaction Fees</p>
          </div>
        </div>
        {/* Statistic 3 */}
        <div ref={ref3} className="flex items-center space-x-4">
          <h2 className={`flex text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 ${ubuntu.className}`}>
            {inView3 && <CountUp start={0} end={200} duration={2.5} />}
            <span className="text-blue-500">
              <FaPlus className="inline ml-1" />
            </span>
          </h2>
          <div className="text-gray-500 text-sm sm:text-base">
            <p>Supported Crypto Currencies</p>
          </div>
        </div>
        {/* Statistic 4 */}
        <div ref={ref4} className="flex items-center space-x-4">
          <h2 className={`flex text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 ${ubuntu.className}`}>
            {inView4 && (
              <CountUp start={0} end={5} suffix="M" separator="," duration={2.5} />
            )}
            <span className="text-orange-500">
              <FaPlus className="inline ml-1" />
            </span>
          </h2>
          <div className="text-gray-500 text-sm sm:text-base">
            <p>Crypto Users</p>
            <p>Worldwide</p>
          </div>
        </div>
      </div>

      {/* Badge Section */}
      <div className="rounded-xl flex flex-col items-center justify-center text-white">
        <img src="/imgs/Rating.png" alt="Rating" />
      </div>
    </div>
  );
};

export default Counter;











// "use client"

// import React from "react";
// import { FaPlus } from "react-icons/fa";
// import CountUp from "react-countup";

// const Counter = () => {
//   return (
//     <div className="w-[93%] sm:w-[95%] md:w-[90%] lg:w-[80%] grid grid-cols-1 lg:grid-cols-2 gap-8 py-14">
//       {/* Statistics Section */}
//       <div className="grid sm:grid-cols-2 grid-cols-1 gap-8">
//         {/* Statistic 1 */}
//         <div className="flex items-center space-x-4">
//           <h2 className="flex text-4xl font-bold text-gray-900">
//             <CountUp start={0} end={12} prefix="$" suffix="B" separator="," duration={2.5} />
//             <span className="text-pink-500">
//               <FaPlus className="inline ml-1" />
//             </span>
//           </h2>
//           <div className="text-gray-500">
//             <p>Assets</p>
//             <p>Management</p>
//           </div>
//         </div>
//         {/* Statistic 2 */}
//         <div className="flex items-center space-x-4">
//           <h2 className="flex text-4xl font-bold text-gray-900">
//             <CountUp start={0} end={0.1} suffix="%" duration={2.5} decimals={2} />
//           </h2>
//           <div className="text-gray-500">
//             <p>Lowest</p>
//             <p>Transaction Fees</p>
//           </div>
//         </div>
//         {/* Statistic 3 */}
//         <div className="flex items-center space-x-4">
//           <h2 className="flex text-4xl font-bold text-gray-900">
//             <CountUp start={0} end={200} duration={2.5} />
//             <span className="text-blue-500">
//               <FaPlus className="inline ml-1" />
//             </span>
//           </h2>
//           <div className="text-gray-500 text-sm">
//             <p>Supported Crypto Currencies</p>
//           </div>
//         </div>
//         {/* Statistic 4 */}
//         <div className="flex items-center space-x-4">
//           <h2 className="flex text-4xl font-bold text-gray-900">
//             <CountUp start={0} end={5} suffix="M" separator="," duration={2.5} />
//             <span className="text-orange-500">
//               <FaPlus className="inline ml-1" />
//             </span>
//           </h2>
//           <div className="text-gray-500">
//             <p>Crypto Users</p>
//             <p>Worldwide</p>
//           </div>
//         </div>
//       </div>

//       {/* Badge Section */}
//       <div className="rounded-xl flex flex-col items-center justify-center text-white">
//         <img src="/imgs/Rating.png" alt="" />
//       </div>
//     </div>
//   );
// };

// export default Counter;



