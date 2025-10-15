import React from 'react'
import Title from '@/components/Section/Title'
import { BannerLayer, ParallaxBanner } from 'react-scroll-parallax'

interface Props {
    title?: string
    layers?: BannerLayer[]
    children: React.ReactNode
    cover?: string
}

const Section: React.FC<Props> = ({ children, title, cover, layers }) => {
    return (
        <ParallaxBanner layers={layers} disabled={!layers} className="relative">
            {layers ? (
                <div className="bg-gradient bg-gradient-to-r from-secondary via-main to-secondary absolute left-0 right-0 top-0 bottom-0 opacity-80"></div>
            ) : (
                ''
            )}
            {cover ? (
                <div
                    className={
                        cover + ` absolute left-0 right-0 top-0 bottom-0 opacity-80`
                    }
                ></div>
            ) : (
                ''
            )}

            <div className="py-16 md:py-20">
                {title ? <Title title={title} isLight={!!layers} /> : ''}

                <div className="relative">{children}</div>
            </div>
        </ParallaxBanner>
    )
}

export default Section
