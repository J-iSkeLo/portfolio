<script setup lang="ts">
import Title from '@/components/Section/Title.vue'

const props = defineProps<{
    title: string
}>()
</script>

<template>
    <section class="[&_p]:text-lg [&_p]:mb-10 [&_p:last-child]:mb-0">
        <Title :title :is-light="true" />
        <slot />
    </section>
</template>
