<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/"
        ><img src="@/assets/imgas/logo2.png" alt=""
      /></router-link>
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
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link" aria-current="page">
              Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link" aria-current="page">
              about us
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/ourclasses" class="nav-link" aria-current="page">
              Our classes
            </router-link>
            <div class="maga-menu">
              <ul class="links">
                <li>
                  <a><i class="far fa-comments fa-fw"></i>testimonials</a>
                </li>
                <li>
                  <a><i class="far fa-user fa-fw"></i>team</a>
                </li>
                <li>
                  <a><i class="far fa-check-circle fa-fw"></i>our-skill</a>
                </li>
                <li>
                  <a><i class="far fa-clipboard fa-fw"></i>work-steps</a>
                </li>
                <li>
                  <a><i class="far fa-building fa-fw"></i>services</a>
                </li>
              </ul>
              <ul class="links">
                <li>
                  <a><i class="far fa-calendar-alt fa-fw"></i>events</a>
                </li>
                <li>
                  <a><i class="fas fa-server fa-fw"></i>pricing</a>
                </li>
                <li>
                  <a><i class="far fa-play-circle fa-fw"></i>top-video</a>
                </li>
                <li>
                  <a><i class="far fa-chart-bar fa-fw"></i>stats</a>
                </li>
                <li>
                  <a><i class="fas fa-percent fa-fw"></i>discount</a>
                </li>
              </ul>
            </div>
          </li>
          <li class="nav-item">
            <router-link to="/ourproducts" class="nav-link" aria-current="page">
              Our products
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/pricing" class="nav-link" aria-current="page">
              pricing
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contactus" class="nav-link" aria-current="page">
              contact us
            </router-link>
          </li>
        </ul>
      </div>
      <div class="drowar">
        <button
          class="btn"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        >
          <i class="fa-solid fa-bars"></i>
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
    <div class="offcanvas-body"><CardDrower /></div>
  </div>
</template>

<script>
import CardDrower from "@/components/Global/CardDrower.vue";
export default {
  name: "AppnNav",
  components: {
    CardDrower,
  },
  data() {
    return {};
  },
};
</script>
