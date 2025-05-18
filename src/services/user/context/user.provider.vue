<script setup lang="ts">
import { onMounted } from "vue";
import { provideUser } from "./user.context";

const { updateUser } = provideUser();

onMounted(() => {
    updateUser();
});
</script>

<template>
    <slot></slot>
</template>
