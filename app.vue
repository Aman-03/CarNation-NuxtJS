<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>
<script setup>
import { useStorage } from "@vueuse/core";
import { storeToRefs } from "pinia";
import useGlobalStore from "./stores/globalStore";

const {
    public: { baseAPI },
} = useRuntimeConfig();
const store = useGlobalStore();
store.baseAPI = baseAPI;
const { isLoggedIn } = storeToRefs(store);
isLoggedIn.value = useStorage("isLoggedIn", false).value;
</script>

<style>
@import "@/assets/style.css";
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: translateX(-10rem);
}

.fade-enter-active,
.fade-leave-active {
    transition: all 0.5s ease-in-out;
}
</style>
