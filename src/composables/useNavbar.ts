import { ref } from 'vue'

const isOpen = ref<boolean>(false)
const activeLink = ref<string>('/')

export function useNavbar() {
    function toggleNavbar(): void {
        isOpen.value = !isOpen.value
    }

    return {
        isOpen,
        activeLink,
        toggleNavbar,
    }
}
