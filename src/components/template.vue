<template>
  <div>
    <!-- header -->
    <div class="p-card">
      <Steps :model="items" :readonly="true" />
    </div>

    <!-- content -->
    <div>
      <router-view
        v-slot="{ Component }"
        :formData="formObject"
        @prevPage="prevPage($event)"
        @nextPage="nextPage($event)"
        @complete="complete"
      >
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </div>
  </div>
</template>
<script>
export default {
  // data
  data() {
    return {
      items: [
        {
          label: "personal Details",
          to: "/",
        },
        {
          label: "company details",
          to: "/company_details",
        },
        {
          label: "email verification",
          to: "/email_verification",
        },
      ],
    };
  },

  //   methods
  methods: {
    //   next page
    nextPage(event) {
      this.$router.push(this.items[event.pageIndex + 1].to);
    },

    //   previous page
    prevPage(event) {
      this.$router.push(this.items[event.pageIndex - 1].to);
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
</style>
