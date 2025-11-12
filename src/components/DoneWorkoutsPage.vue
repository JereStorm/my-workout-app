<template>
    <div class="done-workouts-page">

        <h1 class="mt-5 my-md-5 mb-3">Mis Entrenos <i class="bi bi-book"></i></h1>

        <div class="text-center mb-3">
            <RouterLink to="/dashboard/select-routine"
                class="btn btn-outline-success px-5 d-flex gap-2 justify-content-center align-items-baseline"
                id="add-workout">
                <i class="bi bi-plus-circle-fill"></i> Agregar Entreno
            </RouterLink>
        </div>

        <div v-if="isLoading" class="loader"></div>

        <!-- LIST OF TRAINS -->
        <div v-else class="info-container">
            <div class="workouts-container">
                <div class="timeline position-relative border-start border-2 ps-4">
                    <div v-for="workout in workouts" :key="workout.id" class="timeline-item mb-4 position-relative">
                        <!-- Punto del timeline -->
                        <div class="timeline-dot bg-primary position-absolute top-0 start-0 translate-middle"></div>

                        <!-- Contenido -->
                        <div class="timeline-content px-1 pt-2 pb-3">
                            <div class="d-flex w-100 justify-content-between align-items-center">
                                <h6 class="text-info">{{ formatDate(workout.date) }}</h6>


                                <span class="text-light">{{
                                    difficultyIcons(workout.dataRoutine.dificultad) }} ({{
                                        workout.dataRoutine.dificultad }})</span>
                            </div>
                            <h5 class="fw-semibold mb-1">{{ workout.dataRoutine.nombre }}</h5>

                            <p class="mt-2 mb-1 text-secondary small">
                                {{ getSummary(workout) }}
                            </p>

                            <span v-if="workout.notes" class="text-info fst-italic small">
                                "{{ workout.notes }}"
                            </span>

                            <button v-on:click="redirect(workout)" class="btn">
                                <i class="bi bi-chevron-double-down"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-5" v-if="!isLoading && workouts.length === 0">
                <h5>No hay entrenos guardadas aún.</h5>
            </div>
        </div>

    </div>
</template>

<script setup>

import { computed, ref, watch } from 'vue';
import { useProfileStore } from '@/stores/profile';
import { storeToRefs } from 'pinia';
import { useRoute, useRouter } from 'vue-router';

/** Acceso al enrutador y a la ruta actual */
const route = useRoute();
const router = useRouter();

// instancia el store
const profileStore = useProfileStore();

const { isLoading } = storeToRefs(profileStore);

// lista de workouts
const workouts = computed(() => profileStore.profile.workouts || []);

const cardMenuAbierto = ref(null);

/**
 * Observamos el estado cardMenuAbierto y manejamos los listeners
 */
watch(cardMenuAbierto, (nuevoValor) => {
    if (nuevoValor !== null) {
        console.log(workouts.value);

        window.addEventListener('click', handleClickOutside);
    } else {
        console.log(workouts.value);

        window.removeEventListener('click', handleClickOutside);
    }
});

function difficultyIcons(dificultad) {
    const map = {
        'Muy facil': 1,
        'Facil': 2,
        'Intermedia': 3,
        'Dificil': 4,
        'Muy dificil': 5
    };
    const count = map[dificultad] || 0;
    return '⚡'.repeat(count) || '';
}

function redirect(workout) {
    console.log(workout)
    router.push({ name: 'DetailWorkout', query: { id: workout.id } });
}

function getSummary(workout) {
    const bloques = workout.dataRoutine.bloques
    const totalSeries = bloques.reduce((acc, b) => acc + b.series, 0)
    const ejercicios = bloques.flatMap(b => b.ejercicios.map(e => e.nombre))
    const destacados = ejercicios.slice(0, 3).join(', ')
    return `${bloques.length} bloques • ${totalSeries} series • Ejercicios: ${destacados}${ejercicios.length > 3 ? '...' : ''}`
}

/**
 * Maneja el estado del mini menu que se encuentra en las cards version mobile
 * @param e 
 */
const handleClickOutside = (e) => {
    const menuElement = document.querySelector('.dropdown-menu-container');
    if (cardMenuAbierto.value !== null && !menuElement?.contains(e.target)) {
        cardMenuAbierto.value = null;
    }
};

function formatDate(iso) {
    const dias = ['Dom.', 'Lun.', 'Mar.', 'Mié.', 'Jue.', 'Vie.', 'Sáb.'];
    const d = new Date(iso);
    const dia = dias[d.getDay()];
    const fecha = `${String(d.getDate()).padStart(2, '0')}/` +
        `${String(d.getMonth() + 1).padStart(2, '0')}/` +
        d.getFullYear();
    return `${dia} ${fecha}`;
}

/**
 * Elimina una workout tras confirmación del usuario.
 * @param {string} workoutId 
 */
async function eliminarWorkout(workout) {
    if (!confirm('¿Estás seguro de que querés eliminar este entreno?')) {
        console.log("Eliminar cancelado")
        return;
    }
    try {
        isLoading.value = true;
        await profileStore.deleteDoneWorkout(workout.id);

    } catch (error) {
        console.log("Error al borrar la rutina.", error);
    }

    isLoading.value = false;
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
    width: 80%;
    min-width: 300px;
    border-left: 0px;
    border-right: 0px;
    border-top: 0px;
    border-radius: 3px;
    background-color: rgba(32, 32, 32, 0.493);
}

.workouts-container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

@media only screen and (min-width: 768px) {
    .done-workouts-page {
        padding-left: 160px;
        padding-top: 0px;
        padding-right: 0px;
    }

    .info-container {
        width: 90%;
    }

    .card-workout {
        width: 45%;
        min-width: 450px;
    }

}

.fade-item-enter-active,
.fade-item-leave-active {
    transition: all 0.4s ease;
}

.fade-item-enter-from {
    opacity: 0;
    transform: translateY(10px);
}

.fade-item-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}

.dropdown-menu-container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}

.dropdown-menu-container>span {
    cursor: pointer;
    font-size: 20px;
    padding: 5px;
    transition: color 0.3s;
}

.dropdown-menu-container>span:hover {
    color: aqua;
}

.mini-menu {
    position: absolute;
    top: 50px;
    right: 0;
    background-color: #1f1f1f;
    border: 1px solid #555;
    border-radius: 6px;
    list-style: none;
    padding: 5px 0;
    z-index: 550;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.mini-menu li {
    padding: 6px 15px;
    cursor: pointer;
    white-space: nowrap;
    font-size: 15px;
    display: flex;
    align-items: center;
    border: 0px;
    gap: 8px;
    transition: all 0.5s ease;
}

.mini-menu li:hover {
    color: aqua;
}

.timeline {
    border-color: var(--bs-primary);
}

.timeline-item {
    padding-left: 1rem;
    border-bottom: 1px solid rgba(128, 128, 128, 0.5);
}

.timeline-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    left: -6px;
}

.timeline-content {
    background-color: transparent;
    border-radius: 0.5rem;
    box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.05);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}

.timeline-content .btn {
    border: 1px solid rgb(0, 143, 143);
    width: 50px;
    transition: all .2s ease;
}

.timeline-content .btn:hover {
    transform: scale(1.1);
    border: 1px solid aqua;
}
</style>
