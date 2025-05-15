import React from 'react'
import darkImgBg from '@/public/images/weDoBest/Perfor/dark.png'
import lightImgBg from '@/public/images/weDoBest/Perfor/light.png'
import DoBest2ndCard from '@/components/reusable/DoBest2ndCard'


export default function PerformanceMarketing() {
    const services = [
        {
            title: "Performance Marketing",
            description: "Drive traffic and conversions with Facebook, Google, TikTok ads.",
            subItems: [
                {
                    
                    name: "Paid Media Campaigns",
                    description: "Drive traffic and conversions with Facebook, Google, TikTok ads."
                },
                {
                    name: "Email & SMS Marketing",
                    description: "High-performing flows and broadcasts that nurture and convert."
                },
                {
                    name: "Lead Generation Systems",
                    description: "Automated pipelines deliver sales-ready prospects to your inbox."
                }
            ]
        }
    ]
    return (
        <DoBest2ndCard
            services={services}
            darkImage={darkImgBg}
            lightImage={lightImgBg}
        />
    )
}
