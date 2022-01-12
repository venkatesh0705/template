<template>
  <div class="company_details">
    <div class="headings p-grid p-flex-column p-ai-center p-jc-center">
      <div class="title p-col-12 p-mt-3">Add your company details</div>
      <div class="sub_title p-col-12">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </div>
    </div>
    <div class="main_content p-grid p-jc-center p-ai-center p-mt-">
      <div class="container p-col-6 p-p-4">
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
        <div class="cName fields p-fluid">
          <div class="label">Company Name</div>
          <div>
            <InputText id="cName" />
          </div>
        </div>
        <div class="mail fields p-fluid">
          <div class="label">Email id</div>
          <div>
            <InputText id="cName" />
          </div>
        </div>
        <div class="title fields p-fluid">
          <div class="label">Job Title</div>

          <div><InputText id="jTitle" /></div>
        </div>
        <div class="experience fields p-fluid">
          <div class="label">Years of Experience</div>
          <div>
            <InputText id="experience" />
          </div>
        </div>
        <div class="tc fields p-d-flex p-ai-center">
          <div>
            <Checkbox id="binary" />
          </div>
          <div class="label p-mx-2">
            I accept the
            <span class="field_orange_txt">Terms and Conditions</span>
          </div>
        </div>
        <div class="submit p-grid">
          <div class="p-col-3">
            <Buttons class="prev_btn p-button-secondary">Back</Buttons>
          </div>
          <div class="p-col-9">
            <Buttons class="submit_btn">Send OTP</Buttons>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Avatar from "primevue/avatar";
import Checkbox from "primevue/checkbox";
export default {
  components: {
    Avatar,
    Checkbox,
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
