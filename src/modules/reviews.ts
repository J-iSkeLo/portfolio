import { Review } from '@/types/types'
import arabicaImage from '@/assets/img/reviews/arabica.webp'
import zooImage from '@/assets/img/reviews/zoo.webp'
import aquaImage from '@/assets/img/reviews/aqua.webp'
import serhiiImage from '@/assets/img/reviews/serhii.webp'

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
    {
        img: serhiiImage,
        name: 'Serhii',
        companyName: 'Serhii Cho',
        review: `
        I've helped Olexiy to get started with Android development with Java back in 2020 when he was transitioning from a different field into software development. It's an honor for me to be the first who was not only helping him to learn Java, but also being the first person he worked with.

        Olexiy is an eager learner and a disciplined programmer, always focused on delivering quality work. I'm amazed by his attention to details and his refactoring nature. I highly recommend 👍 Olexiy as a software developer for any organization or project looking for someone who is dedicated, reliable, and has a passion for not just coding but for clean and maintainable code.

        We worked together on multiple, projects where I was providing the server-side APIs and WEB applications, while Olexiy was responsible for the Android app development and project management, as he dealt with the client directly.

        I will continue to work with Olexiy in the future, and make sure I always have his back. If you are looking for a skilled and reliable software developer, look no further than Olexiy. I am proud to recommend Olexiy as a software developer, who possesses not only technical skills but also project management and communication skills.
        `,
    },
]

export default reviews