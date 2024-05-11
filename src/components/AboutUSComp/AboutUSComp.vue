<template>
  <HeroSec />
  <CardsAbout />
  <AboutUsHelp />
  <AboutTeam />
  <AboutVideo />
  <AboutRate />
</template>

<script>
import HeroSec from "./HeroSec.vue";
import CardsAbout from "./CardsAbout.vue";
import AboutTeam from "./AboutTeam.vue";
import AboutRate from "./AboutRate.vue";
import AboutUsHelp from "./AboutUsHelp.vue";
import AboutVideo from "./AboutVideo.vue";

export default {
  name: "AboutUSComp",
  components: {
    HeroSec,
    CardsAbout,
    AboutTeam,
    AboutRate,
    AboutUsHelp,
    AboutVideo,
  },
};
</script>

<style></style>
