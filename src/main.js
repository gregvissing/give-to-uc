import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import "@/assets/css/style.css";
import BootstrapVue from "bootstrap-vue";
import {
  library
} from "@fortawesome/fontawesome-svg-core";
import {
  faSearch,
  faPhone,
  faEnvelope,
  faPlus,
  faFax
} from "@fortawesome/free-solid-svg-icons";
import {
  FontAwesomeIcon
} from "@fortawesome/vue-fontawesome";

library.add(faSearch);
library.add(faPhone);
library.add(faEnvelope);
library.add(faPlus);
library.add(faFax);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(BootstrapVue);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");