import { createRouter, createWebHistory } from "vue-router";
import personal_Details from "./components/personal_Details.vue";
import company_Details from "./components/company_details.vue";
import email_verification from "./components/email_verification";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: personal_Details,
    },
    {
      path: "/company_details",
      component: company_Details,
    },
    {
      path: "/email_verification",
      component: email_verification,
    },
  ],
});
