<template>
  <div id="about" class="container">
    <h1>This is an about page</h1>
    <router-link to="/">Home</router-link>
  </div>
</template>

<script>
export default {
  name: "about",
  created() {
    document.title = "About Us";
  },
};
</script>

<style scoped>
@import "./about.scss";
</style>
