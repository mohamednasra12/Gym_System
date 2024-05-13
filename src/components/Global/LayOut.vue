<template>
  <div class="layout">
    <AppnNavVue />
    <div class="content">
      <slot></slot>
    </div>
    <AppFooterVue />
  </div>
</template>
<script>
import AppnNavVue from "@/components/Global/AppNav.vue";
import AppFooterVue from "@/components/Global/AppFooter.vue";

export default {
  name: "LayOut",
  components: {
    AppnNavVue,
    AppFooterVue,
  },
};
</script>
<style lang="scss" scoped>
.content {
  min-height: 100vh;
  text-align: center;
}
</style>
