export default defineNuxtConfig({
    head: {
        link: [{ rel: "icon", href: "/ favicon-car.png" }],
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
    },
});
