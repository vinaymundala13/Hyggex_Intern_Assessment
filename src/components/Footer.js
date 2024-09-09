import React from 'react'
import downarrow from '../asserts/downarrow.png';

const Footer = () => {
  return (
    <>
      <div className='hidden md:block'>
        <p className='font-[Inter] text-[48px] font-bold leading-[58.09px] tracking-[0.005em] text-left ml-[100px] mt-[50px] w-[px] h-[60px] bg-gradient-to-r from-blue-900 to-blue-500 text-transparent bg-clip-text'>FAQ</p>
      </div>
      <div className='md:w-[848px] md:h-[238px] md:top-[1273px] md:left-[104px] md:gap-[32px] md:opacity-[0px] md:border-["2px] md:border-[solid] md:border-[black"] md:mt-[30px] md:rounded-lg' >
        <div className='md:flex md:justify-between md:w-[848px] md:h-[58px] md:px-[24px] md:py-[17px] md:l-[12px] md:border-[1px] md:border-[solid] md:border-indigo-900 md:ml-[100px] md:mb-[30px] md:rounded-lg'>
          <p className='font-[Inter] text-[16px] font-semibold leading-[26px] text-left'>Can education flashcards be used for all age groups?</p>
          <img src={downarrow} className='w-[15.6px] h-[8.4px] top-[7.32px] left-[4.68px] gap-0 opacity-[0px]' alt='downarrow'/>
        </div>
        <div className='md:flex md:justify-between md:w-[848px] md:h-[58px] md:px-[24px] md:py-[17px] md:l-[12px] md:border-[1px] md:border-[solid] md:border-indigo-900 md:ml-[100px] md:mb-[30px] md:rounded-lg'>
          <p className='font-[Inter] text-[16px] font-semibold leading-[26px] text-left'>How do education flashcards work?</p>
          <img src={downarrow} className='w-[15.6px] h-[8.4px] top-[7.32px] left-[4.68px] gap-0 opacity-[0px]' alt='downarrow'/>
        </div>
        <div className='md:flex md:justify-between md:w-[848px] md:h-[58px] md:px-[24px] md:py-[17px] md:l-[12px] md:border-[1px] md:border-[solid] md:border-indigo-900 md:ml-[100px] md:mb-[30px] md:rounded-lg'>
          <p className='font-[Inter] text-[16px] font-semibold leading-[26px] text-left'>Can education flashcards be used for test preparation?</p>
          <img src={downarrow} className='w-[15.6px] h-[8.4px] top-[7.32px] left-[4.68px] gap-0 opacity-[0px]' alt='downarrow'/>
        </div>
      </div>
    </>  
  )
}

export default Footer
