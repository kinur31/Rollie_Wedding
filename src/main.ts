import { createApp } from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Vue3Toastify from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  faHome,
  faHeart,
  faCalendar,
  faImages,
  faComment,
  faEnvelope,
  faCircleCheck,
  faTimesCircle,
  faQuestionCircle,
  faTimes,
  faUser,
  faMagnifyingGlass,
  faClock,
  faMapMarkerAlt,
  faCopy,
} from "@fortawesome/free-solid-svg-icons";

// Add icons to the library
library.add(
  faHome,
  faHeart,
  faCalendar,
  faImages,
  faComment,
  faEnvelope,
  faCircleCheck,
  faTimesCircle,
  faQuestionCircle,
  faTimes,
  faUser,
  faMagnifyingGlass,
  faClock,
  faMapMarkerAlt,
  faCopy
);

const app = createApp(App);
// Initialize AOS
app.config.globalProperties.$aosInit = () => {
  AOS.init();
};

// Register Font Awesome component globally
app.component("font-awesome-icon", FontAwesomeIcon);

app.use(Vue3Toastify, {
  autoClose: 3000,
});

// Mount the app
app.mount("#app");

// Initialize AOS after the app is mounted
app.config.globalProperties.$aosInit();
