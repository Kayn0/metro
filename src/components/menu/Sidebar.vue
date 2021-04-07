<template>
  <div class="sidebar">
    <div class="sidebar-backdrop" @click="closeSidebarPanel" v-if="isPanelOpen"></div>
    <transition name="slide">
      <div v-if="isPanelOpen" class="sidebar-panel">
        <ul class="sidebar-panel-nav">
          <router-link to="/" @click="closeSidebarPanel" v-if="isPanelOpen">
            Home
          </router-link>

          <router-link
            to="/services/buying"
            @click="closeSidebarPanel"
            v-if="isPanelOpen"
          >
            Buying Property
          </router-link>

          <router-link
            to="/services/selling"
            @click="closeSidebarPanel"
            v-if="isPanelOpen"
          >
            Selling Property
          </router-link>

          <router-link
            to="/services/transferring"
            @click="closeSidebarPanel"
            v-if="isPanelOpen"
          >
            Transferring Property
          </router-link>

          <router-link
            to="/services/financing"
            @click="closeSidebarPanel"
            v-if="isPanelOpen"
          >
            Financing Property
          </router-link>

          <router-link to="/about" @click="closeSidebarPanel" v-if="isPanelOpen">
            About
          </router-link>

          <router-link to="/contact" @click="closeSidebarPanel" v-if="isPanelOpen">
            Contact
          </router-link>

          <router-link to="/faq" @click="closeSidebarPanel" v-if="isPanelOpen">
            FAQ'S
          </router-link>

          <router-link to="/blog" @click="closeSidebarPanel" v-if="isPanelOpen">
            Blog
          </router-link>
        </ul>
      </div>
    </transition>
  </div>
</template>
<script>
import { store, mutations } from "@/store.js";

export default {
  methods: {
    closeSidebarPanel: mutations.toggleNav,
  },
  computed: {
    isPanelOpen() {
      return store.isNavOpen;
    },
  },
};
</script>
<style>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.2s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(-100%);
  transition: all 150ms ease-in 0s;
}

.sidebar-backdrop {
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  cursor: pointer;
}

.sidebar-panel {
  overflow-y: auto;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  color: #19292e;
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  z-index: 999;
  padding: 3rem 20px 2rem 20px;
  width: 300px;
}

ul.sidebar-panel-nav {
  list-style-type: none;
  padding: 0;
  margin: 0;
  line-height: 44px;
  display: flex;
  flex-direction: column;
}
a:-webkit-any-link {
  text-decoration: none;
  color: #19292e;
}
ul.sidebar-panel-nav > ul > a {
  color: #19292e;
  text-decoration: none !important;
  font-size: 1.5rem;
  display: block;
  padding-bottom: 0.5em;
}
</style>
