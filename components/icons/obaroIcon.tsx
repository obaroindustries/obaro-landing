"use client"

import { useTheme } from 'next-themes'
import React from 'react'
import whiteImg from '@/public/images/products/iocnWhite.png'
import blackImg from '@/public/images/products/iconDark.png'
import Image from 'next/image'

export default function ObaroIcon() {
    const { theme, systemTheme } = useTheme()
    const currentTheme = theme === 'system' ? systemTheme : theme
    const [mounted, setMounted] = React.useState(false)
    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <>
            <Image src={currentTheme === 'dark' ? whiteImg : blackImg} alt="obaro" width={240} height={240} />
        </>
    )
}

