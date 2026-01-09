<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'
import { useNavbar } from '@/composables/useNavbar'

const commonHamburgerStyles = 'bg-white h-[3px] w-6 rounded-full transition-transform duration-500'

type Link = { title: string; to: RouteLocationRaw }

const links: Link[] = [
    { title: 'Home', to: { name: 'main' }},
    { title: 'About me', to: { name: 'main', query: { section: 'about' } } },
    { title: 'Skills', to: { name: 'main', query: { section: 'skills' } } },
    { title: 'Personal skills', to: { name: 'main', query: { section: 'personal' } } },
    { title: 'Life', to: { name: 'life' } },
    { title: 'Portfolio', to: { name: 'main', query: { section: 'portfolio' } } },
    { title: 'testimonials', to: { name: 'main', query: { section: 'testimonials' } } },
    { title: 'Contact', to: { name: 'main', query: { section: 'contact' } } },
]

const { isOpened, toggleNavbar } = useNavbar()
</script>

<template>
    <nav class="text-w">
        <div class="flex lg:hidden justify-end">
            <button
                type="button"
                data-toggle="collapse"
                class="flex flex-col gap-y-1.5 py-2 px-4 drop-shadow-font"
                @click="toggleNavbar"
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
                'lg:static lg:h-full overflow-hidden lg:overflow-visible',
                'border-white/20 transition-all duration-500',
                isOpened ? 'mt-6 h-[270px] border-t pt-6' : 'h-0',
            ]"
        >
            <ul :class="[
                'flex flex-col lg:flex-row justify-end space-y-3 lg:space-y-0',
                'lg:space-x-6 uppercase text-md lg:text-sm',
            ]">
                <li v-for="link in links" :key="link.title">
                    <RouterLink
                        exact-active-class="border-white"
                        :to="link.to"
                        :class="[
                            'drop-shadow-font hover:drop-shadow-font-hover',
                            'transition uppercase cursor-pointer border-b-2',
                            'pb-0.5 border-transparent',
                            ['Home', 'Life'].includes(link.title) ? '' : 'border-none',
                        ]"
                    >
                        {{ link.title }}
                    </RouterLink>
                </li>
            </ul>
        </div>
    </nav>
</template>
