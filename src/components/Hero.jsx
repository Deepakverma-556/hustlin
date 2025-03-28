import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
      <div>
          <div className='max-w-[1172px] mx-auto px-4'>
              <h1 className='text-[157px] leading-[100%] !font-modern xl:text-nowrap pt-[25px] pb-2'>THE HUSTLIN’ HARDOS.</h1>
          </div>
              <Image src={'/assets/images/png/hero.png'} alt='hero' width={1920} height={476} className='w-full h-[476px] object-cover border-t-2 border-black border-b-2'/>
    </div>
  )
}

export default Hero