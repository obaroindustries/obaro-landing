'use client'
import React from 'react'
import ReuseableCarousel from '../reusable/ReuseableCarousel'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import { FaStar } from 'react-icons/fa'
import AOS from 'aos'

export default function UsersSay() {
    const { theme, systemTheme } = useTheme()
    const currentTheme = theme === 'system' ? systemTheme : theme
    const [mounted, setMounted] = React.useState(false)

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

    if (!mounted) {
        return null
    }

    const testimonials = [
        {
            content: "Sellrgrid transformed the way we run our DTC store. With automated lead funnels, optimized ad spending, and clear analytics, we scaled 3x faster and finally felt in control of our growth and marketing performance",
            author: {
                name: "Steve man",
                role: "Businessman",
                image: "/images/customersay/rating1.png"
            },
            rating: 3
        },
        {
            content: "Sellrgrid transformed the way we run our DTC store. With automated lead funnels, optimized ad spending, and clear analytics, we scaled 3x faster and finally felt in control of our growth and marketing performance",
            author: {
                name: "Marie Alisa",
                role: "Businessman",
                image: "/images/customersay/rating2.png"
            },
            rating: 4.9
        },
        {
            content: "Sellrgrid transformed the way we run our DTC store. With automated lead funnels, optimized ad spending, and clear analytics, we scaled 3x faster and finally felt in control of our growth and marketing performance",
            author: {
                name: "Stephen Jhon",
                role: "Businessman",
                image: "/images/customersay/rating3.png"
            },
            rating: 5
        },
        {
            content: "Sellrgrid transformed the way we run our DTC store. With automated lead funnels, optimized ad spending, and clear analytics, we scaled 3x faster and finally felt in control of our growth and marketing performance",
            author: {
                name: "Stephen Jhon",
                role: "Businessman",
                image: "/images/customersay/rating1.png"
            },
            rating: 5
        },
        {
            content: "Sellrgrid transformed the way we run our DTC store. With automated lead funnels, optimized ad spending, and clear analytics, we scaled 3x faster and finally felt in control of our growth and marketing performance",
            author: {
                name: "Stephen Jhon",
                role: "Businessman",
                image: "/images/customersay/rating2.png"
            },
            rating: 5
        },
        {
            content: "Sellrgrid transformed the way we run our DTC store. With automated lead funnels, optimized ad spending, and clear analytics, we scaled 3x faster and finally felt in control of our growth and marketing performance",
            author: {
                name: "Stephen Jhon",
                role: "Businessman",
                image: "/images/customersay/rating3.png"
            },
            rating: 5
        },
        {
            content: "Sellrgrid transformed the way we run our DTC store. With automated lead funnels, optimized ad spending, and clear analytics, we scaled 3x faster and finally felt in control of our growth and marketing performance",
            author: {
                name: "Stephen Jhon",
                role: "Businessman",
                image: "/images/customersay/rating1.png"
            },
            rating: 5
        },
        {
            content: "Sellrgrid transformed the way we run our DTC store. With automated lead funnels, optimized ad spending, and clear analytics, we scaled 3x faster and finally felt in control of our growth and marketing performance",
            author: {
                name: "Stephen Jhon",
                role: "Businessman",
                image: "/images/customersay/rating2.png"
            },
            rating: 5
        },
        {
            content: "Sellrgrid transformed the way we run our DTC store. With automated lead funnels, optimized ad spending, and clear analytics, we scaled 3x faster and finally felt in control of our growth and marketing performance",
            author: {
                name: "Stephen Jhon",
                role: "Businessman",
                image: "/images/customersay/rating3.png"
            },
            rating: 5
        },
        {
            content: "Sellrgrid transformed the way we run our DTC store. With automated lead funnels, optimized ad spending, and clear analytics, we scaled 3x faster and finally felt in control of our growth and marketing performance",
            author: {
                name: "Stephen Jhon",
                role: "Businessman",
                image: "/images/customersay/rating1.png"
            },
            rating: 5
        },
        {
            content: "Sellrgrid transformed the way we run our DTC store. With automated lead funnels, optimized ad spending, and clear analytics, we scaled 3x faster and finally felt in control of our growth and marketing performance",
            author: {
                name: "Stephen Jhon",
                role: "Businessman",
                image: "/images/customersay/rating2.png"
            },
            rating: 5
        },
        {
            content: "Sellrgrid transformed the way we run our DTC store. With automated lead funnels, optimized ad spending, and clear analytics, we scaled 3x faster and finally felt in control of our growth and marketing performance",
            author: {
                name: "Stephen Jhon",
                role: "Businessman",
                image: "/images/customersay/rating3.png"
            },
            rating: 5
        },

    ]


    const avatars = [
        "/images/customersay/img4.png",
        "/images/customersay/img2.png",
        "/images/customersay/img3.png",
        "/images/customersay/img4.png",
    ]

    return (
        <section className="py-20">
            <div className="container px-4 2xl:px-0">
                <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    className='flex flex-col md:flex-row items-center justify-between mb-12'
                >
                    {/* left side */}
                    <div>
                        <h4
                            data-aos="fade-up"
                            data-aos-duration="500"
                            data-aos-delay="100"
                            className={`text-[32px] md:text-[48px] font-[700] ${currentTheme === 'dark' ? 'text-white' : 'text-gray-900'}`}
                        >
                            What Our Users Say
                        </h4>
                        <p
                            data-aos="fade-up"
                            data-aos-duration="500"
                            data-aos-delay="200"
                            className={`text-[18px] font-[400] ${currentTheme === 'dark' ? 'text-[#E9E9EA]' : 'text-[#4A4C56]'}`}
                        >
                            Real results. Real people. Real growth.
                        </p>
                    </div>

                    {/* right side */}
                    <div
                        data-aos="fade-up"
                        data-aos-duration="500"
                        data-aos-delay="300"
                        className='flex flex-col items-center gap-4 mt-4 md:mt-0'
                    >
                        <div className='flex -space-x-4'>
                            {avatars.map((avatar, index) => (
                                <div
                                    key={index}
                                    data-aos="fade-left"
                                    data-aos-duration="500"
                                    data-aos-delay={400 + (index * 100)}
                                    className='w-12 h-12 rounded-full overflow-hidden relative'
                                >
                                    <Image
                                        src={avatar}
                                        alt={`User ${index + 1}`}
                                        fill
                                        className='object-cover w-full h-full'
                                    />
                                </div>
                            ))}
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            data-aos-delay="800"
                            className='flex items-center gap-1'
                        >
                            <div className='flex items-center gap-1'>
                                <span className=''>
                                    <FaStar className='text-[#FCAA56] text-xl' />
                                </span>
                                <span className={`font-[600] ${currentTheme === 'dark' ? 'text-white' : 'text-[#070707]'}`}>
                                    4.9
                                </span>
                            </div>
                            <div>
                                <p className={`text-sm font-[600] ${currentTheme === 'dark' ? 'text-white' : 'text-[#4A4C56]'}`}>
                                    (7000 Reviews)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="900"
                >
                    <ReuseableCarousel testimonials={testimonials} />
                </div>
            </div>
        </section>
    )
}
