import React from 'react'

const Heading = ({myClass,text}) => {
  return (
    <h2 className={`${myClass} text-[80px] leading-[104%] max-lg:text-6xl max-md:text-5xl max-sm:text-4xl`}>{text}</h2>
  )
}

export default Heading