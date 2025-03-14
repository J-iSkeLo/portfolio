import React from 'react'
import Section from '@/components/Section/Section'
import profilePhoto from '@/assets/img/me.webp'
import calculateAge from '@/modules/calculateAge'
import { Parallax } from 'react-scroll-parallax'
import screenIsMobile from '@/modules/screenIsMobile'
import calculateExperience from '@/modules/calculateExperience'

const About: React.FC = () => {
    const sectionItems = [
        [
            { label: 'Name', value: 'Olexiy Y. Chornenkiy' },
            { label: 'Age', value: calculateAge() },
        ],
        [
            { label: 'Job title', value: 'Android developer' },
            { label: 'Location', value: '🇺🇦 Ukraine, Kharkiv' },
        ],
    ]

    return (
        <div className="container" id="about">
            <Section title="About me">
                <div className="grid gap-12 grid-cols-1 md:grid-cols-[auto_1fr] relative">
                    <div>
                        <Parallax
                            disabled={screenIsMobile()}
                            speed={-10}
                            translateY={[-5, 10]}
                        >
                            <img
                                data-src={profilePhoto}
                                alt="Olexiy Chornenkyi"
                                width="332"
                                height="450"
                                className="shadow-hero rounded-3xl max-w-full mx-auto"
                            />
                        </Parallax>
                    </div>
                    <div className="text-lg md:text-xl lg:!leading-9 text-gray-600">
                        Analytical and detail oriented Android app developer,
                        professional with stellar communication skills. Adapted at
                        bringing all team members together to reach a common goal on
                        time and under budget.
                        <br />
                        <br />
                        Android developer with{' '}
                        <b>{calculateExperience('2020-09-01')} years</b> of
                        experience in Android Environment. I have an experience of
                        building android application utilizing different Architecture
                        approaches. Conceptualizing app solutions with the latest
                        technology, design theory, and a large dose of creativity.
                        <br />
                        <br />
                        I'm fully committed to work on fast, optimized and easily
                        functional apps to make each client satisfied with the end
                        product. I am constantly working on myself as a developer and
                        a team member to stay knowledgeable and professional.
                        <div className="flex flex-col md:flex-row w-full pl-[20px] pr-[20px] rounded-md border border-dashed border-gray-300 mt-8">
                            {sectionItems.map((sect, index) => {
                                return (
                                    <section
                                        key={index}
                                        className="md:mr-[30px] md:pr-[30px] md:border-r border-r-dashed border-gray-300 last:border-none py-[20px] flex-1"
                                    >
                                        {sect.map((item, i) => {
                                            return (
                                                <div
                                                    key={i}
                                                    className="text-[.8em] flex justify-between relative mb-2 last:mb-0"
                                                >
                                                    <h4 className="uppercase pr-4 bg-white">
                                                        {item.label}
                                                    </h4>
                                                    <b className="block absolute left-1 right-1 top-1/2 border-b border-dashed border-b-gray-300 -z-10"></b>
                                                    <h4 className="bg-white pl-4 font-bold text-gray-500">
                                                        {item.value}
                                                    </h4>
                                                </div>
                                            )
                                        })}
                                    </section>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    )
}

export default About
