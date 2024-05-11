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

<style lang="scss" scoped>
.navbar-nav {
  margin: auto;
  color: white;
  text-align: center;
}
.navbar {
  border-bottom: 1px solid rgba(255, 255, 255, 0.295);
  background-color: rgba(20, 20, 20, 0.4);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);

  position: sticky;
  z-index: 1000;

  width: 100%;
  top: 0;

  a.nav-link {
    color: rgba(255, 255, 255, 0.479);
    padding: 0rem;
    font-size: 0.8rem;
    margin: 0 1.1rem;
    font-weight: 700;
    font-family: "regular";
    letter-spacing: 0.5px;
  }

  .navbar-nav .nav-link.active,
  .navbar-nav .nav-link.show {
    border-bottom: 3px solid #eefb13;
    color: white;
    font-family: "bold";
    font-weight: 900;
  }
  a.navbar-brand {
    img {
      width: 46px;
      height: 46px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}

button.card-icon {
  background-color: transparent;
  border: none;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}
.nav-side {
  margin-right: auto;
}
</style>
