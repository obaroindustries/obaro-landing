"use client"
import React from 'react'
import Button from '../reusable/Button'
import { useTheme } from 'next-themes'
import SellrgridIcon from '../icons/sellrgridIcon'
import OutsellOdysseyIcon from '../icons/outsellOdysseyIcon'
import ObaroIcon from '../icons/obaroIcon'
import Link from 'next/link'
import { BorderBeam } from '../magicui/border-beam'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

export default function OurProducts() {
    const { theme, systemTheme } = useTheme()
    const currentTheme = theme === 'system' ? systemTheme : theme
    const [mounted, setMounted] = React.useState(false)
    const isDarkMode = currentTheme === 'dark'

    const products = [
        {
            icon: <SellrgridIcon />,
            title: "Sellrgrid",
            subtitle: "Ecommerce Growth, Simplified.",
            description: "Optimize products, automate campaigns, and analyze store performance easily."
        },
        {
            icon: <OutsellOdysseyIcon />,
            title: "Outsell Odyssey",
            subtitle: "Your Shortcut to Sales Mastery.",
            description: "Boost conversions and optimize funnels with intelligent automation tools."
        },
        {
            icon: <ObaroIcon />,
            title: "Obaro.ai",
            subtitle: "AI Power for Creators and Marketers.",
            description: "Generate content, automate workflows, and predict marketing success faster."
        }
    ]

    React.useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        setMounted(true)

        // Header animation
        gsap.fromTo('.products-header-animate', {
            opacity: 0,
            y: 50
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power2.out"
        })

        // Card animations
        const cards = gsap.utils.toArray('.product-card-animate')
        cards.forEach((card, index) => {
            gsap.fromTo(card as Element, {
                opacity: 0,
                y: 100
            }, {
                opacity: 1,
                y: 0,
                duration: 1.2,
                delay: index * 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: card as Element,
                    start: "top bottom-=100",
                    end: "bottom center",
                    toggleActions: "play none none reverse",
                }
            })
        })

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill())
        }
    }, [mounted])

    if (!mounted) {
        return null
    }

    return (
        <div className="relative container py-28 md:px-0" id='products'>
            {/* Top border */}
            <div className={`absolute top-8 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent ${isDarkMode ? 'via-gray-500' : 'via-gray-400'} to-transparent opacity-50`}></div>

            {/* Bottom border */}
            <div className={`absolute bottom-8 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent ${isDarkMode ? 'via-gray-500' : 'via-gray-400'} to-transparent opacity-50`}></div>

            {/* Left border */}
            <div className={`absolute left-4 2xl:left-0 top-8 bottom-8 w-[1px] bg-gradient-to-b from-transparent ${isDarkMode ? 'via-gray-500' : 'via-gray-400'} to-transparent opacity-50`}></div>

            {/* Right border */}
            <div className={`absolute right-4 2xl:right-0 top-8 bottom-8 w-[1px] bg-gradient-to-b from-transparent ${isDarkMode ? 'via-gray-500' : 'via-gray-400'} to-transparent opacity-50`}></div>

            {/* Middle Border with Gap - Updated to match Banner style */}
            <div className="absolute w-full flex justify-between">
                <div className="absolute border left-3 md:left-3 2xl:-left-1 w-[9px] h-[100px] bg-border bg-gradient-to-b from-transparent via-border to-transparent translate-y-[270px] rounded-[1px]"></div>

                <div className="absolute border right-3 md:right-3 2xl:-right-1 w-[9px] h-[100px] bg-border bg-gradient-to-b from-transparent via-border to-transparent translate-y-[270px] rounded-[1px]"></div>
            </div>

            {/* Content */}
            <div className="mx-auto text-center px-4 md:px-16">
                <div className='products-header-animate flex flex-col items-center gap-5 mb-10'>
                    <h2 className={`${currentTheme === 'dark'
                        ? 'text-white'
                        : 'bg-clip-text text-transparent bg-gradient-to-r from-[#6D6D6D] to-[#070707]'
                        }`}>Our Products</h2>
                    <p className={`max-w-lg mx-auto px-2 md:px-0 mb-2 ${currentTheme === 'dark' ? 'text-white' : 'text-[#4A4C56]'}`}>
                        Tools designed to grow your brand, automate your workflow, and amplify your impact.
                    </p>
                    <Link href="https://outsellodyssey.com" target='_blank'>
                        <Button>
                            Get Notified When We Launch
                        </Button>
                    </Link>
                </div>

                {/* Cards Container */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 px-4 md:px-0">
                

                    {products.map((product, index) => (
                        <div
                            key={index}
                            className={`product-card-animate rounded-xl p-6 overflow-hidden ${currentTheme === 'dark'
                                ? 'bg-[#010101] before:absolute before:inset-0 before:bg-[linear-gradient(297deg,rgba(0,0,0,0.00)_27.47%,rgba(255,255,255,0.15)_98.27%)] border-[#0B1316] relative border-opacity-40'
                                : 'bg-[#FEFEFE] before:absolute before:inset-0 before:bg-[linear-gradient(291deg,rgba(0,0,0,0)_1.93%,rgba(113,113,113,0.08)_44.53%,rgba(255,255,255,0.15)_98.24%)] border-[#EFEFEF] relative border-opacity-80'
                                } border-[1px]`}
                        >
                            <BorderBeam duration={8} size={200} />
                            <div className="relative z-10">
                                <div className='flex items-start'>
                                    <div className="mb-4 inline-flex items-center justify-center rounded-[6px]"
                                        style={{
                                            background: isDarkMode
                                                ? 'linear-gradient(135deg, #242424 0%, #1a1a1a 100%)'
                                                : 'linear-gradient(334deg, #EFEEEE -2.4%, #FFF 88.75%)',
                                            border: isDarkMode
                                                ? '1px solid rgba(255, 255, 255, 0.05)'
                                                : '1px solid rgba(255, 255, 255, 0.07)',
                                            width: '42px',
                                            height: '42px',
                                            padding: '6px'
                                        }}>
                                        {product.title === "Obaro.ai" ? (
                                            product.icon
                                        ) : (
                                            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                                                {product.icon}
                                            </svg>
                                        )}
                                    </div>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <h5 className={`text-start font-semibold  ${currentTheme === 'dark'
                                        ? 'text-white'
                                        : 'bg-clip-text text-transparent bg-[linear-gradient(304deg,_#070707_10.21%,_#6D6D6D_90.45%)]'
                                        }`}>{product.title}</h5>

                                    <h4 className={`text-[20px] text-start  font-[400]${currentTheme === 'dark' ? 'text-white' : 'text-[#070707]'} `}>{product.subtitle}</h4>

                                    <p className={`text-start ${currentTheme === 'dark' ? 'text-[#A5A5AB]' : 'text-[#4A4C56]'} text-sm`}>{product.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
