<script setup lang="ts">
import AuthLayout from "./ui/auth-layout.vue";
import LoginForm from "./ui/login-form.vue";
</script>

<template>
    <AuthLayout>
        <template #title>
            <h1 class="text-3xl font-bold text-center">Login</h1>
        </template>
        <template #description>
            <p class="text-sm text-muted-foreground">login.description</p>
        </template>
        <template #form>
            <LoginForm />
        </template>
        <template #footer>
            <p class="text-sm text-muted-foreground">login.footerText</p>
        </template>
    </AuthLayout>
</template>

<style scoped></style>
