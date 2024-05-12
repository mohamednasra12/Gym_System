<template>
  <div class="home">
    <home-comp></home-comp>
    <Button v-tooltip.top="'nasra'" label="Submit" size="small" />
  </div>
</template>

<script>
import Button from "primevue/button";
import HomeComp from "@/components/HomeComp/HomeComp.vue";
export default {
  name: "HomeView",
  components: {
    HomeComp,
    Button,
  },
};
</script>
