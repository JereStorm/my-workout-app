<template>
    <div class="done-workouts-page">

        <h1 class="mt-5">Mis Entrenos <i class="bi bi-book"></i></h1>

        <div v-if="isLoadingInfo" class="loader"></div>

        <!-- LIST OF TRAINS -->
        <div v-else class="info-container">
            <div class="text-start px-2 d-flex flex-column">
                <p class="my-3 h5" v-for="w in workouts" :key="w.id">
                    <router-link class="link-info link-offset-2 link-underline-opacity-25
                        link-underline-opacity-100-hover" :to="{ name: 'DetailWorkout', query: { id: w.id } }">
                        <i class="bi bi-arrow-up-left-square me-2"></i>
                        {{ formatDate(w.date) }} -
                        "{{ w.dataRoutine.nombre }}"
                    </router-link>
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import { useProfileStore } from '@/stores/profile';
import { useRouter } from 'vue-router';

// instancia el store
const store = useProfileStore();
const router = useRouter();

const isLoadingInfo = ref(true);


// once the profile.id is loaded, hide loader
watch(
    () => store.profile.id,
    (id) => {
        if (id) {
            isLoadingInfo.value = false;
            // opcional: cargar workouts si no lo hiciste aún
            if (!store.profile.workouts?.length) {
                store.getWorkouts?.();
            }
        }
    },
    { immediate: true }
);

// lista de workouts
const workouts = computed(() => store.profile.workouts || []);

// helper para obtener nombre de rutina
function getRoutineName(rutinaId) {
    const r = store.getRutinaLocal(rutinaId);
    return r ? r.nombre : 'Rutina desconocida';
}

// formatear fecha ISO → DD/MM/YYYY
function formatDate(iso) {
    const d = new Date(iso);
    return `${String(d.getDate()).padStart(2, '0')}/` +
        `${String(d.getMonth() + 1).padStart(2, '0')}/` +
        d.getFullYear();
}

// truncar texto
function truncate(text, len = 30) {
    if (!text) return '';
    return text.length > len ? text.slice(0, len) + '…' : text;
}
</script>

<style scoped>
.done-workouts-page {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    padding-top: 50px;
    margin-bottom: auto;
}

.info-container {
    margin-top: 1rem;
    margin-bottom: auto;
}

@media only screen and (min-width: 768px) {
    .done-workouts-page {
        padding-left: 160px;
        padding-top: 0px;
        padding-right: 0px;
    }
}
</style>
