<template>
  <!-- Footer -->
  <footer class="text-center text-lg-start">
    <!-- Section: Social media -->
    <section class="d-flex justify-content-center justify-content-lg-between">
      <!-- Right -->

      <!-- Right -->
    </section>
    <!-- Section: Social media -->

    <!-- Section: Links  -->
    <section class="">
      <div class="container text-center text-md-start mt-5">
        <!-- Grid row -->
        <div class="row mt-3">
          <!-- Grid column -->
          <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <!-- Content -->
            <img src="@/assets/imgas/logo2.png" alt="" />
            <h4 class="aderss">
              The longest running gym in Chicago. Owned and operated by a
              personal trainer with over 25 years experience.
            </h4>
            <div class="information">
              <img src="@/assets/imgas/location.svg" alt="" />
              <p class="follow">2702 Memory Lane<br />Chicago, IL 60605</p>
            </div>
            <div class="information">
              <img src="@/assets/imgas/phon.svg" alt="" />
              <p class="phons">01226541874<br />01115446488</p>
            </div>
            <div class="information">
              <img src="@/assets/imgas/sms.svg" alt="" />
              <p class="email">gym-fitness22@gmail.com</p>
            </div>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-4">
            <!-- Links -->
            <h6 class="text-uppercase hed mb-4">About us</h6>
            <p class="links-gym">
              <router-link href="#!" class="text-reset">Home</router-link>
            </p>
            <p class="links-gym">
              <router-link href="#!" class="text-reset">About us</router-link>
            </p>
            <p class="links-gym">
              <router-link href="#!" class="text-reset">Pricing</router-link>
            </p>
            <p class="links-gym">
              <router-link href="#!" class="text-reset"
                >Our products</router-link
              >
            </p>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-4">
            <!-- Links -->
            <h6 class="text-uppercase mb-4 hed">Quick Links</h6>
            <p class="links-gym">
              <router-link href="#!" class="text-reset"
                >Common questions</router-link
              >
            </p>
            <p class="links-gym">
              <router-link href="#!" class="text-reset"
                >Instructions for use</router-link
              >
            </p>
            <p class="links-gym">
              <router-link href="#!" class="text-reset">Blogs</router-link>
            </p>
            <p class="links-gym">
              <router-link href="#!" class="text-reset">Contact us</router-link>
            </p>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mt-4">
            <!-- Links -->
            <h6 class="text-uppercase hed mb-4">Opening Hours</h6>
            <p class="weekday">Saturday <span>08:00 am - 06:00 pm</span></p>
            <p class="weekday">Sunday <span>08:00 am - 06:00 pm</span></p>
            <p class="weekday">Monday <span>08:00 am - 06:00 pm</span></p>
            <p class="weekday">Tuesday <span>08:00 am - 06:00 pm</span></p>
            <p class="weekday">Wednesday <span>08:00 am - 06:00 pm</span></p>
            <p class="weekday">Thursday <span>08:00 am - 06:00 pm</span></p>
            <p class="weekday">Friday <span>08:00 am - 06:00 pm</span></p>
          </div>
          <!-- Grid column -->
        </div>
        <!-- Grid row -->
      </div>
    </section>
    <!-- Section: Links  -->

    <!-- Copyright -->
    <div class="end-footer">
      <h4>Made by <span>X</span> Coders coding with expert</h4>
      <div class="icons">
        <router-link href="" class="text-reset">
          <i class="fab fa-facebook-f"></i>
        </router-link>
        <router-link href="" class="text-reset">
          <i class="fab fa-twitter"></i>
        </router-link>
        <router-link href="" class="text-reset">
          <i class="fab fa-google"></i>
        </router-link>
        <router-link href="" class="text-reset">
          <i class="fab fa-instagram"></i>
        </router-link>
        <router-link href="" class="text-reset">
          <i class="fab fa-linkedin"></i>
        </router-link>
        <router-link href="" class="text-reset">
          <i class="fab fa-github"></i>
        </router-link>
      </div>
      <h4>© All rights reserved @ gym platform 2024</h4>
    </div>
    <!-- Copyright -->
  </footer>
  <!-- Footer -->
</template>

<script>
export default {
  name: "AppFooter",
};
</script>

<style>
footer {
  background-color: black;
  color: white;
}
</style>
