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
                'hero': "url('/assets/img/hero-pattern.svg')",
            }
        },
    },
    plugins: [],
}
