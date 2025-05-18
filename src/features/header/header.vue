<script setup lang="ts">
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import { ROUTES } from "@/shared/model/routes";
import { Button } from "@/shared/ui/kit/button";
import { useUser } from "@/services/user/model/use-user";
import { useSession } from "@/services/session";
import LanguageSwitcher from "@/shared/ui/switcher/language-switcher.vue";
import ThemeSwitcher from "@/shared/ui/switcher/theme-switcher.vue";

const router = useRouter();
const { t } = useI18n();
const { logout } = useSession();
const { user, isAuthenticated, updateUser } = useUser();

const handleLogout = () => {
    logout();
    updateUser();
    router.push(ROUTES.LOGIN);
};
</script>

<template>
    <header
        class="h-16 sticky top-0 z-50 bg-background-light dark:bg-background-dark border-b border-accent-light/10 dark:border-accent-dark/10 backdrop-blur-sm">
        <div class="container mx-auto px-4 h-16 flex items-center justify-between">
            <div class="flex items-center gap-8">
                <div
                    class="text-xl font-bold text-primary-light dark:text-primary-dark cursor-pointer"
                    @click="router.push(ROUTES.HOME)">
                    Devilfy
                </div>
            </div>

            <div class="flex items-center gap-4">
                <div class="flex items-center gap-4">
                    <div
                        v-if="isAuthenticated && user"
                        class="flex items-center gap-4">
                        <div
                            class="flex items-center cursor-pointer rounded-lg transition-all duration-200 hover:bg-accent-light/5 dark:hover:bg-accent-dark/5 p-2"
                            @click="router.push(`/profile/${user.id}`)">
                            <div
                                class="relative w-8 h-8 rounded-full overflow-hidden ring-2 ring-primary-light dark:ring-primary-dark">
                                <div v-if="!user.email"></div>
                                <div
                                    v-else
                                    class="w-full h-full bg-accent-light/10 dark:bg-accent-dark/10 flex items-center justify-center">
                                    <span
                                        class="text-sm font-medium text-text-light dark:text-text-dark">
                                        {{ user?.email.charAt(0).toUpperCase() }}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <Button
                            class="text-sm font-medium text-text-light dark:text-text-dark hover:text-accent-light bg-transparent border border-accent-light/40 dark:border-accent-dark/40 dark:hover:text-accent-dark hover:bg-accent-light/10 dark:hover:bg-accent-dark/10 transition-all duration-200 rounded-lg"
                            @click="handleLogout">
                            {{ t("header.logout") }}
                        </Button>
                    </div>

                    <div
                        v-else
                        class="flex items-center gap-3">
                        <Button
                            @click="router.push(ROUTES.LOGIN)"
                            size="lg"
                            class="text-sm font-medium text-text-light dark:text-text-dark hover:text-primary-light bg-transparent border border-accent-light/40 dark:border-accent-dark/40 hover:bg-accent-light/10 dark:hover:bg-accent-dark/10 transition-all duration-200 rounded-lg">
                            {{ t("header.login") }}
                        </Button>
                        <Button
                            size="lg"
                            class="text-sm font-medium bg-primary-light dark:bg-primary-dark text-white hover:bg-accent-light dark:hover:bg-primary-dark/80 transition-all duration-200 rounded-lg"
                            @click="router.push(ROUTES.REGISTER)">
                            {{ t("header.register") }}
                        </Button>
                    </div>

                    <div
                        class="flex items-center gap-3 pl-3 border-l border-accent-light/10 dark:border-accent-dark/10">
                        <ThemeSwitcher />
                        <LanguageSwitcher />
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>
