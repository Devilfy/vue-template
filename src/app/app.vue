<script setup lang="ts">
import { RouterView } from "vue-router";
import { Toaster } from "vue-sonner";
import UserProvider from "@/services/user/context/user.provider.vue";
</script>

<template>
    <div class="min-h-screen bg-background-light dark:bg-background-dark">
        <UserProvider>
            <RouterView />
            <Toaster richColors />
        </UserProvider>
    </div>
</template>

<style scoped></style>
