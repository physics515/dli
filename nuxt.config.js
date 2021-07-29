export default {
        // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
        ssr: false,

        // Target: https://go.nuxtjs.dev/config-target
        target: 'static',

        // Global page headers: https://go.nuxtjs.dev/config-head
        head: {
                title: 'DLI Service',
                htmlAttrs: {
                        lang: 'en'
                },
                meta: [
                        { charset: 'utf-8' },
                        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                        {
                                hid: 'description',
                                name: 'description',
                                content: 'Since 1998, DLI Services has been a local leader in the metal fabrication industry, focused on the most challenging custom & bespoke metalworks.'
                        },
                        {
                                name: 'theme-color',
                                content: '#FFECD6'
                        }
                ],
                link: [
                        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
                        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
                        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'true' },
                        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap' },
                        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap' },                ]
        },

        // Global CSS: https://go.nuxtjs.dev/config-css
        css: [
        ],

        // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
        plugins: [
                { src: '@/plugins/vue-awesome-swiper', mode: 'client' },
                '~/plugins/lodash.js',
                { src: '~/plugins/vue-lazyload', ssr: false },
        ],

        // Auto import components: https://go.nuxtjs.dev/config-components
        components: true,

        // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
        buildModules: [
                // https://go.nuxtjs.dev/tailwindcss
                '@nuxtjs/tailwindcss',
                '@aceforth/nuxt-optimized-images',
                'responsive-loader/sharp',
                '@nuxtjs/google-analytics',
        ],

        // Modules: https://go.nuxtjs.dev/config-modules
        modules: [],

        // Build Configuration: https://go.nuxtjs.dev/config-build

        optimizedImages: {
                optimizeImages: true,
                optimizeImagesInDev: true,
                responsive: {
                        adapter: require('responsive-loader/sharp')
                },
                svgo: {
                        adapter: require('imagemin-svgo')
                }
        },

        googleAnalytics: {
                id: 'G-2NYK3B5LVT'
        },
}
