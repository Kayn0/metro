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
            src="@/assets/images/logo.png"
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

.mobile-nav {
  display: none;
}

.main-nav {
  justify-content: space-between;
  padding: 0;
  width: 100vw;
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

@media only screen and (max-width: 1000px) {
  .mobile-nav {
    display: flex !important;
  }
  .web-nav {
    display: none !important;
  }
}
</style>
