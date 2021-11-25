<template>
    <section class="px-14 pt-20 grid grid-cols-2 gap-6">
        <div class="pr-5 relative">
            <img
                class="ml-auto"
                src="/img/self.png"
                alt="{{ this.data.full_name }}"
            />
            <h3 class="absolute bottom-14 opacity-10 font-black text-6xl z-1">
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
                    Lorem ipsum is placeholder text commonly used in the
                    graphic, print, and publishing industries for previewing.
                </p>

                <router-link to="/about">
                    <button class="aboutMe">Who am I?</button>
                </router-link>
            </div>
            <div class="mt-8">
                <ProjectsList :viewMoreBtn=true />
            </div>
        </div>
    </section>
</template>

<script>
import ProjectsList from '../components/ProjectsList.vue';

export default {
    name: "Home",
    props: {
        data: Object,
    },
    components: { ProjectsList },
    created() {
        this.data.primaryColor = "#FBBF24";
    },
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
</style>
