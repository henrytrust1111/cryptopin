"use client"
import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const articles = [
  {
    id: 1,
    title: "To Crypto Or Not To Crypto That Is The Question That Leads To Happy",
    date: "June 18, 2022",
    author: "John Carter",
    description: "Organically Grow The Holistic World View Of Disruptive Innovation Workplace Diversity Empowerment.",
    image: "/imgs/news/happyCrypto.png", 
  },
  {
    id: 2,
    title: "How To Trade Crypto Tokens From Your Phone In 2022",
    date: "April 8, 2022",
    author: "Nattasha",
    description: "Organically Grow The Holistic World View Of Disruptive Innovation Workplace Diversity Empowerment.",
    image: "/imgs/news/tradeCrypto.png",
  },
  {
    id: 3,
    title: "How To Trade Crypto Tokens From Your Phone In 2022",
    date: "April 8, 2022",
    author: "Nattasha",
    description: "Organically Grow The Holistic World View Of Disruptive Innovation Workplace Diversity Empowerment.",
    image: "/imgs/news/tradeCrypto.png",
  },
  {
    id: 4,
    title: "To Crypto Or Not To Crypto That Is The Question That Leads To Happy",
    date: "June 18, 2022",
    author: "John Carter",
    description: "Organically Grow The Holistic World View Of Disruptive Innovation Workplace Diversity Empowerment.",
    image: "/imgs/news/happyCrypto.png", 
  },

];

const News: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? articles.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === articles.length - 1 ? 0 : prevIndex + 1
    );
  };

  const { title, date, author, description, image } = articles[currentIndex];

  return (
    <div className="w-full max-w-6xl mx-auto p-8">
      <h2 className={`text-3xl md:text-4xl font-bold text-center mb-8 ${ubuntu.className}`}>
        Browse Our Latest{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          Articles
        </span>
      </h2>
      <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="grid md:grid-cols-2 items-center">
          {/* Article Image */}
          <div className="p-4 flex justify-center">
            <img src={image} alt={title} className="w-full h-auto rounded-lg" />
          </div>
          {/* Article Content */}
          <div className="p-6">
            <p className="text-sm text-gray-500">
              {author} | {date}
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mt-2">
              {title}
            </h3>
            <p className="text-gray-600 mt-4">
              {description}
            </p>
          </div>
        </div>
        {/* Carousel Controls */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full shadow-lg"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full shadow-lg"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default News;
