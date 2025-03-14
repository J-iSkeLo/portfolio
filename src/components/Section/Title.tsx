import React from 'react'
import decor from '@/assets/img/decor.png'
import decorWhite from '@/assets/img/decor-white.png'

interface Props {
    title: string
    isLight: boolean
}

const Title: React.FC<Props> = ({ title, isLight }) => {
    return (
        <>
            <h3
                className={
                    (isLight ? 'text-white' : '') +
                    ` text-center text-3xl md:text-4xl uppercase font-bold drop-shadow-md`
                }
            >
                {title}
            </h3>

            <img
                src={isLight ? decorWhite : decor}
                alt="Decoration"
                width="70"
                height="9"
                className="text-center mx-auto mt-6 mb-10 md:mb-14 relative"
            />
        </>
    )
}

export default Title
