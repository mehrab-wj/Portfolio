<template>
    <div :style="cssVars" class="px-14 pt-4">
        <Navbar :data="data" />
        <img class="absolute right-0 top-0 -z-1" src="/img/cubic.png" />
        <router-view :data="data" v-slot="{ Component }">
            <transition name="fade">
                <component :is="Component" />
            </transition>
        </router-view>
    </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
    Name: "App",
    components: {
        Navbar,
    },
    async beforeCreate() {
        fetch(
            "/api?_fields=name,description,url,site_logo"
        )
            .then((response) => response.json())
            .then((data) => {
                this.data.name = data.name;
                this.data.tag_line = data.description;
                document.title =
                    this.data.full_name + " | " + this.data.tag_line;
            });
    },
    data() {
        return {
            currentRoute: window.location.pathname,
            data: {
                primaryColor: "#FBBF24",
                name: "Mehrab",
                full_name: "Mehrab Hojjati Pour",
                tag_line: "Loading ...",
                description: "Loading ...",
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
    computed: {
        cssVars() {
            return {
                "--primary-color": this.data.primaryColor,
            };
        },
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease-out;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateY(-20px);
    opacity: 0;
}
.-z-1 {
    z-index: -1;
}
</style>
