<template>
  <section class="grid grid-cols-2 gap-6 pt-20">
    <Timeline />
  </section>
</template>

<script>
import Timeline from '../components/Timeline.vue';

export default {
  name: "About",
  props: {
    data: Object
  },
  components: {
    Timeline
  },
  created() {
    this.data.primaryColor = "#34D399";
  }
}
</script>