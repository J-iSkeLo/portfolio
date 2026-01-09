import MainView from '@/components/Views/MainView.vue'
import LifeView from '@/components/Views/LifeView.vue'

export const routes = [
    { path: '/', name: 'main', component: MainView },
    { path: '/life', name: 'life', component: LifeView },
]
