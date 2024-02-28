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
<!--    <Footer />-->
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar/NavBar.vue";
// import Footer from "@/components/Footer/Footer.vue";
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
    // Footer,
    Burger,
    Sidebar
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

@font-face {
  font-family: "Lato-Bold";
  src: local("Lato-Bold"),
  url(./assets/fonts/Lato-Bold.ttf) format("truetype");
}

@font-face {
  font-family: "Lato-Regular";
  src: local("Lato-Regular"),
  url(./assets/fonts/Lato-Regular.ttf) format("truetype");
}

@font-face {
  font-family: "Montserrat-Bold";
  src: local("Montserrat-Bold"),
  url(./assets/fonts/Montserrat-Bold.otf) format("opentype");
}
@font-face {
  font-family: "Montserrat-Bold";
  src: local("Montserrat-Bold"),
  url(./assets/fonts/Montserrat-Bold.otf) format("opentype");
}
@font-face {
  font-family: "Montserrat-Regular";
  src: local("Montserrat-Regular"),
  url(./assets/fonts/Montserrat-Regular.otf) format("opentype");
}

@font-face {
  font-family: "Montserrat-Light";
  src: local("Montserrat-Light"),
  url(./assets/fonts/Montserrat-Light.otf) format("opentype");
}

@font-face {
  font-family: "Oswald-Regular";
  src: local("Oswald-Regular"),
  url(./assets/fonts/oswald-regular.ttf) format("truetype");
}

#app {
  font-family: "Montserrat-Light", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333333;
  width: 100%;
  background: #fafafa;
}

body {
  margin: 0;
  font-family: "Montserrat-Light", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-height: 100vh;
  height: calc(100vh - 81px - 54px);
}

h1 {
  font-size: 32px;
  margin: 0 0 10px;
}

h2 {
  color: #F26101;
  font-family: "Montserrat-Bold", sans-serif;
  font-size: 24px;
  margin: 0 0 30px;
}

h5 {
  color: #304269;
  font-size: 16px;
  font-family: "Montserrat-Bold", sans-serif;
  line-height: 32px;
  font-weight: 500;
  margin: 0;
}

h6 {
  font-size: 16px;
  font-family: "Montserrat-Light", Helvetica, sans-serif;
  margin: 0 0 60px;
  font-weight: 300;
}

p {
  font-size: 16px;
  font-family: "Montserrat-Light", sans-serif;
  line-height: 40px;
  margin: 0;
}

.label-heading {
  align-items: center;
  background: #304269;
  border-radius: 2px;
  color: #FFFFFF;
  display: flex;
  font-family: "Montserrat-Light", sans-serif;
  font-size: 16px;
  height: 52px;
  justify-content: center;
  margin-bottom: 10px;
  padding: 0 30px;
  width: fit-content;
  transition: text-decoration 0.3s ease;
  }

  .label-heading a:hover {
    text-decoration: underline !important;
    cursor: pointer;
  }


button {
  outline: none;
}

.space-top-lge {
  padding-top: 120px;
}
.space-top-med {
  padding-top: 60px;
}

.space-top-sml {
  padding-top: 20px;
}

.space-btm-lge {
  padding-bottom: 100px;
}

.space-btm-med {
  padding-bottom: 60px;
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
  flex-direction: row;
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
