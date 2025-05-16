<template>
    <div class="my-workouts">
        <div class="routines-container">
            <h1 class="mb-5">Mis Rutinas <i class="bi bi-clipboard-check"></i></h1>

            <div class="text-center mb-5">
                <RouterLink to="/dashboard/form-routine"
                    class="btn btn-outline-danger px-5 d-flex gap-2 justify-content-center align-items-baseline"
                    id="add-routine">
                    <i class="bi bi-plus-circle-fill"></i> Agregar Rutina
                </RouterLink>
            </div>

            <div v-show="rawRoutines.length > 0">
                <div class="d-flex align-items-baseline w-100 text-start ms-5 mb-3">
                    <label for="orderBy" class="me-2">Ordenar por</label>
                    <select v-model="order" id="orderBy" class="p-2 m-2 rounded bg-dark text-white">
                        <option value="fechaCreacionDesc">Más Reciente</option>
                        <option value="fechaCreacionAsc">Más Antigua</option>
                        <option value="asc">De más fácil</option>
                        <option value="desc">De más difícil</option>
                    </select>
                </div>
            </div>

            <div v-show="sortedRoutines.length > 0">
                <transition-group name="fade-item" tag="ul" class="routine-resumen"
                    :class="{ 'column-layout': rutinasMostradas.length > 0 }">
                    <li v-for="routine in sortedRoutines" :key="routine.id" :ref="el => routineRefs.set(routine.id, el)"
                        class="mb-1 routine-card" :class="{ 'expanded': rutinasMostradas.includes(routine.id) }">
                        <!-- Bloques (esquina superior izquierda) -->
                        <div class="absolute d-flex justify-content-between top-2 left-0 text-sm text-gray-500">
                            <h6 :class="{ 'h5': rutinasMostradas.includes(routine.id) }">{{
                                routine.bloques.length }} Bloques</h6>
                            <h6 :class="{ 'h5': rutinasMostradas.includes(routine.id) }">{{ totalSeries(routine) }}
                                Series
                            </h6>
                        </div>

                        <div class="text-center font-weight-medium  my-2">
                            <h3 class="ellipsis" :title="routine.nombre">
                                {{ routine.nombre }}
                            </h3>
                        </div>

                        <transition name="expand-fade">
                            <RoutineDetail v-show="rutinasMostradas.includes(routine.id)" :rutina="routine" />
                        </transition>

                        <!-- Dificultad abajo -->
                        <div class="d-flex justify-content-between align-items-baseline text-gray-700 ">
                            <h6 class="mb-0 difficulty-container"
                                :class="{ 'h4': rutinasMostradas.includes(routine.id) }" :title="routine.dificultad">
                                <span v-html="renderDifficulty(routine.dificultad)"></span>
                                <span class="difficulty d-none d-sm-inline"
                                    v-if="rutinasMostradas.includes(routine.id)">
                                    ({{ routine.dificultad }})
                                </span>

                            </h6>

                            <div v-if="isMobile && !rutinasMostradas.includes(routine.id)"
                                class="dropdown-menu-container" @click.stop>
                                <span
                                    @click.stop="cardMenuAbierto = cardMenuAbierto === routine.id ? null : routine.id">
                                    <i class="bi bi-three-dots-vertical"></i>
                                </span>
                                <transition name="fade-item">
                                    <ul v-if="cardMenuAbierto === routine.id" class="mini-menu">
                                        <li @click="expandirRutina(routine.id)">
                                            <i class="bi bi-arrows-angle-expand"></i>
                                        </li>
                                        <li @click.stop="editarRutina(routine)">
                                            <i class="bi bi-pencil-square"></i>
                                        </li>
                                        <li @click.stop="eliminarRutina(routine.id)">
                                            <i class="bi bi-trash3"></i>
                                        </li>
                                        <li @click.stop="copiarRutina(routine)">
                                            <i class="bi bi-copy"></i>
                                        </li>
                                    </ul>
                                </transition>
                            </div>
                            <div v-else class="edit-resume-container">
                                <span @click="expandirRutina(routine.id)">
                                    <i class="bi bi-arrows-angle-expand"></i>
                                </span>
                                <span @click.stop="editarRutina(routine)">
                                    <i class="bi bi-pencil-square"></i>
                                </span>
                                <span @click.stop="eliminarRutina(routine.id)">
                                    <i class="bi bi-trash3"></i>
                                </span>
                                <span @click.stop="copiarRutina(routine)">
                                    <i class="bi bi-copy"></i>
                                </span>
                            </div>

                        </div>
                    </li>
                </transition-group>
            </div>

            <div v-show="sortedRoutines.length === 0 && !isLoading">
                <h5>No hay rutinas guardadas aún.</h5>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, computed, nextTick, watch } from 'vue';
import { useProfileStore } from '@/stores/profile';
import RoutineDetail from '@/components/RoutineDetail.vue';
import { useRoute, useRouter, RouterLink } from 'vue-router';

const profileStore = useProfileStore();
const isLoading = ref(true);
const isMobile = ref(window.innerWidth < 768);
const routineRefs = ref(new Map());
const rutinasMostradas = ref([]);
const route = useRoute();
const router = useRouter();

const cardMenuAbierto = ref(null);

// Mapear nivel de dificultad a valor numérico
const niveles = {
    'Muy facil': 1,
    'Facil': 2,
    'Intermedia': 3,
    'Dificil': 4,
    'Muy dificil': 5
};

/** 
 * Estado para seleccionar orden de listado:
 * 'asc'  = de más fácil a más difícil
 * 'desc' = de más difícil a más fácil
 */
const order = ref('fechaCreacionDesc');

/**
 * Lista original desde el store, reactiva.
 */
const rawRoutines = computed(() => profileStore.getUserRoutines);

