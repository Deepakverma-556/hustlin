import React from 'react'

const Description = ({myClass,text}) => {
  return (
    <p className={`${myClass} max-sm:text-sm`}>{text}</p>
  )
}

export default Description