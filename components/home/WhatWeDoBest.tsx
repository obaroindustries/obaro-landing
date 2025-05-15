'use client'
import React from 'react'
import StrategyConsulting from './StrategyConsulting'
import PerformanceMarketing from './PerformanceMarketing'
import DigitalPresence from './DigitalPresence'
import { useTheme } from 'next-themes'
import CreativeDevelopment from './CreativeDevelopment'

export default function WhatWeDoBest() {
    const { theme, systemTheme } = useTheme()
    const currentTheme = theme === 'system' ? systemTheme : theme
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null
    return (
        <>
            <div className='container pt-10 px-4 2xl:px-0'>
                <h4 className={`text-[32px] md:text-[48px] font-[700]  text-[#070707] ${currentTheme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    What We Do Best
                </h4>
            </div>
            <StrategyConsulting />
            <PerformanceMarketing />
            <DigitalPresence />
            <CreativeDevelopment />
        </>
    )
}
