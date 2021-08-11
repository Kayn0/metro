<template>
  <div id="contact" class="container">
    <div class="banner">
      <div class="heading-container">
        <h1>CONTACT US</h1>
      </div>
      <div class="image-container"></div>
    </div>

    <div class="content">
      Phone: 02 9669 6687 Fax: 02 8580 4859 Address: Suite 114, 30-40 Harcourt Parade,
      Rosebery NSW 2018 Postal: PO Box 310 Rosebery NSW 1445

      <a
        href="https://www.google.com.au/maps?q=Suite+114,+30-40+Harcourt+Parade,+Rosebery+NSW+2018&ie=UTF8&hq&hnear=114/30-40+Harcourt+Parade,+Rosebery+New+South+Wales+2018&t=m&ll=-33.919931,151.202688&spn=0.021367,0.025749&z=14&iwloc=A&source=embed"
        >View Map</a
      >

      <form
        id="contactSubmit"
        @submit.prevent="submitForm"
        action=""
        method="post"
        enctype="text/plain"
        target="_blank"
      >
        <it-input
          v-model="form.firstName.text"
          label-top="First Name"
          v-on:keyup="checkForm(test)"
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
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "contact",
  data() {
    return {
      form: {
        firstName: { text: "", hasError: "" },
        lastName: { text: "", hasError: "" },
        email: { text: "", hasError: "" },
        phone: { text: "", hasError: "" },
      },
    };
  },
  created() {
    document.title = "Contact Us";
  },
  methods: {
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
@import "./contact.scss";
</style>
