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
            },
            boxShadow: {
                hero: '0 1px 1px rgb(0 0 0 / 15%), 0 2px 2px rgb(0 0 0 / 15%), 0 4px 4px rgb(0 0 0 / 15%), 0 8px 8px rgb(0 0 0 / 15%)',
            },
        },
    },
    plugins: [],
}
