<template>
  <Personal_Details />
</template>

<script>
import Personal_Details from "./components/personal_Details.vue";
export default {
  name: "App",
  components: {
    Personal_Details,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Lato", sans-serif;
}
</style>
