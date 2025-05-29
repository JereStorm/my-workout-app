<template>
    <div class="done-workouts-page">

        <h1 class="mt-5">Mis Entrenos <i class="bi bi-book"></i></h1>

        <div v-if="isLoading" class="loader"></div>

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
