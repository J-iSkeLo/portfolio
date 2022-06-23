import React from 'react'
import Section from '../components/Section/Section'
import contacts from '../modules/contactMe'

const Contact: React.FC = () => {
    return (
        <div className="px-7">
            <Section title="Contact me">
                <div className="container">
                    <div className="flex flex-col md:flex-row align-center justify-center gap-y-8 gap-x-14">
                        {contacts.map(contact => {
                            return (
                                <a href={contact.href}
                                    key={contact.title}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-x-3 mx-auto md:mx-0"
                                >
                                    {contact.icon}
                                    <span className="text-md">{contact.title}</span>
                                </a>
                            )
                        })}
                    </div>
                </div>
            </Section>
        </div>
    )
}

export default Contact