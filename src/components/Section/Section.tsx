import React from 'react'
import Title from './Title'

interface Props {
    title?: string
    children: React.ReactNode
}

const Section: React.FC<Props> = ({ children, title }) => {
    return (
        <div className="py-24">
            {title ? <Title title={title} /> : ''}

            <div>
                {children}
            </div>
        </div>
    )
}

export default Section