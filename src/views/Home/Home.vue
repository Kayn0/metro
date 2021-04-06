<template>
  <div class="home">
    <div className="heading">
      <h1>Buying or selling a home?</h1>
      <h1 className="bold">We can help</h1>
      <h5>Affordable, experienced Conveyors, with over 30 years in Sydney</h5>
    </div>

    <div className="link-container">
      <div className="links">
        <div className="row">
          <div className="link button animate">
            <div>Buying Property</div>
            <div className="label">More</div>
          </div>

          <div className="link button animate">
            <div>Selling Property</div>
            <div className="label">More</div>
          </div>
        </div>

        <div className="row">
          <div className="link button animate">
            <div>Transferring Property</div>
            <div className="label">More</div>
          </div>

          <div className="link button animate">
            <div>Financing Property</div>
            <div className="label">More</div>
          </div>
        </div>
      </div>
      <button className="quote-btn">Request A Quote</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "Home",
  components: {
    // HelloWorld
  },
};
</script>

<style scoped>
@import "./Home.scss";
</style>
