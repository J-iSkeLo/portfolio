import { Review } from '@/types/types'
import arabicaImage from '@/assets/img/reviews/arabica.webp'
import zooImage from '@/assets/img/reviews/zoo.webp'
import aquaImage from '@/assets/img/reviews/aqua.webp'

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
        review: `We would like to thank Olexiy for the offer to make an app for our business. This allowed us to update and send information to our customers more quickly. Orders from customers began to arrive much more often, all of them immediately noted the convenience of using the app. In general, the application allowed us to increase sales volumes and effectively use the working time of the sales department. We were satisfied with the result, we can recommend Olexiy 👍`,
    },
    {
        img: zooImage,
        name: 'Alexander',
        companyName: 'Zoo Zoo Zoo',
        review: `I was pleasantly surprised by the timing. Instead of the agreed two months, it took only 5 weeks to develop, the application with a tie to the site was ready and working. Thanks for the speed and quality.`,
    },
]

export default reviews