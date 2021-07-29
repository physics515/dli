module.exports = {
        purge: [],
        darkMode: false, // or 'media' or 'class'
        //mode: 'jit',
        theme: {
                extend: {
                        fontFamily: {
                                'Cormorant-Garamond': ['"Cormorant Garamond"'],
                                'Fira-Sans': ['"Fira Sans"'],
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
