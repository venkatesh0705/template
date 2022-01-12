<template>
  <div class="personal_details">
    <!-- header -->

    <!-- main_contents -->
    <div class="main_component p-d-flex p-flex-column p-ai-center p-jc-center">
      <!-- heading -->
      <div class="heading p-d-flex p-flex-column p-ai-center">
        <div class="title">Add your personal details</div>
        <div class="sub_title">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </div>
      </div>

      <!-- content -->
      <div class="content p-p-5">
        <!-- field name -->
        <div class="name p-mb-4 p-fluid">
          <div class="label p-pb-1">Full Name</div>
          <div>
            <InputText
              id="full_name"
              type="text"
              placeholder="Enter fullName"
              :class="{ invalid: v$.user_data.name.$error }"
              v-model="state.user_data.name"
            />
          </div>
          <small
            class="invalid_text"
            v-for="error of v$.user_data.name.$errors"
            :key="error.uid"
          >
            {{ error.$message }}
          </small>
        </div>

        <!-- field gender -->
        <div class="gender p-mb-4">
          <div class="label p-pb-2">gender</div>
          <div class="p-d-flex p-mb-4 p-mt-1 p-jc-start">
            <div class="gender_toggler gender">
              <input
                type="radio"
                name="gender"
                id="male"
                value="male"
                v-model="state.user_data.gender"
              />
              <label class="gender_label" for="male">male</label>
            </div>
            <div class="gender_toggler">
              <input
                type="radio"
                name="gender"
                id="female"
                value="female"
                v-model="state.user_data.gender"
              />
              <label class="gender_label" for="female">female</label>
            </div>
            <div class="gender_toggler">
              <input
                type="radio"
                name="gender"
                id="other"
                value="other"
                v-model="state.user_data.gender"
              />
              <label class="gender_label" for="other">other</label>
            </div>
          </div>
          <div>
            <small
              class="invalid_text"
              v-for="error of v$.user_data.gender.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </small>
          </div>
        </div>

        <!-- field country -->
        <div class="country p-mb-4 p-fluid">
          <div class="label p-mb-1">country</div>
          <div class="dropdown">
            <Dropdowns
              :class="{ invalid: v$.user_data.selectedCountry.$error }"
              v-model="state.user_data.selectedCountry"
              :options="countries"
              optionLabel="name"
              :filter="true"
              placeholder="Select a Country"
              :showClear="true"
            />
          </div>
          <div>
            <small
              class="invalid_text"
              v-for="error of v$.user_data.selectedCountry.$errors"
              :key="error.$uid"
              >{{ error.$message }}</small
            >
          </div>
        </div>

        <!-- field state -->
        <div class="state p-mb-4 p-fluid">
          <div class="label p-mb-1">state</div>
          <div class="dropdown">
            <Dropdowns
              :class="{ invalid: v$.user_data.selectedState.$error }"
              v-model="state.user_data.selectedState"
              :options="states"
              optionLabel="name"
              :filter="true"
              placeholder="Select a state"
              :showClear="true"
            />
          </div>
          <div>
            <small
              class="invalid_text"
              v-for="error of v$.user_data.selectedState.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </small>
          </div>
        </div>

        <!-- field phone -->
        <div class="phone p-mb-4 p-fluid">
          <div class="label p-mb-1">phone</div>
          <div class="p-inputgroup">
            <span class="p-inputgroup-addon">+91</span>
            <InputText
              type="text"
              v-model="state.user_data.phone"
              :class="{ invalid: v$.user_data.phone.$error }"
            />
          </div>
          <div>
            <small
              class="invalid_text"
              v-for="error of v$.user_data.phone.$errors"
              :key="error.uid"
            >
              {{ error.$message }}
            </small>
          </div>
        </div>

        <!-- field submit_button -->
        <div class="submit_button">
          <Buttons
            label="Next"
            class="submit_button"
            @click="submited_data()"
          />
        </div>
      </div>

      <!-- footer_content -->
      <div class="footer">
        <div class="sigin_content label">
          Already have an account?
          <span class="Link"><a class="sign-in_link" href="#">Log in</a></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, numeric, minLength } from "@vuelidate/validators";
