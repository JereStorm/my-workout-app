<template>
    <div class="d-flex">
        <!-- 🔹 Sidebar -->
        <transition name="slide-fade">
            <div v-if="!isMobile || isSidebarVisible" class="sidebar-profile d-flex flex-column flex-shrink-0 px-1"
                :class="{ 'mobile-mode': isMobile }">
                <user-profile-header :nickname="profile.nickname" :photoURL="profile.photoURL" :level="stats.level" />
                <hr>
                <ul class="nav text-center nav-pills d-flex flex-column flex-grow-1 mt-2">

                    <li v-for="item in menuItems" :key="item.name" class="nav-item">
                        <router-link :to="{ name: item.name }"
                            class="nav-link d-flex justify-content-start gap-2 align-items-center px-1 text-start text-decoration-none">
                            <i :class="`bi ${item.icon} color-principal px-3 py-1`"></i>
                            <span class="mb-1">{{ item.label }}</span>
                        </router-link>
                    </li>
                    <hr>

                    <li class="nav-item mt-auto" :class="isMobile ? 'mb-5' : ''">

                        <button
                            class="nav-link nav-link-danger d-flex justify-content-start gap-2 align-items-center text-danger px-1"
                            @click="logout">
                            <i class="bi bi-box-arrow-right text-danger px-3 py-1"></i>
                            <span class="mb-1">Cerrar Sesión</span>
                        </button>
                    </li>

                </ul>
            </div>
        </transition>

        <!-- 🔹 Overlay (solo mobile) -->
        <transition name="fade">
            <div v-if="isMobile && isSidebarVisible" class="darkSide" @click="closeSidebar" />
        </transition>

        <!-- 🔹 Header mobile -->
        <header v-if="isMobile" class="heather p-2 w-100 nav-mobile">
            <router-link :to="{ name: 'MyWorkouts' }" class="h2 mb-0 d-flex gap-2 bg-transparent router-link-active">
                <i class="bi bi-house"></i>
            </router-link>

            <button class="btn btn-outline-info" @click.stop="toggleSidebar">
                <i class="bi bi-list"></i>
            </button>
        </header>
    </div>
</template>


<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useProfileStore } from '@/stores/profile'
import { useUserStore } from '@/stores/user'
import { SIDE_MENU_ITEMS } from './sideMenu.config'
import UserProfileHeader from './UserProfileHeader.vue'

import { useRoute } from 'vue-router'
import { watch } from 'vue'

const route = useRoute()

const router = useRouter()
const profileStore = useProfileStore()
const userStore = useUserStore()
const { profile } = storeToRefs(profileStore)
const stats = computed(() => profileStore.userStats)


/* ----------------- State ----------------- */
const isSidebarVisible = ref(false)
const isMobile = ref(window.innerWidth < 768)

/* ----------------- Menu config ----------------- */
const menuItems = SIDE_MENU_ITEMS;

/* ----------------- Actions ----------------- */
const toggleSidebar = () => {
    isSidebarVisible.value = !isSidebarVisible.value
}

const closeSidebar = () => {
    isSidebarVisible.value = false
}

const logout = async () => {
    await userStore.logout()
    router.push({ name: 'Unregistred' })
}

/* ----------------- Responsive ----------------- */
const handleResize = () => {
    isMobile.value = window.innerWidth < 768
    if (!isMobile.value) closeSidebar()
}

onMounted(() => {
    window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
})


watch(() => route.fullPath, () => {
    if (isMobile.value) {
        closeSidebar()
    }
})


</script>


<style scoped>
.nav-link {
    color: #ffffff;
    cursor: pointer;
    width: 90%;
    margin: 5px auto;
    padding: 5px 1rem;
    border-radius: 12px;
    transition: all 0.3s ease;
    font-weight: 400;
}

.nav-link i {
    font-size: 1.4rem;
    margin-bottom: 2px;
    transition: transform 0.3s ease, color 0.3s ease;
}

.nav-link:hover {
    background-color: rgba(0, 255, 255, 0.1);
    color: #00ffff;
    text-shadow: 0 0 5px #00ffff;
    transform: translateY(-2px);
}

.nav-link-danger {
    transition: all 0.3s ease;
}

.nav-link-danger:hover {
    background-color: #242727;
    text-shadow: 0 0 5px #861313;

}

.nav-link:hover i {
    color: #00ffff;
}

.router-link-active,
.router-link-exact-active {
    background-color: #00ffff;
    color: #121414;
    font-weight: bold;
}

.router-link-active i {
    color: #121414;
}

.sidebar-profile {
    min-width: 200px;
    width: 80%;
    max-width: 400px;
    height: 100%;
    background-color: #121414;
    padding: 1rem;
    overflow-y: auto;
}

/* Si es mobile: sidebar flota */
.sidebar-profile.mobile-mode {
    position: fixed;
    top: 0;
    left: 0;
    margin-top: 55px;
    z-index: 502;
}

.profileNickname {
    font-size: 14px;
}

.ellipsis {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    display: inline-block;
    width: 90%;
    /* o un valor fijo como 200px */
}

/* Overlay */
.darkSide {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 501;
}

/* Transiciones */
.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: all 0.3s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(-100%);
    opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.nav-mobile {
    position: fixed;
    top: 0px;
    z-index: 10;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.heather {
    width: 100%;
    background-color: #151515;
    z-index: 600;
}

.heather span {
    color: #00ffff;
}

.btn-outline-info {
    border-color: #00ffff;
}

.username-container {
    width: 90%;
}

/* Solo se fija si NO es mobile */
@media (min-width: 768px) {
    .sidebar-profile {
        position: fixed;
        top: 0;
        width: 240px;
    }

    .profileNickname {
        font-size: 16px;
    }
}
</style>