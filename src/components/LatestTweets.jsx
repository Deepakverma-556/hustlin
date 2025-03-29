'use client'
import { LATEST_TWEETS_LIST } from '@/utils/helper'
import { LeftArrow, RightArrow, Twitter } from '@/utils/icons'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from "swiper/modules";
import 'swiper/css'
import "swiper/css/navigation";
import Description from './common/Description'
import Link from 'next/link'

const LatestTweets = () => {
  return (
    <>
      <div id='about' className='max-w-[1172px] mx-auto px-4 pt-[89px] pb-[90px] max-md:pb-10 max-sm:pb-6 max-md:pt-16 max-sm:pt-12 justify-between items-center flex'>
        <h2 className='font-light text-[80px] max-lg:text-6xl max-md:text-5xl max-sm:text-3xl leading-[104%] !font-perpetua'>LATEST TWEETS</h2>
        <div className='flex items-center gap-[55px] max-md:gap-7 max-sm:gap-3'>
          <button className='prev cursor-pointer group'><LeftArrow myClass={'group-hover:stroke-sky transition-all duration-300'} /></button>
          <button className='next cursor-pointer group'><RightArrow myClass={'group-hover:stroke-sky transition-all duration-300'}/></button>
        </div>
      </div>
      <div className='border-t-2 border-b-2'>
        <div className='max-w-[1172px] mx-auto px-4'>
        <Swiper
          slidesPerView={3}
          loop={true}
          navigation={{
            nextEl: ".next",
            prevEl:".prev"
          }}
          modules={[Navigation]}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            983: { slidesPerView: 3 },
          }}
          className='border-r-2'
        >
          {LATEST_TWEETS_LIST.map((obj, i) => (
            <SwiperSlide key={i} className=''>
              <div className='border-l-2 px-[26px] pt-12 pb-[46px] max-md:px-4 max-md:py-5'>
                <p className='font-semibold text-4xl max-md:text-3xl max-sm:text-2xl leading-[111%]'>{obj.title}</p>
                <p className='text-sm flex items-center gap-[11px] py-[13px]'><span><Twitter myClass={"fill-sky"} /></span> {obj.date}</p>
                <Description text={obj.description} myClass={'pb-[15px] max-sm:pb-2'} />
                <Link href={"#read"} className='underline transition-all duration-300 hover:text-sky'>Read More...</Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
      </div>
    </>
  )
}

export default LatestTweets