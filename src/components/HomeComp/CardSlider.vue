<template>
  <div class="card-slider" v-for="(img, i) in swiper" :key="i">
    <img :src="img.src" alt="" />
    <div class="text">
      <div class="nots">
        <h4>{{ img.title }}</h4>
        <p>{{ img.text }}</p>
      </div>
      <img src="@/assets/imgas/right-chevron 2.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "CardSlider",

  data() {
    return {
      swipers: [
        {
          src: require("@/assets/imgas/cardone.png"),
          title: "Cardio workout",
          text: "benifits of groub training",
        },
        {
          src: require("@/assets/imgas/slidertwo.png"),
          title: "Cardio workout",
          text: "benifits of groub training",
        },
        {
          src: require("@/assets/imgas/sliderthree.png"),
          title: "Cardio workout",
          text: "benifits of groub training",
        },
        {
          src: require("@/assets/imgas/sliderfour.png"),
          title: "Cardio workout",
          text: "benifits of groub training",
        },
        {
          src: require("@/assets/imgas/sliderfour.png"),
          title: "Cardio workout",
          text: "benifits of groub training",
        },
      ],
    };
  },
  methods: {},
  created() {
    this.$emit("swipers", this.swipers);
  },
};
</script>
