

export default {
    components: true,
    modules: ['@nuxt/content', '@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],
    content: {
        nestedProperties :[]
    },
    tailwindcss: {
        exposeConfig: true
    },
    purgeCSS: {
        whitelist: ["dark-mode"]
    },
    plugins: [
        {src: '~/plugins/index.js'}
    ]

}
