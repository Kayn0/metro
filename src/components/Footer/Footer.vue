<template>
  <div class="footer">
    <div class="footer-info bold">
      <div class="flexed">
        <span class="right-margin-small">SERVICES</span>

        <span class="footer-links">
          <router-link to="/services/buying">Buying</router-link> &#8226;
          <router-link to="/services/selling">Selling</router-link> &#8226;
          <router-link to="/services/transferring">Transferring</router-link> &#8226;
          <router-link to="/services/financing">Financing</router-link>
        </span>
      </div>

      <div class="flexed">
        <span>PHONE</span>
        <div>(02) 9669 6687</div>
      </div>

      <div class="flexed">
        <span class="">FAX</span>
        <div>(02) 8580 4859</div>
      </div>

      <div class="flexed">
        <span>ADDRESS</span>
        <div>PO Box 310, Rosebery, NSW 1445</div>
      </div>
    </div>

    <div class="social-icons">
      <span class="fb">
        <font-awesome-icon :icon="['fab', 'facebook-square']" />
      </span>
      <span class="tw">
        <font-awesome-icon :icon="['fab', 'twitter']" />
      </span>
      <span class="yt">
        <font-awesome-icon :icon="['fab', 'youtube']" />
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: {},
};
</script>

<style scoped>
@import "./footer.scss";
</style>
