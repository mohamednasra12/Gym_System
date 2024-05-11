<template>
  <lay-out>
    <router-view />
  </lay-out>
</template>

<style lang="scss">
@font-face {
  font-family: "light";
  src: url("@/assets/fonts/alfont_com_Somar-Light.otf");
}

@font-face {
  font-family: "regular";
  src: url("@/assets/fonts/alfont_com_Somar-Regular.otf");
}

@font-face {
  font-family: "Medium";
  src: url("@/assets/fonts/alfont_com_Somar-Medium.otf");
}

@font-face {
  font-family: "bold";
  src: url("@/assets/fonts/alfont_com_Somar-Bold.otf");
}
#app {
  background-color: black;
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
