<script setup lang="ts">
import { RouterView } from "vue-router";
import { Toaster } from "vue-sonner";
import UserProvider from "@/services/user/context/user.provider.vue";
import Header from "@/features/header/header.vue";
</script>

<template>
    <div class="min-h-screen bg-background-light dark:bg-background-dark">
        <UserProvider>
            <Header />
            <RouterView />
            <Toaster richColors />
        </UserProvider>
    </div>
</template>

<style scoped></style>
