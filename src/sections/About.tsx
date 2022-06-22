import React from 'react'
import Section from '../components/Section/Section'
import photo from '../assets/img/me.png'
import calculateAge from '../modules/calculateAge'

const About: React.FC = () => {
    const sectionItems = [
        [
            { label: 'Name', value: 'Olexiy Y. Chornenkiy' },
            { label: 'Age', value: calculateAge() },
        ],
        [
            { label: 'Job title', value: 'Android developer' },
            { label: 'Location', value: 'Ukraine, Kharkiv' },
        ],
    ]

    return (
        <div className="container">
            <Section title="About me">
                <div className="grid gap-12 grid-cols-1 md:grid-cols-[auto_1fr] relative">
                    <div className="md:sticky top-4">
                        <img src={photo}
                            alt="Olexiy Chornenkyi"
                            className="shadow-hero rounded-3xl max-w-full mx-auto"
                        />
                    </div>
                    <div className="text-lg md:text-xl lg:!leading-9 text-gray-600">
                        Analytical and detail oriented Android app
                        developer professional with stellar communication skills. Adapted at
                        bringing all team members together to reach a common goal on time and under
                        budget.
                        <br /><br />
                        Android developer with vast experience in
                        Android Environment (two and a half years of experience). I have an
                        experience of building android application utilizing different
                        Architecture approaches. Conceptualizing app solutions with the
                        latest technology, design theory, and a large dose of creativity.
                        Committed to viable and easily functional app solutions for clients.
                        I am constantly developing as a developer and knowledgeable in
                        practical usage of new technologies.

                        <div className="flex w-full pl-[20px] pr-[20px] rounded-md border border-dashed border-gray-300 mt-8">
                            {sectionItems.map((sect, index) => {
                                return <section key={index} className="mr-[30px] pr-[30px] border-r border-r-dashed border-gray-300 last:border-none py-[20px] flex-1">
                                    {sect.map((item, i) => {
                                        return <p key={i} className="text-sm flex justify-between relative mb-1">
                                            <h4 className="uppercase pr-4 bg-white">{item.label}</h4>
                                            <b className="block absolute left-1 right-1 top-1/2 border-b border-dashed border-b-gray-300 -z-10"></b>
                                            <h4 className="bg-white pl-4 font-bold text-gray-500">{item.value}</h4>
                                        </p>
                                    })}
                                </section>
                            })}
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    )
}

export default About