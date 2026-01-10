import HomeView from '@/components/Views/HomeView.vue'
import LifeView from '@/components/Views/LifeView.vue'
import NotFoundView from '@/components/Views/NotFoundView.vue'

export const routes = [
    { path: '/', name: 'home', component: HomeView },
    { path: '/life', name: 'life', component: LifeView },
    { path: '/:catchAll(.*)', component: NotFoundView },
]
