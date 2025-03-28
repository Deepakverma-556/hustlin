import React from 'react'

const Description = ({myClass,text}) => {
  return (
    <p className={`${myClass}`}>{text}</p>
  )
}

export default Description