<template>
  <div id="transferring" class="container">
    <div class="banner">
      <div class="heading-container">
        <h1>TRANSFERRING PROPERTY</h1>
      </div>
      <div class="image-container"></div>
    </div>
    <div class="content">
      <h3>Transferring property without a contract?</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>

      <p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.
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
  name: "transferring",
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
    document.title = "Transferring Property";
  },
};
</script>

<style scoped>
@import "./services.scss";
</style>
