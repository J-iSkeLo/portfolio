<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import Navbar from '@/components/Navbar.vue'
import Social from '@/components/Social.vue'
import LetterIcon from '@/assets/img/icons/letter.webp'
import EmailIcon from '@/assets/img/icons/email.webp'

type Props = {
    minimize: boolean
}

const props = defineProps<Props>()

const isHomePage = ref<boolean>(!props.minimize)
const showHeader = ref<boolean>(false)

function minimizeHero(): void {
    isHomePage.value = window.scrollY < 400
}

onMounted(() => {
    minimizeHero()
    window.addEventListener('scroll', minimizeHero)
    setTimeout(() => showHeader.value = true, 100)
})

onUnmounted(() => {
    window.removeEventListener('scroll', minimizeHero)
})
</script>

<template>
    <header
        class="bg-hero bg-cover relative z-10 shadow-hero text-white overflow-hidden transition-opacity duration-500"
        :class="showHeader ? 'opacity-100': 'opacity-0'"
    >
        <div class="main-gradient absolute left-0 right-0 top-0 bottom-0 opacity-70"></div>

        <Navbar
            class="fixed inset-x-0 z-20 transition-colors duration-500"
            :class="!isHomePage || minimize ? 'main-gradient shadow-lg' : ''"
        />

        <div v-if="!minimize" class="py-52 md:py-55 relative z-10 text-center">
            <h1 class="text-3xl md:text-3xl lg:text-5xl font-bold drop-shadow-hero">
                OLEXIY CHORNENKYI
            </h1>

            <h2
                :class="[
                    'space-x-2 uppercase text-sm md:text-lg lg:text-xl',
                    'drop-shadow-hero relative inline-block',
                ]"
            >
                <!-- Line before title -->
                <div
                    :class="[
                        'h-0.5 absolute w-10 lg:w-24 bg-white shadow-lines',
                        'top-1/2 rounded-full -transform-y-1/2',
                        'right-[calc(100%+5px)]',
                    ]"
                ></div>

                <!-- Line after title -->
                <div
                    :class="[
                        'h-0.5 absolute w-10 lg:w-24 bg-white shadow-lines',
                        'top-1/2 -transform-y-1/2 rounded-full left-[calc(100%+5px)]',
                    ]"
                ></div>

                <span>Native</span>
                <span class="text-[1.2em]">Android</span>
                <span>Developer</span>
            </h2>

            <!-- Main big button -->
            <div class="mt-4 lg:mt-8">
                <h3 class="text-lg mb-2 drop-shadow-hero tracking-wide">HAVE A PROJECT?</h3>

                <div class="group inline-block relative mx-auto">
                    <a
                        href="mailto:jiskelo@gmail.com"
                        rel="noreferrer"
                        target="_blank"
                        :class="[
                            'relative min-w-75 z-10 inline-block text-md',
                            'lg:text-lg text-white bg-main-btn animate-shine',
                            'bg-size-[600%] shadow-hero hover:shadow-hero-hover',
                            'uppercase py-3 lg:py-3 px-7 lg:px-7 rounded-full',
                            'transition-shadow duration-500 tracking-wider',
                        ]"
                    >
                        <span class="drop-shadow-[0_0_6px_black]"> Email me </span>
                    </a>

                    <div
                        :class="[
                            'absolute bottom-1 opacity-0 group-hover:opacity-100',
                            'group-hover:-bottom-5 left-4 group-hover:-left-7',
                            'transition-all duration-700',
                        ]"
                    >
                        <img
                            :src="EmailIcon"
                            alt="Email icon"
                            width="40"
                            height="40"
                            class="drop-shadow-md"
                        />
                    </div>

                    <div
                        :class="[
                            'absolute top-1 opacity-0 group-hover:opacity-100',
                            'group-hover:-top-3 right-4 group-hover:-right-7',
                            'transition-all duration-700 delay-200',
                        ]"
                    >
                        <img
                            :src="LetterIcon"
                            alt="Letter icon"
                            width="40"
                            height="40"
                            class="drop-shadow-md"
                        />
                    </div>
                </div>
            </div>
        </div>

        <div v-if="!minimize" class="flex justify-end mb-14">
            <Social />
        </div>
    </header>

    <!-- Adding space to top -->
    <div class="pt-10"></div>
</template>
