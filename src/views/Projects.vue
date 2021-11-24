<template>
    <section class="pt-20">Projects will be here</section>
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
            this.transitionName =
                toDepth < fromDepth ? "fade" : "slide-left";
        },
    },
};
</script>
