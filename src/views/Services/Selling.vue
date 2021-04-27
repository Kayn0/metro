<template>
  <div id="selling" class="container">
    <div class="banner">
      <div class="heading-container">
        <h1>SELLING PROPERTY</h1>
      </div>
      <div class="image-container">
        <!-- <img class="bg-img" alt="City Silhouette" src="../../assets/images/buying.png" /> -->
      </div>
    </div>
    <div class="content">
      <h3>First time selling?</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "selling",
  created() {
    document.title = "Selling Property";
  },
};
</script>

<style scoped>
@import "./services.scss";
</style>
