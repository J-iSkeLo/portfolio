import React from 'react'
import Section from '../components/Section/Section'
import bgImage from '../assets/img/backgrounds/skill.jpeg'

const importAll = (r: any) => r.keys().map(r)
// @ts-ignore
const images = importAll(require.context('../assets/img/skills', false, /\.png$/))

const Skills: React.FC = () => {
    return (
        <div>
            <Section title="My skills" bg={bgImage}>
                <div className="grid grid-cols-4 gap-8">
                    {images.map((img: string) => {
                        return (
                            <div key={img}>
                                <img src={img} alt="technology" />
                            </div>
                        )
                    })}
                </div>
            </Section>
        </div>
    )
}

export default Skills