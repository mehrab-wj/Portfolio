<template>
    <section class="px-4 pt-16 grid grid-cols-2 gap-6">
        <div class="pr-5 relative">
            <img
                class="ml-auto"
                src="/img/self.png"
                alt="{{ this.data.full_name }}"
            />
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

                <button class="aboutMe">
                    Who am I?
                </button>
            </div>
            <div class='mt-8'>
              <h1 class="text-3xl font-black">Latest Projects</h1>

              <div class='projects-area' v-dragscroll>
                <img src="/img/example-work.jpg" alt="Example work">
                <img src="/img/example-work.jpg" alt="Example work">
                <img src="/img/example-work.jpg" alt="Example work">
                <img src="/img/example-work.jpg" alt="Example work">
                <img src="/img/example-work.jpg" alt="Example work">
              </div>
              <a href="#" class='block text-yellow-400 text-sm mt-4 ml-1'>view more</a>
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
    components: { },
};
</script>

<style lang="postcss" scoped>
  button.aboutMe {
    @apply mt-6 bg-transparent py-3 px-10 border text-gray-800 border-gray-300 rounded-sm transition duration-200;
  }
  button.aboutMe:hover {
    @apply text-yellow-400 border-yellow-400 shadow-sm
  }
  .projects-area {
    @apply mt-6 flex flex-nowrap space-x-6 overflow-hidden;
  }
  .projects-area img {
    @apply w-48 h-40 rounded-2xl;
  }
</style>
