import React from 'react'
import Section from '@/components/Section/Section'
import WorkTitle from '@/components/MyWork/WorkTitle'
import bgImage from '@/assets/img/backgrounds/tetris.webp'
import skyImage from '@/assets/img/backgrounds/sky.webp'
import photo from '@/assets/img/me-2.jpg'
import screenIsMobile from '@/modules/screenIsMobile'
import { Parallax } from 'react-scroll-parallax'

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
                                <img
                                    data-src={photo}
                                    alt="Olexiy Chornenkyi"
                                    width="320"
                                    height="370"
                                    className="rounded-2xl shadow-hero w-auto max-w-[400px]"
                                />
                            </Parallax>
                        </div>
                        <div className="text-white text-md md:text-lg leading-7 md:!leading-8 drop-shadow-lg bg-black/40 p-6 rounded-2xl w-full space-y-3">
                            <WorkTitle header="1. Beginning of programming">
                                The beginning of my programming started at the end of 2019. Since I was working at a hard job (where you have to work physically) and in poor conditions, it encouraged me to change my line of work. At that time, my brother Sergey was a fullstack developer and he suggested me to try my hand at development.
                                <br /><br />
                                Among all the programming languages, I settled on Java. Why Java? Most likely, because it was one of the most popular programming languages and after learning Java many other OOP languages become clear. Having started learning the language by watching tutorial videos, I started trying to write desktop applications like calculator, Saper game and similar. During this study, I learned that Java can be used to write mobile applications for Android devices, which I was very interested in.
                                <br /><br />
                                Smartphones occupy a huge time of our lives, now without it is very difficult. And so I decided that I need to write applications on Android, you need to try to learn! According to the video lessons I wrote a few applications something like notes, where I worked with the database and basic features of Android Jetpack, as well as with AsyncTask.
                            </WorkTitle>

                            <WorkTitle header="2. First Android application (JAVA).">
                                It's been a year since I started learning programming (it's fall 2020) and finally decided to write a full-fledged project, but I needed an idea: "What kind of app should I write?".
                                <br /><br />
                                At this time I worked for a company for the production and sale of aquarium fish and equipment, where I was directly involved in the breeding of fish. I offered the managers my idea of writing an application in which users can conveniently in a couple of clicks to fill the cart and place an order.
                                <br /><br />
                                Of course, the application would be difficult to exist on its own, without a backend and admin panel with which managers could control the availability of goods and add images. For these tasks I connected my brother, he liked the idea. We agreed on the sums and started to create this project combining our main job (fish farming) and writing code in our free time.
                                <br /><br />
                                It was a great experience, for the first application that serves Aqua-M until now.
                            </WorkTitle>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    )
}

export default Work