/**
 * Computed que devuelve `rawRoutines` ordenadas según `order`.
 */
const sortedRoutines = computed(() => {
    return [...rawRoutines.value].sort((a, b) => {
        if (order.value === 'fechaCreacionDesc') {
            return new Date(b.fechaCreacion) - new Date(a.fechaCreacion);
        } else if (order.value === 'fechaCreacionAsc') {
            return new Date(a.fechaCreacion) - new Date(b.fechaCreacion);
        } else {
            const na = niveles[a.dificultad] || 0;
            const nb = niveles[b.dificultad] || 0;
            return order.value === 'asc' ? na - nb : nb - na;
        }
    });
});

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
 * Recarga las rutinas desde Firebase al montar el componente.
 */
onMounted(async () => {
    isLoading.value = true;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    try {
        // await profileStore.getRutinas();
    } finally {
        isLoading.value = false;
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

/**
 * Expande o colapsa la vista detallada de una rutina y hace scroll hacia ella.
 * @param {string} rutinaId 
 */
function expandirRutina(rutinaId) {
    const index = rutinasMostradas.value.indexOf(rutinaId);
    if (index !== -1) {
        rutinasMostradas.value.splice(index, 1);
    } else {
        rutinasMostradas.value.push(rutinaId);
        nextTick(() => {
            setTimeout(() => {
                const el = routineRefs.value.get(rutinaId);
                el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 300);
        });
    }
}


/**
 * Elimina una rutina tras confirmación del usuario.
 * @param {string} rutinaId 
 */
function eliminarRutina(rutinaId) {
    if (confirm('¿Estás seguro de que querés eliminar esta rutina?')) {
        profileStore.deleteRutina(rutinaId);

        const index = rutinasMostradas.value.indexOf(rutinaId);
        if (index !== -1) {
            rutinasMostradas.value.splice(index, 1);
        }
    }
}

/**
 * Prepara el formulario para editar una rutina existente.
 * @param {Object} rutina 
 */
function editarRutina(rutina) {
    router.push({
        path: '/dashboard/form-routine',
        query: { id: rutina.id }
    });
}

/**
 * Copia una rutina y la agrega al inicio de la lista.
 * @param {Object} rutina 
 */
async function copiarRutina(rutina) {
    const copia = {
        ...JSON.parse(JSON.stringify(rutina)),
        nombre: rutina.nombre + ' (copia)'
    };
    delete copia.id;
    delete copia.fechaCreacion;
    try {
        const docRef = await profileStore.createRutinaFirebase(copia);
        expandirRutina(docRef.id);
    } catch (err) {
        console.error('Error copiando rutina:', err);
    }
}

/** Cuenta el total de series de una rutina */
const totalSeries = (routine) =>
    (routine.bloques || []).reduce((sum, b) => sum + (b.series || 1), 0);

/** Renderiza iconos de dificultad con rayos */
const renderDifficulty = (dificultad) =>
    '⚡️'.repeat(niveles[dificultad] || 0);

</script>

<style scoped>
.my-workouts {
    padding: 10px;
    padding-top: 100px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

#add-routine {
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
}

.routines-container {
    width: 90%;
}

.routine-resumen {
    padding-left: 0px;
    list-style: none;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
}

.routine-resumen.column-layout {
    flex-direction: column;
    align-items: center;
}

.routine-resumen .routine-card {
    position: relative;
    border: 1px solid lightgray;
    padding: 20px 10px;
    border-radius: 8px;
    width: 100%;
    transition: all 0.45s ease-in-out;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.routine-resumen .routine-card h3 {
    margin: 20px 5px;
}

.routine-resumen .routine-card .expanded {
    width: 100%;
}

.routine-resumen .routine-card:hover {
    border-color: #aaa;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
    background-color: #202020;
}

.routine-resumen .routine-card:active {
    transform: scale(0.98);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.12);
}

.difficulty-container .difficulty {
    font-size: 18px;
}

.edit-resume-container {
    display: flex;
    justify-content: center;
    font-size: 18px;
}

.edit-resume-container span {
    padding: 0px 5px;
    display: flex;
    cursor: pointer;
    align-items: end;
    transition: all 0.3s ease;
}

.edit-resume-container span i {
    width: 20px;
}

.edit-resume-container span:hover {
    color: aqua;
}

.ellipsis {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    display: inline-block;
    width: 90%;
    /* o un valor fijo como 200px */
}



@media only screen and (min-width: 768px) {
    .my-workouts {
        padding-top: 30px;
        padding-left: 160px;
        margin-top: 20px;
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .routine-resumen {
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 100%;
        flex-wrap: wrap;
    }

    .routine-resumen .routine-card {
        min-width: 350px;
        width: 45%;
        max-width: 500px;
        font-size: 18px;
    }

    .routine-resumen .routine-card.expanded {
        width: 100%;
        /* o el valor que te guste más visualmente */
        max-width: 600px;
    }

    .routines-container {
        width: 80%;
    }

    .edit-resume-container {
        font-size: 18px;
        gap: 5px;
    }

    #add-routine {
        width: auto;
    }

}

/* Animacion para la expansion del resumen */
.expand-fade-enter-active,
.expand-fade-leave-active {
    transition: all 0.6s ease;
    overflow: hidden;
}

.expand-fade-enter-from,
.expand-fade-leave-to {
    max-height: 0;
    opacity: 0;
}

.expand-fade-enter-to,
.expand-fade-leave-from {
    max-height: 500px;
    /* ajustar si necesitás más o menos */
    opacity: 1;
}

/* Animacion para la entrada de los resumenes */

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
    top: -96px;
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
    transition: background-color 0.2s;
}

.mini-menu li:hover {
    background-color: #333;
    color: aqua;
}
</style>