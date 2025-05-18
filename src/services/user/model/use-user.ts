import { inject } from "vue";
import { UserKey } from "../context/user.context";
import type { UserContextType } from "../context/user.context";

export function useUser(): UserContextType {
    const context = inject(UserKey);
    if (!context) {
        throw new Error(
            "useUser must be used within a component where provideUser has been called"
        );
    }
    return context;
}
