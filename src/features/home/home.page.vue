<script setup lang="ts">
import { useRouter } from "vue-router";
import { ROUTES } from "@/shared/model/routes";
import { Button } from "@/shared/ui/kit/button";
import { useUser } from "@/services/user/model/use-user";
import { useI18n } from "vue-i18n";

const router = useRouter();
const { t } = useI18n();

const { isAuthenticated, user } = useUser();
</script>

<template>
    <div class="container mx-auto px-4 py-16">
        <div class="max-w-4xl mx-auto">
            <div class="text-center mb-16">
                <h1 class="text-4xl md:text-5xl font-bold mb-6 text-text-light dark:text-text-dark">
                    {{ t("home.title") }}
                </h1>
                <p class="text-lg text-muted-foreground mb-8">
                    {{ t("home.description") }}
                </p>

                <div class="flex flex-wrap justify-center gap-4">
                    <div v-if="isAuthenticated">
                        <Button
                            size="lg"
                            class="text-sm font-medium bg-primary-light dark:bg-primary-dark text-white hover:bg-accent-light dark:hover:bg-primary-dark/80 transition-all duration-200 rounded-lg"
                            @click="router.push(ROUTES.PROFILE.replace(':id', user?.id ?? ''))">
                            {{ t("home.profile") }}
                        </Button>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="bg-card rounded-lg p-6 shadow-sm">
                    <h2 class="text-xl font-semibold mb-3">
                        {{ t("home.vue3.title") }}
                    </h2>
                    <p class="text-muted-foreground">
                        {{ t("home.vue3.description") }}
                    </p>
                </div>

                <div class="bg-card rounded-lg p-6 shadow-sm">
                    <h2 class="text-xl font-semibold mb-3">
                        {{ t("home.authentication.title") }}
                    </h2>
                    <p class="text-muted-foreground">
                        {{ t("home.authentication.description") }}
                    </p>
                </div>

                <div class="bg-card rounded-lg p-6 shadow-sm">
                    <h2 class="text-xl font-semibold mb-3">
                        {{ t("home.theming.title") }}
                    </h2>
                    <p class="text-muted-foreground">
                        {{ t("home.theming.description") }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
