'use client'
import React from 'react'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { Play, Pause } from 'lucide-react'
import darklogo from "@/public/images/logo/circledark.png";
import lightlogo from "@/public/images/logo/circlewhite.png";
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

export default function OurMission() {
  const { theme, systemTheme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme
  const [mounted, setMounted] = React.useState(false)
  const [isPlaying, setIsPlaying] = React.useState(true)
  const videoRef = React.useRef<HTMLVideoElement>(null)
  const sectionRef = React.useRef<HTMLElement>(null)

  React.useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    setMounted(true)

    // Initial animation on page load
    gsap.fromTo('.mission-animate', {
      opacity: 0,
      y: 100
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out"
    })

    // Scroll-triggered animations
    const sections = gsap.utils.toArray('.mission-scroll-animate')
    sections.forEach((section: any) => {
      gsap.fromTo(section, {
        opacity: 0,
        y: 100
      }, {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: section,
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

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  if (!mounted) {
    return null
  }

  return (
    <section ref={sectionRef} className='container sm:pt-20 relative px-4 2xl:px-0'>
      {/* Video Player with animation */}
      <div className="mission-animate">
        <div className={`
          w-full h-[400px] sm:h-[650px] 
          rounded-lg overflow-hidden relative group
          ${currentTheme === 'dark'
            ? 'shadow-[0_0_30px_-5px_rgba(255,255,255,0.1)] border border-white/10'
            : 'shadow-[0_0_30px_-5px_rgba(0,0,0,0.1)] border border-black/5'
          }
          transition-all duration-300
          hover:shadow-[0_0_40px_-5px_rgba(255,255,255,0.15)]
          dark:hover:shadow-[0_0_40px_-5px_rgba(255,255,255,0.15)]
          hover:border-opacity-20
        `}>
          <video
            ref={videoRef}
            src={currentTheme === 'dark' ? "/videos/dark.mp4" : "/videos/white.mp4"}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-[1.02]"
          />

          {/* Subtle gradient overlay */}
          <div className={`
            absolute inset-0 
            ${currentTheme === 'dark'
              ? 'bg-gradient-to-t from-black/20 to-transparent'
              : 'bg-gradient-to-t from-black/10 to-transparent'
            }
            group-hover:opacity-100 transition-opacity duration-300
          `} />

          {/* Dark overlay on hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />

          {/* Play/Pause button with improved styling */}
          <button
            onClick={togglePlay}
            className={`
              absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
              ${currentTheme === 'dark'
                ? 'bg-white/20 hover:bg-white/30'
                : 'bg-black/20 hover:bg-black/30'
              }
              backdrop-blur-sm text-white 
              rounded-full p-5 cursor-pointer
              opacity-0 group-hover:opacity-100 transition-all duration-300
              hover:scale-110 active:scale-95
              shadow-lg hover:shadow-xl
            `}
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ?
              <Pause size={28} className="drop-shadow-lg" /> :
              <Play size={28} className="drop-shadow-lg ml-1" />
            }
          </button>

          {/* Video status indicator */}
          <div className="absolute bottom-4 right-4 flex items-center gap-2
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300
                        backdrop-blur-sm bg-black/20 px-3 py-1.5 rounded-full">
            <div className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`} />
            <span className="text-white text-sm font-medium drop-shadow-lg">
              {isPlaying ? 'Playing' : 'Paused'}
            </span>
          </div>
        </div>
      </div>

      {/* Content with animations */}
      <div className='flex flex-col md:flex-row gap-7 md:gap-14 justify-between items-start w-full my-16 px-4 xl:px-0'>
        {/* Logo and Mission Title */}
        <div className='mission-scroll-animate flex justify-center items-center flex-col gap-6 md:w-2/12 w-full min-w-[120px] border-gray-700/20 pr-8'>

          <div className={`w-[72px] h-[72px] rounded-full border border-border/10 flex items-center justify-center shadow-sm ${currentTheme === 'dark'
            ? 'bg-gradient-to-r from-gray-800 to-gray-900'
            : 'bg-gradient-to-r from-gray-100 to-gray-200'
            }`}>
            <Image
              src={currentTheme === 'dark' ? lightlogo : darklogo}
              alt="Logo"
              width={40}
              height={40}
              className="w-8 h-8 object-contain"
              priority
            />
          </div>
          <h3
            className={`text-2xl font-semibold text-center ${currentTheme === 'dark' ? 'text-white' : 'bg-gradient-to-br from-[#070707] via-[#1f1f1f] to-[#6D6D6D] bg-clip-text text-transparent'}`}
          >
            Our <br /> Mission
          </h3>

        </div>

        {/* Divider */}
        <div className="mission-scroll-animate relative h-50 w-[2px] items-center justify-center md:flex hidden">
          {/* Black to white blurred gradient */}
          <div className={`absolute -top-10 left-1/2 -translate-x-1/2 h-full w-[4px]  blur-[3px] opacity-80 ${currentTheme === 'dark' ? 'bg-white bg-gradient-to-b from-black to-white' : 'bg-black bg-gradient-to-b from-white to-black'}`}></div>

          {/* Sharp center line (optional) */}
          <div className={`h-full w-px ${currentTheme === 'dark' ? 'bg-white' : 'bg-gray-300'}`}></div>
        </div>

        {/* Mission Content */}
        <div className='mission-scroll-animate md:w-10/12 w-full'>
          <h4 className={`text-xl md:text-2xl leading-[44px] ${currentTheme === 'dark' ? 'text-white' : 'text-[#4A4C56]'}`}>
            At Obaro Industries, we&apos;re building the digital infrastructure for creators, marketers, and businesses to scale effortlessly. Whether you&apos;re launching a startup, scaling your ecommerce brand, <span className={`${currentTheme === 'dark' ? 'text-[#A5A5AB]' : 'text-[#777980]'}`}>
              or automating your workflow;ßwe help you get there faster with intelligent software and full-funnel marketing services.
            </span>
          </h4>
        </div>
      </div>

      {/* bottom shadow */}
      {/* <div className='absolute hidden sm:block -top-5 left-0 right-0 mx-auto w-[500px] xl:w-[700px] 2xl:w-[730px] z-0 h-[250px]'>
        <Image
          src={shadow}
          alt="Shadow"
          className="h-full w-full"
        />
      </div> */}

    </section>
  )
}