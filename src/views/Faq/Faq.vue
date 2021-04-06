<template>
  <div id="faq" class="container">
    <h1>This is the FAQ'S page</h1>
  </div>
</template>

<script>
export default {
  name: "faq",
  created() {
    document.title = "FAQ'S";
  },
};
</script>

<style scoped>
@import "./faq.scss";
</style>
