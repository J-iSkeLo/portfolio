<script setup lang="ts">
import type { PersonalSkill } from '@/types'

defineProps<{ skill: PersonalSkill }>()
</script>

<template>
    <div class="min-h-[90px] px-5 pb-3 text-center">
        <img
            :src="skill.img"
            :alt="skill.title"
            width="90"
            height="90"
            class="mx-auto drop-shadow-lg"
        />

        <h3 class="my-6 text-xl font-bold text-center uppercase drop-shadow-md">
            {{ skill.title }}
        </h3>

        <p class="text-gray-500 leading-7 drop-shadow-md">
            {{ skill.intro }}
        </p>
    </div>
</template>
