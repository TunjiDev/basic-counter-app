import { createRouter, createWebHistory } from "vue-router";

import HomeComp from "./pages/Home-Comp.vue";
import CounterComp from "./pages/Counter-Comp.vue";
import NotFound from "./pages/Not-Found.vue";

const routes = [
  { path: "/", component: HomeComp },
  { path: "/counter", component: CounterComp },
  { path: "/:pathMatch(.*)", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
