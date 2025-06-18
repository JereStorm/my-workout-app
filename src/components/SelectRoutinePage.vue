<template>
    <div class="contenedor">
        <h1 class="mt-5 my-md-5 mb-3">Selecciona la Rutina</h1>

        <div v-if="isLoading" class="loader"></div>


        <div v-else class="accordion" id="accordionRoutine" data-bs-theme="dark">
            <div v-for="(routine, index) in routines" :key="routine.id" class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        :data-bs-target="`#collapse${index}`" :aria-controls="`collapse${index}`">
                        {{ routine.nombre }}
                    </button>
                </h2>
                <div :id="`collapse${index}`" class="accordion-collapse collapse" data-bs-parent="#accordionRoutine">
                    <div class="accordion-body pb-0 d-flex gap-3 justify-content-between">
                        <p><strong>Dificultad:</strong> {{ routine.dificultad }}</p>
                        <p><strong>Cantidad de bloques:</strong> {{ routine.bloques.length }}</p>
                    </div>
                    <div class="accordion-footer pb-3">
                        <button class="btn btn-sm btn-outline-success" @click="empezarEntreno(routine.id)">
                            <i class="bi bi-file-earmark-plus"></i> Empezar Entrenamiento
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="mt-3" v-if="!isLoading && routines.length === 0">
            <h5>Aun no tienes rutinas, crea una primero.</h5>
        </div>

        <div class="text-center mt-5">
            <RouterLink to="/dashboard/form-routine"
                class="btn btn-outline-success px-5 d-flex gap-2 justify-content-center align-items-baseline"
                id="add-routine">
                <i class="bi bi-plus-circle-fill"></i> Agregar Rutina
            </RouterLink>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useProfileStore } from '@/stores/profile'
import { storeToRefs } from 'pinia'
import { useRoute, useRouter } from 'vue-router'
import RoutineDetail from '@/components/RoutineDetail.vue';

// Acceso al store de perfil
const profileStore = useProfileStore()
const { profile } = storeToRefs(profileStore)

const { isLoading } = storeToRefs(profileStore);

const route = useRoute();
const router = useRouter();

// Lista computada de rutinas
const routines = computed(() => profile.value.routines || []);

const empezarEntreno = (routineId) => {
    router.push({
        name: 'RegisterWorkout',
        query: { id: routineId }
    });
}
</script>

<style scoped>
.contenedor {
    display: flex;
    flex-direction: column;
    padding-top: 50px;
}

.accordion {
    width: 100%;
    padding: 0px 5px;
}

@media only screen and (min-width: 768px) {
    .contenedor {
        padding-left: 160px;
        padding-top: 0px;
        padding-right: 0px;
    }

    .accordion {
        width: 80%;
    }
}
</style>
