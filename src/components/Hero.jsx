import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
      <div>
          <div className='max-w-[1172px] mx-auto px-4'>
              <h1 className='text-[157px] max-xl:text-9xl text-center max-lg:!text-8xl max-md:!text-7xl max-sm:!text-6xl leading-[100%] !font-modern xl:text-nowrap pt-[25px] max-md:pt-5 max-sm:pt-3 pb-2'>THE HUSTLIN’ HARDOS.</h1>
          </div>
              <Image src={'/assets/images/png/hero.png'} alt='hero' width={1920} height={476} className='w-full h-[476px] max-lg:h-96 max-md:h-80 max-sm:h-72 object-cover border-t-2 border-black border-b-2 pointer-events-none'/>
    </div>
  )
}

export default Hero