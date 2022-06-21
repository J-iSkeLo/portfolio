/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            gradient: {
                main: 'radial-gradient(circle, rgba(0, 144, 208, 1) 0%, rgba(122, 110, 209, 1) 100%)',
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
            }
        },
    },
    plugins: [],
}
