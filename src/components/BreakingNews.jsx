import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Description from './common/Description'

const BreakingNews = () => {
  return (
    <div className='pt-[67px] max-sm:pt-12'>
      <div className='max-w-[1172px] mx-auto px-4'>
        <p className='text-7xl max-lg:text-6xl max-md:text-5xl max-sm:text-4xl leading-[140%] pb-16 max-md:pb-10 max-sm:pb-6'>“BREAKING NEWS: Hustlin Hardos set to launch the most anticipated NFT project of 2022"</p>
      </div>
      <div className='border-t-2 border-b-2 border-black'>
        <div className='max-w-[1172px] mx-auto px-4'>
          <div className='flex flex-wrap -mx-3'>
            <div className='w-1/2 px-3 max-md:w-full'>
              <div className='pl-[43px] pr-[47px] max-lg:px-5 border-l-2 max-md:border-r-2 max-md:border-b-2 h-full flex flex-col justify-center py-10 max-sm:py-5'>
                <Description text={"March 1, 2022 by Editor Hardo"} />
                <Description myClass={"py-4 max-sm:py-2 max-sm:text-base text-lg leading-[150%]"} text={"Hustlin' Hardos is a collection of 9,999 NFT characters on the Ethereum Blockchain, inspired by the business/ finance world, hustler culture and web3 aesthetics. Each Hustlin' Hardo is a completely original and unique combination of hundreds of potential attributes such as luxury watches, clothing, or accessories - all with provable degrees of rarity. The collection features truly unique and powerful artwork, while offering its holders first-of-its-kind utility. Your Huslin’ Hardo NFT is your gateway to The Boardroom, one of the most rewarding and engaging online communities"} />
                <Link href={"#read"} className='underline transition-all duration-300 hover:text-sky max-w-max'>Read More...</Link>
              </div>
            </div>
            <div className='w-1/2 px-3 max-md:w-full'>
              <Image src={"/assets/images/png/man-img.png"} alt='man-img' width={570} height={572} className='border-l-2 border-r-2 border-black h-full object-cover pointer-events-none max-md:mx-auto' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BreakingNews