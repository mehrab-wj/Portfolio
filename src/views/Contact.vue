<template>
    <section class="pt-20">
        Contact form will placed here
    </section>
</template>

<script>
export default {
    name: "Contact",
    props: {
        data: Object,
    },
    components: {},
    created() {
        this.data.primaryColor = "#818CF8";
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