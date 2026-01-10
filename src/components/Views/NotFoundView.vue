<script setup lang="ts">
import Hero from '@/components/Sections/Hero.vue'
</script>

<template>
    <Hero :is-home="false" />
    <div class="pt-20 container h-screen flex flex-col items-center">
        <h2 class="text-3xl font-bold">404. Not found</h2>
        <h3 class="text-lg mt-2">The page you are looking for is not found</h3>

        <RouterLink
            :to="{ name: 'home' }"
            :class="[
                'bg-secondary text-white px-7 py-2 mt-6 rounded-full',
                'transition-shadow text-lg shadow-md hover:shadow-lg',
            ]"
        >
            Take me home
        </RouterLink>
    </div>
</template>
