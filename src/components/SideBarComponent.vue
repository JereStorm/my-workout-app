<template>
    <div class="d-flex">
        <!-- 🔹 Sidebar -->
        <transition name="slide-fade">
            <div v-if="!isMobile || isSidebarVisible"
                class="sidebar-profile flex-column flex-shrink-0 px-1 text-bg-dark"
                :class="{ 'mobile-mode': isMobile }">
                <div class="d-flex flex-column align-items-center">
                    <router-link v-if="!isMobile" to="/dashboard" class="h3 mb-1 text-light ">
                        <i class="bi bi-house"></i>
                    </router-link>
                    <div class="username-container text-center font-weight-medium">
                        <p class="ellipsis my-0" :title="profile.nickname">
                            <span class="h5"> {{ profile.nickname ||
                                "Usuario" }} </span>
                        </p>
                    </div>

                </div>
                <hr />
                <ul class="nav text-center nav-pills flex-column mb-auto">
                    <li class="nav-item">
                        <router-link to="/dashboard/my-workouts"
                            class="nav-link d-flex flex-column justify-content-center align-items-center px-1 text-decoration-none">
                            <i class="bi bi-clipboard-check"></i> Mis Rutinas
                        </router-link>
                    </li>
                    <hr />
                    <li class="nav-item">
                        <router-link to="/dashboard/my-profile"
                            class="nav-link d-flex flex-column justify-content-center align-items-center px-1 text-decoration-none">
                            <i class="bi bi-person-circle"></i> Mi Perfil
                        </router-link>
                    </li>
                    <hr />
                    <li class="nav-item d-flex justify-content-center">
                        <button
                            class="nav-link d-flex flex-column justify-content-center align-items-center text-light px-1"
                            @click.prevent="logout">
                            <i class="bi bi-box-arrow-right"></i> Cerrar Sesion
                        </button>
                    </li>
                </ul>
            </div>
        </transition>

        <!-- 🔹 Overlay (solo mobile) -->
        <transition name="fade">
            <div v-if="isMobile && isSidebarVisible" class="darkSide" @click="toggleSidebar"></div>
        </transition>

        <!-- 🔹 Botón para abrir sidebar (solo mobile) -->
        <header v-if="isMobile" class="heather p-2 w-100 nav-mobile">
            <!-- <h1 class="mb-0">C a l i<span> T a s k</span></h1> -->
            <router-link to="/dashboard" class="h2 mb-0 d-flex gap-2">
                <i class="bi bi-house"></i>
            </router-link>
            <button class="btn btn-outline-info" @click.stop="toggleSidebar">
                <i class="bi bi-list"></i>
            </button>

        </header>


    </div>
</template>

<script setup>
import { useProfileStore } from '@/stores/profile';
import { useUserStore } from '@/stores/user';
import { storeToRefs } from 'pinia';
import { onMounted, onUnmounted, ref, watch } from 'vue';

const isSidebarVisible = ref(false);
const isMobile = ref(window.innerWidth < 768); // <768px se considera mobile

const profileStore = useProfileStore();
const userStore = useUserStore();
const { profile } = storeToRefs(profileStore);

const logout = () => userStore.logout();

const toggleSidebar = () => {
    isSidebarVisible.value = !isSidebarVisible.value;
};

const handleResize = () => {
    isMobile.value = window.innerWidth < 768;
    if (!isMobile.value) isSidebarVisible.value = false; // cerrar si se agranda pantalla
};

// Cierre si se hace clic fuera (solo en mobile)
const handleClickOutside = (event) => {
    if (!isMobile.value) return;
    const sidebar = document.querySelector('.sidebar-profile');
    if (isSidebarVisible.value && sidebar && !sidebar.contains(event.target)) {
        isSidebarVisible.value = false;
    }
};

onMounted(() => {
    window.addEventListener('resize', handleResize);
    document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
    document.removeEventListener('click', handleClickOutside);
});

</script>

<style scoped>
.nav-link {
    color: #ffffff;
    cursor: pointer;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    transition: all 0.3s ease;
    font-weight: 500;
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

.nav-link:hover i {
    color: #00ffff;
}

.router-link-active,
.router-link-exact-active {
    color: #00ffff !important;
    text-shadow: 0 0 5px #00ffff;
    font-weight: bold;
}

.sidebar-profile {
    width: 160px;
    height: 100vh;
    background-color: #343a40;
    padding: 1rem;
    overflow-y: auto;
}

/* Si es mobile: sidebar flota */
.sidebar-profile.mobile-mode {
    position: fixed;
    top: 0;
    left: 0;
    margin-top: 55px;
    z-index: 20;
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
    z-index: 9;
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
    border-bottom: 1px solid #555555;
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

    }

    .profileNickname {
        font-size: 16px;
    }
}
</style>