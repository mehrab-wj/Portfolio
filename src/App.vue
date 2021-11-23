<template>
  <Navbar />
  <router-view/>
</template>

<script>
import Navbar from './components/Navbar.vue';
export default {
  Name: "App",
  components: {
    Navbar
  },
  data() {
    return {
      name: "Mehrab",
      full_name: "Mehrab Hojjati Pour"
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; 
}
</style>
