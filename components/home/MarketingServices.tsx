'use client'
import React from 'react'
import { useTheme } from 'next-themes'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import darkImgBg from '@/public/images/services/darkMode.png'
import lightImgBg from '@/public/images/services/whiteMode.png'
import Image from 'next/image';
import BookCallModal from '../reusable/BookCallModal';
import { FaShoppingCart, FaRocket, FaLaptopCode, FaBitcoin, FaBuilding, FaTshirt, FaUtensils, FaBalanceScale } from 'react-icons/fa';
import { BorderBeam } from '../magicui/border-beam'

interface ServiceCardProps {
    title: string;
    icon: React.ReactNode;
}

const ServiceCard = ({ title, icon }: ServiceCardProps) => {
    const { theme, systemTheme } = useTheme()
    const currentTheme = theme === 'system' ? systemTheme : theme
    const isDarkMode = currentTheme === 'dark'
    const iconRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        // Floating animation
        gsap.to(iconRef.current, {
            y: -5,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
        });

        // Optional: Add a subtle scale effect on hover
        const iconElement = iconRef.current;
        const handleHover = () => {
            gsap.to(iconElement, {
                scale: 1.2,
                duration: 0.3,
                ease: "back.out"
            });
        };
        
        const handleHoverOut = () => {
            gsap.to(iconElement, {
                scale: 1,
                duration: 0.3,
                ease: "back.out"
            });
        };

        iconElement?.parentElement?.addEventListener('mouseenter', handleHover);
        iconElement?.parentElement?.addEventListener('mouseleave', handleHoverOut);

        return () => {
            iconElement?.parentElement?.removeEventListener('mouseenter', handleHover);
            iconElement?.parentElement?.removeEventListener('mouseleave', handleHoverOut);
        };
    }, []);

    return (
        <div className={`relative group cursor-pointer rounded-xl p-5 flex flex-col items-center justify-start gap-4 transition-colors duration-300 ease-in-out overflow-hidden h-[180px] ${currentTheme === 'dark'
            ? 'border border-[#0F0F0F] bg-[#0A0A0A] [background:linear-gradient(94deg,rgba(76,76,76,0.00)_-4.07%,rgba(0,0,0,0.20)_111.38%),#0A0A0A] [box-shadow:25px_32px_39px_0px_rgba(0,0,0,0.74)] hover:bg-[#111111]'
            : 'border border-[#EFEFEF] bg-[#FEFEFE] bg-gradient-to-br from-transparent via-[rgba(113,113,113,0.08)] to-[rgba(255,255,255,0.15)] hover:bg-gray-50'
            }`}>
                 <BorderBeam duration={8} size={100} />
            <div className={`absolute inset-0 -z-10 rounded-xl transition-opacity duration-300 opacity-0 group-hover:opacity-100 ${currentTheme === 'dark'
                ? 'bg-[conic-gradient(from_0deg,#1A1A1A,#333333,#1A1A1A)]'
                : 'bg-[conic-gradient(from_0deg,#E5E7EB,#F3F4F6,#E5E7EB)]'
                } animate-spin-slow`} />

            <div className={`absolute inset-[1px] -z-10 rounded-xl ${currentTheme === 'dark'
                ? 'bg-[#0A0A0A]'
                : 'bg-[#FEFEFE]'
                }`} />

            <div className="mt-6 inline-flex items-center justify-center rounded-[6px]"
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
                }}
            >
                <div ref={iconRef}>
                    {icon}
                </div>
            </div>
            <h4 className={`text-center text-[18px] font-[400] transition-colors duration-300 ease-in-out line-clamp-2 ${currentTheme === 'dark'
                ? 'text-[#E9E9EA]'
                : 'text-[#070707]'
                }`}>
                {title}
            </h4>
        </div>
    )
}
export default function MarketingServices() {
    const { theme, systemTheme } = useTheme()
    const currentTheme = theme === 'system' ? systemTheme : theme
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        setMounted(true)

        // Header animations
        gsap.fromTo('.marketing-header-animate', {
            opacity: 0,
            y: 50
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power2.out"
        })

        // Service card animations
        const cards = gsap.utils.toArray('.service-card-animate')
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

    if (!mounted) return null

    const services = [
        { 
            title: 'Ecommerce & DTC Brands', 
            icon: <FaShoppingCart className={`w-6 h-6 ${currentTheme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`} />
        },
        { 
            title: 'SaaS & Digital Products', 
            icon: <FaLaptopCode className={`w-6 h-6 ${currentTheme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`} />
        },
        { 
            title: 'Tech Startups & Scaleups', 
            icon: <FaRocket className={`w-6 h-6 ${currentTheme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`} />
        },
        { 
            title: 'FinTech & Crypto Projects', 
            icon: <FaBitcoin className={`w-6 h-6 ${currentTheme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`} />
        },
        { 
            title: 'Real Estate & Property Tech', 
            icon: <FaBuilding className={`w-6 h-6 ${currentTheme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`} />
        },
        { 
            title: 'Retail & Fashion Brands', 
            icon: <FaTshirt className={`w-6 h-6 ${currentTheme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`} />
        },
        { 
            title: 'Fitness, Food & Hospitality', 
            icon: <FaUtensils className={`w-6 h-6 ${currentTheme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`} />
        },
        { 
            title: 'Law & Accounting Practices', 
            icon: <FaBalanceScale className={`w-6 h-6 ${currentTheme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`} />
        }
    ]

    return (
        <div className='relative' id='marketing-services'>
            <div className=' w-full  md:w-1/2 lg:w-2/5 absolute right-0 h-full -top-60'>
                <Image
                    width={1000}
                    height={1000}
                    src={currentTheme === 'dark' ? darkImgBg : lightImgBg}
                    alt='Marketing Services'
                    className='w-full h-full object-cover'
                    priority
                />
            </div>
            <section className="container py-14 px-4 2xl:px-0">
                <div className="flex flex-col gap-3 mb-16 marketing-header-animate">
                    <h2 className={` ${currentTheme === 'dark'
                        ? 'text-white'
                        : 'text-gray-900'
                        }`}>
                        Marketing Services
                    </h2>
                    <h4 className={`text-[20px] md:text-[24px] font-[500] ${currentTheme === 'dark'
                        ? 'text-[#D2D2D5 ]'
                        : 'text-[#1D1F2C]'
                        }`}>
                        Built for Growth. Tailored to Your Industry.
                    </h4>
                    <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-3'>
                        <p className={`text-lg max-w-lg  xl:max-w-3xl ${currentTheme === 'dark'
                            ? 'text-gray-400'
                            : 'text-gray-600'
                            }`}>
                            We don&apos;t do cookie-cutter marketing. At Obaro Industries, we combine data, creativity, and
                            automation to drive real business outcomes—whether you&apos;re a startup, a scaling ecom brand,
                            or an enterprise entering new markets.
                        </p>
                        <div className="z-10">

                            <BookCallModal className={`px-6 py-2.5 rounded-md cursor-pointer transform duration-300 ${currentTheme === 'dark' ? 'bg-[#FFF] px-6 py-3 text-[#070707] hover:bg-primary/90' : 'bg-[linear-gradient(304deg,#070707_10.21%,#6D6D6D_90.45%)] text-white px-6 py-3 hover:opacity-90'}`} eventSlug="obaro-industries" title="Book Your Free Call" calUsername="obaro-industries" />
                        </div>
                    </div>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <div key={index} className="service-card-animate">
                            <ServiceCard
                                title={service.title}
                                icon={service.icon}
                            />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}
