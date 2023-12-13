import React from 'react'
import Section from '@/components/Section/Section'
import MyLifeTitle from '@/components/MyLifeTitle'
import bgImage from '@/assets/img/backgrounds/tetris.webp'
import skyImage from '@/assets/img/backgrounds/sky.webp'
import photo from '@/assets/img/me-2.jpg'
import screenIsMobile from '@/modules/screenIsMobile'
import { Parallax } from 'react-scroll-parallax'

const MyLife: React.FC = () => {
    return (
        <div id="life">
            <Section title="My Life"
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
                            <MyLifeTitle header="1. Beginning of programming">
                                The beginning of my programming started at the end of 2019. Since I was working at a hard job (where you have to work physically) and in poor conditions, it encouraged me to change my line of work. At that time, my brother Sergey was a fullstack developer and he suggested me to try my hand at development.
                                <br /><br />
                                Among all the programming languages, I settled on Java. Why Java? Most likely, because it was one of the most popular programming languages and after learning Java many other OOP languages become clear. Having started learning the language by watching tutorial videos, I started trying to write desktop applications like calculator, Saper game and similar. During this study, I learned that Java can be used to write mobile applications for Android devices, which I was very interested in.
                                <br /><br />
                                Smartphones occupy a huge time of our lives, now without it is very difficult. And so I decided that I need to write applications on Android, you need to try to learn! According to the video lessons I wrote a few applications something like notes, where I worked with the database and basic features of Android Jetpack, as well as with AsyncTask.
                            </MyLifeTitle>

                            <MyLifeTitle header="2. First Android application (JAVA).">
                                It's been a year since I started learning programming (it's fall 2020) and finally decided to write a full-fledged project, but I needed an idea: "What kind of app should I write?".
                                <br /><br />
                                At this time I worked for a company for the production and sale of aquarium fish and equipment, where I was directly involved in the breeding of fish. I offered the managers my idea of writing an application in which users can conveniently in a couple of clicks to fill the cart and place an order.
                                <br /><br />
                                Of course, the application would be difficult to exist on its own, without a backend and admin panel with which managers could control the availability of goods and add images. For these tasks I connected my brother, he liked the idea. We agreed on the sums and started to create this project combining our main job (fish farming) and writing code in our free time.
                                <br /><br />
                                It was a great experience, for the first application that serves Aqua-M until now.
                            </MyLifeTitle>

                            <MyLifeTitle header="3. Kotlin and Architecture (MVVM) / Project Manager.">
                                After this experience I realized that I should try myself only as a developer and started working on Freelancehunt. I said goodbye to Aqua-M and just starting to learn Kotlin, which I had already heard about on YouTube, I got a call from my future client with a proposal to write him an application for a pet store ZooZooZoo. As it turned out ZooZooZoo cooperated with Aqua-M. Having asked them who wrote such an application for Aqua-M, they gave my contacts.
                                <br /><br />
                                And so I started to deal with the second application, which also lives in the PlayStore. Backend and web was Sergey. I was dealing with Android application and project management. Since it is easier for the client to communicate with one and the one who understood more than him in the development. Since the beginning of 2021 and until May this year, I was actively engaged in the project until the release.
                            </MyLifeTitle>

                            <MyLifeTitle header="4. The search for self.">
                                Having released the app ZooZooZoo on PlayStore, I wanted to get experience working in a team and try myself in other apps, not only in sales. I started looking for a job in an office where I could come and communicate with like-minded people. And of course development in such walls happens with greater speed. I tried myself at interviews in Nix, Impulse and a couple of other companies, but less famous and in most cases I was cut off after checking my English.
                                <br /><br />
                                His level needed to be conversational, with which I had a problem (now much better, but of course not free). And one of these days I got a call from Dmitry, the head of Syject, with a proposal to come to their office and have an interview. I realized that I don't want to set anyone up and waste my time, I told him about my weak English, and Dmitry replied, "It's not a problem, the main thing is that you should be able to read and write in English" and of course it's not a problem to help translators. I was happy and of course I agreed to the interview in the office. We agreed on the date and time.
                            </MyLifeTitle>

                            <MyLifeTitle header="5. My first company – Syject.">
                                Coming to the office, I saw a small room in which there were 4 people and was very surprised that the team is very small, it is not what I expected, but starting to communicate with Dmitry I learned that this is just a small part of the team with the designer and managers, and the main team on another floor (and the truth team was as I wanted, not big but full-fledged where each took its role but were one team). The interview did not last long, the questions were simple, I coped without problems. Dmitry checked my English level. After that we said goodbye and I had to wait for the result, of course I was not the only candidate. At the end of the week I got a call from Dimitri with a proposal to start working with Syject.
                                <br /><br />
                                Syject became a second home for me, I always came to work in a good mood and enjoyed spending time with the team. Warm welcome, conversations under hookah, video game competitions always made me happy and left only good emotions.
                            </MyLifeTitle>

                            <MyLifeTitle header="6. War — Russia's invasion of Ukraine">
                                On February 24, 2022 a full-scale war against Russia began, we woke up to explosions and the sound of fighter jets overhead. No one could think of work, we hid in the basement and waited for good news until we got the idea to get out to a safer place outside the city. We found someone who was able to get us out early in the morning when the activity of fighting and shelling was least.
                                <br /><br />
                                Once we were in a safe place and most of the team (coworkers) were also able to leave within 10-14 days, we contacted management to find out what we needed and could work further. Dmitry provided those who needed, equipment for remote work. And we continued our cooperation. At the beginning of 2023, in February, it so happened that there were no more Android projects at Syject. By mutual agreement we decided to part ways, I needed development, and Syject didn't need an Android developer yet.
                            </MyLifeTitle>

                            <MyLifeTitle header="7. Finding a job in a war environment">
                                I immediately started repeating the theory and looking for a new company. In the conditions of the war it turned out to be quite difficult, as we (me and my family) were not ready to move to big cities, where it is more dangerous than in the small town where we lived. I received an offer from a company in Kiev, but with a mandatory condition to move. Unfortunately, I had to decline and look further afield. In the meantime, I studied Jetpack Compose, which came in handy in the future.
                            </MyLifeTitle>

                            <MyLifeTitle header="8. Return to Syject">
                                After 3 months, Dmitry approached me again with a request to help me with a project they started writing a month ago. Within two days I fixed the problems, after which I was offered to replace the developer on new terms and continue writing the project on Jetpack Compose, which I could not refuse. After working for a month, the client and the company had problems with the arrangements and the contracts were broken. These are internal company matters, where I do not interfere and do not advise anyone. Once again our paths with Syject diverged.
                            </MyLifeTitle>

                            <MyLifeTitle header="9. Conclusion">
                                I kept looking for a company, and not a week later I got an offer to work in a company from the USA, which had a project "Higher Bond" on Jetpack Compose. The deadline was tight, but I realized my strengths and accepted the offer. From July 2023 until now I have been working for this company and together with the team we maintain and develop the project.
                            </MyLifeTitle>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    )
}

export default MyLife