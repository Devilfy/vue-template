<script setup lang="ts">
import FormBuilder from "@/shared/ui/form/form-builder.vue";
import { registerSchema, type RegisterFormData } from "@/features/auth/model/types";
import type { FormFieldProps } from "@/shared/ui/form/form.types";
import { computed } from "vue";
import { useRegister } from "@/features/auth/model/use-register";

const { register, isPending } = useRegister();

const fields: FormFieldProps[] = [
    {
        name: "email",
        label: "input.email",
        type: "email",
        required: true,
    },
    {
        name: "password",
        label: "input.password",
        type: "password",
        required: true,
    },
];

const submitButton = computed(() => ({
    text: "register.registerButton",
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
