<script setup lang="ts">
import BlogSection from '@/components/BlogSection.vue';
import photo from '@/assets/img/me-2.jpg'
</script>

<template>
    <div class="container max-w-250">
        <BlogSection title="1. Beginning of programming">
            <div class="flex flex-col sm:flex-row gap-10">
                <div>
                    <img
                        :src="photo"
                        alt="Olexiy Chornenkyi sitting on a chair behind a table with a two monitors and a cup of coffee"
                        class="rounded-2xl shadow-hero w-full min-w-75"
                        width="320"
                        height="370"
                    />
                </div>

                <div>
                    <p>The beginning of my programming started at the end of 2019. Since I was
                    working at a hard job (where you have to work physically) and in poor
                    conditions, it encouraged me to change my line of work. At that time, my
                    brother Sergey was a fullstack developer and he suggested me to try my hand
                        at development.</p>

                    <p>Among all the programming languages, I settled on Java. Why Java? Most
                    likely, because it was one of the most popular programming languages and
                    after learning Java many other OOP languages become clear. Having started
                    learning the language by watching tutorial videos, I started trying to write
                    desktop applications like calculator, Saper game and similar. During this
                    study, I learned that Java can be used to write mobile applications for
                        Android devices, which I was very interested in.</p>

                    <p>Smartphones occupy a huge time of our lives, now without it is very
                    difficult. And so I decided that I need to write applications on Android,
                    you need to try to learn! According to the video lessons I wrote a few
                    applications something like notes, where I worked with the database and
                        basic features of Android Jetpack, as well as with AsyncTask.</p>
                </div>
            </div>
        </BlogSection>

        <BlogSection title="2. First Android application (JAVA)">
            <p>It's been a year since I started learning programming (it's fall 2020) and
            finally decided to write a full-fledged project, but I needed an idea: "What
                kind of app should I write?".</p>

            <p>At this time I worked for a company for the production and sale of aquarium
            fish and equipment, where I was directly involved in the breeding of fish. I
            offered the managers my idea of writing an application in which users can
                conveniently in a couple of clicks to fill the cart and place an order.</p>

            <p>Of course, the application would be difficult to exist on its own, without a
            backend and admin panel with which managers could control the availability
            of goods and add images. For these tasks I connected my brother, he liked
            the idea. We agreed on the sums and started to create this project combining
                our main job (fish farming) and writing code in our free time.</p>

            <p>It was a great experience, for the first application that serves Aqua-M
                until now.</p>
        </BlogSection>

        <BlogSection title="3. Kotlin and Architecture (MVVM) / Project Manager">
            <p>After this experience I realized that I should try myself only as a
            developer and started working on Freelancehunt. I said goodbye to Aqua-M and
            just starting to learn Kotlin, which I had already heard about on YouTube, I
            got a call from my future client with a proposal to write him an application
            for a pet store ZooZooZoo. As it turned out ZooZooZoo cooperated with
            Aqua-M. Having asked them who wrote such an application for Aqua-M, they
                gave my contacts.</p>

            <p>And so I started to deal with the second application, which also lives in
            the PlayStore. Backend and web was Sergey. I was dealing with Android
            application and project management. Since it is easier for the client to
            communicate with one and the one who understood more than him in the
            development. Since the beginning of 2021 and until May this year, I was
                actively engaged in the project until the release.</p>
        </BlogSection>

        <BlogSection title="4. The search for self">
            <p>Having released the app ZooZooZoo on PlayStore, I wanted to get experience
            working in a team and try myself in other apps, not only in sales. I started
            looking for a job in an office where I could come and communicate with
            like-minded people. And of course development in such walls happens with
            greater speed. I tried myself at interviews in Nix, Impulse and a couple of
            other companies, but less famous and in most cases I was cut off after
                checking my English.</p>

            <p>His level needed to be conversational, with which I had a problem (now much
            better, but of course not free). And one of these days I got a call from
            Dmitry, the head of Syject, with a proposal to come to their office and have
            an interview. I realized that I don't want to set anyone up and waste my
            time, I told him about my weak English, and Dmitry replied, "It's not a
            problem, the main thing is that you should be able to read and write in
            English" and of course it's not a problem to help translators. I was happy
            and of course I agreed to the interview in the office. We agreed on the date
            and time.</p>
        </BlogSection>

        <BlogSection title="5. My first company – Syject" :is-light="true">
            <p>Coming to the office, I saw a small room in which there were 4 people and
            was very surprised that the team is very small, it is not what I expected,
            but starting to communicate with Dmitry I learned that this is just a small
            part of the team with the designer and managers, and the main team on
            another floor (and the truth team was as I wanted, not big but full-fledged
            where each took its role but were one team). The interview did not last
            long, the questions were simple, I coped without problems. Dmitry checked my
            English level. After that we said goodbye and I had to wait for the result,
            of course I was not the only candidate. At the end of the week I got a call
            from Dimitri with a proposal to start working with Syject.</p>

            <p>Syject became a second home for me, I always came to work in a good mood and
            enjoyed spending time with the team. Warm welcome, conversations under
            hookah, video game competitions always made me happy and left only good
                emotions.</p>
        </BlogSection>

        <BlogSection title="6. War in Ukraine" :is-light="true">
            <p>On February 24, 2022 the war began, we woke up to explosions and the sound
            of fighter jets overhead. No one could think of work, we hid in the basement
            and waited for good news until we got the idea to get out to a safer place
            outside the city. We found someone who was able to get us out early in the
                morning when the activity of fighting and shelling was least.</p>

            <p>Once we were in a safe place and most of the team (coworkers) were also able
            to leave within 10-14 days, we contacted management to find out what we
            needed and could work further. Dmitry provided those who needed, equipment
            for remote work. And we continued our cooperation. At the beginning of 2023,
            in February, it so happened that there were no more Android projects at
            Syject. By mutual agreement we decided to part ways, I needed development,
                and Syject didn't need an Android developer yet.</p>
        </BlogSection>

        <BlogSection title="7. Finding a job in a war environment">
            <p>I immediately started repeating the theory and looking for a new company. In
            the conditions of the war it turned out to be quite difficult, as we (me and
            my family) were not ready to move to big cities, where it is more dangerous
            than in the small town where we lived. I received an offer from a company in
            Kiev, but with a mandatory condition to move. Unfortunately, I had to
            decline and look further afield. In the meantime, I studied Jetpack Compose,
                which came in handy in the future.</p>
        </BlogSection>

        <BlogSection title="8. Return to Syject">
            <p>After 3 months, Dmitry approached me again with a request to help me with a
            project they started writing a month ago. Within two days I fixed the
            problems, after which I was offered to replace the developer on new terms
            and continue writing the project on Jetpack Compose, which I could not
            refuse. After working for a month, the client and the company had problems
            with the arrangements and the contracts were broken. These are internal
            company matters, where I do not interfere and do not advise anyone. Once
                again our paths with Syject diverged.</p>
        </BlogSection>

        <BlogSection title="9. “Higher Bond” – A Christ-centered dating app">
            <p>I continued to search for a suitable company and, within a week, I received
            an offer of employment from a US-based company working on a "Higher Bond"
            project on Jetpack Compose. The deadline was ambitious, but I recognised the
            benefits I could offer and accepted the offer. "Higher Bond" is a
                Christ-centred dating app based on biblical values.</p>

            <p>From July 2023 to March 2024, I was responsible for the creation of a
            functional native Android app, which was successfully released on Google
            Play. This project provided a welcome opportunity to gain experience with
            Jetpack Compose and related technologies such as Coil, Koin Compose,
            Navigation Compose, Paging Compose and Lottie Compose. Additionally, I
            gained valuable experience with SignalR from Microsoft, as the application
            utilised the hub connection for almost all events. Prior to this, I had
            worked with SignalR in the Arabica project, which facilitated the seamless
            integration of customised hub connections.</p>

            <p>In March 2024, the primary development phase of the application concluded,
            and I completed my assigned tasks.</p>
        </BlogSection>

        <BlogSection title="10. “Hockey Insight” – a collaborative project with Anton Patenko">
            <p>I resumed my search for new employment opportunities while concurrently
            embarking on a joint project entitled "Hockey Insight" with my colleague
            Anton Patenko. Anton is an iOS developer and a keen NHL fan who proposed the
            idea of creating a useful app for tracking the results and schedules of
            users' favourite team's matches.</p>

            <p>Following extensive discussions and meetings, we initiated the search for
            the necessary API and began designing the application in Figma. Following
            the creation of all necessary resources and the identification of a suitable
            API, the development phase was initiated. For the "Hockey Insight" project,
            I decided to use Jetpack Compose along with its "ecosystem". The chosen
            architecture is MVVM + MVI.</p>

            <p>For network requests, I used OkHttp4 and Retrofit2; for dependency
            injection, Koin; for annotation processors, KSP; and for working with image,
            Coil is currently the best option for use with Jetpack Compose. Navigation
            is written with Compose Navigation. For writing asynchronous tasks, I used
            Coroutines along with all the features of this asynchronous wonder. The
            project was completed within a 2-month timeframe and has been successfully
            published on both the Google Play and App Store platforms.</p>
        </BlogSection>

        <BlogSection title="11. One of Ukraine’s largest">
            <p>After the release of "Hockey Insight" in app stores, I actively began going
            through interviews. On May 28, 2024, I had an interview with a large
            company, "GC Foxtrot." The interview left a good impression, and I was
            confident that I would be a good fit for them. The retail chain Foxtrot is
            one of the largest in Ukraine in terms of the number of stores and the
            volume of electronics and household appliances sales. And already on May 30,
            I received an offer, after which I was registered as an employee over the
            course of 10 days and started working.</p>

            <p>The project is very large, the architecture is mainly MVVM, but the team
            started implementing Jetpack Compose to replace XML, and with it, the MVI
            architecture came along. The project has a huge number of third-party
            libraries, from which I have gradually started to get rid of and use native
            solutions. For dependency injection, Dagger2 was used. Over time, I moved
            from Groovy to Kotlin DSL and from Dagger2 to Koin, as Dagger2 is poorly
            supported and there is and no support KSP on which I switched with Kapt. I
            also removed the remnants of Rx from the project, leaving only coroutines,
            and the project has taken on a new look that is pleasant to work with and
            maintain. At the moment, I am working on the "Foxtrot" project and I want to
            grow together with them. Next will be...</p>
        </BlogSection>
    </div>
</template>
