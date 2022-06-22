import React from 'react'
import Title from './Title'
import { ParallaxBanner } from 'react-scroll-parallax'

interface Props {
    title?: string
    bg?: string
    children: React.ReactNode
}

const Section: React.FC<Props> = ({ children, title, bg }) => {
    return (
        <ParallaxBanner
            layers={[{ image: bg, speed: -15 }]}
            disabled={!bg}
        >
            <div className="py-16 md:py-24">
                {title ? <Title title={title} isLight={!!bg} /> : ''}

                <div className="relative">
                    {children}
                </div>
            </div>
        </ParallaxBanner>
    )
}

export default Section