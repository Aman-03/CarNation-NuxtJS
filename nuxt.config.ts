export default defineNuxtConfig({
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
                    href: "/favicon-car.png",
                },
            ],
        },
    },
});
