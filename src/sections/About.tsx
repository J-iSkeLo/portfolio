import React from 'react'
import Section from '../components/Section/Section'
import photo from '../assets/img/me.png'

const About: React.FC = () => {
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
                    </div>
                </div>
            </Section>
        </div>
    )
}

export default About