<template>
    <h2 class="text-3xl font-black">Latest Projects</h2>

    <div class="projects-area z-30" v-dragscroll>
        <img src="/img/example-work.jpg" alt="Example work" />
        <img src="/img/example-work.jpg" alt="Example work" />
        <img src="/img/example-work.jpg" alt="Example work" />
        <img src="/img/example-work.jpg" alt="Example work" />
        <img src="/img/example-work.jpg" alt="Example work" />
    </div>
    <router-link v-if="this.viewMoreBtn" to="/projects">
        <button class="view-more">view more</button>
    </router-link>
</template>

<script>
export default {
    name: "ProjectsList",
    props: {
        viewMoreBtn: { type: Boolean, default: false },
    },
};
</script>

<style lang="postcss" scoped>
.projects-area {
    @apply mt-6 flex flex-nowrap space-x-6 overflow-hidden;
}
.projects-area img {
    @apply w-48 h-40 rounded-2xl;
}
.view-more {
    @apply block text-sm my-4 ml-1;
    color: var(--primary-color);
}
</style>
