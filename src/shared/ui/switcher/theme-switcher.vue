<script setup lang="ts">
import { useTheme } from "@/shared/composables/use-theme";
import { Button } from "@/shared/ui/kit/button";
import { Moon, Sun } from "lucide-vue-next";

const { theme, toggleTheme } = useTheme();
</script>

<template>
    <Button
        size="icon"
        @click="toggleTheme"
        class="group text-sm font-medium text-text-light dark:text-text-dark hover:text-accent-light dark:hover:text-accent-dark bg-transparent border border-accent-light/40 dark:border-accent-dark/40 hover:bg-accent-light/10 dark:hover:bg-accent-dark/10 transition-all duration-200 rounded-lg">
        <Moon
            v-if="theme === 'light'"
            class="h-5 w-5 transition-colors duration-200 group-hover:text-accent-light dark:group-hover:text-accent-dark" />
        <Sun
            v-else
            class="h-5 w-5 transition-colors duration-200 group-hover:text-accent-light dark:group-hover:text-accent-dark" />
    </Button>
</template>
