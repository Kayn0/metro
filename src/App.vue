<template>
  <div>
    <NavBar />
    <router-view />
    <Footer />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar/NavBar.vue";
import Footer from "@/components/Footer/Footer.vue";
export default {
  name: "App",
  components: {
    NavBar,
    Footer,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
  font-family: "Helvetica", "Helvetica Neue", sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-height: 100vh;
  height: calc(100vh - 81px - 54px);
}

.container {
  height: calc(100vh - 81px - 54px);
}
h1 {
  margin: 0;
}
</style>
