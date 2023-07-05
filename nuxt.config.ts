export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            baseAPI: process.env.VITE_BASE_URL,
        },
    },
    devtools: { enabled: true },
    modules: ["@pinia/nuxt", "@vee-validate/nuxt", "@vueuse/nuxt"],
    veeValidate: {
        autoImports: true,
        componentNames: {
            Form: "VForm",
            Field: "VField",
        },
    },
    build: {
        transpile: ["vuetify"],
    },
    css: [
        "@/assets/style.css",
        "vuetify/lib/styles/main.sass",
        "bootstrap/dist/css/bootstrap.min.css",
    ],
    app: {
        pageTransition: { name: "fade", mode: "out-in" },
        head: {
            link: [
                {
                    rel: "icon",
                    type: "image/png",
                    href: "/public/favicon-car.png",
                },
            ],
        },
    },
});
