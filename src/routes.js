import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "./views/HomePage.vue";
import AuthorizedPage from "./views/AuthorizedPage.vue";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: "/", component: HomePage},
        {path: "/authorized", component: AuthorizedPage}
    ]
})

export default router;