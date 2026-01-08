<script setup lang="ts">
import Section from '@/components/Section/Section.vue'
import PersonalSkill from '@/components/PersonalSkill.vue'
import personalSkills from '@/modules/personalSkills'
</script>

<template>
    <div class="px-7" id="personal">
        <Section title="Personal skills">
            <div class="container">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <PersonalSkill
                        v-for="skill in personalSkills"
                        :key="skill.title"
                        :skill
                    />
                </div>
            </div>
        </Section>
    </div>
</template>
