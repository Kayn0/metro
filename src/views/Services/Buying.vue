<template>
  <div id="buying" class="container">
    <div class="banner">
      <div class="heading-container">
        <h1>BUYING PROPERTY</h1>
      </div>
      <div class="image-container">
        <!-- <img class="bg-img" alt="City Silhouette" src="../../assets/images/buying.png" /> -->
      </div>
    </div>
    <div class="content">
      <h3>Are you ready to buy?</h3>
      <p>
        Metro Conveyancing can guide you through the process of buying real estate. We aim
        to make the rights and responsibilities of buyers and sellers clear so you can
        purchase with confidence.
      </p>

      <p>
        We can clarify any matters that you may not be aware of and help you to understand
        the process and the various stages and legal requirements involved. Click the
        Request Quote button for a obligation free quote to get started.
      </p>
      <!-- <div class="flexed">
        <div class="step">
          <div class="step-header">Step 1</div>
          <div class="step-text">Request a quote</div>
        </div>

        <div class="step">
          <div class="step-header">Step 2</div>
          <div class="step-text">
            Review your quote and contact us if you have any questions
          </div>
        </div>

        <div class="step">
          <div class="step-header">Step 3</div>
          <div class="step-text">Engage our services</div>
        </div>
      </div> -->
      <button @click="isShowingQuoteRequest = !isShowingQuoteRequest" class="quote-btn">
        Request Quote
      </button>
      <div v-if="isShowingQuoteRequest">
        <RequestQuote
          :parentData="isShowingQuoteRequest"
          v-on:emitCloseModal="closeModal"
        />
      </div>
    </div>
  </div>
</template>

<script>
import RequestQuote from "@/components/RequestQuote/RequestQuote.vue";

export default {
  name: "buying",
  data() {
    return {
      isShowingQuoteRequest: false,
    };
  },
  methods: {
    closeModal() {
      this.isShowingQuoteRequest = false;
    },
  },
  components: {
    RequestQuote,
  },
  created() {
    document.title = "Buying Property";
  },
};
</script>

<style scoped>
@import "./services.scss";
</style>
