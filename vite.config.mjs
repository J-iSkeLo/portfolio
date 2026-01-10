import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
    base: '/',
    logLevel: 'silent',

    plugins: [
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
        tailwindcss(),
    ],

    build: {
        sourcemap: true,
    },

    resolve: {
        alias: {
            '@': '/src/',
        },
    },
})

