import React from 'react'
import Section from '../components/Section/Section'
import adaptability from '../assets/img/personal/adaptability.png'
import communication from '../assets/img/personal/communication.png'
import thinking from '../assets/img/personal/thinking.png'

const Skills: React.FC = () => {
    const sections = [
        {
            img: communication,
            title: 'Communication',
            intro: 'Communication is a vital personal skill that I have developed over time. Know how to simplify complex topics to help people outside of their industry or department understand them. I know how to bring people together and create teams. He is also able to bring all team members together to achieve a common goal on time and within budget.',
        },
        {
            img: thinking,
            title: 'Critical thinking',
            intro: 'I can solve problems independently using creative thinking and make informed decisions using thoughtful analysis. I gather as much information as I can and let intuition, logic, and innovative thinking drive the best solution.',
        },
        {
            img: adaptability,
            title: 'Adaptability',
            intro: 'When I work with others, I may need to adapt my plans to their vision or changing circumstances. For example, if a team member falls ill, I may need to delegate tasks to them or take on more personal responsibility. By compromising, changing priorities, and staying positive as plans change, I try to maintain harmony in the workplace.',
        },
    ]

    return (
        <div className="px-7">
            <Section title="Personal skills">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {sections.map(section => {
                        return (
                            <div className="px-5 py-3 text-center">
                                <img src={section.img}
                                    alt={section.title}
                                    className="mx-auto drop-shadow-lg"
                                />

                                <h3 className="my-4 text-xl font-bold text-center uppercase drop-shadow-md">
                                    {section.title}
                                </h3>

                                <p className="text-gray-500 leading-7">
                                    {section.intro}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </Section>
        </div>
    )
}

export default Skills