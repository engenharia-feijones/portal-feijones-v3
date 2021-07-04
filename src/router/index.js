import { createRouter, createWebHistory } from "vue-router";
import IndexHome from "../views/Home/Index.vue";
import IndexAbout from "../views/About/Index.vue";
import IndexServices from "../views/Services/Index.vue";
import Whatsapp from "../views/Whatsapp.vue";

const routes = [
    { path: "/", name: "Home", component: IndexHome },
    { path: '/about', name: "About", component: IndexAbout },
    { path: '/services', name: "Services", component: IndexServices },
    { path: '/whatsapp', name: "Whatsapp", component: Whatsapp },
];

const router = createRouter({
  history: createWebHistory(process.env.VUE_APP_BASE_URL),
  routes,
});

export default router;
