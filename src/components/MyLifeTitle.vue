<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import PlusIcon from '@/components/Icons/PlusIcon.vue'
import MinusIcon from '@/components/Icons/MinusIcon.vue'
import { events } from '@/config'
import dispatchEvent from '@/modules/dispatchEvent'
import listenEvent from '@/modules/listenEvent'

const props = defineProps<{
    header: string
}>()

const emit = defineEmits<{
    (e: 'update', header: string): void
}>()

const showContent = ref(false)

const handleTitleClick = () => {
    if (!showContent.value) {
        dispatchEvent<string>(events.myLifeTitleOpened, props.header)
    }

    showContent.value = !showContent.value
}

let cleanup: (() => void) | undefined

onMounted(() => {
    cleanup = listenEvent<string>(events.myLifeTitleOpened, header => {
        if (header !== props.header) {
            showContent.value = false
        }
    })
})

onUnmounted(() => {
    cleanup?.()
})
</script>

<template>
    <div
        @click="handleTitleClick"
        :class="[
            'flex items-center justify-between gap-3 leading-6 text-sm md:text-md xl:text-xl border px-4 py-2 rounded-lg cursor-pointer transition-colors',
            showContent
                ? 'border-purple-300/50 text-purple-200 bg-black/20'
                : 'border-white/20 hover:bg-black/10'
        ]"
    >
        <h2>{{ header }}</h2>

        <span>
            <MinusIcon v-if="showContent" />
            <PlusIcon v-else />
        </span>
    </div>

    <div
        :class="[
            'transition-all duration-500 mt-4',
            showContent
                ? 'opacity-1 translate-y-0 h-auto'
                : 'opacity-0 -translate-y-8 h-0 pointer-events-none'
        ]"
    >
        <div class="p-4 text-[.95em] lg:text-md bg-black/20 rounded-xl">
            <slot />
        </div>
    </div>
</template>
