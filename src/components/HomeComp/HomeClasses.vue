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
      :slidesPerView="1"
      :spaceBetween="10"
      :navigation="{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }"
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
    <div class="arrows">
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
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
      modules: [Navigation],
    };
  },
};
</script>
<style scoped>
.home_classes {
  position: relative;
}

.swiper-button-next,
.swiper-button-prev {
  position: absolute;
  top: 100%; /* Move the buttons below the swiper */
  transform: translateY(50%); /* Center the buttons vertically */
  border: 1px solid;
  padding: 1rem;
}

.swiper-button-next {
  left: 50%; /* Adjust the position as needed */
}

.swiper-button-prev {
  left: 47%; /* Adjust the position as needed */
}
</style>
