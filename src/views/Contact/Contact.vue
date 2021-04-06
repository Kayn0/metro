<template>
  <div id="contact" class="container">
    <h1>This is the Contact page</h1>
  </div>
</template>

<script>
export default {
  name: "contact",
  created() {
    document.title = "Contact Us";
  },
};
</script>

<style scoped>
@import "./contact.scss";
</style>
