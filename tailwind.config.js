/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            container: {
                center: true,
                padding: '1.2rem',
            },
            colors: {
                main: 'var(--color-main)',
                secondary: 'var(--color-secondary)',
            },
            backgroundImage: {
                hero: "url('/src/assets/img/backgrounds/hero.jpg')",
                reviews: "url('/src/assets/img/backgrounds/reviews.png')",
                skill: "url('/src/assets/img/backgrounds/skill.jpeg')",
                tech: "url('/src/assets/img/backgrounds/tech.jpeg')",
                'main-btn': 'linear-gradient(-45deg, #ffa63d, #ff3d77, #7033ff, #3cf0c5)',
            },
            boxShadow: {
                hero: '0 1px 1px rgb(0 0 0 / 10%), 0 2px 2px rgb(0 0 0 / 10%), 0 4px 4px rgb(0 0 0 / 10%), 0 8px 8px rgb(0 0 0 / 10%)',
                'hero-hover': '12px 12px 16px rgb(0 0 0 / 20%)',
                lines: '2px 2px 10px rgb(0 0 0 / 80%)',
            },
            animation: {
                'shine': 'shine 16s linear infinite',
            },
            backgroundSize: {
                600: '600%',
            },
            keyframes: {
                shine: {
                    '0%, 100%': {
                        backgroundPosition: '0% 50%',
                    },
                    '50%': {
                        backgroundPosition: '100% 50%',
                    },
                },
            },
            dropShadow: {
                'hero': '5px 5px 4px rgb(26 69 104)',
                'font': '2px 2px 4px rgb(0 0 0 / 50%)',
                'font-hover': '0 0 30px rgb(255 255 255 / 60%)',
            },
        },
    },
    plugins: [],
}
