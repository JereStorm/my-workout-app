<template>
    <div class="w-100">
        <SideBarComponent></SideBarComponent>
        <div class="container-dashboard">
            <router-view></router-view>
        </div>
    </div>

</template>

<script setup>
import { useProfileStore } from '@/stores/profile';
// import { useUserStore } from '@/stores/user';
import { storeToRefs } from "pinia";
import { onMounted } from 'vue';
import SideBarComponent from './SideBarComponent.vue';

// const userStore = useUserStore();
const profileStore = useProfileStore();

// const { user } = storeToRefs(userStore); // 🌟 Hacemos `user` reactivo en el componente
const { profile } = storeToRefs(profileStore); // 🌟 Hacemos `user` reactivo en el componente

onMounted(() => {
    console.log(profile)
    if (profile) {
        console.log("Onmounted: profile", profile)
    }
});

</script>

<style scoped>
.sidebar-profile {
    position: fixed;
    top: 0px;
    left: 0px;
    height: 100%;
}

.container-dashboard {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.title-dashboard {
    font-size: 3.5rem;
    margin-bottom: 50px;
    text-align: center;
}
</style>