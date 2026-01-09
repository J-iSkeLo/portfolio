<script setup lang="ts">
import Title from '@/components/Section/Title.vue'

type Props = {
    title?: string
    cover?: string
    isLight?: boolean
}

withDefaults(defineProps<Props>(), {
    isLight: true,
})
</script>

<template>
    <div class="relative">
        <div
            v-if="!isLight"
            class="main-gradient absolute left-0 right-0 top-0 bottom-0 opacity-80"
        ></div>

        <div
            v-if="cover"
            :class="[cover, 'absolute left-0 right-0 top-0 bottom-0 opacity-80']"
        ></div>

        <div class="pb-16 md:pb-20">
            <Title v-if="title" :title :is-light="isLight" />

            <div class="relative">
                <slot />
            </div>
        </div>
    </div>
</template>
