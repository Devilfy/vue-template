import { ROUTES } from "@/shared/model/routes";
import { createRouter, createWebHistory } from "vue-router";
import NotFound from "@/features/not-found/not-found.page.vue";
import { AUTH_TOKENS } from "@/shared/constants/token";

const routes = [
    {
        path: ROUTES.HOME,
        name: "home",
        component: () => import("@/features/home/home.page.vue"),
    },
    {
        path: ROUTES.LOGIN,
        name: "login",
        component: () => import("@/features/auth/login.page.vue"),
        meta: { requiresGuest: true },
    },
    {
        path: ROUTES.REGISTER,
        name: "register",
        component: () => import("@/features/auth/register.page.vue"),
        meta: { requiresGuest: true },
    },
    {
        path: ROUTES.PROFILE,
        name: "profile",
        component: () => import("@/features/profile/profile.page.vue"),
        meta: { requiresAuth: true },
    },
    {
        path: ROUTES.NOT_FOUND,
        name: "not-found",
        component: NotFound,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

function hasToken(): boolean {
    return !!localStorage.getItem(AUTH_TOKENS.ACCESS);
}

router.beforeEach(async (to, _, next) => {
    if (to.meta.requiresAuth && !hasToken()) {
        return next({ name: "login" });
    }

    if (to.meta.requiresGuest && hasToken()) {
        return next({ path: "/" });
    }

    next();
});

export { router };
