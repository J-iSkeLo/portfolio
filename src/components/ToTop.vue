<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const toTopBtn = ref<HTMLButtonElement | null>(null)

const showHideButton = () => {
    if (!toTopBtn.value) {
        return
    }

    if (window.scrollY > 1000) {
        toTopBtn.value.classList.remove('opacity-0')
        toTopBtn.value.classList.remove('pointer-events-none')
        toTopBtn.value.classList.add('opacity-60')
        return
    }

    toTopBtn.value.classList.add('opacity-0')
    toTopBtn.value.classList.add('pointer-events-none')
    toTopBtn.value.classList.remove('opacity-60')
}

const goToTopHandler = () => {
    document.querySelector('body')!.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    })
}

onMounted(() => {
    window.addEventListener('scroll', showHideButton)
})

onUnmounted(() => {
    window.removeEventListener('scroll', showHideButton)
})
</script>

<template>
    <button
        ref="toTopBtn"
        type="button"
        class="fixed bottom-6 right-6 z-20 bg-main p-2 rounded-full shadow-hero opacity-0 transition-all duration-500 hover:scale-110"
        @click="goToTopHandler"
        id="to-top"
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-8 h-8"
            viewBox="0 0 20 20"
            fill="white"
        >
            <path
                fillRule="evenodd"
                d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                clipRule="evenodd"
            />
        </svg>
    </button>
</template>
