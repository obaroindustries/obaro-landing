'use client'
import React from 'react'
import { useTheme } from 'next-themes'
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid"
import { ChatBubbleIcon, SpeakerLoudIcon, PersonIcon } from "@radix-ui/react-icons"
import { OrbitingCircles } from "@/components/magicui/orbiting-circles"
import AOS from 'aos'

const services = [
    {
        Icon: ChatBubbleIcon,
        name: "Social Media Management",
        description: "Build and grow loyal audiences across all key platforms.",
        href: "/",
        cta: "Learn more",
        className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
        nameClassName: "!text-2xl",
        background: null,
    },
    {
        Icon: SpeakerLoudIcon,
        name: "Influencer Campaigns",
        description: "Partner with authentic creators that move the needle.",
        href: "/",
        cta: "Learn more",
        className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
        nameClassName: "!text-2xl",
        background: null,
    },
    {
        Icon: PersonIcon,
        name: "Community Management",
        description: "Engage, support, and grow your online ecosystem.",
        href: "/",
        cta: "Learn more",
        className: "lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-4",
        nameClassName: "!text-2xl",
        background: null,
    },
]

export default function DigitalPresence() {
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
                    {/* Digital Presence left side */}
                    <div className='w-full lg:w-7/12 p-8'>
                        <h3 className={`mb-8 ${currentTheme === 'dark' ? 'text-white' : 'text-[#070707]'}`}>
                            Digital Presence & Engagement
                        </h3>
                        <BentoGrid className="lg:grid-rows-3 lg:grid-cols-2">
                            {services.map((service) => (
                                <BentoCard key={service.name} {...service} />
                            ))}
                        </BentoGrid>
                    </div>

                    {/* Orbiting Circles right side */}
                    <div
                        data-aos="fade-up"
                        data-aos-duration="500"
                        className="w-full lg:w-6/12"
                    >
                        <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
                            <OrbitingCircles iconSize={40}>
                                <Icons.facebook />
                                <Icons.twitter />
                                <Icons.tiktok />
                                <Icons.google />
                                <Icons.instagram />
                            </OrbitingCircles>
                            <OrbitingCircles iconSize={30} radius={100} reverse speed={2}>
                                <Icons.linkedin />
                                <Icons.youtube />
                                <Icons.pinterest />
                                <Icons.snapchat />
                            </OrbitingCircles>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const Icons = {
    facebook: () => (
        <svg
            width="100"
            height="100"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="fill-black dark:fill-white"
        >
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
    ),
    twitter: () => (
        <svg
            width="100"
            height="100"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="fill-black dark:fill-white"
        >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
    ),
    tiktok: () => (
        <svg
            width="100"
            height="100"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="fill-black dark:fill-white"
        >
            <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
        </svg>
    ),
    google: () => (
        <svg
            width="100"
            height="100"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="fill-black dark:fill-white"
        >
            <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
        </svg>
    ),
    instagram: () => (
        <svg
            width="100"
            height="100"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="fill-black dark:fill-white"
        >
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
    ),
    linkedin: () => (
        <svg
            width="100"
            height="100"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="fill-black dark:fill-white"
        >
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
    ),
    youtube: () => (
        <svg
            width="100"
            height="100"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="fill-black dark:fill-white"
        >
            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
        </svg>
    ),
    pinterest: () => (
        <svg
            width="100"
            height="100"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="fill-black dark:fill-white"
        >
            <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
        </svg>
    ),
    snapchat: () => (
        <svg
            width="100"
            height="100"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="fill-black dark:fill-white"
        >
            <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12 1.033-.301.165-.088.344-.104.464-.104.182 0 .359.029.509.09.45.149.734.479.734.838.015.449-.39.839-1.213 1.168-.089.029-.209.075-.344.119-.45.135-1.139.36-1.333.81-.09.224-.061.524.12.868l.015.015c.06.136 1.526 3.475 4.791 4.014.255.044.435.27.42.509 0 .075-.015.149-.045.225-.24.569-1.273.988-3.146 1.271-.059.091-.12.375-.164.57-.029.179-.074.36-.134.553-.076.271-.27.405-.555.405h-.03c-.135 0-.313-.031-.538-.074-.36-.075-.765-.135-1.273-.135-.3 0-.599.015-.913.074-.6.104-1.123.464-1.723.884-.853.599-1.826 1.288-3.294 1.288-.06 0-.119-.015-.18-.015h-.149c-1.468 0-2.427-.675-3.279-1.288-.599-.42-1.107-.779-1.707-.884-.314-.045-.629-.074-.928-.074-.54 0-.958.089-1.272.149-.211.043-.391.074-.54.074-.374 0-.523-.224-.583-.42-.061-.192-.09-.389-.135-.567-.046-.181-.105-.494-.166-.57-1.918-.222-2.95-.642-3.189-1.226-.031-.063-.052-.15-.055-.225-.015-.243.165-.465.42-.509 3.264-.54 4.73-3.879 4.791-4.02l.016-.029c.18-.345.224-.645.119-.869-.195-.434-.884-.658-1.332-.809-.121-.029-.24-.074-.346-.119-1.107-.435-1.257-.93-1.197-1.273.09-.479.674-.793 1.168-.793.146 0 .27.029.383.074.42.194.789.3 1.104.3.234 0 .384-.06.465-.105l-.046-.569c-.098-1.626-.225-3.651.307-4.837C7.392 1.077 10.739.807 11.727.807l.419-.015h.06z" />
        </svg>
    ),
};
