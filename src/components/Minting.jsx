"use client"
import React, { useEffect, useState } from 'react'
import Heading from './common/Heading'
import Description from './common/Description'
import Image from 'next/image'
import { MINTING_LIST } from '@/utils/helper'

const Minting = () => {
  const [increase, setincrease] = useState(100);
  const [timeRemaining, setTimeRemaining] = useState(
    40 * 24 * 3600 + 15 * 3600 + 12 * 60 + 10
  );

  const formatTime = (seconds) => {
    const days = Math.floor(seconds / (3600 * 24));
    const hours = Math.floor((seconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secondsLeft = seconds % 60;

    return `${String(days).padStart(2, "0")}:${String(hours).padStart(
      2,
      "0"
    )}:${String(minutes).padStart(2, "0")}:${String(secondsLeft).padStart(
      2,
      "0"
    )}`;
  };
  useEffect(() => {
    if (timeRemaining <= 0) return;

    const interval = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeRemaining]);
  return (
    <>
      <div id='minting' className='max-w-[1172px] mx-auto px-4 py-[88px] max-md:pt-16 max-md:pb-10 max-sm:pb-6 max-sm:pt-12'>
        <Heading text={'Minting'} />
      </div>
      <div className='border-y-2'>
        <div className='max-w-[1172px] mx-auto px-4'>
          <div className='flex flex-wrap -mx-3'>
            <div className='w-1/2 px-3 max-md:w-full'>
              <div className='pl-[25px] pr-[107px] max-lg:px-5 border-l-2 max-md:border-r-2 max-md:border-b-2 h-full flex flex-col justify-center py-10 max-sm:py-5'>
                <Description text={"Most of the Hustlin’ Hardos first experienced NFTs via other successful projects like NBA TopShot, where revealing your newly minted item invoked the same emotions as opening up that first pack of baseball cards. NFTs have allowed us to enjoy those feelings once again while also empowering communities through shared ownership. The space has seen incredible growth over the past year, and it is our belief that we are in the very early innings of the paradigm shift that will be powered by web3."} />
                <div className='border-2 flex items-center max-w-max mt-[15px] mb-[35px] max-sm:mb-7'>
                  <button onClick={() => setincrease(increase - 1)} className='font-semibold text-4xl max-md:text-3xl max-md:px-5 max-sm:text-2xl px-6 cursor-pointer hover:text-sky transition-all duration-300'>-</button>
                  <p className='font-semibold text-4xl max-md:text-3xl max-md:px-5 max-sm:text-2xl border-x-2 px-6 py-1 min-w-[112.01px] text-center max-sm:min-w-24'>{increase}</p>
                  <button onClick={() => setincrease(increase + 1)} className='font-semibold text-4xl max-md:text-3xl max-md:px-5 max-sm:text-2xl px-6 cursor-pointer hover:text-sky transition-all duration-300'>+</button>
                </div>
                <button className='bg-yellow-400 text-sm max-w-max font-semibold leading-[100%] border-2 border-black px-[14.76px] py-[12.9px] max-sm:px-3 max-sm:py-2 cursor-pointer transition-all duration-300 hover:bg-black hover:text-white '>MINT NOW</button>
                <p className='font-semibold text-lg leading-[100%] text-green-600 pt-9 max-sm:pt-6'>Time Left</p>
                <p className='font-semibold text-4xl max-md:text-3xl max-sm:text-2xl leading-[100%] text-red-600 pt-2'>{formatTime(timeRemaining)}</p>
              </div>
            </div>
            <div className='w-1/2 px-3 max-md:w-full'>
              <Image src={"/assets/images/png/man-img.png"} alt='man-img' width={570} height={572} className='border-l-2 border-r-2 border-black h-full object-cover pointer-events-none max-md:mx-auto' />
            </div>
          </div>
        </div>
      </div>
      <div className='border-b-2'>
        <div className='max-w-[864px] mx-auto px-4 flex max-sm:flex-wrap'>
          {MINTING_LIST.map((obj, i) => (
            <div key={i} className='w-1/3 max-sm:w-1/2 py-[21px] max-sm:py-4 text-center'>
              <p className='text-2xl max-md:text-xl leading-[111%]'>{obj}</p>
              <p className='text-4xl max-md:text-2xl font-semibold leading-[111%] pt-3 max-md:pt-2 sm:text-start sm:pl-11'>42</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Minting