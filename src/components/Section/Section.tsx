import React from 'react'
import Title from './Title'
import { ParallaxBanner } from 'react-scroll-parallax'
import { BannerLayer } from 'react-scroll-parallax/dist/components/ParallaxBanner/types'

interface Props {
    title?: string
    layers?: BannerLayer[]
    children: React.ReactNode
}

const Section: React.FC<Props> = ({ children, title, layers }) => {
    return (
        <ParallaxBanner
            layers={layers}
            disabled={!layers}
            className="relative"
        >
            {layers ? <div className="bg-gradient bg-gradient-to-br from-secondary via-main to-secondary absolute left-0 right-0 top-0 bottom-0 opacity-80"></div> : ''}

            <div className="py-16 md:py-24">
                {title ? <Title title={title} isLight={!!layers} /> : ''}

                <div className="relative">
                    {children}
                </div>
            </div>
        </ParallaxBanner>
    )
}

export default Section