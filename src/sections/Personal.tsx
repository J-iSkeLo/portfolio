import React from 'react'
import Section from '@/components/Section/Section'
import { useParallax } from 'react-scroll-parallax'
import personalSkills from '@/modules/personalSkills'

const Personal: React.FC = () => {
    personalSkills[0].parallax = useParallax<HTMLDivElement>({ rotateY: [0, 480] })
    personalSkills[1].parallax = useParallax<HTMLDivElement>({ rotateY: [0, 480] })
    personalSkills[2].parallax = useParallax<HTMLDivElement>({ rotateY: [0, 480] })

    return (
        <div className="px-7" id="personal">
            <Section title="Personal skills">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {personalSkills.map(skill => {
                            return (
                                <div className="min-h-[90px] px-5 pb-3 text-center" key={skill.title}>
                                    <img data-src={skill.img}
                                        alt={skill.title}
                                        width="90"
                                        height="90"
                                        className="mx-auto drop-shadow-lg"
                                        ref={skill.parallax.ref}
                                    />

                                    <h3 className="my-6 text-xl font-bold text-center uppercase drop-shadow-md">
                                        {skill.title}
                                    </h3>

                                    <p className="text-gray-500 leading-7 drop-shadow-md">
                                        {skill.intro}
                                    </p>
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