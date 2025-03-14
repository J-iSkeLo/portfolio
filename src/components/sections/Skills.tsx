import React from 'react'
import Section from '@/components/Section/Section'
import bgImage from '@/assets/img/backgrounds/skill.webp'

const images = [
    require('@/assets/img/skills/1.webp'),
    require('@/assets/img/skills/2.webp'),
    require('@/assets/img/skills/3.webp'),
    require('@/assets/img/skills/4.webp'),
    require('@/assets/img/skills/5.webp'),
    require('@/assets/img/skills/6.webp'),
    require('@/assets/img/skills/7.webp'),
    require('@/assets/img/skills/8.webp'),
    require('@/assets/img/skills/9.webp'),
    require('@/assets/img/skills/10.webp'),
    require('@/assets/img/skills/11.webp'),
    require('@/assets/img/skills/12.webp'),
]

const Skills: React.FC = () => {
    return (
        <div id="skills" className="min-h-[800px]">
            <Section title="Skills" layers={[{ image: bgImage, speed: -20 }]}>
                <div className="container">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {images.map((img: string) => {
                            return (
                                <div key={img}>
                                    <img
                                        data-src={img}
                                        width="284"
                                        height="122"
                                        alt="technology"
                                        className="shadow-lg rounded-2xl"
                                    />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </Section>
        </div>
    )
}

export default Skills
