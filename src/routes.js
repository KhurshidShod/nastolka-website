import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "./views/HomePage.vue";
import AuthorizedPage from "./views/AuthorizedPage.vue";
import ProfilePage from "./views/ProfilePage.vue";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: "/", component: HomePage},
        {path: "/authorized", component: AuthorizedPage},
        {path: "/profile", component: ProfilePage}
    ]
})

export default router;