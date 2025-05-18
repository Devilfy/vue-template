<script setup lang="ts">
import AuthLayout from "./ui/auth-layout.vue";
import RegisterForm from "./ui/register-form.vue";
import { useI18n } from "vue-i18n";
import { ROUTES } from "@/shared/model/routes";

const { t } = useI18n();
</script>

<template>
    <AuthLayout>
        <template #title>
            <h1 class="text-3xl font-bold text-center">{{ t("register.title") }}</h1>
        </template>
        <template #description>
            <p class="text-sm text-muted-foreground">{{ t("register.description") }}</p>
        </template>
        <template #form>
            <RegisterForm />
        </template>
        <template #footer>
            <p>
                {{ t("register.footerText") }}
                <router-link :to="ROUTES.LOGIN">
                    <span class="text-primary">{{ t("register.footerLink") }}</span>
                </router-link>
            </p>
        </template>
    </AuthLayout>
</template>

<style scoped></style>
