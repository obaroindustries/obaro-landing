'use client'

import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import { FaStar, FaRegStar } from 'react-icons/fa'
import { IoMdStarHalf } from 'react-icons/io'

interface TestimonialType {
    content: string;
    author: {
        name: string;
        role: string;
        image: string;
    };
    rating: number;
}

interface ReuseableCarouselProps {
    testimonials: TestimonialType[];
}

export default function ReuseableCarousel({ testimonials }: ReuseableCarouselProps) {
    const { theme, systemTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    const currentTheme = theme === 'system' ? systemTheme : theme
    const isDarkMode = currentTheme === 'dark'

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: 'start',
        slidesToScroll: 1,
        
        breakpoints: {
            '(min-width: 768px)': { slidesToScroll: 2 },
            '(min-width: 1024px)': { slidesToScroll: 3 }
        }
    })

    const [selectedIndex, setSelectedIndex] = useState(0)
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

    useEffect(() => {
        setMounted(true)
    }, [])

    const scrollTo = useCallback(
        (index: number) => emblaApi && emblaApi.scrollTo(index),
        [emblaApi]
    )

    const onSelect = useCallback(() => {
        if (!emblaApi) return
        setSelectedIndex(emblaApi.selectedScrollSnap())
    }, [emblaApi])

    useEffect(() => {
        if (!emblaApi || !mounted) return

        onSelect()
        setScrollSnaps(emblaApi.scrollSnapList())
        emblaApi.on('select', onSelect)

        const autoplayInterval = setInterval(() => {
            if (emblaApi.canScrollNext()) {
                emblaApi.scrollNext()
            } else {
                emblaApi.scrollTo(0)
            }
        }, 5000)

        return () => {
            clearInterval(autoplayInterval)
            emblaApi.off('select', onSelect)
        }
    }, [emblaApi, onSelect, mounted])

    // Helper function to render stars
    const renderStars = (rating: number) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;

        // Add full stars
        for (let i = 0; i < fullStars; i++) {
            stars.push(
                <FaStar key={`full-${i}`} className="text-[#FCAA56]" />
            );
        }

        // Add half star if needed
        if (hasHalfStar) {
            stars.push(
                <IoMdStarHalf key="half" className="text-[#FCAA56]" />
            );
        }

        // Add empty stars
        const emptyStars = 5 - Math.ceil(rating);
        for (let i = 0; i < emptyStars; i++) {
            stars.push(
                <FaRegStar key={`empty-${i}`} className="text-gray-300" />
            );
        }

        return stars;
    };

    if (!mounted) {
        return null
    }

    return (
        <div className="container px-4 2xl:px-0">
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex -ml-4">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] pl-4"
                        >
                            <div
                                className={`p-6 md:p-8 rounded-xl h-full flex flex-col ${
                                    isDarkMode 
                                        ? 'border-[0.25px] border-[#0B1316] bg-[#0A0A0A]' 
                                        : 'border-[0.25px] border-[#EFEFEF] bg-[#FEFEFE]'
                                }`}
                                style={{
                                    background: isDarkMode
                                        ? 'linear-gradient(94deg, rgba(76, 76, 76, 0.00) -4.07%, rgba(0, 0, 0, 0.20) 111.38%), #0A0A0A'
                                        : 'linear-gradient(291deg, rgba(0, 0, 0, 0.00) 1.93%, rgba(113, 113, 113, 0.08) 44.53%, rgba(255, 255, 255, 0.15) 98.24%), #FEFEFE',
                                    // boxShadow: '0px 24px 64px 0px rgba(51, 51, 51, 0.06)'
                                }}
                            >
                                {/* Stars based on rating */}
                                <div className="flex gap-1 mb-4">
                                    {renderStars(testimonial.rating)}
                                </div>

                                {/* Content */}
                                <p className={`${isDarkMode ? 'text-[#E9E9EA ]' : 'text-[#4A4C56]'} mb-6 flex-grow`}>
                                    {testimonial.content}
                                </p>

                                {/* Author */}
                                <div className="flex items-center gap-3 mt-auto">
                                    <div className="w-12 h-12 rounded-full overflow-hidden relative">
                                        <Image
                                            src={testimonial.author.image}
                                            alt={testimonial.author.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h4 className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                            {testimonial.author.name}
                                        </h4>
                                        <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                                            {testimonial.author.role}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
                {scrollSnaps.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => scrollTo(index)}
                        className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${index === selectedIndex
                                ? `w-6 ${isDarkMode ? 'bg-white' : 'bg-black'}`
                                : `w-2 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'}`
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    )
}
