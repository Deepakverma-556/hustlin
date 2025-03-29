'use client'
import { LATEST_TWEETS_LIST, TEAM_LIST } from '@/utils/helper'
import { LeftArrow, RightArrow, Twitter } from '@/utils/icons'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from "swiper/modules";
import 'swiper/css'
import "swiper/css/navigation";
import Description from './common/Description'
import Link from 'next/link'
import Heading from './common/Heading'
import Image from 'next/image'

const Team = () => {
  return (
    <>
      <div className='max-w-[1172px] mx-auto px-4 pb-[90px] max-md:pb-10 max-sm:pb-6 justify-between items-center flex'>
        <Heading text={'Team'}/>
        <div className='flex items-center gap-[55px] max-md:gap-7 max-sm:gap-3'>
          <button className='prev cursor-pointer group'><LeftArrow myClass={'group-hover:stroke-sky transition-all duration-300'} /></button>
          <button className='next cursor-pointer group'><RightArrow myClass={'group-hover:stroke-sky transition-all duration-300'}/></button>
        </div>
      </div>
      <div className='border-t-2 border-b-2'>
        <div className='max-w-[1172px] mx-auto px-4'>
        <Swiper
          slidesPerView={2}
          loop={true}
          navigation={{
            nextEl: ".next",
            prevEl:".prev"
          }}
          modules={[Navigation]}
          breakpoints={{
            320: { slidesPerView: 1 },
            700: { slidesPerView: 2 },
          }}
          className='border-r-2'
        >
          {TEAM_LIST.map((obj, i) => (
            <SwiperSlide key={i}>
              <div className='border-l-2 px-[26px] pt-12 pb-[46px] max-md:px-4 max-md:py-5 bg-[url(/assets/images/webp/card-bg.webp)] min-h-[326px] max-sm:min-h-[300px]'>
                <Image src={'/assets/images/png/profile-image.png'} height={88} width={88} alt='profile-image' className='mx-auto' />
                <p className={`text-center font-black text-4xl max-lg:text-3xl max-md:text-2xl leading-[100%] py-4 ${i === 1 ? "text-lightGray" : "text-gray"}`}>{obj.title}</p>
                <Description text={obj.description} myClass={'text-center max-w-[407px] mx-auto'}/>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
      </div>
    </>
  )
}

export default Team