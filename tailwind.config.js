module.exports = {
        purge: [],
        darkMode: false, // or 'media' or 'class'
        mode: 'jit',
        theme: {
                extend: {
                        fontFamily: {
                                'Cormorant-Garamond': ['"Cormorant Garamond"', 'serif'],
                                'Fira-Sans': ['"Fira Sans"', 'sans- serif'],
                        }
                },
        },
        variants: {
                extend: {},
        },
        plugins: [
                require('@tailwindcss/aspect-ratio'),
        ],
}
