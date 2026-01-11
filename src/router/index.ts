import { createRouter, createWebHashHistory } from 'vue-router'
import { routes } from '@/router/routes'
import { useNavbar } from '@/composables/useNavbar'

const { activeLink, isOpen, toggleNavbar } = useNavbar()

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

router.afterEach((to, from) => {
    const section = to.query.section

    setActiveLink(to.fullPath)

    if (typeof section === 'string') {
        setTimeout(() => anchorHandler(section), 100)
    }

    if (isOpen.value) {
        toggleNavbar()
    }

    if (from.name !== to.name) {
        document.querySelector('body')!.scrollIntoView({
            behavior: 'instant',
            block: 'start',
        })
    }
})

function setActiveLink(fullPath: string): void {
    console.log({ fullPath })
    activeLink.value = fullPath
}

function anchorHandler(selector: string): void {
    const targetElem = document.getElementById(selector)

    if (selector === 'life') {
        return
    }

    if (!targetElem) {
        console.error(`Cannot find target selector "#${selector}" for scrolling`)
        return
    }

    targetElem.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default router
