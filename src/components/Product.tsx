import React from 'react'
import SubContent from './SubContent'
import Content from './Content'
import Investment from './Investment'

const Product = () => {
  return (
    <div>
        <SubContent />
        <Content />
        <Investment />
    </div>
  )
}

export default Product



// import React from 'react';
// import { FaChartPie, FaChartBar } from 'react-icons/fa';

// const Product = () => {
//   return (
//     <div className="bg-gradient-to-r from-blue-100 via-pink-100 to-orange-100 py-16 px-4">
//       {/* Header */}
//       <div className="container mx-auto flex justify-between items-center mb-12">
//         <h1 className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
//           Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit Sed Do Elusmod Tempor Incididunt
//         </h1>
//         <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 px-6 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300">
//           Get Started
//         </button>
//       </div>

//       {/* Content */}
//       <div className="container mx-auto">
//         <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center">
//           {/* Text Section */}
//           <div className="flex-1">
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">
//               Your Money...Your Choice
//             </h2>
//             <p className="text-gray-500 mb-8">
//               Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit Sed Do Elusmod Tempor Incididunt
//             </p>
//             <div className="flex space-x-4 mb-8">
//               <button className="bg-white border border-gray-200 rounded-full py-2 px-4 text-gray-700 flex items-center space-x-2">
//                 <FaChartBar className="text-purple-600" /> <span>Stock</span>
//               </button>
//               <button className="bg-white border border-gray-200 rounded-full py-2 px-4 text-gray-700 flex items-center space-x-2">
//                 <FaChartPie className="text-pink-600" /> <span>US Stock</span>
//               </button>
//               <button className="bg-white border border-gray-200 rounded-full py-2 px-4 text-gray-700 flex items-center space-x-2">
//                 <FaChartPie className="text-blue-600" /> <span>FDs</span>
//               </button>
//             </div>
//           </div>

//           {/* Image Section */}
//           <div className="flex-1">
//             <div className="bg-gray-100 p-6 rounded-xl flex flex-col md:flex-row items-center">
//               <div className="flex-1 flex justify-center items-center mb-4 md:mb-0">
//                 <FaChartPie className="text-6xl text-orange-400" />
//               </div>
//               <div className="flex-1 text-center md:text-left">
//                 <h3 className="text-xl font-bold text-gray-900 mb-2">
//                   6.7% Interest Rate
//                 </h3>
//                 <p className="text-gray-500 mb-4">
//                   Proactively Envisioned Multimedia Based Expertise And Cross-Media Growth Strategies. Seamlessly Visualize Quality Intellectual Capital Without Superior.
//                 </p>
//                 <button className="bg-gradient-to-r from-orange-400 to-yellow-300 text-white py-2 px-6 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300">
//                   Create Account For Free
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Product;
