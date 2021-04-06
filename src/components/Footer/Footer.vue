<template>
  <div class="footer">
    <div>
      <span class="bold">SERVICES</span>
      <span> - Buying - Selling - Transferring - Financing</span>
      <span class="bold label">PHONE</span><span>(02) 9669 6687</span>
      <span class="bold label">FAX</span>(02) 8580 4859
      <span class="bold label">ADDRESS</span> PO Box 310, Rosebery, NSW 1445
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
.footer {
  align-items: center;
  background: #3a525c;
  color: #fff;
  display: flex;
  font-size: 13px;
  height: 54px;
  padding-left: 30px;
}

.footer span.bold {
  font-weight: bold;
}

.label {
  margin-left: 20px;
}

.social-icons {
  font-size: 20px;
  margin-left: auto;
}

.social-icons i,
.social-icons svg {
  cursor: pointer;
  padding-right: 30px;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}

.social-icons svg:hover {
  color: #2fc9d3;
}
</style>
