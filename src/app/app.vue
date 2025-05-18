<script setup lang="ts">
import { RouterView } from "vue-router";
import Header from "@/features/header/header.vue";
import UserProvider from "@/services/user/context/user.provider.vue";
import { Toaster } from "vue-sonner";
</script>

<template>
    <div class="min-h-screen bg-background-light dark:bg-background-dark">
        <UserProvider>
            <Header />
            <main>
                <RouterView />
            </main>
            <Toaster richColors />
        </UserProvider>
    </div>
</template>
