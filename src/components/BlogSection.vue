<script setup lang="ts">
import Title from '@/components/Section/Title.vue'

const props = defineProps<{
    title: string
}>()
</script>

<template>
    <section class="[&>p]:text-lg [&>p]:mb-10 [&>p:last-child]:mb-0">
        <Title :title :is-light="true" />
        <slot />
    </section>
</template>
