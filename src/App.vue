<template>
  <content-comp>
    <router-view />
  </content-comp>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
<script>
import ContentComp from "./components/LayOut/ContentComp.vue";
export default {
  components: { ContentComp },
};
</script>
