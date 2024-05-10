<template>
  <div class="content">
    <NavComp />
    <slot></slot>
    <FooterComp />
  </div>
</template>

<script>
import NavComp from "./NavComp.vue";
import FooterComp from "./FooterComp.vue";
export default {
  name: "ContentComp",
  components: { NavComp, FooterComp },
};
</script>

<style></style>
