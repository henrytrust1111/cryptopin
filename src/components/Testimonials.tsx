import React from "react";
import { FaStar } from "react-icons/fa";
import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

interface TestimonialProps {
    name: string;
    title: string;
    img: string;
    review: string;
    bgColor: string;
  }

const testimonials = [
  {
    name: "Michael Scott",
    title: "Trader",
    // img: "https://via.placeholder.com/150",
    img: "/imgs/testimonials/Michael.jpg",
    review:
      "Phosfluorescently engage worldwide methodologies with web-enabled technology. Interactively coordinate collaboratively administer turnkey channels whereassfully researched.",
    bgColor: "bg-orange-50",
  },
  {
    name: "Sylvester Stallone",
    title: "Manager",
   img: "/imgs/testimonials/Sylvester.jpg",
    review:
      "Phosfluorescently engage worldwide methodologies with web-enabled technology. Interactively coordinate collaboratively administer turnkey channels whereassfully researched.",
    bgColor: "bg-blue-50",
  },
  {
    name: "Sophie Moore",
    title: "Content Writer",
    img: "/imgs/testimonials/Sophie.jpg",
    review:
      "Phosfluorescently engage worldwide methodologies with web-enabled technology. Interactively coordinate collaboratively administer turnkey channels whereassfully researched.",
    bgColor: "bg-green-50",
  },
  {
    name: "John Carter",
    title: "Content Writer",
    img: "/imgs/testimonials/John.jpg",
    review:
      "Phosfluorescently engage worldwide methodologies with web-enabled technology. Interactively coordinate collaboratively administer turnkey channels whereassfully researched.",
    bgColor: "bg-red-50",
  },
];

const TestimonialCard: React.FC<TestimonialProps> = ({ name, title, img, review, bgColor }) => {
  return (
    <div className={`flex items-center p-6 rounded-lg shadow-md ${bgColor}`}>
      {/* <div className="flex-shrink-0">
        <img src={img} alt={name} className="w-16 h-16 rounded-full" />
      </div> */}
      <div className="ml-4">
        <div className="relative flex items-center gap-3">
          <div className="flex-shrink-0">
            <img src={img} alt={name} className="w-16 h-16 rounded-full" />
          </div>
          <div className="">
            <h4 className={`font-semibold text-lg ${ubuntu.className}`}>{name}</h4>
            <p className="text-sm text-gray-500">@{title}</p>
          </div>
            <div className="hidden md:flex mt-2 justify-end absolute right-0">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} className="text-[#FFB04E] mr-1" />
              ))}
            </div>
        </div>
        <p className="mt-2 text-sm text-gray-700">{review}</p>
        <div className="flex md:hidden mt-2">
          {[...Array(5)].map((_, index) => (
            <FaStar key={index} className="text-[#FFB04E] mr-1" />
          ))}
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="w-full flex justify-center items-center my-12">
      {/* <div className="max-w-4xl mx-auto"> */}
      <div className="w-[93%] sm:w-[95%] md:w-[90%] lg:w-[80%] py-6 lg:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-20 lg:gap-32">
        <div className="mb-8">
          <h2 className={`text-3xl font-bold ${ubuntu.className}`}>What Our Clients Say</h2>
          <p className={`text-transparent bg-clip-text bg-gradient-to-r from-[#25F6FF] via-purple-500 to-[#7782FF] text-3xl font-bold ${ubuntu.className}`}>About <span className="text-black">Us</span></p>
          <p className="text-gray-500 mt-4 text-sm">
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua ut dolor
            sit.
          </p>
        </div>
        <div className="space-y-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              title={testimonial.title}
              img={testimonial.img}
              review={testimonial.review}
              bgColor={testimonial.bgColor}
            />
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};

export default Testimonials;

// import React from 'react';
// import { FaStar } from 'react-icons/fa';

// const testimonials = [
//   {
//     name: 'Michael Scott',
//     title: 'Trader',
//     img: 'https://via.placeholder.com/150', // Placeholder image URL
//     review: 'Phosfluorescently engage worldwide methodologies with web-enabled technology. Interactively coordinate collaboratively administer turnkey channels whereassfully researched.',
//   },
//   {
//     name: 'Sylvester Stallone',
//     title: 'Manager',
//     img: 'https://via.placeholder.com/150', // Placeholder image URL
//     review: 'Phosfluorescently engage worldwide methodologies with web-enabled technology. Interactively coordinate collaboratively administer turnkey channels whereassfully researched.',
//   },
//   {
//     name: 'Sophie Moore',
//     title: 'Content Writer',
//     img: 'https://via.placeholder.com/150', // Placeholder image URL
//     review: 'Phosfluorescently engage worldwide methodologies with web-enabled technology. Interactively coordinate collaboratively administer turnkey channels whereassfully researched.',
//   },
//   {
//     name: 'John Carter',
//     title: 'Content Writer',
//     img: 'https://via.placeholder.com/150', // Placeholder image URL
//     review: 'Phosfluorescently engage worldwide methodologies with web-enabled technology. Interactively coordinate collaboratively administer turnkey channels whereassfully researched.',
//   },
// ];

// const TestimonialCard = ({ name, title, img, review }) => {
//   return (
//     <div className="flex flex-col md:flex-row items-center p-6 bg-white shadow-lg rounded-lg space-y-4 md:space-y-0 md:space-x-6">
//       <img src={img} alt={name} className="w-16 h-16 rounded-full" />
//       <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
//         <h4 className="font-bold text-lg">{name}</h4>
//         <p className="text-sm text-gray-500">@{title}</p>
//         <p className="text-sm text-gray-700">{review}</p>
//         <div className="flex space-x-1">
//           {[...Array(5)].map((_, index) => (
//             <FaStar key={index} className="text-yellow-400" />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// const Testimonials = () => {
//   return (
//     <section className="py-12 px-4 md:px-8 lg:px-16">
//       <div className="max-w-7xl mx-auto">
//         <div className="mb-12 text-center">
//           <h2 className="text-3xl font-bold mb-2">What Our Clients Say</h2>
//           <p className="text-blue-600 text-xl font-bold">About Us</p>
//           <p className="mt-4 text-gray-500 max-w-md mx-auto">
//             Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut dolor sit.
//           </p>
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//           {testimonials.map((testimonial, index) => (
//             <TestimonialCard
//               key={index}
//               name={testimonial.name}
//               title={testimonial.title}
//               img={testimonial.img}
//               review={testimonial.review}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;
