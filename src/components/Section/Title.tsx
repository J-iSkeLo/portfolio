import React from 'react'
import decor from '../../assets/img/decor.png'

interface Props {
    title: string
}

const Title: React.FC<Props> = ({ title }) => {
    return <>
        <h3 className="text-center text-4xl uppercase font-bold">
            {title}
        </h3>

        <img src={decor}
            alt="Decoration"
            className="text-center mx-auto mt-4 mb-20"
        />
    </>
}

export default Title