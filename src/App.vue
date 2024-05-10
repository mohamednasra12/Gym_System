<template>
  <lay-out>
    <router-view />
  </lay-out>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}
</style>
<script>
import LayOut from "./components/Global/LayOut.vue";
export default {
  name: "App",
  components: {
    LayOut,
  },
};
</script>
