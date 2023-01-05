import { createRouter, createWebHistory } from "vue-router";
import TypesTable from "../views/TypesTableView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      redirect: "/poke",
      component: TypesTable,
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
