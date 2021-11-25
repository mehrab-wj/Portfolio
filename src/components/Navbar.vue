<template>
    <nav class="flex justify-between items-baseline z-50 relative">
        <h1 class="font-bold text-xl">
            {{ this.data.name }}<label class="text-3xl">.</label>
        </h1>
        <div
            id="navbar-items"
            :class="[
                menuOpen
                    ? 'slide-in-top rounded-md flex justify-center flex-wrap absolute top-11 shadow-lg p-6 w-full bg-white'
                    : 'hidden md:flex lg:flex justify-between flex-grow',
            ]"
        >
            <ul
                :class="
                    menuOpen
                        ? 'w-full text-center space-y-4'
                        : 'flex space-x-4 lg:space-x-10 mx-auto'
                "
            >
                <li @click="toggleMenu(true)">
                    <router-link to="/">Portfolio</router-link>
                </li>
                <li @click="toggleMenu(true)">
                    <router-link to="/about">About me</router-link>
                </li>
                <li @click="toggleMenu(true)">
                    <router-link to="/projects">Projects overview</router-link>
                </li>
                <li @click="toggleMenu(true)">
                    <router-link to="/contact-me">Contact me</router-link>
                </li>
            </ul>

            <div
                :class="
                    menuOpen
                        ? 'w-full mt-6 text-center space-x-4'
                        : 'space-x-3 lg:space-x-5'
                "
            >
                <a
                    :key="social.key"
                    v-for="social in this.data.social"
                    :href="social.link"
                    target="_blank"
                    ><i
                        :class="social.icon"
                        class="transition duration-200 text-lg"
                    ></i
                ></a>
            </div>
        </div>
        <button
            id="mobileMenuBtn"
            @click="toggleMenu()"
            class="text-2xl md:hidden transition duration-500"
        >
            <i :class="mobileMenuIcon"></i>
        </button>
    </nav>
</template>

<script>
export default {
    name: "Navbar",
    props: ["data"],
    data() {
        return {
            menuOpen: false,
            mobileMenuIcon: "fas fa-bars",
        };
    },
    methods: {
        toggleMenu(forceClose = false) {
            this.menuOpen = forceClose ? false : !this.menuOpen;
            if (this.menuOpen) {
                this.mobileMenuIcon = "fas fa-times opacity-20";
                document.querySelector("#mobileMenuBtn").style.transform =
                    "rotate(360deg)";
                return;
            }
            this.mobileMenuIcon = "fas fa-bars";
            document.querySelector("#mobileMenuBtn").style.transform =
                "rotate(0deg)";
        },
    },
    computed: {},
};
</script>

<style lang="postcss" scoped>
nav h1 label,
.fa-bars {
    color: var(--primary-color);
}
nav ul li a {
    @apply cursor-pointer pb-1 border-b-2 border-transparent transition duration-200;
}
nav ul li a:hover,
nav ul li a.router-link-active,
nav ul li a.router-link-exact-activ {
    color: var(--primary-color);
    border-color: var(--primary-color);
}
.slide-in-top {
	-webkit-animation: slide-in-top 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: slide-in-top 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
.scale-out-ver-top {
	-webkit-animation: scale-out-ver-top 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
	        animation: scale-out-ver-top 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
}
@-webkit-keyframes scale-out-ver-top {
  0% {
    -webkit-transform: scaleY(1);
            transform: scaleY(1);
    -webkit-transform-origin: 100% 0%;
            transform-origin: 100% 0%;
    opacity: 1;
  }
  100% {
    -webkit-transform: scaleY(0);
            transform: scaleY(0);
    -webkit-transform-origin: 100% 0%;
            transform-origin: 100% 0%;
    opacity: 1;
  }
}
@keyframes scale-out-ver-top {
  0% {
    -webkit-transform: scaleY(1);
            transform: scaleY(1);
    -webkit-transform-origin: 100% 0%;
            transform-origin: 100% 0%;
    opacity: 1;
  }
  100% {
    -webkit-transform: scaleY(0);
            transform: scaleY(0);
    -webkit-transform-origin: 100% 0%;
            transform-origin: 100% 0%;
    opacity: 1;
  }
}
@-webkit-keyframes slide-in-top {
  0% {
    -webkit-transform: translateY(-1000px);
            transform: translateY(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    opacity: 1;
  }
}
@keyframes slide-in-top {
  0% {
    -webkit-transform: translateY(-1000px);
            transform: translateY(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    opacity: 1;
  }
}
</style>
