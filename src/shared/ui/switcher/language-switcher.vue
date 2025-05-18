<script setup lang="ts">
import { Button } from "@/shared/ui/kit/button";
import { i18n } from "@/shared/lib/i18n";
import { ref, watch, onMounted } from "vue";

const currentLang = ref(localStorage.getItem("language") || "ru");

const toggleLanguage = () => {
    const newLang = currentLang.value === "en" ? "ru" : "en";

    i18n.global.locale = newLang;
    localStorage.setItem("language", newLang);
    currentLang.value = newLang;
};

onMounted(() => {
    currentLang.value = localStorage.getItem("language") || "ru";
});

watch(
    () => i18n.global.locale,
    (newLang) => {
        if (newLang && currentLang.value !== newLang) {
            currentLang.value = newLang;
        }
    }
);
</script>

<template>
    <Button
        size="icon"
        @click="toggleLanguage"
        class="text-sm font-medium text-text-light dark:text-text-dark hover:text-accent-light dark:hover:text-accent-dark bg-transparent border border-accent-light/40 dark:border-accent-dark/40 hover:bg-accent-light/10 dark:hover:bg-accent-dark/10 transition-all duration-200 rounded-lg">
        {{ currentLang === "en" ? "RU" : "EN" }}
    </Button>
</template>
