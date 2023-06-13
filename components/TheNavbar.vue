<template>
    <nav class="navbar navbar-container navbar-expand-md">
        <div class="container">
            <div class="navbar-logo">
                <NuxtLink
                    to="/"
                    class="navbar-title"
                    @click="showNavbar = false"
                >
                    <h1>{{ carShowRoomName }}</h1>
                    <img src="@/assets/favicon-car.png" />
                </NuxtLink>
                <p>{{ tagLine }}</p>
            </div>
            <button
                class="navbar-toggler"
                type="button"
                @click="showNavbar = !showNavbar"
                :aria-expanded="showNavbar ? 'true' : 'false'"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div
                class="collapse navbar-collapse"
                :class="{ show: showNavbar }"
                id="navbarNav"
            >
                <ul class="navbar-nav">
                    <template v-if="isLoggedIn">
                        <NuxtLink
                            to="/"
                            class="nav-item nav-button"
                            @click="showNavbar = false"
                        >
                            Home
                        </NuxtLink>
                        <NuxtLink
                            to="/login"
                            class="nav-item nav-button"
                            @click="logout"
                        >
                            Logout
                        </NuxtLink>
                    </template>
                    <template v-else>
                        <NuxtLink
                            to="/login"
                            class="nav-item nav-button"
                            @click="showNavbar = false"
                        >
                            Login
                        </NuxtLink>
                        <NuxtLink
                            to="/register"
                            class="nav-item nav-button"
                            @click="showNavbar = false"
                        >
                            Register
                        </NuxtLink>
                    </template>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";
import useGlobalStore from "../stores/globalStore";
const name = "Navbar";
const carShowRoomName = "CarNation";
const tagLine = "-Accelerate your journey with us.";
const showNavbar = ref(false);
const store = useGlobalStore();
const { isLoggedIn } = storeToRefs(store);

function logout() {
    showNavbar.value = false;
    isLoggedIn.value = false;
    localStorage.setItem("isLoggedIn", false);
    localStorage.removeItem("isToken", false);
}
</script>

<style scoped>
.navbar-nav .router-link-active {
    color: white;
    font-weight: 700;
    opacity: 1;
}
.navbar {
    padding: 0px;
}
.navbar-container {
    display: flex;
    justify-content: space-around;
    background-color: #39484a;
    overflow: hidden;
    width: 100%;
    position: sticky;
    top: 0;
    text-align: center;
    z-index: 10;
}

.navbar-title {
    display: flex;
    align-items: center;
    text-decoration: none;
}

.navbar-title img {
    width: 50px;
}

.navbar-container h1 {
    line-height: 1;
    padding: 0px 5px;
    font-weight: 600;
    font-size: 35px;
    background: #f1f6f9;
    background-size: cover;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}

.navbar-container p {
    line-height: 1;
    margin: 0;
    padding: 5px;
    font-weight: 600;
    background: #f1f6f9;
    font-size: 20px;
    background-size: cover;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}

.navbar-logo {
    display: "flex";
    justify-content: "space-evenly";
    min-width: 250px;
}

#navbarNav {
    flex-direction: row-reverse;
}

.nav-button-container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.nav-button {
    background: transparent;
    color: #f1f6f9;
    font-size: 25px;
    margin: 0 10px;
    opacity: 0.8;
    text-decoration: none;
}

@media (max-width: 767px) {
    .navbar-logo p {
        display: none;
    }
}

@media screen and (max-width: 991px) {
    .nav-button {
        font-size: 22px;
    }
}
</style>
