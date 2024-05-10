<template>
  <div class="layout">
    <AppDrowerVue />
    <AppnNavVue />
    <div class="content">
      <div class="container">
        <slot></slot>
      </div>
    </div>
    <AppFooterVue />
  </div>
</template>
<script>
import AppnNavVue from "@/components/Global/AppNav.vue";
import AppFooterVue from "@/components/Global/AppFooter.vue";
import AppDrowerVue from "@/components/Global/CardDrower.vue";
export default {
  name: "LayOut",
  components: {
    AppnNavVue,
    AppFooterVue,
    AppDrowerVue,
  },
};
</script>
<style lang="scss" scoped>
.content {
  min-height: 100vh;
  text-align: center;
}
</style>
