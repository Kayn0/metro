<template>
  <div id="work">
    <div class="container">
      <div class="heading">
        <div class="text-container">
          <h1>Hello! <br/>
            I’m Kane Maslen, <br/>
            a UI/UX Designer. <br/>
          </h1>
        </div>
      </div>

      <div class="hero-image">
        <img src="../../assets/images/hero-image.png"
             alt="Main page image"
             class="hero-img"
        />
      </div>
    </div>
    <div class="projects">
      <router-link to="/online-bookings">
      <div class="project">
        <h3>Online Bookings Platform</h3>

      </div>
      </router-link>

      <router-link to="/sales-dashboard">
      <div class="project">
        <h3>Sales Dashboard</h3>
      </div>
      </router-link>

      <div class="project">
        <h3>One Racing League</h3>
      </div>

      <div class="project">
        <h3>SBS Cultural Competence</h3>
      </div>




    </div>

  </div>
</template>

<script>
export default {
  name: "Work.vue"
}
</script>

<style scoped>
@import "./Work.scss";
</style>