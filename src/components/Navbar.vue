<template>
    <nav class="flex justify-between items-baseline z-50 relative">
        <h1 class="font-bold text-xl">
            {{ this.data.name }}<label class="text-3xl">.</label>
        </h1>

        <div
            id="navbar-items"
            :class="[
                menuOpen
                    ? 'rounded-md flex justify-center flex-wrap absolute top-11 shadow-lg p-6 w-full bg-white'
                    : 'hidden md:flex lg:flex justify-between flex-grow',
            ]"
        >
            <ul
                :class="
                    menuOpen
                        ? 'w-full text-center space-y-3'
                        : 'flex space-x-4 lg:space-x-10 mx-auto'
                "
            >
                <li><router-link to="/">Portfolio</router-link></li>
                <li><router-link to="/about">About me</router-link></li>
                <li>
                    <router-link to="/projects">Projects overview</router-link>
                </li>
                <li><router-link to="/contact-me">Contact me</router-link></li>
            </ul>

            <div
                :class="
                    menuOpen
                        ? 'w-full mt-6 text-center space-x-4'
                        : 'space-x-3 lg:space-x-5'
                "
            >
                <a
                    :key="social.key"
                    v-for="social in this.data.social"
                    :href="social.link"
                    target="_blank"
                    ><i
                        :class="social.icon"
                        class="transition duration-200 text-lg"
                    ></i
                ></a>
            </div>
        </div>

        <button @click="toggleMenu" class="text-2xl md:hidden">
            <i class="fas fa-braille"></i>
        </button>
    </nav>
</template>

<script>
export default {
    name: "Navbar",
    props: ["data"],
    data() {
        return {
            menuOpen: false,
        };
    },
    methods: {
        toggleMenu() {
            this.menuOpen = !this.menuOpen;
        },
    },
    computed: {},
};
</script>

<style lang="postcss" scoped>
nav h1 label,
.fa-braille {
    color: var(--primary-color);
}
nav ul li a {
    @apply cursor-pointer pb-1 border-b-2 border-transparent transition duration-200;
}
nav ul li a:hover,
nav ul li a.router-link-active,
nav ul li a.router-link-exact-activ {
    color: var(--primary-color);
    border-color: var(--primary-color);
}
</style>
