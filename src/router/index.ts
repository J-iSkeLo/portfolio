import { createRouter, createWebHistory } from 'vue-router'
import { routes } from '@/router/routes'

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.afterEach(guard => {
    const section = guard.query.section

    if (typeof section === 'string') {
        setTimeout(() => anchorHandler(section), 100)
    }
})

function anchorHandler(selector: string): void {
    const targetElem = document.getElementById(selector)

    if (!targetElem) {
        console.error(`Cannot find target selector "#${selector}" for scrolling`)
        return
    }

    targetElem.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default router
