<template>
  <ProductHeroSec />
  <ProductFliter />
  <ProductsCards />
</template>

<script>
import ProductHeroSec from "./ProductHeroSec.vue";
import ProductFliter from "./ProductFliter.vue";
import ProductsCards from "./ProductsCards.vue";
export default {
  name: "OurProductComp",
  components: {
    ProductHeroSec,
    ProductFliter,
    ProductsCards,
  },
};
</script>

<style></style>
