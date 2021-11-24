<template>
    <section class="grid grid-cols-5 gap-4 pt-20">
        <div class="col-span-2">
            <div class="category active">
                <div class="category-circle">
                    <i class="fal fa-laptop-code"></i>
                </div>

                <div class="inline-block">
                    <h3 class="text-xl font-bold">Back-end development</h3>
                    <p class="opacity-80">69 Project Listed</p>
                </div>
            </div>
            <div class="category">
                <div class="category-circle">
                    <i class="far fa-code"></i>
                </div>

                <div class="inline-block">
                    <h3 class="text-xl font-bold">Front-end development</h3>
                    <p class="opacity-80">5 Project Listed</p>
                </div>
            </div>
            <div class="category">
                <div class="category-circle">
                    <i class="far fa-terminal"></i>
                </div>

                <div class="inline-block">
                    <h3 class="text-xl font-bold">Python development</h3>
                    <p class="opacity-80">5 Project Listed</p>
                </div>
            </div>
        </div>
        <div class="pl-8 col-span-3">
            <h2 class="text-3xl font-black">Back-end development</h2>
            <p class="mt-6">
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups.
            </p>

            <div class="flex justify-between gap-3 mt-6">
                <div>
                    <h2 class="text-3xl font-black mt-6">+69</h2>
                    <label>Project completed</label>
                </div>
                <div>
                    <h2 class="text-3xl font-black mt-6">+1</h2>
                    <label> Billion line code written</label>
                </div>
                <div>
                    <h2 class="text-3xl font-black mt-6">+50</h2>
                    <label> Happy clients</label>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Projects",
    props: {
        data: Object,
    },
    components: {},
    created() {
        this.data.primaryColor = "#60A5FA";
    },
    watch: {
        $route(to, from) {
            const toDepth = to.path.split("/").length;
            const fromDepth = from.path.split("/").length;
            this.transitionName = toDepth < fromDepth ? "fade" : "slide-left";
        },
    },
};
</script>

<style lang="postcss" scoped>
.category {
    @apply bg-gray-100 rounded-xl py-6 px-8 flex gap-4 transition duration-200 mb-6;
}
.category:not(.active) {
    cursor: pointer;
}
.category-circle {
    @apply bg-gray-400 my-auto rounded-full py-4 px-5 text-white transition duration-200;
}
.category.active .category-circle,
.category:hover .category-circle {
    background: var(--primary-color);
}
</style>
