<script setup lang="ts">
import { Button } from "@/shared/ui/kit/button";
import { useRouter } from "vue-router";
import { ROUTES } from "@/shared/model/routes";
import { useI18n } from "vue-i18n";

const router = useRouter();
const { t } = useI18n();
</script>

<template>
    <div
        class="min-h-[calc(100vh-64px)] flex items-center justify-center bg-background-light dark:bg-background-dark">
        <div class="text-center space-y-8 p-8">
            <div class="relative">
                <h1
                    class="text-[150px] font-bold bg-gradient-to-r from-primary-light to-accent-light dark:from-primary-dark dark:to-accent-dark bg-clip-text text-transparent">
                    404
                </h1>
                <div
                    class="absolute -bottom-4 left-1/2 -translate-x-1/2 w-40 h-4 bg-gradient-to-r from-primary-light/20 to-accent-light/20 dark:from-primary-dark/20 dark:to-accent-dark/20 blur-xl" />
            </div>

            <div class="space-y-4">
                <h2 class="text-2xl font-semibold text-text-light dark:text-text-dark">
                    {{ t("notFound.title", "Страница не найдена") }}
                </h2>
                <p class="text-text-light/60 dark:text-text-dark/60 max-w-md mx-auto">
                    {{ t("notFound.description") }}
                </p>
            </div>

            <div class="flex items-center justify-center gap-4 pt-4">
                <Button
                    @click="router.back()"
                    class="text-sm font-medium text-text-light dark:text-text-dark hover:text-primary-light bg-transparent border border-accent-light/40 dark:border-accent-dark/40 hover:bg-accent-light/10 dark:hover:bg-accent-dark/10 transition-all duration-200 rounded-lg px-6">
                    {{ t("notFound.back") }}
                </Button>
                <Button
                    @click="router.push(ROUTES.HOME)"
                    class="text-sm font-medium bg-primary-light dark:bg-primary-dark text-white hover:bg-accent-light dark:hover:bg-primary-dark/80 transition-all duration-200 rounded-lg px-6">
                    {{ t("notFound.home") }}
                </Button>
            </div>
        </div>
    </div>
</template>
