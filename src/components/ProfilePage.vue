<template>

    <h1>Bienvenido {{ nickname }}</h1>
    <h2>Hola hola</h2>

</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useProfileStore } from '../stores/profile';

const nickname = ref('')

onMounted(() => {
    const profileStore = useProfileStore();
    nickname.value = profileStore.profile.nickName;
})
</script>