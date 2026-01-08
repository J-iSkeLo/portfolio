<script setup lang="ts">
import type { Testimonial } from '@/types'

defineProps<{
    testimonial: Testimonial
    setFullContent: (testimonial: Testimonial) => void
    showFull: boolean
}>()
</script>

<template>
    <div>
        <figure
            class="relative flex flex-col rounded-lg p-6 shadow-lg border border-gray-50 bg-gradient bg-gradient-to-br from-gray-100 via-white to-gray-200"
        >
            <figcaption class="flex items-center space-x-4">
                <div>
                    <img
                        :src="testimonial.img"
                        :alt="testimonial.name"
                        class="w-14 h-14 rounded-full shadow-md"
                    />
                </div>

                <div>
                    <h3 class="font-bold text-xl text-gray-600">
                        {{ testimonial.name }}
                    </h3>
                    <h3 class="text-gray-400">{{ testimonial.companyName }}</h3>
                </div>
            </figcaption>

            <blockquote
                class="mt-5 text-gray-500 leading-6 [&>p]:mb-5 [&>p:last-child]:mb-0"
            >
                <div
                    v-if="!showFull && testimonial.short"
                    v-html="testimonial.short"
                ></div>
                <div v-else v-html="testimonial.content"></div>
                <button
                    v-if="!showFull && testimonial.short"
                    type="button"
                    @click="setFullContent(testimonial)"
                    class="text-gray-500 hover:text-gray-600"
                >
                    Show full
                </button>
            </blockquote>
        </figure>
    </div>
</template>
