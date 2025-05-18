<script setup lang="ts">
import FormBuilder from "@/shared/ui/form/form-builder.vue";
import { loginSchema, type LoginFormData } from "@/features/auth/model/types";
import type { FormFieldProps } from "@/shared/ui/form/form.types";
import { useLogin } from "@/features/auth/model/use-login";
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { login, isPending } = useLogin();
const { t } = useI18n();

const fields: FormFieldProps[] = [
    {
        name: "email",
        label: t("input.email"),
        type: "email",
        required: true,
    },
    {
        name: "password",
        label: t("input.password"),
        type: "password",
        required: true,
    },
];

const submitButton = computed(() => ({
    text: t("login.loginButton"),
    isLoading: isPending.value,
}));

const handleSubmit = async (values: LoginFormData) => {
    await login(values);
};
</script>

<template>
    <FormBuilder
        :schema="loginSchema"
        :fields="fields"
        :submitButton="submitButton"
        :onSubmit="handleSubmit" />
</template>
