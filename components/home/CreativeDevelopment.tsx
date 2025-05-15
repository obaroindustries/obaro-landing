import React from 'react'
import DoBest2ndCard from '../reusable/DoBest2ndCard'
import darkImgBg from '@/public/images/weDoBest/Creative/darkImg.png'
import lightImgBg from '@/public/images/weDoBest/Creative/lightImg.png'

export default function CreativeDevelopment() {
    const services = [
        {
            title: "Creative & Development",
            description: "",
            subItems: [
                {
                    name: "Web Design & Development",
                    description: "Performance-first websites that look good and work flawlessly."
                },
                {
                    name: "Photo / Video Production",
                    description: "Scroll-stopping content tailored to your brand’s story."
                },
                {
                    name: "PR & Brand Awareness",
                    description: "Get featured, build buzz, and stay culturally relevant."
                }
            ]
        }
    ]
    return (
        <div>
            <DoBest2ndCard services={services} darkImage={darkImgBg} lightImage={lightImgBg} />
        </div>
    )
}
