import { useStorage } from "@vueuse/core";
export default defineNuxtRouteMiddleware((to, from) => {
    const isLoggedIn = useStorage("isLoggedIn", false).value;
    if (isLoggedIn) {
        return navigateTo("/");
    } else {
        return;
    }
});
