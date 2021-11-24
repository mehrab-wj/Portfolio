<template>
    <section class="grid grid-cols-2 gap-6 pt-20">
        <Timeline />

        <div class="whoAmI">
            <h2 class="text-3xl font-black">Who am I?</h2>
            <p class="mt-6">
                a full-stack developer with more focus on the back-end for more
                than 7 years of experience.
                <br />
                Founded a lot of start-ups and accomplished a variety of
                freelancing projects!
                <br />
                I
                <label style="color: var(--primary-color)">T</label>urn
                <label style="color: var(--primary-color)">I</label>deas into
                web applications in the
                <label style="color: var(--primary-color)">M</label>ost
                <label style="color: var(--primary-color)">E</label>fficient way
                and <label style="color: var(--primary-color)">Time</label> 😊
            </p>

            <p class="mt-6 w-8/12">
                Lorem ipsum is placeholder text commonly used in the
                graphic, print, and publishing industries for previewing.
            </p>

            <h2 class="text-3xl font-black mt-8">Lorem Ipsum</h2>

            <div class="grid grid-cols-2 gap-4 mt-6">
                <div :key='index' v-for="index in 2" class="p-4 bg-gray-100 shadow text-center rounded-lg">
                    <h3 class='font-bold text-lg'>Lorem Ipsum</h3>
                    <p class='mt-2'>
                        Lorem ipsum is placeholder text commonly used in the
                        graphic, print, and publishing industries for previewing
                        layouts and visual mockups.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Timeline from "../components/Timeline.vue";

export default {
    name: "About",
    props: {
        data: Object,
    },
    components: {
        Timeline,
    },
    created() {
        this.data.primaryColor = "#34D399";
    },
};
</script>
