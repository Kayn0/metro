<template>
  <div class="home">
    <div class="heading">
      <h1>Buying or selling a home?</h1>
      <h1 class="bold">We can help</h1>
      <h5>Affordable experienced Conveyors, with over 30 years in Sydney</h5>
    </div>

    <div class="link-container">
      <div class="links">
        <div class="row">
          <router-link to="/services/buying">
            <div class="link button">
              <div>Buying Property</div>
              <div class="label">More</div>
            </div>
          </router-link>
          <router-link to="/services/selling">
            <div class="link button animate">
              <div>Selling Property</div>
              <div class="label">More</div>
            </div>
          </router-link>
        </div>

        <div class="row">
          <router-link to="/services/transferring">
            <div class="link button animate">
              <div>Transferring Property</div>
              <div class="label">More</div>
            </div>
          </router-link>
          <router-link to="/services/financing">
            <div class="link button animate">
              <div>Financing Property</div>
              <div class="label">More</div>
            </div>
          </router-link>
        </div>
      </div>
      <button :class="{ 'jello animated': animated }" class="quote-btn">
        Request A Quote
      </button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "Home",
  data() {
    return {
      animated: false,
    };
  },
  methods: {
    animate: function () {
      console.log("TEST");
      var self = this;
      self.animated = true;
      setTimeout(function () {
        self.animated = false;
      }, 1000);
    },
  },
  created() {
    document.title = "Metro Conveyancing";
  },
};
</script>

<style scoped>
@import "./Home.scss";
</style>
