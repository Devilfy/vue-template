import { ref, provide, readonly } from "vue";
import type { InjectionKey, Ref } from "vue";
import { AUTH_TOKENS } from "@/shared/constants/token";
import type { User } from "../model/types";
import userApi from "../api/user";

export interface UserContextType {
    user: Ref<User | null>;
    isAuthenticated: Ref<boolean>;
    isLoading: Ref<boolean>;
    updateUser: () => Promise<void>;
}

export const UserKey: InjectionKey<UserContextType> = Symbol("UserContext");

export function provideUser() {
    const user = ref<User | null>(null);
    const isAuthenticated = ref<boolean>(!!localStorage.getItem(AUTH_TOKENS.ACCESS));
    const isLoading = ref<boolean>(false);

    const updateUser = async () => {
        const token = localStorage.getItem(AUTH_TOKENS.ACCESS);
        if (token) {
            try {
                isLoading.value = true;
                const userData = await userApi.getUser();
                user.value = userData;
                isAuthenticated.value = true;
            } catch {
                isAuthenticated.value = false;
                localStorage.removeItem(AUTH_TOKENS.ACCESS);
                localStorage.removeItem(AUTH_TOKENS.REFRESH);
                user.value = null;
            } finally {
                isLoading.value = false;
            }
        } else {
            isAuthenticated.value = false;
            user.value = null;
        }
    };

    const context = {
        user: readonly(user),
        isAuthenticated: readonly(isAuthenticated),
        isLoading: readonly(isLoading),
        updateUser,
    };

    provide(UserKey, context);

    return context;
}
