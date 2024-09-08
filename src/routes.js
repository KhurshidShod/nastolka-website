import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "./views/HomePage.vue";
import AuthorizedPage from "./views/AuthorizedPage.vue";
import ProfilePage from "./views/ProfilePage.vue";
import CasePage from "./views/CasePage.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: HomePage, name: "Home" },
    { path: "/authorized", component: AuthorizedPage, name: "Authorized" },
    { path: "/profile", component: ProfilePage, name: "Profile" },
    { path: "/cases/:case", component: CasePage, name: "Case"}
  ],
});
export default router;
