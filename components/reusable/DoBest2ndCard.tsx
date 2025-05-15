'use client'
import { useTheme } from 'next-themes'
import Image, { StaticImageData } from 'next/image'
import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid"
import { FileTextIcon, GlobeIcon, InputIcon } from "@radix-ui/react-icons"

interface SubItem {
    name: string;
    description: string;
}

interface ServiceItem {
    title: string;
    description: string;
    subItems: SubItem[];
}

// Add new interface for bento items
interface BentoItem extends SubItem {
    Icon: React.ComponentType;
    href: string;
    cta: string;
    className: string;
    nameClassName: string;
    background: React.ReactNode;
}

interface DoBestFstCardProps {
    services: ServiceItem[];
    darkImage: string | StaticImageData;
    lightImage: string | StaticImageData;
}

export default function DoBest2ndCard({ services, darkImage, lightImage }: DoBestFstCardProps) {
    const { theme, systemTheme } = useTheme()
    const currentTheme = theme === 'system' ? systemTheme : theme
    const [mounted, setMounted] = React.useState(false)

    // Convert subItems to bento format
    const getBentoItems = (service: ServiceItem): BentoItem[] => {
        const icons = [FileTextIcon, GlobeIcon, InputIcon];
        
        return service.subItems.map((item, index) => ({
            ...item,
            Icon: icons[index % icons.length],
            href: '/',
            cta: 'Learn more',
            className: index === 2 
                ? "lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-4"  // Last card takes full height on right
                : index === 0
                ? "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3"  // First card takes 2/3 height on left
                : "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",  // Second card takes 1/3 height on left
            nameClassName: '!text-2xl',
            background: null,
        }));
    };

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
        <section className="container relative py-10 px-4 2xl:px-0 z-10">
            <div 
                data-aos="fade-up"
                data-aos-duration="500"
                className={`rounded-3xl ${currentTheme === 'dark'
                    ? 'border border-[#121212] bg-gradient-to-br from-[#070707] via-[#070707] to-[rgba(94,94,94,0.07)]'
                    : 'border border-gray-200 bg-[#F4F4F4] bg-gradient-to-br from-transparent via-[rgba(0,0,0,0.00)] to-[rgba(255,255,255,0.04)]'
                }`}>
                <div className='flex flex-col items-center lg:flex-row gap-2'>
                    {/* left Image */}
                    <div 
                        data-aos="fade-up"
                        data-aos-duration="500" 
                        className="w-full lg:w-5/12 px-8">
                        <Image
                            width={1000}
                            height={1000}
                            src={currentTheme === 'dark' ? darkImage : lightImage}
                            alt="What We Do Best"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                    <div className='w-full lg:w-7/12 p-8'>
                        {services.map((service, index) => (
                            <div
                                key={index}
                                data-aos="fade-up"
                                data-aos-duration="500"
                            >
                                <h3 className={`mb-8 ${currentTheme === 'dark' ? 'text-white' : 'text-[#070707]'}`}>
                                    {service.title}
                                </h3>

                                <BentoGrid className="lg:grid-rows-3 lg:grid-cols-2">
                                    {getBentoItems(service).map((item, idx) => (
                                        <BentoCard key={idx} {...item} />
                                    ))}
                                </BentoGrid>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
