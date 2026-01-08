<script setup lang="ts">
import Title from '@/components/Section/Title.vue'

defineProps<{
    title?: string
    bgImage?: string
    cover?: string
}>()
</script>

<template>
    <div class="relative">
        <div
            v-if="bgImage"
            class="bg-gradient bg-gradient-to-r from-secondary via-main to-secondary absolute left-0 right-0 top-0 bottom-0 opacity-80"
        ></div>

        <div v-if="cover" :class="[cover, 'absolute left-0 right-0 top-0 bottom-0 opacity-80']"></div>

        <div class="py-16 md:py-20">
            <Title v-if="title" :title="title" :is-light="!!bgImage" />

            <div class="relative">
                <slot />
            </div>
        </div>
    </div>
</template>
