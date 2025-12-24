export default ({
    modules: ['@nuxtjs/tailwindcss', 'nuxt-icon', '@vueuse/nuxt', '@nuxtjs/color-mode'],
    ssr: false,
    app: {
        baseURL: '/onelink/',
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
        }
    },
    build: {
        transpile: ["@headlessui/vue"],
    },
    colorMode: {
        classSuffix: '',
    },
    compatibilityDate: '2025-12-24',
})
