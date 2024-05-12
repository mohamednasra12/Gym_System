<template>
  <home-slider></home-slider>
  <home-classes></home-classes>
  <home-all-about></home-all-about>
  <home-body></home-body>
  <home-video></home-video>
  <home-onlin-store></home-onlin-store>
  <home-brand></home-brand>
  <home-blogs></home-blogs>
</template>

<script>
import HomeBody from "@/components/HomeComp/HomeBody.vue";
import HomeAllAbout from "./HomeAllAbout.vue";
import HomeClasses from "./HomeClasses.vue";
import HomeSlider from "./HomeSlider.vue";
import HomeVideo from "./HomeVideo.vue";
import HomeBrand from "./HomeBrand.vue";
import HomeOnlinStore from "./HomeOnlinStore.vue";
import HomeBlogs from "./HomeBlogs.vue";
export default {
  name: "HomeComp",
  components: {
    HomeBody,
    HomeAllAbout,
    HomeClasses,
    HomeSlider,
    HomeVideo,
    HomeBrand,
    HomeOnlinStore,
    HomeBlogs,
  },
};
</script>

<style></style>
