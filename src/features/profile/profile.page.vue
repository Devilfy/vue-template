<script setup lang="ts">
import { useUser } from "@/services/user/model/use-user";
import { useI18n } from "vue-i18n";

const { user } = useUser();
const { t } = useI18n();
</script>

<template>
    <div class="container mx-auto px-4 py-8">
        <div class="max-w-3xl mx-auto bg-card rounded-lg p-6 shadow-sm">
            <h1 class="text-2xl font-bold mb-6">{{ t("profile.title") }}</h1>

            <div
                v-if="user"
                class="space-y-4">
                <div class="flex items-center gap-4">
                    <div
                        class="w-16 h-16 rounded-full overflow-hidden bg-accent-light/10 dark:bg-accent-dark/10 flex items-center justify-center">
                        <span class="text-xl font-medium text-text-light dark:text-text-dark">
                            {{ user.email.charAt(0).toUpperCase() }}
                        </span>
                    </div>
                    <div>
                        <h2 class="text-xl font-semibold">{{ user.email }}</h2>
                        <p class="text-sm text-muted-foreground">ID: {{ user.id }}</p>
                    </div>
                </div>

                <div class="border-t border-accent-light/10 dark:border-accent-dark/10 pt-4 mt-6">
                    <h3 class="font-medium mb-2">{{ t("profile.userInfo") }}</h3>
                    <div class="grid grid-cols-1 gap-2">
                        <div
                            class="flex justify-between py-2 border-b border-accent-light/5 dark:border-accent-dark/5">
                            <span class="text-muted-foreground">{{ t("profile.email") }}</span>
                            <span>{{ user.email }}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div
                v-else
                class="flex justify-center items-center h-40">
                <p>{{ t("profile.loading") }}</p>
            </div>
        </div>
    </div>
</template>
