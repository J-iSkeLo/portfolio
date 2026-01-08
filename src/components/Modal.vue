<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'

defineProps<{ show: boolean }>()

const emit = defineEmits<{ (e: 'close'): void }>()

const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
        emit('close')
    }
}

onMounted(() => {
    window.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
    window.removeEventListener('keydown', handleKeyDown)
})
</script>

<template>
    <Teleport to="body">
        <div v-if="show" class="fixed inset-0 z-50 overflow-y-auto">
            <div
                class="absolute inset-0 bg-gray-500 opacity-75"
                @click="$emit('close')"
            ></div>

            <div
                class="rounded-lg shadow-lg absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2"
            >
                <button
                    class="text-gray-500 hover:text-gray-700 text-3xl font-bold absolute right-1 top-0 z-10 p-2"
                    @click="$emit('close')"
                >
                    &times;
                </button>

                <slot />
            </div>
        </div>
    </Teleport>
</template>
