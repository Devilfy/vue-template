<script setup lang="ts">
import FormBuilder from "@/shared/ui/form/form-builder.vue";
import { registerSchema, type RegisterFormData } from "@/features/auth/model/types";
import type { FormFieldProps } from "@/shared/ui/form/form.types";
import { computed } from "vue";
import { useRegister } from "@/features/auth/model/use-register";
import { useI18n } from "vue-i18n";

const { register, isPending } = useRegister();
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
    text: t("register.registerButton"),
    isLoading: isPending.value,
}));

const handleSubmit = async (values: RegisterFormData) => {
    await register(values);
};
</script>

<template>
    <FormBuilder
        :schema="registerSchema"
        :fields="fields"
        :submitButton="submitButton"
        :onSubmit="handleSubmit" />
</template>
