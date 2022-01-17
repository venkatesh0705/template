<template>
  <input :id="ids" class="otp_input" type="text" maxlength="1" />
</template>

<script>
export default {
  name: "OTPinput",
  props: {
    ids: String,
    next: String,
  },

  // <!-- @keyup="clickEvent(this, `${next}`)" -->
  methods: {
    // clickEvent(first, two) {
    //   if (first.value.length) {
    //     two.focus();
    //   }
    // },
  },
};
</script>

<style>
.otp_input {
  max-width: 3.75rem !important;
  height: 3.75rem !important;
  text-align: center;
  border: 2px solid rgba(206, 206, 206, 1);
  outline: none;
  border-radius: 3px;
  transition: 0.5s all ease-out;
  font-size: 1.25rem;
}

.otp_input:focus {
  border-color: var(--txt-org);
}
#otp:active {
}
</style>
