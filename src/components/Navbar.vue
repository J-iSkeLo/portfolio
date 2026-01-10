<script setup lang="ts">
import { ref, onMounted, onUnmounted, watchEffect } from 'vue'
import { navbarLinks } from '@/modules/navbarLinks'
import { useNavbar } from '@/composables/useNavbar'

const commonHamburgerStyles = 'bg-white h-[3px] w-6 rounded-full transition-transform duration-500'

const props = defineProps<{ isHome: boolean }>()

const { isOpen, toggleNavbar } = useNavbar()

const minimize = ref<boolean>(false)
const showBackground = ref<boolean>(false)

function updateNavbar(): void {
    minimize.value = window.scrollY > 400
    showBackground.value = window.scrollY > 300 || isOpen.value || !props.isHome
}

onMounted(() => {
    updateNavbar()
    window.addEventListener('scroll', updateNavbar)
})

onUnmounted(() => {
    window.removeEventListener('scroll', updateNavbar)
})

watchEffect(() => {
    showBackground.value = isOpen.value
})
</script>

<template>
    <nav
        class="fixed inset-x-0 z-20 transition-all! duration-500"
        :class="{
            'py-3': minimize,
            'py-6': !minimize,
            'bg-main': showBackground,
        }"
    >
        <div class="container">
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
                    <li v-for="link in navbarLinks" :key="link.title">
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
