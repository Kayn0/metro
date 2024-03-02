<template>
  <div id="work">
    <div class="container">

      <div class="flex-row">
        <div class="site-header">I solve
          <div class="highlight">complex</div>
          design problems, with simple solutions.</div>
        <div class="button-container">
          <div class="button">
            <font-awesome-icon :icon="['fas', 'envelope']" />
            <div>EMAIL ME</div>
          </div>
        </div>
      </div>

      <div class="cases">

        <router-link to="/online-bookings">
          <div class="case">
            <div>
              <h3>Online Bookings Platform</h3>
              <h4>Modernising the Online Bookings experience for the Allied Health Industry</h4>
            </div>
            <div>
              <img class="ob-bg" src="../../assets/images/ob-bg.png" alt="online bookings hero" />
            </div>
          </div>
        </router-link>

        <router-link to="/sales-dashboard">
          <div class="case">
            <div>
              <h3>Sales Dashboard</h3>
              <h4>Effectively managing the signup journey for Nookal customers</h4>
            </div>
            <div>
              <img class="ob-bg" src="../../assets/images/ob-bg.png" alt="online bookings hero" />
            </div>
          </div>
        </router-link>

        <router-link to="/clinical-notes">
          <div class="case">
            <div>
              <h3>Clinical Notes Redesign</h3>
              <h4>Supporting Healthcare Practitioners by facilitating a streamlined clinical note taking experience.</h4>
            </div>
            <div>
              <img class="ob-bg" src="../../assets/images/ob-bg.png" alt="online bookings hero" />
            </div>
          </div>
        </router-link>


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