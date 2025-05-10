<template>
    <div class="my-workouts">
        <transition name="slide-fade" @after-leave="showMainContent = true">
            <AddFormRoutine v-show="showAddRoutineForm" :rutinaParaEditar="rutinaSeleccionada"
                @routine-added="handleRoutineAdded" @close="closeAddRoutineForm" />
        </transition>
        <transition name="slide-fade" @after-leave="showAddRoutineForm = true">
            <div v-show="showMainContent" class="routines-container">
                <div class="text-center mb-5">
                    <button @click="openAddRoutineForm" class="btn btn-outline-danger px-5">Agregar rutina</button>
                </div>
                <div v-show="localRoutines.length > 0">
                    <transition-group name="fade-item" tag="ul" class="routine-resumen"
                        :class="{ 'column-layout': rutinasMostradas.size > 0 }">
                        <li v-for="routine in localRoutines" :key="routine.id"
                            :ref="el => routineRefs.set(routine.id, el)" class="mb-1"
                            :class="{ 'expanded': rutinasMostradas.has(routine.id) }"
                            @click="mostrarRutina(routine.id)">
                            <!-- Bloques (esquina superior izquierda) -->
                            <div class="absolute d-flex justify-content-between top-2 left-0 text-sm text-gray-500">
                                <h6 :class="{ 'h5': rutinasMostradas.has(routine.id) }">Bloques ({{
                                    routine.bloques.length }})</h6>
                                <h6 :class="{ 'h5': rutinasMostradas.has(routine.id) }">Series ({{ totalSeries(routine)
                                    }})</h6>
                            </div>

                            <div class="text-center font-weight-medium  my-2">
                                <h3 class="ellipsis" :title="routine.nombre">
                                    {{ routine.nombre }}
                                </h3>
                            </div>

                            <transition name="expand-fade">
                                <RoutineDetail v-show="rutinasMostradas.has(routine.id)" :rutina="routine" />
                            </transition>

                            <!-- Dificultad abajo -->
                            <div class="d-flex justify-content-between align-items-baseline text-gray-700 ">
                                <h6 class="mb-0 difficulty-container"
                                    :class="{ 'h4': rutinasMostradas.has(routine.id) }" :title="routine.dificultad">
                                    <span v-html="renderDifficulty(routine.dificultad)"></span>
                                    <span class="difficulty d-none d-sm-inline" v-if="rutinasMostradas.has(routine.id)">
                                        ({{ routine.dificultad }})
                                    </span>

                                </h6>

                                <div class="edit-resume-container">
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
                <div v-if="localRoutines.length == 0 && !isLoading">
                    <h5>No hay rutinas guardadas.</h5>
                </div>

            </div>
        </transition>
    </div>
</template>

<script setup>
import { ref, onMounted, computed, nextTick } from 'vue';
import { useProfileStore } from '@/stores/profile'; // Ajusta la ruta a tu store
import AddFormRoutine from '@/components/addFormRoutine.vue'; // Ajusta la ruta si es necesario
import RoutineDetail from '@/components/RoutineDetail.vue';
import { cloneDeep } from 'lodash-es';


const profileStore = useProfileStore();
const showAddRoutineForm = ref(false);
const showMainContent = ref(true);
const isLoading = ref(true);

// Usamos un computed para reaccionar a los cambios en el store
const localRoutines = computed(() => profileStore.getUserRoutines);
const routineRefs = ref(new Map());
const rutinasMostradas = ref(new Set());
const rutinaSeleccionada = ref(null);

onMounted(async () => {
    isLoading.value = true;
    try {
        await profileStore.getRutinas();
    } finally {
        isLoading.value = false;
    }
});

const mostrarRutina = (rutinaId) => {
    if (rutinasMostradas.value.has(rutinaId)) {
        rutinasMostradas.value.delete(rutinaId);
    } else {
        rutinasMostradas.value.add(rutinaId);
        nextTick(() => {
            setTimeout(() => {
                const el = routineRefs.value.get(rutinaId); // Accede al ref usando .value
                if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 300);
        });
    }
};

const eliminarRutina = (rutinaId) => {
    if (confirm("¿Estás seguro de que querés eliminar esta rutina?")) {
        profileStore.deleteRutina(rutinaId);
        rutinasMostradas.value.delete(rutinaId);
    }
};

const editarRutina = (rutina) => {
    rutinaSeleccionada.value = cloneDeep(rutina);
    showMainContent.value = false;
};

const copiarRutina = async (rutina) => {
    const copia = {
        ...JSON.parse(JSON.stringify(rutina)),
        nombre: rutina.nombre + ' (copia)'
    };
    delete copia.id;
    delete copia.fechaCreacion;

    try {
        const docRef = await profileStore.createRutinaFirebase(copia); // ahora devolvemos el docRef
        const newId = docRef.id;

        mostrarRutina(newId); // expandimos visualmente

    } catch (error) {
        console.error('Error copiando rutina:', error);
    }
};


const handleRoutineAdded = async (rutina) => {
    try {
        closeAddRoutineForm();
        if (rutina.editada) {
            // Lógica para actualizar en Firebase 
            await profileStore.updateRutina(rutina);
        } else {
            const docRef = await profileStore.createRutinaFirebase(rutina); // ahora devolvemos el docRef
            const newId = docRef.id;
            rutina.id = newId;
            //opcional expandir la rutina al completarse la edicion / agregado
            mostrarRutina(rutina.id)
        }
    } catch (error) {
        console.error('Error al guardar la rutina:', error);
        // Aquí podrías mostrar un mensaje de error al usuario
    }
};

const openAddRoutineForm = () => {
    showMainContent.value = false;
};

const closeAddRoutineForm = () => {
    showAddRoutineForm.value = false;
    rutinaSeleccionada.value = null;
};

const totalSeries = (routine) => {
    return (routine.bloques || []).reduce((total, bloque) => total + (bloque.series || 1), 0);
};

const renderDifficulty = (dificultad) => {
    const niveles = {
        "Muy facil": 1,
        "Facil": 2,
        "Intermedia": 3,
        "Dificil": 4,
        "Muy dificil": 5
    };
    const rayos = '⚡️'.repeat(niveles[dificultad] || 0);
    return rayos;
};
</script>

<style scoped>
.my-workouts {
    padding: 20px;
    padding-right: 0px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
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

.routine-resumen li {
    position: relative;
    border: 1px solid lightgray;
    padding: 20px 10px;
    border-radius: 8px;
    width: 100%;
    cursor: pointer;
    transition: all 0.45s ease-in-out;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.routine-resumen li h3 {
    margin: 20px 5px;
}

.routine-resumen li.expanded {
    width: 100%;
}

.routine-resumen li:hover {
    border-color: #aaa;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
    background-color: #202020;
}

.routine-resumen li:active {
    transform: scale(0.98);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.12);
}

.difficulty-container .difficulty {
    font-size: 18px;
}

/* Animación de entrada para el formulario */
.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: all 0.3s ease-out;
}

.slide-fade-enter-from {
    transform: translateY(-20px);
    opacity: 0;
}

.slide-fade-leave-to {
    transform: translateY(20px);
    opacity: 0;
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

    .routine-resumen li {
        min-width: 350px;
        width: 45%;
        max-width: 500px;
        font-size: 18px;
    }

    .routine-resumen li.expanded {
        width: 100%;
        /* o el valor que te guste más visualmente */
        max-width: 600px;
    }

    .routines-container {
        width: 80%;
    }

    .edit-resume-container {
        font-size: 20px;
        gap: 10px;
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
</style>