import { reactive, computed } from "vue";
export default {
  setup() {
    const state = reactive({
      user_data: {
        name: "",
        phone: null,
        gender: null,
        selectedCountry: null,
        selectedState: null,
      },
    });

    const rules = computed(() => {
      return {
        user_data: {
          name: { required },
          phone: { required, numeric, min: minLength(9) },
          gender: { required },
          selectedCountry: { required },
          selectedState: { required },
        },
      };
    });

    const v$ = useVuelidate(rules, state);

    return {
      state,
      v$,
    };
  },
  data() {
    return {
      // selectedgender: null,
      // selectedCountry: null,
      // selected_phcode: null,

      // steps
      items: [
        { label: "personal details" },
        { label: "company details" },
        { label: "email verification" },
      ],

      // gender field
      gender: [
        { name: "Male", value: "Male" },
        { name: "Female", value: "Female" },
        { name: "others", value: "others" },
      ],

      // country field
      countries: [
        { name: "Australia", code: "AU" },
        { name: "Brazil", code: "BR" },
        { name: "China", code: "CN" },
        { name: "Egypt", code: "EG" },
        { name: "France", code: "FR" },
        { name: "Germany", code: "DE" },
        { name: "India", code: "IN" },
        { name: "Japan", code: "JP" },
        { name: "Spain", code: "ES" },
        { name: "United States", code: "US" },
      ],

      states: [
        { name: "Tamilnadu", code: "TN" },
        { name: "Andrapradesh", code: "AP" },
        { name: "Uttarpradesh", code: "UP" },
        { name: "Delhi", code: "Di" },
      ],
    };
  },
  methods: {
    submited_data() {
      // let userData = this.state.user_data;
      // console.log("userData", userData);

      this.$emit("next-page", { pageIndex: 0 });

      // console.log(this.v$);
      // this.v$.$validate(); // checks all inputs
      // if (!this.v$.$error) {
      //   this.$store.dispatch("insert_user", userData);
      //   alert("Form successfully submitted.");
      //   console.log("stored data:", this.$store.getters.getdata);
      // } else {
      //   alert("fill the form correctly");
      // }
      // if (this.$v.user_data.$errors) {
      //   console.log("error");
      // } else {
      //   console.log("no error");
      // }
    },
  },

  datas() {
    return this.$store.getters.getdata;
  },

  // computed: {
  //   datas() {
  //     return this.$store.getters.getdata;
  //   },
  // },
};
</script>

<style scoped>
/* main_component */
.personal_details {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  height: 100vh;
  background-color: rgba(46, 47, 100, 0.03);
}

/* error  display */
:deep .invalid {
  border: 2px solid red;
}

:deep .invalid:enabled:focus {
  border-color: red !important;
}

.invalid_text {
  color: red;
}
/* gender field */

input[type="radio"] {
  display: none;
}

.gender {
  margin: 0 0.5rem 0 0 !important;
}

.gender_label {
  font-size: 15px;
  padding: 0.5rem 1rem;
  border: 1px solid #ececec;
  border-radius: 3px;
  background-color: white;
  transition: 0.1s all ease-out;
  cursor: pointer;
}

.gender_toggler {
  margin: 0 0.5rem;
}

input[type="radio"]:checked + .gender_label {
  background-color: rgba(237, 89, 1, 0.1);
  color: #ed5901;
}

gender_.gender_label {
  background-color: rgba(237, 89, 1, 0.1);
  color: #ed5901;
}

#male {
  display: none;
}

.title {
  font-size: 36px;
  font-weight: 700;
  margin-top: 25px;
}
.sub_title {
  font-size: 15px;
  font-weight: 400;
  margin-top: 17px;
}

.content {
  background-color: white;
  border-radius: 3px;
  max-width: 508px;
  width: 100%;
  margin-top: 30px;
}
.label {
  color: rgba(10, 9, 9, 0.6);
  text-transform: capitalize;
  font-size: 15px;
}

/* gender field -css */

#gender_toggle {
  color: #0a0909 !important;
  border: 1px solid #ececec;
}

#gender_toggle:enabled:focus {
  background-color: rgba(237, 89, 1, 0.1) !important;
  color: #ed5901 !important;
  box-shadow: none !important;
}

/* input fields -css */

.p-inputtext:enabled:focus {
  border-color: #ed5901 !important;
  box-shadow: none;
}
.p-inputtext:enabled:hover {
  border-color: #ed5901;
}

/* dropdown_box -css */
.p-dropdown:not(.p-disabled):hover {
  border-color: #ed5901;
  box-shadow: none;
}

/* submit_button -css */
.submit_button {
  background-color: #ed5901 !important;
  color: #ffffff !important;
  border: none !important;
  width: 100% !important;
}

.submit_button:hover {
  background-color: #cf4d02 !important;
}

.footer {
  margin: 15px 0 26px 0;
}

/* sign_in -css */
.sign-in_link {
  color: #ed5901;
  text-decoration: none;
}
</style>
