<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
export default {
  name: "About",
  props: {
    data: Object
  },
  created() {
    this.data.primaryColor = "#34D399";
  }
}
</script>