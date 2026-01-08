<script setup lang="ts">
import Section from '@/components/Section/Section.vue'
import bgImage from '@/assets/img/backgrounds/skill.webp'
import skill1 from '@/assets/img/skills/1.webp'
import skill2 from '@/assets/img/skills/2.webp'
import skill3 from '@/assets/img/skills/3.webp'
import skill4 from '@/assets/img/skills/4.webp'
import skill5 from '@/assets/img/skills/5.webp'
import skill6 from '@/assets/img/skills/6.webp'
import skill7 from '@/assets/img/skills/7.webp'
import skill8 from '@/assets/img/skills/8.webp'
import skill9 from '@/assets/img/skills/9.webp'
import skill10 from '@/assets/img/skills/10.webp'
import skill11 from '@/assets/img/skills/11.webp'
import skill12 from '@/assets/img/skills/12.webp'

const images = [
    skill1, skill2, skill3, skill4,
    skill5, skill6, skill7, skill8,
    skill9, skill10, skill11, skill12
]
</script>

<template>
    <div id="skills" class="min-h-[800px]">
        <Section title="Skills" :bg-image="bgImage">
            <div class="container">
                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    <div v-for="(img, index) in images" :key="index">
                        <img
                            :src="img"
                            width="284"
                            height="122"
                            alt="technology"
                            class="shadow-lg rounded-2xl"
                        />
                    </div>
                </div>
            </div>
        </Section>
    </div>
</template>
