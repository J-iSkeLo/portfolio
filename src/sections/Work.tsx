import React from 'react'
import Section from '@/components/Section/Section'
import bgImage from '@/assets/img/backgrounds/tetris.webp'
import skyImage from '@/assets/img/backgrounds/sky.webp'
import photo from '@/assets/img/me-2.jpg'
import { Parallax } from 'react-scroll-parallax'
import screenIsMobile from '@/modules/screenIsMobile'

const Work: React.FC = () => {
    return (
        <div id="work">
            <Section title="My work"
                layers={[{ image: skyImage, speed: -20 }, { image: bgImage, speed: -5 }]}
            >
                <div className="container">
                    <div className="flex flex-col md:flex-row items-center gap-7">
                        <div>
                            <Parallax disabled={screenIsMobile()} speed={3}>
                                <img data-src={photo}
                                    alt="Olexiy Chornenkyi"
                                    width="320"
                                    height="370"
                                    className="max-w-xs rounded-2xl shadow-hero min-h-[370px]"
                                />
                            </Parallax>
                        </div>
                        <div className="text-white text-md md:text-lg leading-7 md:!leading-8 drop-shadow-lg bg-black/20 p-6 rounded-2xl">
                            Before Syject came into my life, I was working on a freelance platform. Despite the fact
                            that I had already written full-fledged projects, I did not really like this kind of work.
                            I decided to go to work in the office.
                            <br /><br />
                            Syject became my second home, I always came to work in a good mood and excited to spend
                            time with my team. A warm welcome, conversations under hookah, video game competitions
                            were always happy and left only good emotions.
                            <br /><br />
                            I've been working at Syject for almost 2 years and it's been a great experience working
                            on different projects for both smartphones and watches.
                            <br /><br />
                            I am currently actively looking for a new job. I will be grateful for your suggestions.
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    )
}

export default Work