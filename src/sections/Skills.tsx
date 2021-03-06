import React from 'react'
import Section from '../components/Section/Section'
import bgImage from '../assets/img/backgrounds/skill.webp'

const importAll = (r: any) => r.keys().map(r)
// @ts-ignore
const images = importAll(require.context('../assets/img/skills', false, /\.webp$/))

const Skills: React.FC = () => {
    return (
        <div id="skills" className="min-h-[800px]">
            <Section title="Skills" layers={[{ image: bgImage, speed: -20 }]}>
                <div className="container">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {images.map((img: string) => {
                            return (
                                <div key={img}>
                                    <img data-src={img}
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