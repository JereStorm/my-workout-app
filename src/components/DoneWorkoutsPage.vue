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
                <div class="mt-5 pt-1 py-3 ps-2 pe-1 card-workout" v-for="w in workouts" :key="w.id">
                    <h5 class="h5 mt-0 mb-3 d-flex justify-content-between"><span>{{ formatDate(w.date) }}</span>
                        <div class="dropdown-menu-container">
                            <span @click.stop="cardMenuAbierto = cardMenuAbierto === w.id ? null : w.id">
                                <i class="bi bi-three-dots-vertical"></i>
                            </span>
                            <transition name="fade-item">
                                <ul v-if="cardMenuAbierto === w.id" class="mini-menu">
                                    <!-- <li @click.stop="registrarEntrenamiento(w)">
                                        <i class="bi bi-file-earmark-plus"></i>
                                    </li>
                                    <li @click.stop="editarRutina(w)">
                                        <i class="bi bi-pencil-square"></i>
                                    </li> -->
                                    <li @click.stop="eliminarWorkout(w)">
                                        <i class="bi bi-trash3"></i>
                                    </li>
                                    <!-- <li @click.stop="copiarRutina(w)">
                                        <i class="bi bi-copy"></i>
                                    </li> -->
                                </ul>
                            </transition>
                        </div>
                    </h5>
                    <div class="text-center">
                        <router-link class="link-info link-train h4 link-offset-2 link-underline-opacity-25
                        link-underline-opacity-100-hover" :to="{ name: 'DetailWorkout', query: { id: w.id } }">
                            <i class="bi bi-arrow-up-left-square me-2"></i>
                            "{{ w.dataRoutine.nombre }}"
                        </router-link>
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
        window.addEventListener('click', handleClickOutside);
    } else {
        window.removeEventListener('click', handleClickOutside);
    }
});

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
</style>
