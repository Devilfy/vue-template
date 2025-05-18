import { ROUTES } from "@/shared/model/routes";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: ROUTES.HOME,
        name: "home",
        component: () => import("@/app/app.vue"),
    },
    {
        path: ROUTES.LOGIN,
        name: "login",
        component: () => import("@/features/auth/login.page.vue"),
    },
    {
        path: ROUTES.REGISTER,
        name: "register",
        component: () => import("@/features/auth/register.page.vue"),
    },
    // {
    //     path: ROUTES.PROFILE,
    //     name: "profile",
    //     component: () => import("@/features/profile/profile.page.vue"),
    // },
    {
        path: ROUTES.NOT_FOUND,
        name: "not-found",
        component: () => import("@/features/not-found/not-found.page.vue"),
    },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});
