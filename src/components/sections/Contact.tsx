import React from 'react'
import Section from '@/components/Section/Section'
import Social from '@/components/Social'
import contacts from '@/modules/contactMe'
import { Parallax } from 'react-scroll-parallax'

const Contact: React.FC = () => {
    return (
        <div className="px-7" id="contact">
            <Section title="Contact me">
                <div className="container">
                    <div className="flex flex-col md:flex-row align-center justify-center gap-y-8 gap-x-14">
                        {contacts.map(contact => {
                            return (
                                <a
                                    href={contact.href}
                                    key={contact.title}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-x-3 mx-auto md:mx-0 hover:opacity-75 transition-opacity"
                                >
                                    {contact.icon}
                                    <span className="text-md">{contact.title}</span>
                                </a>
                            )
                        })}
                    </div>

                    <Parallax speed={-10} translateY={[-30, 100]}>
                        <div className="text-center">
                            <div className="bg-gray-600 py-3 px-4 inline-block mx-auto rounded-full shadow-lg mt-10 lg:mt-14">
                                <Social />
                            </div>
                        </div>
                    </Parallax>
                </div>
            </Section>
        </div>
    )
}

export default Contact