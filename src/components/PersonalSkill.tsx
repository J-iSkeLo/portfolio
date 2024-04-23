import type { PersonalSkill as PersonalSkillType } from '@/types/types'
import React from 'react'
import { useParallax } from 'react-scroll-parallax'

type Props = {
    skill: PersonalSkillType
}

const PersonalSkill: React.FC<Props> = ({ skill }) => {
    const { ref } = useParallax<HTMLImageElement>({ rotateY: [0, 480] })

    return (
        <div className="min-h-[90px] px-5 pb-3 text-center" key={skill.title}>
            <img data-src={skill.img}
                alt={skill.title}
                width="90"
                height="90"
                className="mx-auto drop-shadow-lg"
                ref={ref}
            />

            <h3 className="my-6 text-xl font-bold text-center uppercase drop-shadow-md">
                {skill.title}
            </h3>

            <p className="text-gray-500 leading-7 drop-shadow-md">
                {skill.intro}
            </p>
        </div>
    )
}

export default PersonalSkill