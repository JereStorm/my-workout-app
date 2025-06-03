<template>
    <div class="done-workouts-page">

        <h1 class="mt-5">Mis Entrenos <i class="bi bi-book"></i></h1>

        <div v-if="isLoading" class="loader"></div>

        <!-- LIST OF TRAINS -->
        <div v-else class="info-container">
            <div class="text-start px-1 d-flex flex-column">
                <div class="my-3 h5" v-for="w in workouts" :key="w.id">
                    <h5 class="h5 mt-3 mb-3">{{ formatDate(w.date) }} </h5>
                    <router-link class="ms-5 link-info link-offset-2 link-underline-opacity-25
                        link-underline-opacity-100-hover" :to="{ name: 'DetailWorkout', query: { id: w.id } }">
                        <i class="bi bi-arrow-up-left-square me-2"></i>
                        "{{ w.dataRoutine.nombre }}"
                    </router-link>
                </div>
            </div>
            <div v-if="!isLoading && workouts.lenght === 0">
                <h5>No hay entrenos guardadas aún.</h5>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useProfileStore } from '@/stores/profile';
import { storeToRefs } from 'pinia';

// instancia el store
const profileStore = useProfileStore();

const { isLoading } = storeToRefs(profileStore);

// lista de workouts
const workouts = computed(() => profileStore.profile.workouts || []);

// formatear fecha ISO → DD/MM/YYYY
function formatDate(iso) {
    const d = new Date(iso);
    return `${String(d.getDate()).padStart(2, '0')}/` +
        `${String(d.getMonth() + 1).padStart(2, '0')}/` +
        d.getFullYear();
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
