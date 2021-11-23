<template>
    <nav class="flex justify-between pt-4 px-4 items-baseline">
        <h1 class="font-bold text-xl">
            {{ this.data.name
            }}<label class="text-yellow-400 text-3xl">.</label>
        </h1>

        <ul class="flex space-x-10">
            <li><a class="active" href="#">Portfolio</a></li>
            <li><a class="" href="#">About me</a></li>
            <li><a class="" href="#">Skills</a></li>
            <li><a class="" href="#">Contact me</a></li>
        </ul>

        <div>
            <a
                :key="social.key"
                v-for="social in this.data.social"
                :href="social.link"
                target="_blank"
                ><i :class="social.icon" class="ml-3 transition duration-200 text-md"></i
            ></a>
        </div>
    </nav>
</template>

<script>
export default {
    name: "Navbar",
    props: ["data"],
};
</script>

<style lang="postcss" scoped>
nav ul li a {
    @apply cursor-pointer pb-1 hover:text-yellow-400 border-b-2 border-transparent hover:border-yellow-400 transition duration-200;
}
nav ul li a.active {
    @apply text-yellow-400 border-yellow-400;
}
</style>
