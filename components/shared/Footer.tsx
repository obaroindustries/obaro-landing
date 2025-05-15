'use client'
import { useTheme } from 'next-themes'
import React from 'react'
import darkLogo from '@/public/images/logo/footerdark.png'
import lightLogo from '@/public/images/logo/footerwhite.png'
import { FaLinkedinIn, FaXTwitter, FaInstagram } from 'react-icons/fa6'
import Link from 'next/link'
import Image from 'next/image'
import { RetroGrid } from '@/components/magicui/retro-grid'

export default function Footer() {
    const { theme, systemTheme } = useTheme()
    const currentTheme = theme === 'system' ? systemTheme : theme
    const [mounted, setMounted] = React.useState(false)
    const isDarkMode = currentTheme === 'dark'

    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    const btnLink = [
        {
            name: 'Products',
            link: '#products'
        },
        {
            name: 'Marketing Services',
            link: '#marketing-services'
        },
        {
            name: 'Case Studies',
            link: '/'
        },
        {
            name: 'Blog',
            link: '/'
        },
        {
            name: 'Roadmap',
            link: '/'
        },
        {
            name: 'Careers',
            link: '/'
        }
    ]

    // current year
    const currentYear = new Date().getFullYear()

    return (
        <footer className='relative pt-14'>
            {/* Add RetroGrid as background */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
                <RetroGrid />
            </div>

            {/* Existing elements with added z-10 to appear above grid */}
            <div className={`absolute z-10 top-8 left-8 right-8 h-[1px] ${isDarkMode ? 'bg-[#777]' : 'bg-[#E9E9E9]'} `} />

            {/* Top horizontal line */}
            {/* <div className="absolute w-full  ">
                <div className="absolute border rounded-2xl h-[4px] w-[50px] left-1/2 -translate-x-1/2 bg-[#FFFFFF] -top-6 " />
            </div> */}

            {/* lighting system */}
            {/* <div className="absolute w-full  ">
                <div className="absolute left-1/2 -translate-x-1/2  -top-5 ">
                    <LightingsystemIcon />
                </div>
            </div> */}

            <div className='container relative z-10 px-4 md:px-0 flex flex-col items-center  justify-between'>
                {/* Navigation Buttons */}
                <div className="flex flex-wrap gap-4 justify-center my-10 z-10">
                    {
                        btnLink.map((item, index) => (
                            <Link href={item.link} key={index} className={`px-6 py-[14px] cursor-pointer rounded-[12px] text-[16px] font-medium ${currentTheme === 'dark' ? 'bg-[#171717] text-[#FFF]' : 'bg-[#F4F4F4] text-[#070707]'}`}>{item.name}</Link>
                        ))
                    }
                </div>

                {/* Social Handles */}
                <div className="flex flex-col items-center z-10">
                    <span className={`text-[18px] font-[400] mb-5 ${currentTheme === 'dark' ? 'text-[#FFF]' : 'text-[#070707]'}`}>Social Handles</span>
                    <div className="flex gap-7">
                        <Link href="" className={`bg-[#232323] p-2 rounded-md cursor-pointer transform duration-300  flex items-center justify-center ${currentTheme === 'dark' ? 'bg-[#171717] text-[#FFF] hover:bg-primary hover:text-black' : 'bg-[#E9E9EA] text-[#070707] hover:bg-primary hover:text-white'}`}>
                            <FaLinkedinIn className='text-xl' />
                        </Link>
                        <Link href="https://x.com/obaroindustries" target='_blank' className={`bg-[#232323] p-2 rounded-md cursor-pointer transform duration-300  flex items-center justify-center ${currentTheme === 'dark' ? 'bg-[#171717] text-[#FFF] hover:bg-primary hover:text-black' : 'bg-[#E9E9EA] text-[#070707] hover:bg-primary hover:text-white'}`}>
                            <FaXTwitter />
                        </Link>
                        <Link href="https://www.instagram.com/obaroindustries/" target='_blank' className={`bg-[#232323] p-2 rounded-md cursor-pointer transform duration-300  flex items-center justify-center ${currentTheme === 'dark' ? 'bg-[#171717] text-[#FFF] hover:bg-primary hover:text-black' : 'bg-[#E9E9EA] text-[#070707] hover:bg-primary hover:text-white'}`}>
                            <FaInstagram />
                        </Link>
                    </div>
                </div>


                <div className='flex flex-col md:flex-row items-center justify-center gap-14 mt-5'>
                    {/* logo  */}
                    <div className='2xl:w-[600px] md:w-[400px] w-[200px] order-2 md:order-1'>
                        <Image
                            src={isDarkMode ? lightLogo : darkLogo}
                            alt='logo'
                            width={1000}
                            height={500}
                            className='w-full h-full object-contain'
                        />
                    </div>
                    <div className='flex items-end justify-end mt-5 md:mt-14 flex-1 order-1 md:order-2'>
                        <span className='text-[14px] md:text-[16px] font-[400] leading-[24px]'>
                            © {currentYear} All rights reserved. Privacy Policy
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
