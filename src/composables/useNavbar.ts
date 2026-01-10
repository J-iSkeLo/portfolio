import { ref } from 'vue'

const isOpen = ref<boolean>(false)

export function useNavbar() {
    function toggleNavbar(): void {
        isOpen.value = !isOpen.value
    }

    return {
        isOpen,
        toggleNavbar,
    }
}
