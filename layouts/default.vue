<template>
    <ClientOnly>
        <TheNavbar />
    </ClientOnly>
    <Loading class="loader" v-if="showLoading" />
    <slot v-else />
</template>

<script setup>
const showLoading = ref(true);

onMounted(() => {
    showLoading.value = false;
});
</script>
<style scoped>
.loader {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>
