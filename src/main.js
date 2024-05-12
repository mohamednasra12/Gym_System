import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "normalize.css";
import "@fortawesome/fontawesome-svg-core";
import PrimeVue from "primevue/config";
import "primevue/resources/themes/aura-dark-lime/theme.css";

import Tooltip from "primevue/tooltip";

createApp(App)
  .use(store)
  .use(router)
  .use(PrimeVue)
  .directive("tooltip", Tooltip)
  .mount("#app");
