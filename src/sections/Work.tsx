import React from 'react'
import Section from '../components/Section/Section'
import bgImage from '../assets/img/backgrounds/tetris.png'
import skyImage from '../assets/img/backgrounds/sky.png'
import photo from '../assets/img/me-2.jpg'
import { Parallax } from 'react-scroll-parallax'
import screenIsMobile from '../modules/screenIsMobile'
import calculateExperience from '../modules/calculateExperience'

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
                                <img src={photo}
                                    alt="Olexiy Chornenkyi"
                                    className="max-w-xs rounded-2xl shadow-hero"
                                />
                            </Parallax>
                        </div>
                        <div className="text-white text-md md:text-lg leading-7 md:!leading-8 drop-shadow-lg bg-black/20 p-6 rounded-2xl">
                            Before Syject came into my life, I worked on a freelance platform. Even though I had already written
                            full-fledged projects, I didn't like a lot of this type of work. I've decided to go to work in the
                            office.
                            <br /><br />
                            Syject has become my second home, I always come to work in a good mood and excitement to spend time with
                            my team. A warm welcome, conversations under a hookah, competitions in video-games are always pleased
                            and leave only good emotions.
                            <br /><br />
                            I have been working in Syject for <b>{calculateExperience('2021-06-29')} years</b> year, and it's a great experience with a variety of projects for both
                            smartphones and watches. We also have our own list of apps, which we're replenishing every month.
                            I like the way I develop and grow with the team.
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    )
}

export default Work