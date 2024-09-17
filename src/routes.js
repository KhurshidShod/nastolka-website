import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: () => import("./views/HomePage.vue"),
      name: "Home",
    },
    {
      path: "/authorized",
      component: () => import("./views/AuthorizedPage.vue"),
      name: "Authorized",
    },
    {
      path: "/profile",
      component: () => import("./views/ProfilePage.vue"),
      name: "Profile",
    },
    {
      path: "/case/:case",
      component: () => import("./views/CasePage.vue"),
      name: "Case",
    },
    {
      path: "/case/play/:case",
      component: () => import("./views/CaseAuthorizedPage.vue"),
      name: "Case Authorized",
    },
    {
      path: "/:case/:questionNumber/true",
      component: () => import("./views/TrueAnswerPage.vue"),
      name: "True Answer",
    },
    {
      path: "/:case/:questionNumber/false",
      component: () => import("./views/FalsePage.vue"),
      name: "False Answer",
    },
    {
      path: "/:case/playground/:taskNum",
      component: () => import("./views/TaskPage.vue"),
      name: "Task",
    },
    {
      path: "/:case/confirmation",
      component: () => import("./views/EnterCodePage.vue"),
      name: "Confirmation",
    },
    {
      path: "/:case/finished",
      component: () => import("./views/CaseFinished.vue"),
      name: "Finished",
    },
  ],
});

router.beforeEach((to, from) => {
  window.scrollTo(0, 0);
  if (from.name === "Finished" && to.name === "True Answer") {
    return { name: "Home" };
  }
});
export default router;
