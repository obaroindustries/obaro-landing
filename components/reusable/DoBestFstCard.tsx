'use client'
import { useTheme } from 'next-themes'
import Image, { StaticImageData } from 'next/image'
import React from 'react'
import { cn } from "@/lib/utils"
import { AnimatedList } from "@/components/magicui/animated-list"

interface SubItem {
    name: string;
    description: string;
}

interface ServiceItem {
    title: string;
    description: string;
    subItems: SubItem[];
}

interface DoBestFstCardProps {
    services: ServiceItem[];
    darkImage: string | StaticImageData;
    lightImage: string | StaticImageData;
}

export default function DoBestFstCard({ services, darkImage, lightImage }: DoBestFstCardProps) {
    const { theme, systemTheme } = useTheme()
    const currentTheme = theme === 'system' ? systemTheme : theme
    const [mounted, setMounted] = React.useState(false)

    // Create a flattened and repeated list of items for continuous animation
    const flattenedItems = React.useMemo(() => {
        const items = services.flatMap(service => 
            service.subItems.map(item => ({
                ...item,
                serviceTitle: service.title
            }))
        )
        // Repeat the items to create a continuous loop
        return Array.from({ length: 300 }, () => items).flat()
    }, [services])

    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <section className="container relative py-10 px-4 2xl:px-0">
            <div className={`rounded-3xl ${currentTheme === 'dark'
                ? 'border border-[#121212] bg-gradient-to-br from-[#070707] via-[#070707] to-[rgba(94,94,94,0.07)]'
                : 'border border-gray-200 bg-[#F4F4F4] bg-gradient-to-br from-transparent via-[rgba(0,0,0,0.00)] to-[rgba(255,255,255,0.04)]'
                }`}>
                <div className='flex flex-col items-center lg:flex-row gap-2'>
                    <div className='w-full lg:w-6/12 p-8'>
                        {services.map((service, index) => (
                            <div key={index}>
                                <h3 className={`mb-8 ${currentTheme === 'dark' ? 'text-white' : 'text-[#070707]'}`}>
                                    {service.title}
                                </h3>
                                <div className="relative h-[500px] overflow-hidden">
                                    <AnimatedList>
                                        {flattenedItems
                                            .filter(item => item.serviceTitle === service.title)
                                            .map((item, idx) => (
                                                <div
                                                    key={idx}
                                                    className={cn(
                                                        "relative mx-auto min-h-fit w-full overflow-hidden rounded-xl p-6 mb-4",
                                                        "transition-all duration-200 ease-in-out hover:scale-[102%]",
                                                        currentTheme === 'dark'
                                                            ? 'border border-[#0F0F0F] bg-[#0A0A0A] shadow-[9px_10px_15px_0px_rgba(0,0,0,0.18)]'
                                                            : 'border border-gray-100 bg-gray-50',
                                                    )}
                                                >
                                                    <h4 className={`text-[20px] md:text-[24px] font-[400] mb-3 ${
                                                        currentTheme === 'dark' ? 'text-white' : 'text-[#070707]'
                                                    }`}>
                                                        {item.name}
                                                    </h4>
                                                    <p className={`text-[16px] md:text-[18px] font-[400] ${
                                                        currentTheme === 'dark' ? 'text-[#A5A5AB]' : 'text-[#4A4C56]'
                                                    }`}>
                                                        {item.description}
                                                    </p>
                                                </div>
                                            ))}
                                    </AnimatedList>
                                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background" />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="w-full lg:w-6/12">
                        <Image
                            width={1000}
                            height={1000}
                            src={currentTheme === 'dark' ? darkImage : lightImage}
                            alt="What We Do Best"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
