import { useMutation } from "@tanstack/vue-query";
import authApi from "../api/auth";
import { useSession } from "@/services/session";
import { useRouter } from "vue-router";
import { ROUTES } from "@/shared/model/routes";
import type { LoginFormData } from "./types";
import { toast } from "vue-sonner";
import { useUser } from "@/services/user/model/use-user";
import { useI18n } from "vue-i18n";

export function useLogin() {
    const { updateUser } = useUser();
    const { t } = useI18n();
    const session = useSession();
    const router = useRouter();

    const loginMutation = useMutation({
        mutationFn: authApi.login,
        onSuccess: (data) => {
            session.login(data.accessToken, data.refreshToken);
            toast.success(t("login.success"));
            updateUser();
            router.push(ROUTES.HOME);
        },
        onError: () => {
            toast.error(t("login.error"));
        },
    });

    const login = (data: LoginFormData) => {
        loginMutation.mutate(data);
    };

    const errorMessage = loginMutation.isError ? loginMutation.error.value?.message : undefined;

    return { login, isPending: loginMutation.isPending, errorMessage };
}
