<script setup lang="ts">
import About from '@/components/Sections/About.vue'
import Skills from '@/components/Sections/Skills.vue'
import Personal from '@/components/Sections/Personal.vue'
import Portfolio from '@/components/Sections/Portfolio.vue'
import Testimonials from '@/components/Sections/Testimonials.vue'
import Contact from '@/components/Sections/Contact.vue'
import Hero from '@/components/Sections/Hero.vue'
</script>

<template>
    <Hero :minimize="false" />
    <About />
    <Skills />
    <Personal />
    <Testimonials />
    <Portfolio />
    <Contact />
</template>
