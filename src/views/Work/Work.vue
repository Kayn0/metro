<template>
  <div id="work">
    <div class="container">

      <div class="flex-row">
        <div class="site-header">I solve
          <div class="highlight">complex</div>
          design problems, with simple solutions.</div>
        <div class="button-container">
          <div class="button" onclick="location.href='mailto:kanemaslen@gmail.com';">
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
              <h4>Modernising the online bookings experience for the Allied Health industry</h4>
            </div>
            <div>
              <img class="ob-bg" src="../../assets/images/work-ob.png" alt="online bookings hero" />
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
              <img class="ob-bg" src="../../assets/images/work-sales.png" alt="online bookings hero" />
            </div>
          </div>
        </router-link>

        <router-link to="/clinical-notes">
          <div class="case">
            <div>
              <h3>Clinical Notes Redesign</h3>
              <h4>Supporting Healthcare practitioners by facilitating streamlined clinical notes</h4>
            </div>
            <div>
              <img class="ob-bg" src="../../assets/images/work-notes.png" alt="online bookings hero" />
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