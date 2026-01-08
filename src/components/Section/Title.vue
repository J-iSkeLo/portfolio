<script setup lang="ts">
import decor from '@/assets/img/decor.png'
import decorWhite from '@/assets/img/decor-white.png'

defineProps<{
    title: string
    isLight: boolean
}>()
</script>

<template>
    <h3 :class="[
        'text-center text-3xl md:text-4xl uppercase font-bold drop-shadow-md',
        isLight ? 'text-white' : ''
    ]">
        {{ title }}
    </h3>

    <img
        :src="isLight ? decorWhite : decor"
        alt="Decoration"
        width="70"
        height="9"
        class="text-center mx-auto mt-6 mb-10 md:mb-14 relative"
    />
</template>
