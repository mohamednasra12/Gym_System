<template>
  <div class="home_slider">
    <swiper
      :pagination="pagination"
      :direction="'vertical'"
      :slidesPerView="1"
      :spaceBetween="30"
      :mousewheel="true"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: false,
      }"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide>
        <img src="@/assets/imgas/slider.png" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img src="@/assets/imgas/slider1.png" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img src="@/assets/imgas/slider2.png" alt="" />
      </swiper-slide>
    </swiper>
    <div class="overlay"></div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";

import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

export default {
  name: "HomeSlider",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, Autoplay],
      pagination: {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
      },
    };
  },
};
</script>

<style></style>
