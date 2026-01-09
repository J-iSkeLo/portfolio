import { ref } from 'vue'

const isOpened = ref<boolean>(false)

export function useNavbar() {
    function toggleNavbar(): void {
        isOpened.value = !isOpened.value
    }

    return {
        isOpened,
        toggleNavbar,
    }
}
