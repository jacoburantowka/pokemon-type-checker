import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/poke",
      name: "poke",
      component: () => import("../views/PokeFinderView.vue"),
    },
    {
      path: "/type",
      name: "type",
      component: () => import("../views/TypeFinderView.vue"),
    },
  ],
});

export default router;
