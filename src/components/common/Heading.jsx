import React from 'react'

const Heading = ({myClass,text}) => {
  return (
      <h2 className={`${myClass} text-[80px] leading-[104%]`}>{text}</h2>
  )
}

export default Heading