import { Review } from '../types/types'
import arabicaImage from '../assets/img/reviews/arabica.png'
import zooImage from '../assets/img/reviews/zoo.png'

const reviews: Review[] = [
    {
        img: arabicaImage,
        name: 'Sam',
        companyName: 'Arabica',
        review: `Dear Alex, you're a good man and a good developer. We do really like you and appreciate you and your work. Thanks for your patience and good work 🤝 We'll miss your music in presentation videos🕺🏼💃🏻`,
    },
    {
        img: zooImage,
        name: 'Alexander',
        companyName: 'Zoo Zoo Zoo',
        review: `I was pleasantly surprised by the timing. Instead of the agreed two months, it took only 5 weeks to develop, the application with a tie to the site was ready and working. Thanks for the speed and quality.`,
    },
]

export default reviews