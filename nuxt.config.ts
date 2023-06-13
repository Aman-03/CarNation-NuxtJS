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
    css: ["@/assets/style.css", "bootstrap/dist/css/bootstrap.min.css"],
});
