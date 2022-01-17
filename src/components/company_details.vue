<template>
  <div class="company_details">
    <!-- heading -->
    <div class="headings p-grid p-flex-column p-ai-center p-jc-center">
      <!-- title -->
      <div class="title p-col-12 p-mt-3">Add your company details</div>
      <!-- sub-title -->
      <div class="sub_title p-col-12">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </div>
    </div>

    <!-- main component -->
    <div class="main_content p-grid p-jc-center p-ai-center p-mt-">
      <!-- container -->
      <div class="container p-col-6 p-p-4">
        <!-- image field -->
        <div class="image fields p-d-flex p-ai-center">
          <div>
            <Avatar
              icon="pi pi-image"
              class="p-mr-2"
              size="xlarge"
              shape="circle"
            />
          </div>
          <div class="field_orange_txt">Upload your company logo</div>
        </div>

        <!-- company name field -->
        <div class="cName fields p-fluid">
          <div class="label">Company Name</div>
          <div>
            <InputText
              :class="{ invalid: v$.form_data.companyName.$error }"
              id="cName"
              v-model="form_data.companyName"
            />
          </div>
          <div v-if="v$.form_data.companyName.$error">
            <small
              class="invalid_txt"
              v-for="error of v$.form_data.companyName.$errors"
              :key="error.uid"
            >
              {{ error.$message }}
            </small>
          </div>
        </div>

        <!-- mail field -->
        <div class="mail fields p-fluid">
          <div class="label">Email id</div>
          <div>
            <InputText
              :class="{ invalid: v$.form_data.email.$error }"
              id="cName"
              v-model.trim="form_data.email"
            />
          </div>
          <div v-if="v$.form_data.email.$error">
            <small
              class="invalid_txt"
              v-for="data of v$.form_data.email.$errors"
              :key="data.uid"
              >{{ data.$message }}</small
            >
          </div>
        </div>

        <!-- title field -->
        <div class="title fields p-fluid">
          <div class="label">Job Title</div>

          <div>
            <InputText
              :class="{ invalid: v$.form_data.job_title.$error }"
              id="jTitle"
              v-model="form_data.job_title"
            />
          </div>
          <div v-if="v$.form_data.job_title.$error">
            <small
              class="invalid_txt"
              v-for="error of v$.form_data.job_title.$errors"
              :key="error.uid"
              >{{ error.$message }}</small
            >
          </div>
        </div>

        <!-- experience field -->
        <div class="experience fields p-fluid">
          <div class="label">Years of Experience</div>
          <div>
            <InputText
              :class="{ invalid: v$.form_data.experience.$error }"
              id="experience"
              v-model.trim="form_data.experience"
            />
          </div>
          <div v-if="v$.form_data.experience.$error">
            <small
              class="invalid_txt"
              v-for="error of v$.form_data.experience.$errors"
              :key="error.uid"
              >{{ error.$message }}</small
            >
          </div>
        </div>

        <!-- terms and conditions -->
        <div class="tc fields p-d-flex p-ai-center">
          <div>
            <Checkbox id="binary" />
          </div>
          <div class="label p-mx-2">
            I accept the
            <span class="field_orange_txt">Terms and Conditions</span>
          </div>
        </div>

        <!-- submit buttons -->
        <div class="submit p-grid">
          <div class="p-col-3">
            <Buttons
              class="prev_btn p-button-secondary"
              @click.prevent="prevPage()"
              >Back</Buttons
            >
          </div>
          <div class="p-col-9">
            <Buttons class="submit_btn" @click.prevent="nextPage()"
              >Send OTP</Buttons
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Avatar from "primevue/avatar";
import Checkbox from "primevue/checkbox";
import useValidate from "@vuelidate/core";
import { required, helpers, numeric } from "@vuelidate/validators";

// custom validators
const email_pattern = helpers.regex(/^([A-Za-z]|[0-9])+$/);

export default {
  components: {
    Avatar,
    Checkbox,
  },
  data() {
    return {
      v$: useValidate(),
      form_data: {
        companyName: "",
        email: "",
        job_title: "",
        experience: "",
      },
    };
  },

  validations() {
    return {
      form_data: {
        // company name validations
        companyName: {
          required: helpers.withMessage(
            "company name should be filled ",
            required
          ),
        },

        // email validations
        email: {
          required: helpers.withMessage(
            "email required, must be filled up",
            required
          ),
          email_pattern: helpers.withMessage("invalid email", email_pattern),
        },

        // job_title validations
        job_title: {
          required: helpers.withMessage(
            "job title must be filled up",
            required
          ),
        },

        // experience validations
        experience: {
          required: helpers.withMessage(
            "experience must be filled up",
            required
          ),
          numeric: helpers.withMessage("experience must be numeric", numeric),
        },
      },
    };
  },

  methods: {
    nextPage() {
      this.v$.$touch();
      console.log("vulidate", this.v$);
      console.log(this.form_data);
      if (!this.v$.$error) {
        alert("form submitted successfully");
        this.$emit("next-page", { pageIndex: 1 });
      } else {
        alert("form failed");
      }
      // this.$emit("next-page", { pageIndex: 1 });
    },

    prevPage() {
      this.$emit("prev-page", { pageIndex: 1 });
    },
  },
};
</script>

<style scoped>
.company_details {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 100%;
  font-size: 15px !important;
  background-color: rgba(46, 47, 100, 0.03);
  height: 100%;
}

/* common */
:deep .p-grid {
  margin: 0;
}

.invalid_txt {
  color: red;
}

.invalid {
  border: 2px solid red !important;
}

/* heading */
.headings .title {
  font-size: 2.25rem;
  font-weight: 700;
  text-align: center;
}
.headings .sub_title {
  text-align: center;
  font-size: 1rem;
  padding: 0 !important;
}

/* main component */
.main_content {
  margin-top: 1.25rem;
  margin-bottom: 1rem;
}
.main_content .container {
  background: white;
  border-radius: 3px;
  max-width: 31.75rem;
  width: 100%;
}
.main_content .fields {
  margin-bottom: 25px;
}

.main_content .field_orange_txt {
  color: var(--txt-org);
}
.main_content .label {
  color: var(--txt-grey);
  margin-bottom: 1px;
}

/* input text */

:deep .p-inputtext:enabled:focus {
  border-color: var(--txt-org);
  box-shadow: 0 0 0 0.2rem rgba(237, 89, 1, 0.3);
}

:deep .p-inputtext:enabled:hover {
  border-color: var(--txt-org);
}

/* submit button */

.submit > div {
  padding: 0 8px !important;
}
.main_content .submit_btn {
  width: 100%;
  display: block !important;
  background-color: var(--txt-org);
  border: var(--txt-org) !important;
}

.main_content .submit_btn:focus {
  border: var(--txt-org) !important;
}

.main_content .submit_btn:hover {
  border: var(--txt-org) !important;
}
.main_content .prev_btn {
  width: 100%;
  display: block;
}

:deep .p-button:enabled:active {
  background: #f16615;
}

:deep .p-button:enabled:hover {
  background: #f16615;
}

:deep .p-button:focus {
  box-shadow: none;
}
</style>
