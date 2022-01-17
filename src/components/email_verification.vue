<template>
  <div class="email_verification">
    <!-- heading -->
    <div
      class="heading p-grid p-flex-column p-ai-center p-jc-center p-text-center"
    >
      <!-- title -->
      <div class="title p-col">Enter your OTP</div>

      <!-- sub-title -->
      <div class="sub_title p-col">
        <div>
          For your security, we need to verify your identity. We sent a 5-digit
          code to<b> name@domain.com </b>. Please enter it below.
        </div>
      </div>
    </div>

    <!-- main_components -->
    <div class="main_component p-grid p-jc-center p-ai-center">
      <!-- container -->
      <div class="container p-col p-p-4">
        <!-- fields  -->
        <div class="otp fields">
          <div class="txt-grey">Enter your code</div>
          <div class="input p-d-flex p-jc-between p-my-4">
            <OTPinput ids="one" next="two" />
            <OTPinput ids="two" next="three" />
            <OTPinput ids="three" next="four" />
            <OTPinput ids="four" next="five" />
            <OTPinput ids="five" />
          </div>
        </div>

        <!-- fields -->
        <div class="button fields p-grid p-mb-4">
          <div class="p-col-3 btn_prv">
            <Buttons class="p-button-secondary prev_btn" @click="prevPage()"
              >Back</Buttons
            >
          </div>
          <div class="p-col-9 btn_nxt">
            <Buttons class="submit_btn">Verify</Buttons>
          </div>
        </div>
        <hr />

        <!-- fields -->
        <div class="extra fields p-mt-2">
          <div class="txt-grey p-text-center">
            Didn’t receive the email? Check your spam filter for an email from
            <span class="txt-org">name@domain.com</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OTPinput from "../assets/common/inputtext.vue";
export default {
  components: {
    OTPinput,
  },

  methods: {
    prevPage() {
      this.$emit("prev-page", { pageIndex: 2 });
    },
    inputfocusing(one, two) {
      if (one.value.length) {
        two.focus();
      }
    },
  },
};
</script>

<style scoped>
/* common */
.txt-grey {
  color: var(--txt-grey);
}

.txt-org {
  color: var(--txt-org);
}

/* email verification */

.email_verification {
  font-size: 15px;
  height: 100vh;
  background: rgba(46, 47, 100, 0.03);
}

/* title */

.email_verification .heading .title {
  font-size: 2.25rem;
  font-weight: 700;
  padding: 1.6rem 0.5rem 0 0.5rem;
}

/* sub-title */

.sub_title {
  max-width: 450px;
  width: 100%;
}

/* common grid */

:deep .p-grid {
  margin: 0;
}

/* main-component */

.email_verification .main_component {
  margin-top: 1.8rem;
}

/* component container */
.email_verification .main_component .container {
  max-width: 31.75rem;
  width: 100%;
  background-color: #ffffff;
  border-radius: 3px;
}

/* button -css */

.email_verification .main_component .container .button .btn_nxt {
  padding: 0.5rem 0 0.5rem 0.5rem !important;
}

.email_verification .main_component .container .button .btn_prv {
  padding: 0.5rem 0.5rem 0.5rem 0 !important;
}

.email_verification .main_component .container .button .submit_btn {
  display: block;
  width: 100%;
  background-color: var(--txt-org);
  border-color: var(--txt-org);
}

.email_verification .main_component .container .button .prev_btn {
  display: block;
  width: 100%;
}
</style>
