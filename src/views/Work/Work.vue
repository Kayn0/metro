<template>
  <div id="work">
    <div class="container">

      <div class="flex-row">
        <div class="site-header">Hello, I design
          <div class="highlight">complex</div>
          user interfaces and experiences.</div>
        <div class="button-container">
          <div class="button">Email Me</div>
        </div>
      </div>

      <div class="cases">

        <router-link to="/online-bookings">
          <div class="case">
            <div>
              <h2>Online Bookings Platform</h2>
              <h4>Providing Allied Health Patients an enjoyable Online Booking experience.</h4>
            </div>
            <div>
              <img class="ob-bg" src="../../assets/images/ob-bg.png" alt="online bookings hero" />
            </div>
          </div>
        </router-link>

        <router-link to="/sales-dashboard">
          <div class="case">
            <div>
              <h2>Sales Dashboard</h2>
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
              <h2>Clinical Notes Redesign</h2>
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