<script setup lang="ts">
import AuthLayout from "./ui/auth-layout.vue";
import RegisterForm from "./ui/register-form.vue";
</script>

<template>
    <AuthLayout>
        <template #title>
            <h1 class="text-3xl font-bold text-center">Register</h1>
        </template>
        <template #description>
            <p class="text-sm text-muted-foreground">register.description</p>
        </template>
        <template #form>
            <RegisterForm />
        </template>
        <template #footer>
            <p>register.footerText</p>
        </template>
    </AuthLayout>
</template>

<style scoped></style>
