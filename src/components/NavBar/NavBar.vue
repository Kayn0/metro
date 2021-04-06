<template>
  <div class="navbar">
    <router-link to="/">
      <img class="logo" alt="Metro Conveyencers Logo" src="../../assets/logo.png" />
    </router-link>

    <div class="nav-links">
      <router-link to="/" v-on:click="disableDropdown()">Home</router-link>
      <div class="relative">
        <div class="nav-link" v-on:click="isOpen = !isOpen">Services</div>
        <div class="dropdown hidden" :class="{ active: isOpen }">
          <router-link class="nav-link" to="/services/buying">
            Buying Property
          </router-link>
          <router-link class="nav-link" to="/services/selling">
            Selling Property
          </router-link>
          <router-link class="nav-link" to="/services/transferring">
            Transferring Property
          </router-link>
          <router-link class="nav-link" to="/services/financing">
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
  methods: {
    disableDropdown: function () {
      if (this.isOpen === true) {
        this.isOpen = false;
      }
    },
  },
};
</script>

<style scoped>
.active {
  display: flex !important;
}

.logo {
  padding: 10px;
  width: 134px;
}

.nav-links .active a {
  color: #19292e;
  text-align: left;
  margin: 0;
  padding-left: 10px;
  width: 260px;
  border-radius: 0;
  text-transform: none;
}

.navbar {
  background: #19292e;
  border-bottom: 1px solid #2fc9d3;
  color: #fff;
  display: flex;
  font-size: 16px;
  height: 80px;
  text-transform: uppercase;
}

.nav-links {
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
}
.nav-links a {
  text-decoration: none !important;
  border-radius: 3px;
  color: #fff;
  font-weight: bold;
  height: 44px;
  line-height: 44px;
  text-align: center;
  text-decoration: none;
  margin: 0 10px;
  transition: all 0.3s ease;
  width: 120px;
}

.nav-link {
  border-radius: 3px;
  cursor: pointer;
  color: #fff;
  font-weight: bold;
  height: 44px;
  line-height: 44px;
  text-align: center;
  text-decoration: none;
  margin: 0 10px;
  transition: all 0.3s ease;
  width: 120px;
  background-color: none;
}

a.router-link-exact-active {
  background: #2fc9d3;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  height: 44px;
}

.nav-link:hover,
.navbar a:hover {
  background: #2fc9d3;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}
.navbar > a:hover,
.navbar > a {
  background: none;
}

.dropdown {
  background: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  color: #19292e;
  display: flex;
  flex-direction: column;
  font-weight: normal;
  position: absolute;
}

.dropdown.hidden {
  display: none;
}

.relative {
  position: relative;
}
</style>
