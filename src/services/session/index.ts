import { jwtDecode } from "jwt-decode";
import { AUTH_TOKENS } from "@/shared/constants/token";
import { api } from "@/shared/api";
import { ref } from "vue";

type Session = {
    id: string;
    exp: number;
    iat: number;
};

let refreshTokenPromise: Promise<string | null> | null = null;

export const useSession = () => {
    const token = ref(localStorage.getItem(AUTH_TOKENS.ACCESS));

    const login = (accessToken: string, refreshToken: string) => {
        localStorage.setItem(AUTH_TOKENS.ACCESS, accessToken);
        localStorage.setItem(AUTH_TOKENS.REFRESH, refreshToken);
        token.value = accessToken;
    };

    const register = (accessToken: string, refreshToken: string) => {
        localStorage.setItem(AUTH_TOKENS.ACCESS, accessToken);
        localStorage.setItem(AUTH_TOKENS.REFRESH, refreshToken);
        token.value = accessToken;
    };

    const logout = () => {
        localStorage.removeItem(AUTH_TOKENS.ACCESS);
        localStorage.removeItem(AUTH_TOKENS.REFRESH);
        token.value = null;
    };

    const session = token.value ? jwtDecode<Session>(token.value) : null;

    const refreshToken = async () => {
        if (!token.value) return null;

        const session = jwtDecode<Session>(token.value);
        if (session.exp < Date.now() / 1000) {
            if (!refreshTokenPromise) {
                refreshTokenPromise = api
                    .post("/auth/refresh", {
                        refreshToken: localStorage.getItem(AUTH_TOKENS.REFRESH),
                    })
                    .then((response) => {
                        const { accessToken, refreshToken } = response.data;
                        if (accessToken && refreshToken) {
                            login(accessToken, refreshToken);
                            return accessToken;
                        }
                        logout();
                        return null;
                    })
                    .catch(() => {
                        logout();
                        return null;
                    })
                    .finally(() => {
                        refreshTokenPromise = null;
                    });
            }

            return refreshTokenPromise;
        }

        return token;
    };

    return { refreshToken, login, register, logout, session };
};
