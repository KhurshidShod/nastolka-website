import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "./views/HomePage.vue";
import AuthorizedPage from "./views/AuthorizedPage.vue";
import ProfilePage from "./views/ProfilePage.vue";
import CasePage from "./views/CasePage.vue";
import CaseAuthorizedPage from "./views/CaseAuthorizedPage.vue";
import TrueAnswer from "./views/TrueAnswerPage.vue";
import FalsePage from "./views/FalsePage.vue";
import TaskPage from "./views/TaskPage.vue";
import EnterCodePage from "./views/EnterCodePage.vue";
import CaseFinished from "./views/CaseFinished.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: HomePage, name: "Home" },
    { path: "/authorized", component: AuthorizedPage, name: "Authorized" },
    { path: "/profile", component: ProfilePage, name: "Profile" },
    { path: "/case/:case", component: CasePage, name: "Case"},
    { path: "/case/play/:case", component: CaseAuthorizedPage, name: "Case Authorized"},
    { path: "/:case/:questionNumber/true", component: TrueAnswer, name: "True Answer"},
    { path: "/:case/:questionNumber/false", component: FalsePage, name: "False Answer"},
    { path: "/:case/playground/:taskNum", component: TaskPage, name: "Task"},
    { path: "/:case/confirmation", component: EnterCodePage, name: "Confirmation"},
    { path: "/:case/finished", component: CaseFinished, name: "Finished"}
  ]
});

router.beforeEach((to, from) => {
  window.scrollTo(0, 0)
  // if(to.name === "Case Authorized" && !localStorage.getItem("username")){
  //   return {name: "Case", params: {case: to.params.case}}
  // }
  if(from.name === "Finished" && to.name === "True Answer"){
    return {name: "Home"}
  }
})
export default router;
