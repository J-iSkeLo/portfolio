<script setup lang="ts">
import type { Testimonial as TestimonialType } from '@/types'
import { ref } from 'vue'
import { testimonials } from '@/modules/testimonials'
import Testimonial from '@/components/Testimonial.vue'
import Section from '@/components/Section/Section.vue'
import Modal from '@/components/Modal.vue'

const total = testimonials.length
const testimonialsPerRow = Math.round(total / 3)

const testimonials1: TestimonialType[] = testimonials.slice(0, testimonialsPerRow)
const testimonials2: TestimonialType[] = testimonials.slice(
    testimonialsPerRow,
    testimonialsPerRow * 2,
)
const testimonials3: TestimonialType[] = testimonials.slice(testimonialsPerRow * 2, total)

const fullContent = ref<TestimonialType | null>(null)
</script>

<template>
    <div id="testimonials">
        <Modal v-if="fullContent" :show="fullContent !== null" @close="fullContent = null">
            <Testimonial
                :testimonial="fullContent"
                :set-full-content="t => (fullContent = t)"
                :show-full="true"
            />
        </Modal>

        <Section title="Testimonials" :is-light="false">
            <div class="container">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-7">
                    <div class="space-y-4 lg:space-y-7">
                        <Testimonial
                            v-for="r in testimonials1"
                            :key="r.name"
                            :testimonial="r"
                            :set-full-content="t => (fullContent = t)"
                            :show-full="false"
                        />
                    </div>
                    <div class="space-y-4 lg:space-y-7">
                        <Testimonial
                            v-for="r in testimonials2"
                            :key="r.name"
                            :testimonial="r"
                            :set-full-content="t => (fullContent = t)"
                            :show-full="false"
                        />
                    </div>
                    <div class="space-y-4 lg:space-y-7">
                        <Testimonial
                            v-for="r in testimonials3"
                            :key="r.name"
                            :testimonial="r"
                            :set-full-content="t => (fullContent = t)"
                            :show-full="false"
                        />
                    </div>
                </div>
            </div>
        </Section>
    </div>
</template>
