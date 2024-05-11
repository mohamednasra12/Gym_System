import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import OurClasses from "../views/OurClasses.vue";
import OurProducts from "../views/OurProducts.vue";
import PricingPage from "../views/PricingPage.vue";
import ContactUs from "../views/ContactUs.vue";
import ErrorPage from "../views/ErrorPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      title: "Home",
    },
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
    meta: {
      title: "About",
    },
  },
  {
    path: "/ourclasses",
    name: "OurClasses",
    component: OurClasses,
    meta: {
      title: "Our Classes",
    },
  },
  {
    path: "/ourproducts",
    name: "OurProducts",
    component: OurProducts,
    meta: {
      title: "Our Products",
    },
  },
  {
    path: "/pricing",
    name: "Pricing",
    component: PricingPage,
    meta: {
      title: "Pricing",
    },
  },
  {
    path: "/contactus",
    name: "ContactUs",
    component: ContactUs,
    meta: {
      title: "Contact Us",
    },
  },
  {
    path: "/:catchAll(.*)",
    name: "ErrorPage",
    component: ErrorPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
