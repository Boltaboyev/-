/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.{html,js}"],
    theme: {
        extend: {
            colors: {
                1: "#f56e1e",
                2: "#6e7191",
                bg: "#f1f1f1",
                bc: "#6e7191",
            },
            fontFamily: {
              sans: 'Golos Text, sans-serif'
            },
        },
    },
    plugins: [],
}
