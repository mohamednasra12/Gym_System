<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img src="@/assets/imgas/logo2.png" alt="" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link
              active-class="active"
              class="nav-link"
              :to="{ path: '/' }"
            >
              Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              active-class="active"
              class="nav-link"
              :to="{ path: '/about' }"
              >AboutUs</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              active-class="active"
              class="nav-link"
              :to="{ path: '/ourclasses' }"
              >OurClasses</router-link
            >
          </li>

          <li class="nav-item">
            <router-link
              active-class="active"
              class="nav-link"
              :to="{ path: '/ourproducts' }"
              >OurProducts</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              active-class="active"
              class="nav-link"
              :to="{ path: '/pricing' }"
              >Pricing</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              active-class="active"
              class="nav-link"
              :to="{ path: '/contactus' }"
              >ContactUs</router-link
            >
          </li>
        </ul>
        <button
          class="card-icon"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        >
          <i class="fa-solid fa-bars-staggered"></i>
        </button>
      </div>
    </div>
  </nav>
  <div
    class="offcanvas offcanvas-end"
    tabindex="-1"
    id="offcanvasRight"
    aria-labelledby="offcanvasRightLabel"
  >
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <CardDrower />
    </div>
  </div>
</template>

<script>
import CardDrower from "./CardDrower.vue";
export default {
  name: "AppnNav",
  components: {
    CardDrower,
  },
};
</script>
