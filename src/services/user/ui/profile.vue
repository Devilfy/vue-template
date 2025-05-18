<script setup lang="ts">
import { useUser } from "@/services/user/model/use-user";

const { user, isAuthenticated, isLoading, updateUser } = useUser();
</script>

<template>
    <div>
        <div v-if="isLoading">Загрузка...</div>
        <div v-else-if="isAuthenticated && user">
            <h1>Профиль пользователя</h1>
            <p>Email: {{ user.email }}</p>
            <p>ID: {{ user.id }}</p>
            <p>Дата создания: {{ new Date(user.createdAt).toLocaleDateString() }}</p>
            <button @click="updateUser">Обновить данные</button>
        </div>
        <div v-else>Вы не авторизованы</div>
    </div>
</template>
