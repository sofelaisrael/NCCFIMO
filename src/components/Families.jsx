import React, { useState, useEffect } from 'react';

import { GoArrowLeft, GoArrowRight } from "react-icons/go"
//import PageTitle from './PageTitle'; // Assuming you have this component
import img1 from '../assets/4.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';

const contentData = [
  {
    img: img1,
    title: "GABRIEL SANTANMI JACOB",
    subtitle: "General Secretary",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, numquam?",
  },
  {
    img: img2,
    title: " ODUMU ISAIAH AKOGWU",
    subtitle: "President/Chairman",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat ad dolores ab provident nesciunt dolor.",
  },

  {
    img: img3,
    title: "MISSION FAMILY",
    subtitle: "Spreading the good news",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam maxime ut consequuntur! Praesentium.",
  },
];

const ContentTransition = () => {
  const [currentContent, setCurrentContent] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Change content every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentContent((prevContent) => (prevContent + 1) % contentData.length);
      setFade(true);
    }, 500); // Duration of fade out transition
  };

  const handlePrev = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentContent((prevContent) =>
        (prevContent - 1 + contentData.length) % contentData.length
      );
      setFade(true);
    }, 500); // Duration of fade out transition
  };

  const currentData = contentData[currentContent];

  return (
    <section className="px-4 w-full font-sans flex justify-center pt-20 pb-16">
      <div className="mx-auto w-[85%]">
        
        <div className="mt-24">
          <div className="flex w-full justify-between">
            <div className={`w-[50%] h-[300px] relative overflow-hidden rounded-md md:h-[400px] lg:h-[500px] transition-opacity duration-500 ease-in-out ${fade ? 'opacity-100' : 'opacity-0'}`}>
              <img src={currentData.img} className="w-full bg-cover rounded-lg top-0 absolute md:-top-10" alt={currentData.title} />
            </div>
            <div className={`w-[40%] transition-opacity duration-500 ease-in-out ${fade ? 'opacity-100' : 'opacity-0'}`}>
              <h1 className="text-[16px] md:text-[20px] right">{currentData.subtitle}</h1>
              <h1 className="text-[20px] md:text-[40px] py-3 right delay-200">{currentData.title}</h1>
              <p className="text-[12px] md:text-[16px] py-3 right delay-300">{currentData.text}</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center mt-8">
          <button onClick={handlePrev} className="text-gray-600 hover:text-gray-800 transition-colors duration-300">
            <GoArrowLeft />
          </button>
          <div className="text-[35px]">
            0{currentContent + 1}/0{contentData.length}
          </div>
          <button onClick={handleNext} className="text-gray-600 hover:text-gray-800 transition-colors duration-300">
            <GoArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContentTransition;
