<template>
  <ContactHeroSec />
  <ContactUsForm />
</template>

<script>
import ContactUsForm from "../ContactUsComp/ContactUsForm.vue";
import ContactHeroSec from "../ContactUsComp/ContactHeroSec.vue";

export default {
  name: "ContactUsComp",
  components: {
    ContactUsForm,
    ContactHeroSec,
  },
};
</script>

<style></style>
