import React from 'react'
import Section from '../components/Section/Section'
import { Parallax } from 'react-scroll-parallax'
import screenIsMobile from '../modules/screenIsMobile'
import personalSkills from '../modules/personalSkills'

const Personal: React.FC = () => {
    return (
        <div className="px-7">
            <Section title="Personal skills">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {personalSkills.map(skill => {
                            return (
                                <div className="px-5 pb-3 text-center" key={skill.title}>
                                    <Parallax disabled={screenIsMobile()} speed={5}>
                                        <img src={skill.img}
                                            alt={skill.title}
                                            className="mx-auto drop-shadow-lg"
                                        />

                                        <h3 className="my-6 text-xl font-bold text-center uppercase drop-shadow-md">
                                            {skill.title}
                                        </h3>

                                        <p className="text-gray-500 leading-7 drop-shadow-md">
                                            {skill.intro}
                                        </p>
                                    </Parallax>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </Section>
        </div>
    )
}

export default Personal