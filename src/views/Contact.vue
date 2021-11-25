<template>
    <section class="pt-20 grid grid-cols-12">
        <div class="text-center col-span-8">
            <h2 class="font-black text-5xl">
                Let's make something
                <br />
                <label>Amazing</label> togheder<label>.</label>
            </h2>

            <form action="javascript:void(0)" class="mt-12 inline-block w-8/12">
                <input
                    type="text"
                    name="full_name"
                    placeholder="Your full name"
                />
                <input
                    type="text"
                    name="subject"
                    placeholder="Your idea or subject"
                />
                <textarea
                    name="message"
                    rows="10"
                    placeholder="Your message to me :)"
                ></textarea>
                <button>Submit!</button>
            </form>
        </div>
        <div class="col-span-4">
            <h2 class="font-black text-5xl mb-12">
                Reach me
                <br />
                Faster
            </h2>

            <ul class="">
                <li>
                    <label class="mr-2"> <i class="fas fa-phone"></i> </label>
                    <a href="tel:+989038267079">+98 903 826 7079</a>
                </li>
                <li class="mt-4">
                    <label class="mr-2">
                        <i class="fas fa-envelope"></i>
                    </label>
                    <a href="mailto:xyzmehrab@gmail.com">xyzmehrab[at]gmail[dot]com</a>
                </li>
                <li class="mt-4">
                    <label class="mr-2"> <i class="fas fa-link"></i> </label>
                    <a href="https://www.mehrab.xyz">https://www.mehrab.xyz</a>
                </li>
            </ul>
        </div>
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
        this.data.primaryColor = "#A78BFA";
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
label {
    color: var(--primary-color);
}
form input,
form textarea {
    @apply block w-full border border-gray-200 py-2 px-6 mb-3 rounded-md shadow-sm focus:outline-none focus:shadow;
}
form input:focus,
form textarea:focus {
    border-color: var(--primary-color);
}
form button {
    @apply py-2 px-6 text-white rounded-md shadow-sm hover:shadow transition duration-200;
    background-color: var(--primary-color);
}
form button:hover {
    background-color: #8b5cf6;
}
a:hover {
    @apply transition duration-200;
    color: var(--primary-color);
}
</style>
