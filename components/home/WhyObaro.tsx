"use client"
import { useTheme } from 'next-themes'
import React from 'react'
import AOS from 'aos'

const products = [
    {
        title: "Who We are Built For",
        items: [
            {
                icon: "🧠",
                heading: "Creators & Solopreneurs",
                description: "All-in-one tools to build and scale faster."
            },
            {
                icon: "🏢",
                heading: "Small Businesses & Startups",
                description: "Smart marketing systems tailored to your growth stage."
            },
            {
                icon: "🚀",
                heading: "Agile Marketing Teams",
                description: "Automation and insights for high-impact execution."
            },
            {
                icon: "🏭",
                heading: "Scaling Brands",
                description: "Strategies focused on outcomes, not just activity."
            }
        ]
    },
    {
        title: "What's Coming Next",
        items: [
            {
                icon: "💡",
                heading: "What We are Working On",
                description: "AI tools, analytics, automation engines, and more."
            },
            {
                icon: "🗺️",
                heading: "View Our Product Roadmap",
                description: "See what is launching next—and what we are testing."
            },
            {
                icon: "🤝",
                heading: "Join Our Beta Community",
                description: "Get early access, give feedback, and help shape the future."
            }
        ]
    }
]

export default function WhyObaro() {
    const { theme, systemTheme } = useTheme()
    const currentTheme = theme === 'system' ? systemTheme : theme
    const [mounted, setMounted] = React.useState(false)
    const isDarkMode = currentTheme === 'dark'

    React.useEffect(() => {
        setMounted(true)
        AOS.init({
            duration: 500,
            easing: 'ease-out',
            once: false,
            mirror: true
        })
        window.addEventListener('scroll', () => {
            AOS.refresh();
        });

        return () => {
            window.removeEventListener('scroll', () => {
                AOS.refresh();
            });
        };
    }, [])

    if (!mounted) return null

    return (
        <div className="relative container py-28 px-0">
            {/* Top border */}
            <div className={`absolute top-8 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent ${isDarkMode ? 'via-gray-500' : 'via-gray-400'} to-transparent opacity-50`}></div>

            {/* Bottom border */}
            <div className={`absolute bottom-8 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent ${isDarkMode ? 'via-gray-500' : 'via-gray-400'} to-transparent opacity-50`}></div>

            {/* Left border */}
            <div className={`absolute left-4 2xl:left-0 top-8 bottom-8 w-[1px] bg-gradient-to-b from-transparent ${isDarkMode ? 'via-gray-500' : 'via-gray-400'} to-transparent opacity-50`}></div>

            {/* Right border */}
            <div className={`absolute right-4 2xl:right-0 top-8 bottom-8 w-[1px] bg-gradient-to-b from-transparent ${isDarkMode ? 'via-gray-500' : 'via-gray-400'} to-transparent opacity-50`}></div>

            {/* Middle Border with Gap - Horizontal version */}
            <div className="absolute w-full h-full flex justify-between">
                {/* Top horizontal line */}
                <div className="absolute border h-[9px] w-[100px] left-1/2 -translate-x-1/2 bg-border bg-gradient-to-b from-transparent via-border to-transparent -top-21 rounded-[1px]"></div>

                {/* Bottom horizontal line */}
                <div className="absolute border h-[9px] w-[100px] left-1/2 -translate-x-1/2 bg-border bg-gradient-to-b from-transparent via-border to-transparent bottom-35 rounded-[1px]"></div>
            </div>

            {/* Content */}
            <div className="mx-auto px-4 md:px-16">
                <div
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    className='flex flex-col gap-5 mb-10'
                >
                    <h2 className={`${isDarkMode
                        ? 'text-white'
                        : 'bg-clip-text text-transparent bg-gradient-to-r from-[#6D6D6D] to-[#070707]'
                        }`}>Why Obaro & What&apos;s Next</h2>

                    <h5 className={`text-start font-semibold ${isDarkMode
                        ? 'text-[#D2D2D5]'
                        : 'text-[#070707c5]'
                        }`}>Agile by Nature. Built for the Bold.</h5>

                    <p className={`max-w-4xl px-2 md:px-0 mb-2 ${isDarkMode ? 'text-[#A5A5AB]' : 'text-[#4A4C56]'}`}>
                        At Obaro Industries, we move fast, test smart, and think big. Whether you are a creator, a marketer, or a growing brand— we are building the tools you&apos;ll need tomorrow, today.
                    </p>
                </div>

                {/* Cards Container */}
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 p-2 md:p-8 rounded-[24px] border ${isDarkMode ? 'border-[#121212]' : 'border-[#EAEAEA]'}`}
                    style={{
                        background: isDarkMode
                            ? 'linear-gradient(288deg, rgba(0, 0, 0, 0.00) 29.19%, rgba(94, 94, 94, 0.06) 98.94%), #070707'
                            : '#fff'
                    }}
                >

                    {products.map((section, index) => (
                        <div
                            key={index}
                            data-aos="fade-up"
                            data-aos-duration="500"
                            data-aos-delay={index * 200}
                            className={`space-y-6 border ${isDarkMode
                                ? 'border-[#191818] bg-[#0A0A0A]'
                                : 'border-[#EFEFEF]'
                                } rounded-[24px] px-3 py-4 md:p-8`}
                            style={{
                                background: isDarkMode
                                    ? '#0A0A0A'
                                    : 'linear-gradient(291deg, rgba(0, 0, 0, 0.00) 1.93%, rgba(113, 113, 113, 0.08) 44.53%, rgba(255, 255, 255, 0.15) 98.24%), #FEFEFE'
                            }}

                        >


                            <h4 className={`text-[20px] lg:text-[32px] font-[400] ${isDarkMode ? 'text-white' : 'text-[#070707)]'} mb-8`}>
                                {section.title}
                            </h4>
                            <div className="space-y-6 ">

                                {section.items.map((item, itemIndex) => (

                                    <div
                                        key={itemIndex}
                                        data-aos="fade-up"
                                        data-aos-duration="1000"
                                        data-aos-delay={index * 200 + (itemIndex + 1) * 100}
                                        className="group"
                                    >

                                        <div className="flex items-start gap-4">
                                            <span className="text-2xl">{item.icon}</span>
                                            <div>
                                                <h4 className={`${isDarkMode ? 'text-white' : 'text-[#1D1F2C]'} text-[18px] md:text-[24px] font-medium mb-2`}>
                                                    {item.heading}
                                                </h4>
                                                <p className={`${isDarkMode ? 'text-[#A5A5AB]' : 'text-[#4A4C56]'} text-[14px] md:text-[18px] leading-relaxed`}>
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
