<template>
  <lay-out>
    <router-view />
  </lay-out>
</template>

<style lang="scss">
#app {
  background-color: black;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: white;
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
