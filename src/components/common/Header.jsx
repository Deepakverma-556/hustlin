import React from 'react'
import MyMarquee from './MyMarquee'
import Link from 'next/link'
import { HEADER_LINK_LIST, HEADER_SOCIAL_ICON_LIST } from '@/utils/helper'

const Header = () => {
    return (
        <div>
            <MyMarquee />
            <div className='max-w-[1172px] mx-auto px-4 sm:flex justify-end pt-2 pb-[15px]'>
                <div className='max-w-[658px] w-full flex items-center justify-between'>
                    <Link href={"/"} className='text-2xl leading-[100%] !font-modern'>Hustlin' Hardos</Link>
                    <div className='flex items-center gap-5'>
                        <div className='flex items-center gap-[18px] max-sm:hidden'>
                            {HEADER_SOCIAL_ICON_LIST.map((obj, i) => (
                                <Link target='blank' key={i} href={obj.link} className='icon'>{obj.icon}</Link>
                            ))}
                        </div>
                        <button className='bg-yellow-400 text-sm font-semibold leading-[100%] border-2 border-black px-[14.76px] py-[12.9px] max-sm:px-3 max-sm:py-2 cursor-pointer transition-all duration-300 hover:bg-black hover:text-white '>CONNECT WALLET</button>
                    </div>
                </div>
                <div className='flex items-center gap-7 max-sm:mx-auto max-w-max sm:hidden pt-4'>
                    {HEADER_SOCIAL_ICON_LIST.map((obj, i) => (
                        <Link target='blank' key={i} href={obj.link} className='icon'>{obj.icon}</Link>
                    ))}
                </div>
            </div>
            <div className='border-t-2 border-b-2 border-black'>
                <ul className='mx-auto max-w-max flex'>
                    {HEADER_LINK_LIST.map((obj, i) => (
                        <li key={i} className={`border-l-2 px-6 py-[5.4px] max-sm:px-2 max-sm:py-1 max-sm:text-sm border-black ${i===4?"border-r-2 border-black":""}`}><Link href={obj.link} className='transition-all duration-300 hover:text-sky'>{obj.title}</Link></li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Header