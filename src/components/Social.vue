<script setup lang="ts">
import telegramIcon from '@/assets/img/icons/telegram.png'
import whatsappIcon from '@/assets/img/icons/whatsapp.png'
import instagramIcon from '@/assets/img/icons/instagram.png'
import facebookIcon from '@/assets/img/icons/facebook.png'

const links = [
    {
        title: 'Telegram',
        icon: telegramIcon,
        link: 'https://www.t.me/LeshaChernenkiy',
    },
    {
        title: 'Whatsapp',
        icon: whatsappIcon,
        link: 'https://wa.me/380501304518',
    },
    {
        title: 'Instagram',
        icon: instagramIcon,
        link: 'https://www.instagram.com/l.chernenkiy',
    },
    {
        title: 'Facebook',
        icon: facebookIcon,
        link: 'https://www.facebook.com/jiskelo',
    },
]
</script>

<template>
    <ul class="relative flex">
        <li v-for="l in links" :key="l.title">
            <a
                :href="l.link"
                :title="l.title"
                class="w-16 flex group items-center justify-center aspect-square transition-colors hover:bg-gray-700 rounded-full duration-500"
                target="_blank"
                rel="noreferrer"
            >
                <img
                    :src="l.icon"
                    :alt="l.title"
                    width="22"
                    height="22"
                    class="group-hover:scale-125 transition-transform duration-300 delay-200 drop-shadow-sm"
                />
            </a>
        </li>
    </ul>
</template>
