import { Review } from '../types/types'
import arabicaImage from '../assets/img/reviews/arabica.webp'
import zooImage from '../assets/img/reviews/zoo.webp'
import aquaImage from '../assets/img/reviews/aqua.webp'

const reviews: Review[] = [
    {
        img: arabicaImage,
        name: 'Sam',
        companyName: 'Arabica',
        review: `Dear Alex, you're a good man and a good developer. We do really like you and appreciate you and your work. Thanks for your patience and good work 🤝 We'll miss your music in presentation videos🕺🏼💃🏻`,
    },
    {
        img: aquaImage,
        name: 'Evgeniy',
        companyName: 'Aqua-M',
        review: `Many thanks to Olexiy for developing the application. Thanks to its implementation, orders from customers come in the form of invoices, article numbers of goods are taken into account, there is a separation according to invoices from different warehouses`,
    },
    {
        img: zooImage,
        name: 'Alexander',
        companyName: 'Zoo Zoo Zoo',
        review: `I was pleasantly surprised by the timing. Instead of the agreed two months, it took only 5 weeks to develop, the application with a tie to the site was ready and working. Thanks for the speed and quality.`,
    },
]

export default reviews