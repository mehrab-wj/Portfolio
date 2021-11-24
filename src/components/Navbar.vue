<template>
    <nav class="flex justify-between items-baseline z-50">
        <h1 class="font-bold text-xl">
            {{ this.data.name }}<label class="text-3xl">.</label>
        </h1>

        <ul class="flex space-x-10">
            <li><router-link to="/">Portfolio</router-link></li>
            <li><router-link to="/about">About me</router-link></li>
            <li><router-link to="/projects">Projects overview</router-link></li>
            <li><router-link to="/contact-me">Contact me</router-link></li>
        </ul>

        <div>
            <a
                :key="social.key"
                v-for="social in this.data.social"
                :href="social.link"
                target="_blank"
                ><i
                    :class="social.icon"
                    class="ml-3 transition duration-200 text-md"
                ></i
            ></a>
        </div>
    </nav>
</template>

<script>
export default {
    name: "Navbar",
    props: ["data"],

    computed: {},
};
</script>

<style lang="postcss" scoped>
nav h1 label {
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
