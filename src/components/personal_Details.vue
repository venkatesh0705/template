<template>
  <div class="personal_details">
    <!-- header -->
    <div class="steps p-mb-2">
      <div class="p-card">
        <Steps :model="items" :readonly="true" />
      </div>
    </div>

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
              v-model="user_data.name"
            />
          </div>
        </div>

        <!-- field gender -->
        <div class="gender p-mb-4">
          <div class="label p-pb-1">gender</div>
          <div class="p-d-flex p-jc-start">
            <!-- {{ selectedgender }}

            <label for="male" id="gender">
              <input type="radio" id="male" />
              <span>male</span>
            </label> -->

            <Buttons
              id="gender_toggle"
              class="p-button-text p-mx-1"
              label="Male"
            />

            <Buttons
              id="gender_toggle"
              class="p-button-text p-mx-1"
              label="Female"
            />
            <Buttons
              id="gender_toggle"
              class="p-button-text p-mx-1"
              label="others"
            />
          </div>
        </div>

        <!-- field country -->
        <div class="country p-mb-4 p-fluid">
          <div class="label p-mb-1">country</div>
          <div class="dropdown">
            <Dropdowns
              v-model="user_data.selectedCountry"
              :options="countries"
              optionLabel="name"
              :filter="true"
              placeholder="Select a Country"
              :showClear="true"
            />
          </div>
        </div>

        <!-- field state -->
        <div class="state p-mb-4 p-fluid">
          <div class="label p-mb-1">state</div>
          <div class="dropdown">
            <Dropdowns
              v-model="selectedState"
              :options="state"
              optionLabel="name"
              :filter="true"
              placeholder="Select a state"
              :showClear="true"
            />
          </div>
        </div>

        <!-- field phone -->
        <div class="phone p-mb-4 p-fluid">
          <div class="label p-mb-1">phone</div>
          <div class="p-inputgroup">
            <span class="p-inputgroup-addon">+91</span>
            <InputText type="text" v-model="user_data.phone" />
          </div>
        </div>

        <!-- field submit_button -->
        <div class="submit_button">
          <Buttons
            label="Next"
            class="submit_button"
            v-on:click="uservalue()"
          />
        </div>
      </div>
      <div></div>

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
export default {
  data() {
    return {
      selectedgender: null,
      selectedCountry: null,
      selected_phcode: null,

      user_data: {
        name: "",
        phone: null,
        selectedCountry: null,
      },
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
    };
  },
  methods: {
    uservalue() {
      // this.$store.dispatch("insert_user", this.userinputData);
      let userData = this.user_data;
      console.log("userinputData", userData);
      this.$store.dispatch("insert_user", userData);
      console.log(this.$store.getters.getdata);
    },
  },

  computed: {
    datas() {
      return this.$store.getters.getdata;
    },
  },
};
</script>

<style scoped>
.p-card {
  background-color: #2e4b64;
  padding: 14px 0;
  border-radius: 0;
}

:deep .p-steps .p-steps-item:before {
  border: none;
}

:deep .p-steps .p-steps-item .p-menuitem-link {
  background-color: #2e4b64;
}

:deep .p-steps .p-steps-item .p-menuitem-link .p-steps-number {
  background: #28435a;
  border-color: #28435a;
  color: #ffffff;
}

:deep .p-steps-title {
  color: #ffffff !important;
  font-size: 15px;
}

:deep .p-menuitem-link {
  flex-direction: row !important;
}

:deep .p-steps-title {
  margin: 0 0.5rem !important;
}

#gender {
  border: 1px solid #ececec;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: 3px;
  transition: all 0.3ms ease-in-out;
}

#gender:hover {
  background-color: rgba(237, 89, 1, 0.1);
  color: #ed5901;
}

#male {
  display: none;
}

.personal_details {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  height: 100vh;
  background-color: rgba(46, 47, 100, 0.03);
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
