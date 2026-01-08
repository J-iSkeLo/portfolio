<script setup lang="ts">
import type { Product } from '@/types'
import { ref } from 'vue'

defineProps<{
    product: Product
    isSelected: boolean
    img: string
}>()

const zoomedImage = ref<string | null>(null)

const setZoomedImageHandler = (item: string): void => {
    if (zoomedImage.value === item) {
        zoomedImage.value = null
        return
    }

    zoomedImage.value = item
}
</script>

<template>
    <div
        v-if="isSelected"
        :class="[
            'transition-all duration-300 hover:scale-105 cursor-zoom-in',
            zoomedImage === img 
                ? 'fixed cursor-zoom-out top-0 left-0 w-full h-full bg-black bg-opacity-75 z-50 flex items-center justify-center'
                : ''
        ]"
        @click="setZoomedImageHandler(img)"
    >
        <img
            :src="img"
            width="220"
            height="468"
            :alt="product.title"
            :class="[
                'transition-all duration-300 mx-auto drop-shadow-md',
                zoomedImage === img
                    ? 'max-w-none h-[calc(100%-100px)] w-auto'
                    : 'max-w-auto md:max-w-55'
            ]"
        />
    </div>
</template>
