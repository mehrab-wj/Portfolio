<template>
    <img class="absolute right-0 top-0 -z-1" src="/img/cubic.png" />
    <section class="px-14 pt-20 grid grid-cols-2 gap-6">
        <div class="pr-5 relative">
            <img
                class="ml-auto"
                src="/img/self.png"
                alt="{{ this.data.full_name }}"
            />
            <h3 class="absolute bottom-14 opacity-10 font-black text-6xl -z-1">
                {{ this.data.role }}
            </h3>
        </div>
        <div class="pr-5">
            <div>
                <h1 class="text-3xl font-black">{{ this.data.full_name }}</h1>
                <p class="mt-8 w-8/12">
                    I'm a full-stack developer with more focused on Back-end I
                    have more than 7 years of experience in many different
                    languages Love to create new things and make customers happy
                    :)
                </p>

                <p class="mt-6 w-8/12">
                    I'm a full-stack developer with more focused on Back-end I
                    have more than 7 years of experience in many different
                    languages Love to create new things and make customers happy
                    :)
                </p>

                <router-link to="/about">
                    <button class="aboutMe">Who am I?</button>
                </router-link>
            </div>
            <div class="mt-8">
                <h1 class="text-3xl font-black">Latest Projects</h1>

                <div class="projects-area z-30" v-dragscroll>
                    <img src="/img/example-work.jpg" alt="Example work" />
                    <img src="/img/example-work.jpg" alt="Example work" />
                    <img src="/img/example-work.jpg" alt="Example work" />
                    <img src="/img/example-work.jpg" alt="Example work" />
                    <img src="/img/example-work.jpg" alt="Example work" />
                </div>
                <a href="#" class="view-more">view more</a>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Home",
    props: {
        data: Object,
    },
    components: {},
    computed: {},
};
</script>

<style lang="postcss" scoped>
button.aboutMe {
    @apply mt-6 bg-transparent py-3 px-10 border text-gray-800 border-gray-300 rounded-sm transition duration-200;
}
button.aboutMe:hover {
    @apply shadow-sm;
    color: var(--primary-color);
    border-color: var(--primary-color);
}
.projects-area {
    @apply mt-6 flex flex-nowrap space-x-6 overflow-hidden;
}
.projects-area img {
    @apply w-48 h-40 rounded-2xl;
}
a.view-more {
    @apply block text-sm my-4 ml-1;
    color: var(--primary-color);
}
.-z-1 {
    z-index: -1;
}
</style>
