import React from 'react';
import homeImg from '../asserts/home.png';
import arrow from '../asserts/arrow.png';

const Home = () => {
  return (
    <div className=" absolute mt-9 ml-20 w-487 h-30 gap-0 flex justify-center ">
      <div className="flex items-center">
        <img src={homeImg} className="w-8 h-8 mr-2" alt="Home" />
      </div>

      {/* Arrow and Flashcard Section */}
      <div className="flex items-center">
        <img src={arrow} className="w-6 h-6" alt="Arrow" />
        <p className="ml-2 mr-2 ml-2 mr-2 font-inter font-500 text-base leading-2 items-center text-gray-800">Flashcard</p>
      </div>

      {/* Arrow and Mathematics Section */}
      <div className="flex items-center">
        <img src={arrow} className="w-6 h-6" alt="Arrow" />
        <p className="ml-2 mr-2 font-inter font-500 text-base leading-2 items-center text-gray-800">Mathematics</p>
      </div>

      {/* Arrow and Relation and Function Section */}
      <div className="flex items-center">
        <img src={arrow} className="w-6 h-6" alt="Arrow" />
        <p className="ml-2 font-sans text-base font-medium leading-none text-center text-blue-900">Relation and Function</p>
      </div>
    </div>
  );
};

export default Home;
