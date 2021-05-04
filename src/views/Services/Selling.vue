<template>
  <div id="selling" class="container">
    <div class="banner">
      <div class="heading-container">
        <h1>SELLING PROPERTY</h1>
      </div>
      <div class="image-container">
        <!-- <img class="bg-img" alt="City Silhouette" src="../../assets/images/buying.png" /> -->
      </div>
    </div>
    <div class="content">
      <h3>First time selling?</h3>
      <p>
        If you have decided to sell your property the first thing you should do is consult
        your solicitor or conveyancer. The law requires a contract to be available for
        inspection by prospective purchasers, so doing this before your property is listed
        or advertised for sale will save you time.
      </p>
      <p>
        Some sellers (vendors) like to act for themselves but you still need to have a
        contract prepared before proceeding. Assuming you are using an agent, Metro
        Conveyancing can prepare a contract in accordance with your instructions and the
        legal requirements for forwarding to your nominated agent.
      </p>

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
  name: "selling",
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
    document.title = "Selling Property";
  },
};
</script>

<style scoped>
@import "./services.scss";
</style>
