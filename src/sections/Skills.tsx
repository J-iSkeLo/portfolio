import React from 'react'
import Section from '../components/Section/Section'
import bgImage from '../assets/img/backgrounds/skill.jpeg'

const importAll = (r: any) => r.keys().map(r)
// @ts-ignore
const images = importAll(require.context('../assets/img/skills', false, /\.png$/))

const Skills: React.FC = () => {
    return (
        <div>
            <Section title="Skills" layers={[{ image: bgImage, speed: -20 }]}>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-7">
                    {images.map((img: string) => {
                        return (
                            <div key={img}>
                                <img data-src={img} alt="technology" />
                            </div>
                        )
                    })}
                </div>
            </Section>
        </div>
    )
}

export default Skills