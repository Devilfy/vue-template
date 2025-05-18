import { useSession } from "@/services/session";
import { useUser } from "@/services/user/model/use-user";
import { useMutation } from "@tanstack/vue-query";
import { useRouter } from "vue-router";
import authApi from "../api/auth";
import { toast } from "vue-sonner";
import { ROUTES } from "@/shared/model/routes";
import type { RegisterFormData } from "./types";

export function useRegister() {
    const { updateUser } = useUser();
    const session = useSession();
    const router = useRouter();

    const registerMutation = useMutation({
        mutationFn: authApi.register,
        onSuccess: (data) => {
            session.register(data.accessToken, data.refreshToken);
            toast.success("register.success");
            updateUser();
            router.push(ROUTES.HOME);
        },
        onError: () => {
            toast.error("register.error");
        },
    });

    const register = (data: RegisterFormData) => {
        registerMutation.mutate(data);
    };

    const errorMessage = registerMutation.isError
        ? registerMutation.error.value?.message
        : undefined;

    return { register, isPending: registerMutation.isPending, errorMessage };
}
