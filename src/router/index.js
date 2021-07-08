import { createRouter, createWebHistory } from "vue-router";
import IndexHome from "../views/Home/Index.vue";
import IndexAbout from "../views/About/Index.vue";
import IndexService from "../views/Service/Index.vue";
import Whatsapp from "../views/Whatsapp.vue";

const routes = [
  { path: "/", name: "Home", component: IndexHome },
  { path: "/about", name: "About", component: IndexAbout },
  { path: "/services", name: "Service", component: IndexService },
  { path: "/whatsapp", name: "Whatsapp", component: Whatsapp },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
