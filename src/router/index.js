import {createRouter,createWebHashHistory} from 'vue-router';

const routes = [
  {
    name: "HomePage",
    path: "/",
    component: () => import("../views/Home.vue"),
  },
  {
    name: "PremiumPage",
    path: "/premium",
    component: () => import("../views/Premium.vue"),
  },
  {
    name: "SupportPage",
    path: "/support",
    component: () => import("../views/Support.vue"),
  },
  {
    name: "DownloadPage",
    path: "/download",
    component: () => import("../views/Download.vue"),
  },
  {
    name: "RegisterPage",
    path: "/register",
    component: () => import("../views/Register.vue"),
  },
  {
    name: "LoginPage",
    path: "/login",
    component: () => import("../views/Login.vue"),
  }
];
const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

  
export default router;