import React from 'react'
import telegramIcon from '@/assets/img/icons/telegram.png'
import whatsappIcon from '@/assets/img/icons/whatsapp.png'
import instagramIcon from '@/assets/img/icons/instagram.png'
import facebookIcon from '@/assets/img/icons/facebook.png'

const Social: React.FC = (props) => {
    const links = [
        { title: 'Telegram', icon: telegramIcon, link: 'https://www.t.me/LeshaChernenkiy' },
        { title: 'Whatsapp', icon: whatsappIcon, link: 'https://wa.me/380501304518' },
        { title: 'Instagram', icon: instagramIcon, link: 'https://www.instagram.com/l.chernenkiy' },
        { title: 'Facebook', icon: facebookIcon, link: 'https://www.facebook.com/jiskelo' },
    ]

    return (
        <ul className="relative flex gap-x-7">
            {links.map(l => {
                return <li key={l.title}>
                    <a
                        href={l.link}
                        title={l.title}
                        className="drop-shadow-font hover:drop-shadow-font-hover transition-all"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={l.icon} alt={l.title} width="22" height="22" />
                    </a>
                </li>
            })}
        </ul>
    )
}

export default Social