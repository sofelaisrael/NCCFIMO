import React, { useState, useEffect } from 'react';
//import PageTitle from './PageTitle'; // Assuming you have this component
import img1 from '../assets/1.jpg';
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
    title: "AKOGWU ODUMU ISAIAH",
    subtitle: "President/Chairman",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat ad dolores ab provident nesciunt dolor consequuntur laudantium quasi odio sint molestias laboriosam, aperiam aliquam, minus in culpa quibusdam aliquid ipsa qui sunt dignissimos. Incidunt, blanditiis, dolor deserunt sed quis ullam eos reprehenderit quam impedit a exercitationem, praesentium numquam similique inventore.",
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
    <section className="px-4 w-full font-sans flex justify-center container pt-20 pb-16">
      <div className="mx-auto w-[85%]">
        
        <div className="mt-24">
          <div className="flex w-full justify-between">
            <div className={`w-[50%] h-[300px] md:h-[400px] lg:h-[500px] transition-opacity duration-500 ease-in-out ${fade ? 'opacity-100' : 'opacity-0'}`}>
              <img src={currentData.img} className="w-full h-full bg-cover  rounded-lg" alt={currentData.title} />
            </div>
            <div className={`w-[45%] transition-opacity duration-500 ease-in-out ${fade ? 'opacity-100' : 'opacity-0'}`}>
              <h1 className="text-[20px]">{currentData.subtitle}</h1>
              <h1 className="text-[40px] py-3">{currentData.title}</h1>
              <p className="py-3">{currentData.text}</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center mt-8">
          <button onClick={handlePrev} className="text-gray-600 hover:text-gray-800 transition-colors duration-300">
            <i className="fas fa-arrow-left text-2xl"></i>
          </button>
          <div className="text-[35px]">
            0{currentContent + 1}/0{contentData.length}
          </div>
          <button onClick={handleNext} className="text-gray-600 hover:text-gray-800 transition-colors duration-300">
            <i className="fas fa-arrow-right text-2xl"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContentTransition;
