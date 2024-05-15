<template>
  <div class="head">
    <p>classes designe</p>
    <h4>for you</h4>
    <h6>
      Whether you want to loose weight, tone up, gain muscle or improve
      strength, we provide a widerange of classes to help you achieve your goals
      in a friendly and airy environment
    </h6>
  </div>
  <div class="home_classes">
    <swiper
      :style="{
        '--swiper-navigation-color': 'red',
        '--swiper-pagination-color': 'red',
      }"
      :slidesPerView="1"
      :spaceBetween="10"
      :autoplay="{
        delay: 5000,
      }"
      :navigation="true"
      :breakpoints="{
        '@0.00': {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        '@0.75': {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        '@1.00': {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        '@1.50': {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide v-for="(img, i) in imgs" :key="i">
        <router-link to="/">
          <div class="card-slider">
            <div class="box">
              <img :src="img.src" alt="" />
            </div>
            <div class="text">
              <div class="nots">
                <h4>{{ img.title }}</h4>
                <p>{{ img.text }}</p>
              </div>
              <img src="@/assets/imgas/right-chevron 2.svg" alt="" />
            </div>
          </div>
        </router-link>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
export default {
  name: "HomeClasses",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      imgs: [
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
  setup() {
    return {
      modules: [Autoplay, Navigation],
    };
  },
};
</script>

<style></style>
