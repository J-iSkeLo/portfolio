import React from 'react'
import Section from '@/components/Section/Section'
import personalSkills from '@/modules/personalSkills'
import PersonalSkill from '@/components/PersonalSkill'

const Personal: React.FC = () => {
    return (
        <div className="px-7" id="personal">
            <Section title="Personal skills">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <PersonalSkill skill={personalSkills[0]} />
                        <PersonalSkill skill={personalSkills[1]} />
                        <PersonalSkill skill={personalSkills[2]} />
                    </div>
                </div>
            </Section>
        </div>
    )
}

export default Personal
