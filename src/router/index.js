import { createRouter, createWebHistory } from "vue-router";
import IndexHome from "../views/Home/Index.vue";
import IndexAbout from "../views/About/Index.vue";
import IndexService from "../views/Service/Index.vue";
import IndexCupons from "../views/Cupons/Index.vue";
import ListCupons from "../views/Cupons/List.vue";
import Whatsapp from "../views/Whatsapp.vue";

const userLang = navigator.language || navigator.userLanguage;

const routes = [
  {
    path: "",
    name: "Home",
    component: IndexHome,
    props: true,
  },
  { path: "/about", name: "About", component: IndexAbout },
  { path: "/services", name: "Service", component: IndexService },
  { path: "/whatsapp", name: "Whatsapp", component: Whatsapp },
  { path: "/cupons", name: "Cupons", component: IndexCupons },
  { path: "/cuponsList", name: "Cupons1", component: ListCupons },
];

const router = createRouter({
  history: createWebHistory(userLang),
  routes,
});

export default router;
