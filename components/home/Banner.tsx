"use client"

import { useTheme } from "next-themes";
import React from "react";
import Image from "next/image";
import darklogo from "@/public/images/logo/circledark.png";
import lightlogo from "@/public/images/logo/circlewhite.png";
import BookCallModal from "../reusable/BookCallModal";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { LineShadowText } from "@/components/magicui/line-shadow-text";
import { Particles } from "@/components/magicui/particles";

export default function Banner() {
    const { theme, systemTheme } = useTheme()
    const currentTheme = theme === 'system' ? systemTheme : theme
    const [mounted, setMounted] = React.useState(false)
    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }
    return (
        <div className="main-container relative">

            {/* Replace Meteors with Particles */}
            <div className="absolute inset-0 h-screen" style={{ maxWidth: '100vw', overflow: 'hidden' }}>
                <Particles
                    className="absolute inset-0"
                    quantity={50}
                    color={currentTheme === 'dark' ? '#ffffff' : '#000000'}
                    size={1}
                />
            </div>

            {/* Add gradient border using pseudo-element */}
            <div className="absolute left-0 top-0 w-[1px] h-full bg-gradient-to-t from-border/70 to-border/20"></div>
            <div className="absolute right-0 top-0 w-[1px] h-full bg-gradient-to-t from-border/70 to-border/20"></div>
            <div className="container px-4 xl:px-0 ">
                {/* Banner section content */}
                <div className="h-[calc(100vh-70px)] flex flex-col justify-center items-center text-center">
                    {/* button */}
                    <ShimmerButton className="shadow-2xl animate-in fade-in slide-in-from-top-8 duration-1000">
                        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                            New Generation
                        </span>
                    </ShimmerButton>

                    {/* title */}
                    <h1 className="mt-6 animate-in fade-in slide-in-from-top-8 duration-1000 text-balance text-5xl font-semibold leading-none tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
                        Powering the Future of{' '}
                        <LineShadowText
                            className="italic text-[#6D6D6D] dark:text-[#C9C9C9]"
                            shadowColor={currentTheme === 'dark' ? 'white' : 'black'}
                        >
                            Digital
                        </LineShadowText>
                        <br />
                        <LineShadowText
                            className="italic whitespace-nowrap text-[#6D6D6D] dark:text-[#C9C9C9]"
                            shadowColor={currentTheme === 'dark' ? 'white' : 'black'}
                        >
                            {"Automation & Marketing"}
                        </LineShadowText>
                    </h1>

                    <p className={`mt-6 text-lg ${currentTheme === 'dark' ? 'text-[#F9EEEE]/70' : 'text-[#4A4C56]'} animate-in fade-in slide-in-from-top-8 duration-1000 `}>
                        Your all-in-one platform for AI-driven tools, experimental MVPs,<br />
                        and next-gen digital marketing services
                    </p>

                    <div className="mt-8 flex z-10 flex-col md:flex-row gap-4 animate-in fade-in slide-in-from-top-8 duration-1000 ">
                        <BookCallModal className={`px-6 py-2.5 rounded-md cursor-pointer transform duration-300 ${currentTheme === 'dark' ? 'bg-[#FFF] px-6 py-3 text-[#070707] hover:bg-primary/90' : 'bg-[linear-gradient(304deg,#070707_10.21%,#6D6D6D_90.45%)] text-white px-6 py-3 hover:opacity-90'}`} eventSlug="obaro-industries" title="Book a Marketing Consultation" calUsername="obaro-industries" />

                        <button className={`rounded-md cursor-pointer transform duration-300 ${currentTheme === 'dark' ? 'bg-[#303030] px-6 py-2.5 hover:bg-accent' : 'bg-[#FAFAFA] border border-border px-6 py-2.5 hover:bg-accent'}`}>
                            Explore Our Tools
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Border with Gap - Similar to Navbar */}
            <div className="absolute bottom-0 w-full hidden lg:flex justify-between">
                <div className="absolute border bottom-0 left-0 2xl:-left-1 w-[9px] h-[100px] bg-border bg-gradient-to-b from-transparent via-border to-transparent -translate-y-[10px] rounded-[1px]"></div>

                <div className="absolute border bottom-0 right-0 2xl:-right-1 w-[9px] h-[100px] bg-border bg-gradient-to-b from-transparent via-border to-transparent -translate-y-[10px] rounded-[1px]"></div>
            </div>

            {/* Circular Logo */}
            <div className="absolute hidden sm:block bottom-5 lg:bottom-16 right-10 lg:right-24">
                <div className="relative w-32 h-32 group">
                    {/* Rotating text */}
                    <div className="absolute inset-0 animate-spin-slow hover:pause">
                        <svg className="w-full h-full" viewBox="0 0 100 100">
                            <defs>
                                <path id="textPath" d="M 50,50 m -40,0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" fill="none" />
                            </defs>
                            <text className={`text-[8px] tracking-[0.25em] ${currentTheme === 'dark' ? 'fill-[#A9A9A9]' : 'fill-[#1a1a1a]'}`}>
                                <textPath href="#textPath" startOffset="0%">
                                    Smart Marketing • One Ecosystem • AI Tools •
                                </textPath>
                            </text>
                        </svg>
                    </div>

                    {/* Center logo with background */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className={`w-16 h-16 rounded-full border border-border/10 flex items-center justify-center ${currentTheme === 'dark'
                            ? 'bg-gradient-to-r from-gray-800 to-gray-900'
                            : 'bg-gray-300'
                            }`}>
                            <Image
                                src={currentTheme === 'dark' ? lightlogo : darklogo}
                                alt="Logo"
                                width={40}
                                height={40}
                                className="w-10 h-10 object-contain"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
