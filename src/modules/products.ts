import type { Product } from '@/types/types'
import zoo1 from '@/assets/img/portfolio/zoo/1.webp'
import zoo2 from '@/assets/img/portfolio/zoo/2.webp'
import zoo3 from '@/assets/img/portfolio/zoo/3.webp'
import zoo4 from '@/assets/img/portfolio/zoo/4.webp'
import zoo5 from '@/assets/img/portfolio/zoo/5.webp'
import safe1 from '@/assets/img/portfolio/safereturn/1.webp'
import safe2 from '@/assets/img/portfolio/safereturn/2.webp'
import safe3 from '@/assets/img/portfolio/safereturn/3.webp'
import safe4 from '@/assets/img/portfolio/safereturn/4.webp'
import safe5 from '@/assets/img/portfolio/safereturn/5.webp'
import arabica1 from '@/assets/img/portfolio/arabica/1.webp'
import arabica2 from '@/assets/img/portfolio/arabica/2.webp'
import arabica3 from '@/assets/img/portfolio/arabica/3.webp'
import arabica4 from '@/assets/img/portfolio/arabica/4.webp'
import arabica5 from '@/assets/img/portfolio/arabica/5.webp'
import flycket1 from '@/assets/img/portfolio/flycket/1.webp'
import flycket2 from '@/assets/img/portfolio/flycket/2.webp'
import flycket3 from '@/assets/img/portfolio/flycket/3.webp'
import flycket4 from '@/assets/img/portfolio/flycket/4.webp'
import flycket5 from '@/assets/img/portfolio/flycket/5.webp'
import aidwatch1 from '@/assets/img/portfolio/aidwatch/1.webp'
import aidwatch2 from '@/assets/img/portfolio/aidwatch/2.webp'
import aidwatch3 from '@/assets/img/portfolio/aidwatch/3.webp'
import aidwatch4 from '@/assets/img/portfolio/aidwatch/4.webp'
import aidwatch5 from '@/assets/img/portfolio/aidwatch/5.webp'
import aqua1 from '@/assets/img/portfolio/aqua/1.webp'
import aqua2 from '@/assets/img/portfolio/aqua/2.webp'
import aqua3 from '@/assets/img/portfolio/aqua/3.webp'
import aqua4 from '@/assets/img/portfolio/aqua/4.webp'
import aqua5 from '@/assets/img/portfolio/aqua/5.webp'
import todoNotes1 from '@/assets/img/portfolio/todo-notes/1.webp'
import todoNotes2 from '@/assets/img/portfolio/todo-notes/2.webp'
import todoNotes3 from '@/assets/img/portfolio/todo-notes/3.webp'
import todoNotes4 from '@/assets/img/portfolio/todo-notes/4.webp'
import todoNotes5 from '@/assets/img/portfolio/todo-notes/5.webp'
import lightCleaner1 from '@/assets/img/portfolio/light-cleaner/1.webp'
import lightCleaner2 from '@/assets/img/portfolio/light-cleaner/2.webp'
import lightCleaner3 from '@/assets/img/portfolio/light-cleaner/3.webp'
import lightCleaner4 from '@/assets/img/portfolio/light-cleaner/4.webp'
import lightCleaner5 from '@/assets/img/portfolio/light-cleaner/5.webp'

const products: Product[] = [
    {
        id: 'light-cleaner',
        title: 'Light Cleaner',
        intro: 'Light Cleaner is an all-in-one Android device optimization app that combines phone cleaning, RAM optimization, battery saving, and more. for optimal performance and safety.',
        items: [lightCleaner1, lightCleaner2, lightCleaner3, lightCleaner4, lightCleaner5],
    },
    {
        id: 'todo-notes',
        title: 'To-Do Notes',
        intro: 'To-Do Notes is a smart to-do list for everyday use.',
        items: [todoNotes1, todoNotes2, todoNotes3, todoNotes4, todoNotes5],
    },
    {
        id: 'zoo',
        title: 'Zoo Zoo Zoo',
        intro: 'The ZooZooZoo mobile app is an online pet store on your smartphone. Food, treats care products, veterinary drugs, accessories, and more for dogs and cats. It has become much more convenient to choose your favorite products for your pets and make purchases.',
        items: [zoo1, zoo2, zoo3, zoo4, zoo5],
    },
    {
        id: 'safereturn',
        title: 'Safereturn',
        intro: 'Safereturn the app is for a user to set up an alert that will be sent out after a certain period of time if the user does not return to the application to stop the beacon from being sent out.',
        items: [safe1, safe2, safe3, safe4, safe5],
    },
    {
        id: 'arabica',
        title: 'Arabica',
        intro: 'This app allows ARABICA customers to pre-order their favorite cup of coffee and collect loyalty points. It will serve walk-in customers and curbside car pickup.',
        items: [arabica1, arabica2, arabica3, arabica4, arabica5],
    },
    {
        id: 'flycket',
        title: 'Flycket',
        intro: "Flycket isn't just another marketing app. He's the promotion genie who'll turn your sale, exclusive deal, live event, product launch, or any other offline promotion or offer into a rip-roaring success.",
        items: [flycket1, flycket2, flycket3, flycket4, flycket5],
    },
    {
        id: 'aidwatch',
        title: 'Aid Watch',
        intro: "Aidwatch is the first smartwatch with an automatic fall alarm. They are the ideal companion for high security situations in both private and professional environments.",
        items: [aidwatch1, aidwatch2, aidwatch3, aidwatch4, aidwatch5],
    },
    {
        id: 'aqua',
        title: 'Aqua-M',
        intro: "Aqua-M is an android application where you can buy aquarium fish and aquarium equipment using your smartphone.",
        items: [aqua1, aqua2, aqua3, aqua4, aqua5],
    },
]

export default products