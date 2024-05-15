<template>
  <lay-out>
    <router-view />
  </lay-out>
</template>

<style lang="scss">
@import url("@/assets/scss/style.min.css");
</style>
<script>
import AOS from "aos";
import "aos/dist/aos.css";
import LayOut from "./components/Global/LayOut.vue";
export default {
  name: "App",
  components: {
    LayOut,
  },
  mounted() {
    AOS.init();
  },
};
</script>
