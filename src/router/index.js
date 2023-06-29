import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";
import app from "../App.vue";
import KRPOMDemoTitle from "../pages/KRPOMDemoTitle.vue";
import KRPOMTemplate from "../pages/KRPOMTemplate.vue";

const routes = [
  // {
  //   path: "/",
  //   component: app,
  // },
  {
    path: "/KRPOMDemoTitle",
    component: KRPOMDemoTitle,
  },
  {
    path: "/KRPOMTemplate",
    component: KRPOMTemplate,
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
