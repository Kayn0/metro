<template>
  <div>
    <NavBar />
    <router-view />
    <Footer />
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

// global styles
<style>
@font-face {
  font-family: "Helvetica-Light";
  src: local("Helvetica-Light"),
    url(./assets/fonts/helvetica-light.ttf) format("truetype");
}

#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: antialiased;
  text-align: center;
  color: #2c3e50;
  width: 100vw;
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

button {
  outline: none;
}
</style>
