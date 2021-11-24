<template>
    <Navbar :data="data" :currentRoute="currentRoute" />
    <router-view :data="data" />
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
    Name: "App",
    components: {
        Navbar,
    },
    data() {
        return {
            currentRoute: window.location.pathname,
            data: {
                name: "Mehrab",
                full_name: "Mehrab Hojjati Pour",
                role: "Full-stack Developer",
                social: [
                    {
                        key: "instagram",
                        icon: "fab fa-instagram hover:text-purple-500",
                        link: "https://instagram.com/mehrab.xyz",
                    },
                    {
                        key: "telegram",
                        icon: "fab fa-telegram hover:text-blue-400",
                        link: "https://t.me/OneProgrammer",
                    },
                    {
                        key: "twitter",
                        icon: "fab fa-twitter hover:text-blue-600",
                        link: "https://twitter.com/thisismehrab",
                    },
                    {
                        key: "linkedin",
                        icon: "fab fa-linkedin-in hover:text-blue-600",
                        link: "www.linkedin.com/in/mehrab-hp",
                    },
                    {
                        key: "github",
                        icon: "fab fa-github hover:text-gray-800",
                        link: "https://github.com/mehrab-wj",
                    },
                ],
            },
        };
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
