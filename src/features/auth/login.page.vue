<script setup lang="ts">
import AuthLayout from "./ui/auth-layout.vue";
import LoginForm from "./ui/login-form.vue";
import { useI18n } from "vue-i18n";
import { ROUTES } from "@/shared/model/routes";
const { t } = useI18n();
</script>

<template>
    <AuthLayout>
        <template #title>
            <h1 class="text-3xl font-bold text-center">{{ t("login.title") }}</h1>
        </template>
        <template #description>
            <p class="text-sm text-muted-foreground">{{ t("login.description") }}</p>
        </template>
        <template #form>
            <LoginForm />
        </template>
        <template #footer>
            <p>
                {{ t("login.footerText") }}
                <router-link :to="ROUTES.REGISTER">
                    <span class="text-primary">{{ t("login.footerLink") }}</span>
                </router-link>
            </p>
        </template>
    </AuthLayout>
</template>

<style scoped></style>
