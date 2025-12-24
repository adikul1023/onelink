export default ({
    modules: ['@nuxtjs/tailwindcss', 'nuxt-icon', '@vueuse/nuxt', '@nuxtjs/color-mode'],
    build: {
        transpile: ["@headlessui/vue"],
    },
    colorMode: {
        classSuffix: '',
    },
    compatibilityDate: '2025-12-24',
})
