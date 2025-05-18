export const ROUTES = {
    HOME: "/",
    LOGIN: "/login",
    REGISTER: "/register",
    PROFILE: "/profile/:id",
    NOT_FOUND: "/:pathMatch(.*)*",
} as const;
