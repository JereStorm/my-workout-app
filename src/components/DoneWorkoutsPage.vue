<template>
    <div class="done-workouts-page">

        <h1 class="mt-5">Mis Entrenos <i class="bi bi-book"></i></h1>

        <div v-if="isLoading" class="loader"></div>

        <!-- LIST OF TRAINS -->
        <div v-else class="info-container">
            <div class="text-start px-1 d-flex flex-column">
                <div class="mt-5 pb-5 pt-2 px-2 card-workout" v-for="w in workouts" :key="w.id">
                    <h4 class="h4 mt-0 mb-3">{{ formatDate(w.date) }}</h4>
                    <div class="text-center">
                        <router-link class="link-info link-train h4 link-offset-2 link-underline-opacity-25
                        link-underline-opacity-100-hover" :to="{ name: 'DetailWorkout', query: { id: w.id } }">
                            <i class="bi bi-arrow-up-left-square me-2"></i>
                            "{{ w.dataRoutine.nombre }}"
                        </router-link>
                    </div>
                </div>
            </div>
            <div v-if="!isLoading && workouts.length === 0">
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
    width: 100%;
    padding: 0px 10px;
}

.link-train {
    width: 100%;
    text-align: center;
}

.card-workout {
    border: 1px solid grey;
    border-left: 0px;
    border-right: 0px;
    border-top: 0px;
    background-color: rgba(32, 32, 32, 0.493);
}

@media only screen and (min-width: 768px) {
    .done-workouts-page {
        padding-left: 160px;
        padding-top: 0px;
        padding-right: 0px;
    }

    .info-container {
        width: 90%;
        padding: 0px 100px;
    }

}
</style>
