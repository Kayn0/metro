<template>
  <transition name="zoomIn" class="backdrop">
    <div class="flex-center">
      <div class="modal animate__animated animate__zoomIn animate__faster">
        <div class="header">
          <div class="title">Request Quote</div>
          <div @click="closeModal" class="icon-btn">
            <font-awesome-icon :icon="['fas', 'times']" />
          </div>
        </div>

        <div class="modal-body">
          <form
            id="emailSubmit"
            @submit.prevent="submitForm"
            action=""
            method="post"
            enctype="text/plain"
            target="_blank"
          >
            <div class="checkbox">
              <div class="title">What would you like a quote for?</div>
              <it-checkbox
                type="primary"
                label="Buying Property"
                v-model="form.isBuying"
              />
              <it-checkbox
                type="primary"
                label="Selling Property"
                v-model="form.isSelling"
              />

              <it-checkbox
                type="primary"
                label="Transferring Property"
                v-model="form.isTransferring"
              />

              <it-checkbox
                type="primary"
                label="Financing Property"
                v-model="form.isFinancing"
              />

              <it-checkbox type="primary" label="Other" v-model="form.isOther" />
            </div>
            <it-textarea
              id="emailContent"
              name=""
              v-if="form.isOther === true"
              v-model="form.info"
              label-top="How can we help?"
              class="animate__animated animate__zoomIn animate__faster textarea"
            >
            </it-textarea>
            <div
              class="inputs"
              v-if="
                form.isBuying ||
                form.isSelling ||
                form.isTransferring ||
                form.isFinancing ||
                (form.info && form.isOther)
              "
            >
              <div class="title no-bottom-margin">Enter your details</div>
              <it-input
                v-model="form.firstName.text"
                label-top="First Name"
                v-on:keyup="checkForm"
                type="text"
                :class="{ danger: form.firstName.hasError }"
              />
              <it-input
                v-model="form.lastName.text"
                label-top="Last Name"
                v-on:keyup="checkForm"
                type="text"
                :class="{ danger: form.lastName.hasError }"
              />
              <it-input
                v-model="form.email.text"
                label-top="Email"
                v-on:keyup="checkForm"
                type="text"
                :class="{ danger: form.email.hasError }"
              />
              <it-input
                v-model="form.phone.text"
                label-top="Phone"
                v-on:keyup="checkForm"
                type="number"
                hide-controls="false"
                :class="{ danger: form.phone.hasError }"
              />

              <input
                class="submit-btn"
                type="submit"
                value="Submit"
                :class="{
                  disabled:
                    !form.firstName.text ||
                    !form.lastName.text ||
                    !form.email.text ||
                    !form.phone.text,
                }"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "RequestQuote",
  data() {
    return {
      target: "",
      message: "",
      form: {
        firstName: { text: "", hasError: "" },
        lastName: { text: "", hasError: "" },
        email: { text: "", hasError: "" },
        phone: { text: "", hasError: "" },

        info: "",
        isBuying: "",
        isSelling: "",
        isTransferring: "",
        isFinancing: "",
        isOther: "",
      },
    };
  },
  props: {},
  mounted() {
    const fontImport = document.createElement("link");
    this.setAttributes(fontImport, [
      {
        name: "href",
        value:
          "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons",
      },
      { name: "rel", value: "stylesheet" },
      { name: "type", value: "text/css" },
    ]);
    document.head.appendChild(fontImport);
  },

  methods: {
    closeModal() {
      this.$emit("emitCloseModal");
    },
    setAttributes(elem, attrs) {
      attrs.forEach((attr) => {
        elem.setAttribute(attr.name, attr.value);
      });
    },
    checkForm: function (e) {
      console.log("E", e);
      if (!this.form.firstName.text) {
        this.form.firstName.hasError = true;
      } else {
        this.form.firstName.hasError = false;
      }
      if (!this.form.lastName.text) {
        this.form.lastName.hasError = true;
      } else {
        this.form.lastName.hasError = false;
      }
      if (!this.form.email.text) {
        this.form.email.hasError = true;
      } else {
        this.form.email.hasError = false;
      }
      if (!this.form.phone.text) {
        this.form.phone.hasError = true;
      } else {
        this.form.phone.hasError = false;
      }

      e.preventDefault();
    },
    submitForm() {
      if (
        this.form.firstName.text &&
        this.form.lastName.text &&
        this.form.email.text &&
        this.form.phone.text
      ) {
        this.email();
        // return true;
      }
    },
    email() {
      console.log("?????");
      this.target = "MailTo:kanemaslen@gmail.com&subject=Some Email Subject";
      this.message = "Some email body content";
      document.getElementById("emailSubmit").submit();
    },
  },
};
</script>

<style scoped>
@import "./requestQuote.scss";
</style>
