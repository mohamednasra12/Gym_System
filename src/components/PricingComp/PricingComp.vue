<template>
  <CardPricing />
  <QuestionPricing />
  <ReviewPricing />
  <InstgramPricing />
</template>

<script>
import CardPricing from "./CardPricing.vue";
import ReviewPricing from "./ReviewPricing.vue";
import InstgramPricing from "./InstgramPricing.vue";
import QuestionPricing from "./QuestionPricing.vue";

export default {
  name: "PricingComp",
  components: {
    CardPricing,
    ReviewPricing,
    InstgramPricing,
    QuestionPricing,
  },
};
</script>

<style></style>
