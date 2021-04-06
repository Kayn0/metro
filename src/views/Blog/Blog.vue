<template>
  <div id="blog" class="container">
    <h1>This is the Blog page</h1>
  </div>
</template>

<script>
export default {
  name: "blog",
  created() {
    document.title = "Metro Blog";
  },
};
</script>

<style scoped>
@import "./blog.scss";
</style>
