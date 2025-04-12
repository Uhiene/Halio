import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import DefaultLayout from "../components/layout/DefaultLayout.vue";

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "",
        name: "home",
        component: Home,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
