import { createRouter, createWebHistory } from "vue-router";

/*
 * COMPONENTS
 */
import HomePage from "../pages/HomePage.vue";
import ProjectsPage from "../pages/ProjectsPage.vue";
import ProjectPage from "../pages/ProjectPage.vue";
import NotFound from "../pages/NotFound.vue";

/*
 * ROUTES
 */
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/projects",
      name: "projects",
      component: ProjectsPage,
    },
    {
      path: "/projects/:slug",
      name: "project",
      component: ProjectPage,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: NotFound,
    },
  ],
});

export default router;
