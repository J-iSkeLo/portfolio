import { createApp } from 'vue'
import { createPinia } from 'pinia'
import smoothLoader from 'smooth-loader'
import router from '@/router'
import App from '@/App.vue'
import '@/assets/index.css'

createApp(App).use(createPinia()).use(router).mount('#app')

setTimeout(() => smoothLoader('[data-src]'), 300)
