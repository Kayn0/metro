<template>
  <transition name="fadeInRightBig" class="backdrop">
    <div class="flex-center">
      <div class="modal animate__animated animate__fadeInRightBig">
        <button @click="closeModal">X</button>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis enim
        libero, at lacinia diam fermentum id. Pellentesque habitant morbi tristique
        senectus et netus.
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: "RequestQuote",
  data() {
    return {};
  },
  props: {
    parentData: Object,
  },
  methods: {
    closeModal() {
      this.$emit("emitCloseModal");
    },
  },
};
</script>

<style scoped>
@import "./requestQuote.scss";
</style>
