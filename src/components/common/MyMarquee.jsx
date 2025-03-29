import { MARQUEE_LIST } from '@/utils/helper'
import React from 'react'
import Marquee from "react-fast-marquee"

const MyMarquee = () => {
    return (
        <div className='bg-black py-[14px]'>
            <Marquee pauseOnHover>
                <div className='flex gap-[62px]'>
                    {MARQUEE_LIST.map((obj, i) => (
                        <div key={i} className={`flex items-center gap-[7px]`}>
                            <p className='text-white'>{obj.title}</p>
                            <p className={`text-sm leading-[100%] rounded-[5px] border py-[3px] px-1 ${i === 3 ? "text-red-500 border-red-500" : i === 4 ? "text-red-500 border-red-500" : "text-yellow-400 border-yellow-400"}`}>{obj.rate}</p>
                        </div>
                    ))}
                </div>
            </Marquee>
        </div>
    )
}

export default MyMarquee