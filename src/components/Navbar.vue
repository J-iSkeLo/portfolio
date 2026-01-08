<script setup lang="ts">
import { ref } from 'vue'

const isOpened = ref<boolean>(false)
const commonHamburgerStyles =
    'bg-white h-[3px] w-6 rounded-full transition-transform duration-500'

const links = [
    { title: 'About me', target: '#about' },
    { title: 'Skills', target: '#skills' },
    { title: 'Personal skills', target: '#personal' },
    { title: 'My Life', target: '#life' },
    { title: 'Portfolio', target: '#portfolio' },
    { title: 'testimonials', target: '#testimonials' },
    { title: 'Contact', target: '#contact' },
]

function showNavbarHandler(): void {
    isOpened.value = !isOpened.value
}

function anchorHandler(targetSelector: string): void {
    const targetElem = document.querySelector(targetSelector)

    if (!targetElem) {
        console.error(`Cannot find target selector ${targetSelector} for scrolling`)
        return
    }

    targetElem.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<template>
    <nav class="pt-7 lg:pt-12 text-w">
        <div class="flex md:hidden justify-end">
            <button
                type="button"
                data-toggle="collapse"
                class="flex flex-col gap-y-[6px] py-2 px-4 drop-shadow-font"
                @click="showNavbarHandler"
            >
                <div
                    :class="[
                        commonHamburgerStyles,
                        isOpened ? '-rotate-45 translate-y-[4px]' : '',
                    ]"
                ></div>
                <div
                    :class="[
                        commonHamburgerStyles,
                        isOpened ? 'rotate-45 translate-y-[-5px]' : '',
                    ]"
                ></div>
            </button>
        </div>

        <div
            :class="[
                'md:static md:h-full overflow-hidden lg:overflow-visible border-white/20 transition-all duration-500',
                isOpened ? 'mt-6 h-[270px] border-t pt-6' : 'h-0',
            ]"
        >
            <ul
                class="flex flex-col md:flex-row justify-end space-y-3 md:space-y-0 md:space-x-6 uppercase text-md lg:text-sm"
            >
                <li v-for="link in links" :key="link.title">
                    <button
                        type="button"
                        class="drop-shadow-font hover:drop-shadow-font-hover transition uppercase"
                        @click="anchorHandler(link.target)"
                    >
                        {{ link.title }}
                    </button>
                </li>
            </ul>
        </div>
    </nav>
</template>
