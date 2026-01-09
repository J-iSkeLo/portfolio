<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'
import { ref } from 'vue'

const isOpened = ref<boolean>(false)
const commonHamburgerStyles = 'bg-white h-[3px] w-6 rounded-full transition-transform duration-500'

type Link = { title: string; to: RouteLocationRaw }

const links: Link[] = [
    { title: 'About me', to: { name: 'main', query: { section: 'about' } } },
    { title: 'Skills', to: { name: 'main', query: { section: 'skills' } } },
    { title: 'Personal skills', to: { name: 'main', query: { section: 'personal' } } },
    { title: 'Life', to: { name: 'life' } },
    { title: 'Portfolio', to: { name: 'main', query: { section: 'portfolio' } } },
    { title: 'testimonials', to: { name: 'main', query: { section: 'testimonials' } } },
    { title: 'Contact', to: { name: 'main', query: { section: 'contact' } } },
]

function showNavbarHandler(): void {
    isOpened.value = !isOpened.value
}
</script>

<template>
    <nav class="pt-7 lg:pt-12 text-w">
        <div class="flex md:hidden justify-end">
            <button
                type="button"
                data-toggle="collapse"
                class="flex flex-col gap-y-1.5 py-2 px-4 drop-shadow-font"
                @click="showNavbarHandler"
            >
                <div
                    :class="[commonHamburgerStyles, isOpened ? '-rotate-45 translate-y-1' : '']"
                ></div>
                <div
                    :class="[commonHamburgerStyles, isOpened ? 'rotate-45 translate-y-[-5px]' : '']"
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
                    <RouterLink
                        :to="link.to"
                        class="drop-shadow-font hover:drop-shadow-font-hover transition uppercase cursor-pointer"
                    >
                        {{ link.title }}
                    </RouterLink>
                </li>
            </ul>
        </div>
    </nav>
</template>
