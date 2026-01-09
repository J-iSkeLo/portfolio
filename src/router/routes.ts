import HomeView from '@/components/Views/HomeView.vue'
import LifeView from '@/components/Views/LifeView.vue'

export const routes = [
    { path: '/', name: 'home', component: HomeView },
    { path: '/life', name: 'life', component: LifeView },
]
