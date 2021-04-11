<template>
  <div class="navbar">
    <router-link to="/">
      <img
        class="logo"
        alt="Metro Conveyencers Logo"
        src="../../assets/images/logo.png"
      />
    </router-link>

    <div class="nav-links">
      <router-link to="/" @click="disableDropdown()">Home</router-link>
      <div class="relative">
        <div
          class="nav-link"
          v-on:click="isOpen = !isOpen"
          @focusout="disableDropdown"
          v-bind:class="{
            activateBtn:
              $route.path == '/services/buying' ||
              $route.path == '/services/selling' ||
              $route.path == '/services/financing' ||
              $route.path == '/services/transferring',
          }"
        >
          Services
        </div>
        <div class="dropdown hidden" :class="{ active: isOpen }">
          <router-link
            class="nav-link"
            to="/services/buying"
            v-on:click="disableDropdown()"
          >
            Buying Property
          </router-link>
          <router-link
            class="nav-link"
            to="/services/selling"
            v-on:click="disableDropdown()"
          >
            Selling Property
          </router-link>
          <router-link
            class="nav-link"
            to="/services/transferring"
            v-on:click="disableDropdown()"
          >
            Transferring Property
          </router-link>
          <router-link
            class="nav-link"
            to="/services/financing"
            v-on:click="disableDropdown()"
          >
            Financing Property
          </router-link>
        </div>
      </div>
      <router-link to="/about" v-on:click="disableDropdown()">About</router-link>
      <router-link to="/contact" v-on:click="disableDropdown()">Contact</router-link>
      <router-link to="/faq" v-on:click="disableDropdown()">FAQ'S</router-link>
      <router-link to="/blog" v-on:click="disableDropdown()">Blog</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      isOpen: false,
    };
  },
  props: {},
  created() {
    window.addEventListener("click", (e) => {
      if (!this.$el.contains(e.target)) {
        this.isOpen = false;
      }
    });
  },
  methods: {
    disableDropdown: function () {
      if (this.isOpen === true) {
        this.isOpen = false;
      }
    },

    handleFocus() {
      // do something here
    },
    handleFocusOut(item) {
      if (item.target !== "div.nav-link") {
        this.isOpen = false;
      }
    },
  },
};
</script>

<style scoped>
@import "./Navbar.scss";
</style>
