"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
    const { setTheme, theme, systemTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    const currentTheme = theme === 'system' ? systemTheme : theme

    const handleToggle = () => {
        setTheme(currentTheme === 'dark' ? 'light' : 'dark')
        // setTimeout(() => {
        //     window.location.reload()
        // }, 100) 
    }

    return (
        <div
            className={`relative flex h-10 w-[88px] cursor-pointer items-center rounded-full p-1.5 transition-all duration-700 ease-in-out ${
                currentTheme === 'dark'
                    ? 'bg-[#1a1a1a] shadow-[inset_-3px_-3px_6px_rgba(255,255,255,0.1),inset_3px_3px_6px_rgba(0,0,0,0.8)]'
                    : 'bg-[#e6e6e6] shadow-[inset_-3px_-3px_6px_rgba(255,255,255,0.7),inset_3px_3px_6px_rgba(0,0,0,0.2)]'
            }`}
            onClick={handleToggle}
        >
            <div
                data-state={currentTheme}
                className={`absolute h-8 w-8 rounded-full transition-all duration-700 ease-in-out ${
                    currentTheme === 'dark' ? 'translate-x-[46px]' : 'translate-x-0'
                }`}
            >
                <div
                    className={`h-full w-full rounded-full transition-all duration-700 ease-in-out ${
                        currentTheme === 'dark'
                            ? 'bg-[#1a1a1a] border border-[#636363] shadow-[inset_-3px_-3px_6px_rgba(255,255,255,0.1),inset_3px_3px_6px_rgba(0,0,0,0.8)]'
                            : 'bg-[#e6e6e6] border border-[#b6b6b6] shadow-[inset_-3px_-3px_6px_rgba(255,255,255,0.7),inset_3px_3px_6px_rgba(0,0,0,0.2)]'
                    }`}
                >
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Sun className={`absolute h-4 w-4 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
                            currentTheme === 'dark'
                                ? 'rotate-[360deg] scale-0 opacity-0'
                                : 'rotate-0 scale-100 opacity-100'
                        } text-[#1a1a1a]`} />
                        <Moon className={`absolute h-4 w-4 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
                            currentTheme === 'dark'
                                ? 'rotate-0 scale-100 opacity-100'
                                : 'rotate-[-360deg] scale-0 opacity-0'
                        } text-[#A9A9A9]`} />
                    </div>
                </div>
            </div>

            <div className="flex w-full justify-between px-1">
                <Sun className={`h-4 w-4 transition-all duration-500 ease-in-out ${
                    currentTheme === 'dark' ? 'opacity-50' : 'opacity-0'
                } text-[#878787]`} />
                <Moon className={`h-4 w-4 transition-all duration-500 ease-in-out ${
                    currentTheme === 'dark' ? 'opacity-0' : 'opacity-30'
                } text-[#393939]`} />
            </div>
        </div>
    )
}