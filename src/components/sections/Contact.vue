<script setup lang="ts">
import Section from '@/components/Section/Section.vue'
import Social from '@/components/Social.vue'
import { contacts } from '@/modules/contactMe'
</script>

<template>
    <div class="px-7" id="contact">
        <Section title="Contact me">
            <div class="container">
                <div class="flex flex-col md:flex-row align-center justify-center gap-y-8 gap-x-14">
                    <a
                        v-for="contact in contacts"
                        :key="contact.title"
                        :href="contact.href"
                        target="_blank"
                        rel="noreferrer"
                        class="flex items-center gap-x-3 mx-auto md:mx-0 hover:opacity-75 transition-opacity"
                    >
                        <div>
                            <component :is="contact.icon" class="w-8 h-8" />
                        </div>

                        <span class="text-md">
                            {{ contact.title }}
                        </span>
                    </a>
                </div>

                <div class="text-center">
                    <div class="bg-gray-600 py-3 px-4 inline-block mx-auto rounded-full shadow-lg mt-10 lg:mt-14">
                        <Social />
                    </div>
                </div>
            </div>
        </Section>
    </div>
</template>
