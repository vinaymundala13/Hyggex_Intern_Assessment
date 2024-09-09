
import React, { useState } from 'react';
import speaker from '../asserts/speaker.png';
import bulb from '../asserts/bulb.png';
import vector from '../asserts/Vector.png';
import leftarrow from '../asserts/leftarrrow.png';
import rightarrow from '../asserts/rightarrow.png';
import viewfull from '../asserts/viewfull.png';

const Caurosaldiv = () => {
  const videos = [
    { id: 1, title: "9+6+7x-2x-3" },
    { id: 2, title: "Hello Welcome" },
    { id: 3, title: "Have a good day" },
    { id: 4, title: "Random text" },
    { id: 5, title: "play the Game" },
    { id: 6, title: "Hope your are doing well" },
    { id: 7, title: "making funning videos" },
    { id: 8, title: "Iam an enthusiastic" },
    { id: 9, title: "Not but not the least" },
    { id: 10, title: "The end" }
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const totalVideos = videos.length;

  const handleLeftArrow = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex === 0) ? totalVideos - 1 : prevIndex - 1);
  };

  const handleRightArrow = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex === totalVideos - 1) ? 0 : prevIndex + 1);
  };

  const handleRefreshClick = () => {
    setCurrentVideoIndex(0);
  };

  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='w-full md:w-[712px] h-[393.19px] bg-gradient-to-br from-blue-900 via-blue-700 to-blue-300 rounded-[42.51px] mt-4 md:mt-10 relative flex items-center justify-center'>
        <div className='absolute top-0 left-0 ml-4 md:ml-7 mt-4 md:mt-7'>
          <img src={bulb} alt='bulb' />
        </div>
        <div className='absolute top-0 right-0 mr-4 md:mr-7 mt-4 md:mt-7'>
          <img src={speaker} alt='speaker' />
        </div>
        <div className='flex items-center justify-center w-full md:w-[313px] h-[46px] md:top-[174.28px] md:left-[199.79px]'>
          <p className=' text-center text-white font-lato text-xl md:text-4xl font-bold leading-10 md:leading-[45.91px] tracking-[0.02em] text-center flex items-center'>{videos[currentVideoIndex].title}</p>
        </div>
      </div>
      <div className='flex items-center justify-center mt-4 md:mt-8'>
        <div className='w-8 h-8 md:w-[30px] md:h-[30px] mr-4 md:mr-12' onClick={handleRefreshClick}>
          <img src={vector} alt='vector'></img>
        </div>
        <div className='flex items-center justify-center'>
          <div className='w-12 h-12 md:w-[60px] md:h-[60px] ml-2 md:ml-4' onClick={handleLeftArrow}>
            <img src={leftarrow} alt='leftarrow'></img>
          </div>
          <span className='font-inter text-lg md:text-2xl font-bold leading-[29.05px] text-[#202B37] ml-2 mr-2'>{`${currentVideoIndex + 1}/${totalVideos}`}</span>
          <div className='w-12 h-12 md:w-[60px] md:h-[60px] mr-4 md:mr-12' onClick={handleRightArrow}>
            <img src={rightarrow} alt='rightarrow'></img>
          </div>
        </div>
        <div className='ml-2 md:ml-4'>
          <img src={viewfull} alt='viewfull'></img>
        </div>
      </div>
    </div>
  );
};

export default Caurosaldiv;
