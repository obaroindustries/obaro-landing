"use client"

import { useTheme } from 'next-themes'
import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
}

export default function Button({ children, className = '', ...props }: ButtonProps) {
    const { theme, systemTheme } = useTheme()
    const currentTheme = theme === 'system' ? systemTheme : theme
    const [mounted, setMounted] = React.useState(false)
    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    const baseStyles = "rounded-md cursor-pointer transform duration-300"
    const themeStyles = currentTheme === 'dark'
        ? 'bg-[#FFF] px-6 py-3 text-[#070707] hover:bg-primary/90'
        : 'bg-[linear-gradient(304deg,#070707_10.21%,#6D6D6D_90.45%)] text-white px-6 py-3 hover:opacity-90'

    return (
        <button
            className={`${baseStyles} ${themeStyles} ${className}`}
            {...props}
        >
            {children}
        </button>
    )
}
