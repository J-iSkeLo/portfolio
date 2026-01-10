<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'
import { useNavbar } from '@/composables/useNavbar'

const commonHamburgerStyles = 'bg-white h-[3px] w-6 rounded-full transition-transform duration-500'

type Link = { title: string; to: RouteLocationRaw }

const links: Link[] = [
    { title: 'About', to: { name: 'home' } },
    { title: 'Skills', to: { name: 'home', query: { section: 'skills' } } },
    { title: 'Personal skills', to: { name: 'home', query: { section: 'personal' } } },
    { title: 'Life', to: { name: 'life' } },
    { title: 'Portfolio', to: { name: 'home', query: { section: 'portfolio' } } },
    { title: 'testimonials', to: { name: 'home', query: { section: 'testimonials' } } },
    { title: 'Contact', to: { name: 'home', query: { section: 'contact' } } },
]

const { isOpen, toggleNavbar } = useNavbar()
</script>

<template>
    <nav>
        <div class="container py-6">
            <div class="flex lg:hidden justify-end">
                <button
                    type="button"
                    data-toggle="collapse"
                    class="flex flex-col gap-y-1.5 py-2 px-4 drop-shadow-font"
                    @click="toggleNavbar"
                >
                    <div
                        :class="[commonHamburgerStyles, isOpen ? '-rotate-45 translate-y-1' : '']"
                    ></div>
                    <div
                        :class="[commonHamburgerStyles, isOpen ? 'rotate-45 translate-y-[-5px]' : '']"
                    ></div>
                </button>
            </div>

            <div
                :class="[
                    'lg:static lg:h-full overflow-hidden lg:overflow-visible',
                    'border-white/20 transition-all duration-500',
                    isOpen ? 'mt-6 h-[270px] border-t pt-6' : 'h-0',
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
                                ['About', 'Life'].includes(link.title) ? '' : 'border-none',
                            ]"
                        >
                            {{ link.title }}
                        </RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
