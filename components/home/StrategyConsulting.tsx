'use client'
import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import { useTheme } from 'next-themes'
import AOS from 'aos'
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid"
import { LightningBoltIcon, MagnifyingGlassIcon, LayersIcon } from "@radix-ui/react-icons"

// Update services to match BentoGrid format
const services = [
    {
        Icon: LightningBoltIcon,
        name: "Business Strategy Consultation",
        description: "Access deep industry insight and actionable growth strategies.",
        href: "/",
        cta: "Learn more",
        className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
        nameClassName: "!text-2xl",
        background: null,
    },
    {
        Icon: MagnifyingGlassIcon,
        name: "SEO Strategy",
        description: "Dominate rankings and own your niche with SEO expertise.",
        href: "/",
        cta: "Learn more",
        className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
        nameClassName: "!text-2xl",
        background: null,
    },
    {
        Icon: LayersIcon,
        name: "Funnel Development",
        description: "From opt-in to upsell—optimized user journeys that convert.",
        href: "/",
        cta: "Learn more",
        className: "lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-4",
        nameClassName: "!text-2xl",
        background: null,
    },
]

export default function StrategyConsulting() {
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

    if (!mounted) return null

    return (
        <section className="container relative py-10 px-4 2xl:px-0">
            <div
                data-aos="fade-up"
                data-aos-duration="500"
                className={`rounded-3xl ${currentTheme === 'dark'
                    ? 'border border-[#121212] bg-gradient-to-br from-[#070707] via-[#070707] to-[rgba(94,94,94,0.07)]'
                    : 'border border-gray-200 bg-[#F4F4F4] bg-gradient-to-br from-transparent via-[rgba(0,0,0,0.00)] to-[rgba(255,255,255,0.04)]'
                    }`}
            >
                <div className='flex flex-col items-center lg:flex-row gap-2'>
                    {/* Strategy & Consulting left side */}
                    <div className='w-full lg:w-7/12 p-8'>
                        <h3 className={`mb-8 ${currentTheme === 'dark' ? 'text-white' : 'text-[#070707]'}`}>
                            Strategy & Consulting
                        </h3>
                        <BentoGrid className="lg:grid-rows-3 lg:grid-cols-2">
                            {services.map((service) => (
                                <BentoCard key={service.name} {...service} />
                            ))}
                        </BentoGrid>
                    </div>

                    {/* Lottie Animation right side */}
                    <div data-aos="fade-up" data-aos-duration="3000" className="w-full lg:w-6/12">
                        <DotLottieReact
                            src="https://lottie.host/1a3d4334-a088-492a-b017-583bf161fa0c/KIfcNksBOO.lottie"
                            style={{ width: '100%', height: '100%' }}
                            loop
                            autoplay
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
