import { Testimonial } from '@/types/types'
import arabicaImage from '@/assets/img/testimonials/arabica.webp'
import zooImage from '@/assets/img/testimonials/zoo.webp'
import aquaImage from '@/assets/img/testimonials/aqua.webp'
import serhiiImage from '@/assets/img/testimonials/serhii.webp'
import issaImage from '@/assets/img/testimonials/issa.webp'
import kobaImage from '@/assets/img/testimonials/koba.webp'

const reviews: Testimonial[] = [
    {
        img: aquaImage,
        name: 'Evgeniy',
        companyName: 'Aqua-M',
        content: <>
            <p>We would like to thank Olexiy for the offer to make an app for our business. This allowed us to update and send information to our customers more quickly. Orders from customers began to arrive much more often, all of them immediately noted the convenience of using the app.</p>
            <p>In general, the application allowed us to increase sales volumes and effectively use the working time of the sales department. We were satisfied with the result, we can recommend Olexiy 👍</p>
        </>,
    },
    {
        img: zooImage,
        name: 'Alexander',
        companyName: 'Zoo Zoo Zoo',
        content: <p>I was pleasantly surprised by the timing. Instead of the agreed two months, it took only 5 weeks to develop, the application with a tie to the site was ready and working. Thanks for the speed and quality.</p>,
    },
    {
        img: arabicaImage,
        name: 'Sam',
        companyName: 'Arabica',
        content: <p>Dear Alex, you're a good man and a good developer. We do really like you and appreciate you and your work. Thanks for your patience and good work 🤝 We'll miss your music in presentation videos🕺🏼💃🏻</p>,
    },
    {
        img: serhiiImage,
        name: 'Serhii Cho',
        companyName: 'IT Specialist',
        content: <>
            <p>I've helped Olexiy to get started with Android development with Java back in 2020 when he was transitioning from a different field into software development. It's an honor for me to be the first who was not only helping him to learn Java, but also being the first person he worked with.</p>
            <p>Olexiy is an eager learner and a disciplined programmer, always focused on delivering quality work. I'm amazed by his attention to details and his refactoring nature. I highly recommend 👍 Olexiy as a software developer for any organization or project looking for someone who is dedicated, reliable, and has a passion for not just coding but for clean and maintainable code.</p>
            <p>We worked together on multiple, projects where I was providing the server-side APIs and WEB applications, while Olexiy was responsible for the Android app development and project management, as he dealt with the client directly.</p>
            <p>I will continue to work with Olexiy in the future, and make sure I always have his back. If you are looking for a skilled and reliable software developer, look no further than Olexiy. I am proud to recommend Olexiy as a software developer, who possesses not only technical skills but also project management and communication skills.</p>
        </>,
        short: <p>I've helped Olexiy to get started with Android development with Java back in 2020 when he was transitioning from a different field into software development. It's an honor for me to be the first who was not only helping him to learn Java, but also being the first person he worked with.</p>,
    },
    {
        img: issaImage,
        name: 'Issa Aldzhamal',
        companyName: 'Flutter developer',
        content: <p>Nice person and high skilled specialist in Android development.</p>,
    },
    {
        img: kobaImage,
        name: 'Artem Koba',
        companyName: 'Back-end .Net developer',
        content: <>
            <p>I am writing to highly recommend my colleague Alexey Chernenkiy for any Kotlin front-end development positions. I have had the pleasure of working alongside Alexey for the past 1.5 year, and I have consistently been impressed with his technical skills, work ethic, and professionalism.</p>
            <p>Alexey is a highly skilled Kotlin front-end developer with a deep understanding of front-end technologies. He is a quick learner, and he always stays up-to-date with the latest developments in his field. He is also a great team player who is always willing to collaborate and share his expertise with his colleagues.</p>
            <p>In addition to his technical skills, Alexey has excellent communication and problem-solving skills. He is always willing to take on new challenges and tackle difficult problems, and he approaches each task with a positive attitude and a strong work ethic. He is a true asset to any team and is highly respected by his colleagues.</p>
            <p>I highly recommend Alexey for any Kotlin front-end development positions. He is an outstanding developer who would be a valuable asset to any team.</p>
        </>,
        short: <p>I am writing to highly recommend my colleague Alexey Chernenkiy for any Kotlin front-end development positions. I have had the pleasure of working alongside Alexey for the past 1.5 year, and I have consistently been impressed with his technical skills, work ethic, and professionalism.</p>,
    },
]

export default reviews