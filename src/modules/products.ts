import type { Product } from '../types/types'
import zoo1 from '../assets/img/portfolio/zoo/1.png'
import zoo2 from '../assets/img/portfolio/zoo/2.png'
import zoo3 from '../assets/img/portfolio/zoo/3.png'
import zoo4 from '../assets/img/portfolio/zoo/4.png'
import zoo5 from '../assets/img/portfolio/zoo/5.png'
import safe1 from '../assets/img/portfolio/safereturn/1.png'
import safe2 from '../assets/img/portfolio/safereturn/2.png'
import safe3 from '../assets/img/portfolio/safereturn/3.png'
import safe4 from '../assets/img/portfolio/safereturn/4.png'
import safe5 from '../assets/img/portfolio/safereturn/5.png'
import arabica1 from '../assets/img/portfolio/arabica/1.png'
import arabica2 from '../assets/img/portfolio/arabica/2.png'
import arabica3 from '../assets/img/portfolio/arabica/3.png'
import arabica4 from '../assets/img/portfolio/arabica/4.png'
import arabica5 from '../assets/img/portfolio/arabica/5.png'
import flycket1 from '../assets/img/portfolio/flycket/1.png'
import flycket2 from '../assets/img/portfolio/flycket/2.png'
import flycket3 from '../assets/img/portfolio/flycket/3.png'
import flycket4 from '../assets/img/portfolio/flycket/4.png'
import flycket5 from '../assets/img/portfolio/flycket/5.png'
import aidwatch1 from '../assets/img/portfolio/aidwatch/1.png'
import aidwatch2 from '../assets/img/portfolio/aidwatch/2.png'
import aidwatch3 from '../assets/img/portfolio/aidwatch/3.png'
import aidwatch4 from '../assets/img/portfolio/aidwatch/4.png'
import aidwatch5 from '../assets/img/portfolio/aidwatch/5.png'
import aqua1 from '../assets/img/portfolio/aqua/1.png'
import aqua2 from '../assets/img/portfolio/aqua/2.png'
import aqua3 from '../assets/img/portfolio/aqua/3.png'
import aqua4 from '../assets/img/portfolio/aqua/4.png'
import aqua5 from '../assets/img/portfolio/aqua/5.png'

const products: Product[] = [
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