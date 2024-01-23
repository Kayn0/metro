<template>
  <div>
    <!-- Navigation for web -->
    <NavBar class="web-nav" />

    <!-- Navigation for Mobile -->
    <div class="mobile-nav">
      <nav class="main-nav">
        <router-link to="/">
          <img
            class="logo"
            alt="Metro Conveyencers Logo"
            src="@/assets/images/kane-maslen-logo.png"
          />
        </router-link>
        <Burger />
      </nav>
      <Sidebar></Sidebar>
    </div>

    <!-- Loaded Page View -->
    <router-view />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar/NavBar.vue";
import Footer from "@/components/Footer/Footer.vue";
import Burger from "@/components/menu/Burger.vue";
import Sidebar from "@/components/menu/Sidebar.vue";

export default {
  name: "App",
  data() {
    return {
      phone: "",
    };
  },
  components: {
    NavBar,
    Footer,
    Burger,
    Sidebar,
  },
  methods: {
    /**
     * @param {string} number
     * the phone number inputted by user, will be formatted along with country code
     * // Ex: inputted: (AU) 0432 432 432
     * // number = '+61432421546'
     *
     * @param {Boolean} isValid
     * @param {string} country
     */
    onInput({ number, isValid, country }) {
      console.log(number, isValid, country);
    },
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

@font-face {
  font-family: "Lexend-Bold";
  src: local("Lexend-Bold"),
  url(./assets/fonts/Lexend-Bold.ttf) format("truetype");
}

@font-face {
  font-family: "Lexend-Regular";
  src: local("Lexend-Regular"),
  url(./assets/fonts/Lexend-Regular.ttf) format("truetype");
}

@font-face {
  font-family: "Lexend-Light";
  src: local("Lexend-Light"),
  url(./assets/fonts/Lexend-Light.ttf) format("truetype");
}

#app {
  font-family: Lexend-Regular, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: antialiased;
  text-align: center;
  color: #333333;
  width: 100%;
  background: #fafafa;
}

body {
  margin: 0;
  font-family: "Lexend-Regular", "Helvetica Neue", sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-height: 100vh;
  height: calc(100vh - 81px - 54px);
}

.container {
  height: calc(80vh - 80px);
}

h1 {
  font-family: "Lexend-Bold", "Helvetica Bold", sans-serif;
  margin: 0;
}

h5 {
  font-family: "Lexend-Regular", "Helvetica Neue", sans-serif;
  font-size: 16px;
}

button {
  outline: none;
}

.space-top-lge {
  padding-top: 100px;
}

.space-top-sml {
  padding-top: 20px;
}

.space-btm-lge {
  padding-bottom: 100px;
}

.space-btm-sml {
  padding-bottom: 20px;
}

.mobile-nav {
  display: none;
}

.main-nav {
  justify-content: space-between;
  padding: 0;
  width: 100%;
  background: #19292e;
  border-bottom: 1px solid #2fc9d3;
  color: #fff;
  display: flex;
  font-size: 16px;
  height: 80px;
  text-transform: uppercase;
}

.main-nav a.router-link-exact-active {
  background-color: transparent;
  box-shadow: none;
}

.group {
  position: relative !important;
  margin-bottom: 45px;
}

.icon-btn {
  color: #fff;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  height: 44px;
  margin-right: 10px;
  transition: color 0.3s ease;
  width: 44px;
}

.icon-btn:hover {
  color: #030303 !important;
}

.flexed {
  display: flex;
}

@media only screen and (max-width: 1000px) {
  .mobile-nav {
    display: flex !important;
    z-index: 99999;
    position: fixed;
    width: 100%;
  }
  .web-nav {
    display: none !important;
  }

  .banner {
    padding-top: 0;
  }
}
</style>
