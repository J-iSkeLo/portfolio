import type { RouteLocationRaw } from 'vue-router'

export const navbarLinks: { title: string; to: RouteLocationRaw }[] = [
    { title: 'About', to: { name: 'home' } },
    { title: 'Skills', to: { name: 'home', query: { section: 'skills' } } },
    { title: 'Personal skills', to: { name: 'home', query: { section: 'personal' } } },
    { title: 'Life', to: { name: 'life' } },
    { title: 'Portfolio', to: { name: 'home', query: { section: 'portfolio' } } },
    { title: 'testimonials', to: { name: 'home', query: { section: 'testimonials' } } },
    { title: 'Contact', to: { name: 'home', query: { section: 'contact' } } },
]
