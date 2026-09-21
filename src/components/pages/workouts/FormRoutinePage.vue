<template>
    <div class="add-routine-form">
        <div
            class="d-flex w-100 justify-content-start justify-content-md-center sticky-header align-items-center gap-3 gap-md-5 ps-3 mb-3">
            <h2 class="text-start mb-0">
                {{ rutinaIdFromRoute ? 'Editar Rutina' : 'Crear Rutina' }}
            </h2>
            <button @click="guardarRutina" class="border-info btn btn-guardar mt-0 ">
                Guardar <i class="bi bi-box-arrow-up"></i>
            </button>
        </div>

        <div v-if="isLoadingInfo" class="loader"></div>
        <form v-else class="p-2 p-md-4">
            <div class="mb-3 text-start">
                <label for="nombre" class="form-label">Nombre de la rutina</label>
                <input type="text" v-model="nuevaRutina.nombre" spellcheck="false" autocomplete="on"
                    :class="['form-control', inputClass(nuevaRutina.nombre)]" id="nombre" required>
            </div>
            <div class="mb-3 flex-column d-flex justify-content-center align-items-start col-md-3">
                <label for="dificultad" class="form-label">Dificultad</label>
                <select v-model="nuevaRutina.dificultad" class="form-select text-info input-difficulty" id="dificultad"
                    required>
                    <option value="Muy facil">Muy fácil</option>
                    <option value="Facil">Fácil</option>
                    <option value="Intermedia">Intermedia</option>
                    <option value="Dificil">Difícil</option>
                    <option value="Muy dificil">Muy difícil</option>
                </select>
            </div>
            <div class="d-flex flex-column flex-md-row justify-content-start gap-3 align-items-center">
                <!-- Descanso entre Bloques -->
                <div
                    class="descanso-container mb-3 text-start d-flex flex-column justify-content-start gap-1 align-items-center">
                    <div class="w-100 d-flex justify-content-start mb-1">
                        <label for="descansoBloques" class="form-label mb-0">
                            Descanso entre Bloques
                        </label>
                    </div>

                    <select id="descansoBloques" v-model="descansoBloquesSeleccionado" class="form-select input-time">
                        <option :value="60">1 min</option>
                        <option :value="120">2 min</option>
                        <option :value="180">3 min</option>
                        <option :value="300">5 min</option>
                        <option :value="600">10 min</option>
                        <option value="personalizado">Personalizado</option>
                    </select>

                    <div v-if="descansoBloquesSeleccionado === 'personalizado'" class="d-flex personalizado gap-2 mt-2">
                        <input type="number" v-model.number="descansoBloquesPersonalizado.minutos"
                            class="border-card text-center" min="0" placeholder="Min">
                        <span class="mt-2">:</span>
                        <input type="number" v-model.number="descansoBloquesPersonalizado.segundos"
                            class="border-card text-center" min="0" max="59" placeholder="Seg">
                    </div>
                </div>
                <!-- Descanso entre Series -->
                <div
                    class="descanso-container mb-3 text-start d-flex flex-column justify-content-start gap-1 align-items-center">
                    <div class="w-100 d-flex justify-content-start mb-1">
                        <label for="descansoSeries" class="form-label mb-0">
                            Descanso entre Series
                        </label>
                    </div>

                    <select id="descansoSeries" v-model="descansoSeriesSeleccionado" class="form-select input-time">
                        <option :value="30">30 seg</option>
                        <option :value="60">1 min</option>
                        <option :value="90">1:30 min</option>
                        <option :value="120">2 min</option>
                        <option :value="180">3 min</option>
                        <option value="personalizado">Personalizado</option>
                    </select>

                    <div v-if="descansoSeriesSeleccionado === 'personalizado'" class="d-flex personalizado gap-2 mt-2">
                        <input type="number" v-model.number="descansoSeriesPersonalizado.minutos"
                            class="border-card text-center" min="0" placeholder="Min">
                        <span class="mt-2">:</span>
                        <input type="number" v-model.number="descansoSeriesPersonalizado.segundos"
                            class="border-card text-center" min="0" max="59" placeholder="Seg">
                    </div>
                </div>
            </div>

            <div v-for="(bloque, indexBloque) in nuevaRutina.bloques" :key="indexBloque"
                class="bloque-container mb-3 px-2 pt-2 pb-3 rounded text-start">
                <div class="mb-1 d-flex justify-content-between align-items-baseline">
                    <h5 class="text-start m-0">{{ indexBloque + 1 }}° Bloque</h5>
                    <div class="d-flex flex-column align-items-center justify-content-center col-md-2">
                        <label :for="'series-bloque-' + indexBloque" class="form-label mb-1">Series</label>
                        <input type="number" v-model="bloque.series" class="form-control input-number"
                            :id="'series-bloque-' + indexBloque" min="1" />
                    </div>
                </div>

                <Draggable v-model="nuevaRutina.bloques[indexBloque].ejercicios" :group="{ name: 'ejercicios' }"
                    item-key="indexBloque" handle=".drag-handle" class="ejercicios-list" :animation="200"
                    ghost-class="ghost" :delay="100" :delay-on-touch-only="true">
                    <template #item="{ element: ejercicio, index: ejercicioIndex }">
                        <div
                            class="ejercicio-container p-3 px-0 p-md-2 d-flex flex-column align-items-center gap-2 drag-handle">
                            <div class="row w-100 d-flex flex-column justify-content-center gap-3">
                                <InputExercise :ejercicio="ejercicio" :index-bloque="indexBloque"
                                    :ejercicio-index="ejercicioIndex"
                                    :es-edicion="Boolean(rutinaIdFromRoute || nuevaRutina.id)" />
                            </div>

                            <div class="setting-exercise py-2 d-flex justify-content-center gap-3 flex-wrap">
                                <div class="col-md-3 mb-2 text-center">
                                    <label :for="'reps-' + indexBloque + '-' + ejercicioIndex"
                                        class="form-label">Reps</label>
                                    <input type="number" v-model="ejercicio.repeticiones"
                                        class="form-control input-number"
                                        :id="'reps-' + indexBloque + '-' + ejercicioIndex" min="1" />
                                </div>

                                <div class="col-md-3 mb-2 text-center">
                                    <label :for="'tiempo-' + indexBloque + '-' + ejercicioIndex"
                                        class="form-label">Tiempo</label>
                                    <input type="number" v-model="ejercicio.tiempo" class="form-control input-number"
                                        :id="'tiempo-' + indexBloque + '-' + ejercicioIndex" min="0" />
                                </div>

                                <!-- NOTAS EJERCICIO -->
                                <div class="col-md-3 mb-2 text-center">
                                    <label :for="'notas-' + indexBloque + '-' + ejercicioIndex"
                                        class="form-label">Notas</label>
                                    <div>
                                        <button @click.prevent="toggleNotaEjercicio(indexBloque, ejercicioIndex)"
                                            class="btn-nota btn-outline-info">
                                            <i class="bi bi-plus-circle-fill"></i>
                                        </button>
                                    </div>
                                </div>
                                <transition name="slide-fade">
                                    <textarea v-if="hasNotaEjercicio(indexBloque, ejercicioIndex)"
                                        :id="'notas-' + indexBloque + '-' + ejercicioIndex" v-model="ejercicio.notas"
                                        class="form-control text-notas mt-2" rows="2"
                                        placeholder="Opcional: técnica, ajustes, variantes..."></textarea>
                                </transition>
                            </div>

                            <div class="d-flex w-100 justify-content-center gap-2 px-5">
                                <button type="button" @click="agregarEjercicio(indexBloque, ejercicioIndex)"
                                    class="btn btn-outline-info w-auto">
                                    <i class="bi bi-plus-circle-fill"></i> Ejercicio
                                </button>
                                <button
                                    v-if="ejercicioIndex > 0 || (ejercicioIndex === 0 && nuevaRutina.bloques[indexBloque].ejercicios.length > 1)"
                                    type="button" @click="eliminarEjercicio(indexBloque, ejercicioIndex)"
                                    class="btn btn-outline-danger w-auto delete-exercise">
                                    <i class="bi bi-trash-fill"></i> Ejercicio
                                </button>
                            </div>

                            <hr class="divisor mt-2 mb-0" />
                        </div>
                    </template>
                </Draggable>

                <div class="d-flex justify-content-center gap-auto mb-3">
                    <transition name="slide-fade">
                        <textarea v-if="hasNotaBloque(indexBloque)" :id="'notas-bloque-' + indexBloque"
                            v-model="nuevaRutina.bloques[indexBloque].notas" class="form-control text-notas mt-2 me-2"
                            rows="2"
                            placeholder="Notas generales para todo el bloque (objetivo, tempo, etc.)"></textarea>
                    </transition>
                    <!-- NOTAS BLOQUE -->
                    <div class="col-md-3 mb-2 text-center d-flex flex-column align-items-center justify-content-center">
                        <label :for="'notas-bloque-' + indexBloque" class="form-label">Notas</label>
                        <div>
                            <button @click.prevent="toggleNotaBloque(indexBloque)" class="btn-nota btn-outline-info">
                                <i class="bi bi-plus-circle-fill"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <div class="btns-set-bloque px-5 pt-md-2 pt-1">
                    <button v-if="indexBloque > 0 || (indexBloque === 0 && nuevaRutina.bloques.length > 1)"
                        type="button" @click="eliminarBloque(indexBloque)" class="btn btn-outline-danger">
                        <i class="bi bi-trash-fill"></i> Bloque
                    </button>
                    <button type="button" @click="agregarBloque(indexBloque)" class="btn btn-outline-info">
                        <i class="bi bi-plus-circle-fill"></i> Bloque
                    </button>
                </div>
            </div>

            <hr>

            <div v-if="isLoadingSave" class="loader-form"></div>

            <div class="text-center d-flex btns-set-routine flex-column align-items-center">
                <button type="button" @click="guardarRutina" class="btn btn-guardar mt-0 px-5">
                    <i class="bi bi-box-arrow-down"></i> Guardar rutina
                </button>
                <button type="button" @click="handleCancelar" class="btn btn-danger mt-3 mb-2">
                    <i class="bi bi-x-circle"></i> Cancelar
                </button>
            </div>
        </form>
    </div>
</template>

<script setup>
import { cloneDeep } from 'lodash-es';
import { reactive, onMounted, ref, watch, computed, getCurrentInstance } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useRoutineStore } from '@/stores/routineStore';
import { useExerciseStore } from '@/stores/exerciseStore';

import { useUserStore } from '@/stores/user'; // Asegúrate de ajustar la ruta si es necesario
import { storeToRefs } from 'pinia';
import Draggable from 'vuedraggable';
import { confirmAction } from '@/utils/confirm';
import { useNotificationStore } from '@/stores/notificationStore';
import InputExercise from '@/components/form/InputExercise.vue';

const { proxy } = getCurrentInstance();

/** Store modularizado de rutinas */
const routineStore = useRoutineStore();
const { routines } = storeToRefs(routineStore);

const userStore = useUserStore();
const exerciseStore = useExerciseStore();

/** Acceso al enrutador y a la ruta actual */
const route = useRoute();
const router = useRouter();

const rutinaIdFromRoute = route.query.id;

/** Estados de carga */
const isLoadingSave = ref(false);
const isLoadingInfo = ref(false);

/**
 * Estado reactivo de la rutina que se está creando o editando.
 */
const nuevaRutina = reactive({
    nombre: '',
    dificultad: 'Intermedia',
    descansoBloques: 60,
    descansoSeries: 60,
    bloques: [{
        series: 3,
        ejercicios: [
            { exerciseId: '', nombre: '', nombreOriginal: '', repeticiones: 1, tiempo: 0, esfuerzo: 0, notas: '' }
        ],
        notas: ''
    }]
});

const descansoBloquesSeleccionado = ref(nuevaRutina.descansoBloques);
const descansoSeriesSeleccionado = ref(nuevaRutina.descansoSeries);

const descansoBloquesPersonalizado = reactive({ minutos: 0, segundos: 0 });
const descansoSeriesPersonalizado = reactive({ minutos: 0, segundos: 0 });

watch(descansoBloquesSeleccionado, (valor) => {
    if (valor !== 'personalizado') nuevaRutina.descansoBloques = Number(valor);
});

watch(descansoSeriesSeleccionado, (valor) => {
    if (valor !== 'personalizado') nuevaRutina.descansoSeries = Number(valor);
});

watch(descansoBloquesPersonalizado, (valor) => {
    if (descansoBloquesSeleccionado.value === 'personalizado') {
        nuevaRutina.descansoBloques = Number(valor.minutos) * 60 + Number(valor.segundos);
    }
}, { deep: true });

watch(descansoSeriesPersonalizado, (valor) => {
    if (descansoSeriesSeleccionado.value === 'personalizado') {
        nuevaRutina.descansoSeries = Number(valor.minutos) * 60 + Number(valor.segundos);
    }
}, { deep: true });

function configurarDescansos() {
    const opcionesBloques = [60, 120, 180, 300, 600];
    const opcionesSeries = [30, 60, 90, 120, 180];

    if (opcionesBloques.includes(nuevaRutina.descansoBloques)) {
        descansoBloquesSeleccionado.value = nuevaRutina.descansoBloques;
    } else {
        descansoBloquesSeleccionado.value = 'personalizado';
        descansoBloquesPersonalizado.minutos = Math.floor(nuevaRutina.descansoBloques / 60);
        descansoBloquesPersonalizado.segundos = nuevaRutina.descansoBloques % 60;
    }

    if (opcionesSeries.includes(nuevaRutina.descansoSeries)) {
        descansoSeriesSeleccionado.value = nuevaRutina.descansoSeries;
    } else {
        descansoSeriesSeleccionado.value = 'personalizado';
        descansoSeriesPersonalizado.minutos = Math.floor(nuevaRutina.descansoSeries / 60);
        descansoSeriesPersonalizado.segundos = nuevaRutina.descansoSeries % 60;
    }
}

// Mostrar/ocultar notas
const showNotasEjercicio = ref(new Set());
const showNotasBloque = ref(new Set());

const toggleNotaEjercicio = (bloqueIndex, ejercicioIndex) => {
    const key = `${bloqueIndex}-${ejercicioIndex}`;
    if (showNotasEjercicio.value.has(key)) showNotasEjercicio.value.delete(key);
    else showNotasEjercicio.value.add(key);
};

const toggleNotaBloque = (bloqueIndex) => {
    const key = String(bloqueIndex);
    if (showNotasBloque.value.has(key)) showNotasBloque.value.delete(key);
    else showNotasBloque.value.add(key);
};

const hasNotaEjercicio = (bloqueIndex, ejercicioIndex) => showNotasEjercicio.value.has(`${bloqueIndex}-${ejercicioIndex}`);
const hasNotaBloque = (bloqueIndex) => showNotasBloque.value.has(String(bloqueIndex));

/**
 * Carga la rutina desde el store si corresponde editar
 */
function aplicarRutinaSiCorresponde() {
    if (!rutinaIdFromRoute) return;

    isLoadingInfo.value = true;
    try {
        const rutinaExistente = routines.value?.find(r => r.id === rutinaIdFromRoute);

        if (!rutinaExistente) {
            console.warn(`No se encontró la rutina con ID: ${rutinaIdFromRoute}`);
            router.push({ name: "MyWorkouts" });
            return;
        }

        const rutina = cloneDeep(rutinaExistente);

        // --- PURGA DE IDs HUÉRFANOS ---
        if (rutina.bloques) {
            rutina.bloques.forEach(bloque => {
                if (bloque.ejercicios) {
                    bloque.ejercicios.forEach(ej => {
                        if (ej.exerciseId) {
                            // Verificamos si el ID realmente existe en el store de ejercicios
                            const existeEnStore = exerciseStore.exercises?.some(e => e.id === ej.exerciseId);
                            if (!existeEnStore) {
                                ej.exerciseId = null; // Lo dejamos en null para que el input active el cartel de nuevo ejercicio
                            }
                        }
                    });
                }
            });
        }
        // ------------------------------

        Object.assign(nuevaRutina, rutina);
        configurarDescansos();
    } catch (error) {
        console.error('Error al cargar la rutina para editar:', error);
    } finally {
        isLoadingInfo.value = false;
    }
}

watch(() => routines.value?.length, (len) => {
    if (len > 0) {
        aplicarRutinaSiCorresponde();
    }
});

onMounted(async () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    aplicarRutinaSiCorresponde();
});

const handleCancelar = async () => {
    const title = rutinaIdFromRoute ? '¿Seguro deseas cancelar la edición?' : '¿Seguro deseas cancelar?';
    const text = rutinaIdFromRoute ? 'Se perderán los cambios realizados' : 'Se perderá el progreso actual';
    
    const ok = await confirmAction(proxy.$swal, { title, text });
    if (!ok) return;
    router.back();
};

const focusField = (id) => {
    const element = document.getElementById(id);
    if (!element) return;
    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    setTimeout(() => element.focus(), 300);
};

const validarRutina = () => {
    const notify = useNotificationStore();

    if (!nuevaRutina.nombre.trim()) {
        notify.show('El nombre de la rutina no puede estar vacío.', 'error');
        focusField('nombre');
        return false;
    }

    for (const [indexBloque, bloque] of nuevaRutina.bloques.entries()) {
        if (!bloque.series || bloque.series < 1) {
            notify.show(`El bloque ${indexBloque + 1} debe tener al menos 1 serie.`, 'error');
            focusField(`series-bloque-${indexBloque}`);
            return false;
        }

        for (const [ejercicioIndex, ejercicio] of bloque.ejercicios.entries()) {
            if (!ejercicio.nombre.trim()) {
                notify.show(`El ejercicio ${ejercicioIndex + 1} del bloque ${indexBloque + 1} necesita un nombre.`, 'error');
                return false;
            }

            if (!ejercicio.repeticiones || ejercicio.repeticiones < 1) {
                notify.show(`Las repeticiones del ejercicio ${ejercicioIndex + 1} deben ser mayores a 0.`, 'error');
                focusField(`reps-${indexBloque}-${ejercicioIndex}`);
                return false;
            }

            if (ejercicio.tiempo < 0) {
                notify.show(`El tiempo del ejercicio ${ejercicioIndex + 1} no puede ser negativo.`, 'error');
                focusField(`tiempo-${indexBloque}-${ejercicioIndex}`);
                return false;
            }
        }
    }
    return true;
};

const guardarRutina = async () => {
    isLoadingSave.value = true;

    try {
        const isValid = validarRutina();
        if (!isValid) return;

        let id;
        if (nuevaRutina.id) {
            id = nuevaRutina.id;
            await routineStore.updateRoutine({ ...nuevaRutina });
        } else {
         // Obtenemos el ID del usuario logueado actualmente
            const userId = userStore.user?.id; 

            console.log("ID User", userId)
            
            if (!userId) {
                console.error("No se encontró el usuario activo para asociar la rutina.");
                return;
            }

            // Pasamos el userId como segundo parámetro a createRoutine
            id = await routineStore.createRoutine({ ...nuevaRutina }, userId);
        }

        router.push({ name: 'DetailRoutine', query: { id } });
    } catch (error) {
        console.error('Error al guardar la rutina:', error);
    } finally {
        isLoadingSave.value = false;
    }
};

const agregarBloque = (bloqueIndex) => {
    nuevaRutina.bloques.splice(bloqueIndex + 1, 0, {
        series: 3,
        ejercicios: [{ exerciseId: '', nombre: '', nombreOriginal: '', repeticiones: 1, tiempo: 0, esfuerzo: 0, notas: '' }],
        notas: ''
    });
};

const eliminarBloque = (index) => {
    nuevaRutina.bloques.splice(index, 1);
};

const agregarEjercicio = (bloqueIndex, ejercicioIndex) => {
    nuevaRutina.bloques[bloqueIndex].ejercicios.splice(ejercicioIndex + 1, 0, {
        exerciseId: '',
        nombre: '',
        nombreOriginal: '',
        repeticiones: 1,
        tiempo: 0,
        esfuerzo: 0,
        notas: ''
    });
};

const eliminarEjercicio = (bloqueIndex, ejercicioIndex) => {
    nuevaRutina.bloques[bloqueIndex].ejercicios.splice(ejercicioIndex, 1);
};

const inputClass = (valor) => {
    return valor === null || valor === '' || valor === undefined ? 'input-alert' : '';
};
</script>

<style scoped>
/* Los mismos estilos originales de tu componente se mantienen intactos */
.sticky-header {
    position: sticky;
    top: 50px;
    width: 100%;
    backdrop-filter: blur(10px);
    padding-top: 10px;
    padding-bottom: 10px;
    z-index: 1000;
}
.ghost {
    opacity: 0.5;
    background: #474747;
    border: 2px dashed #00bcd4;
    height: auto;
    margin-bottom: 1rem;
}
.ejercicios-list .v-move,
.ejercicios-list .v-enter-active,
.ejercicios-list .v-leave-active {
    transition: all 0.3s ease;
}
.ejercicios-list .v-enter-from,
.ejercicios-list .v-leave-to {
    opacity: 0;
    transform: translateY(10px);
}
.drag-handle {
    color: #ccc;
    transition: all 0.4s ease;
}
.drag-handle:hover {
    background-color: #1d1d1d;
    cursor: pointer;
}
.ejercicios-list {
    display: flex;
    flex-direction: column;
    gap: 5px;
}
.add-routine-form form input, select {
    background: transparent;
    border: 0px;
    border-radius: 0px;
    border-bottom: 1px solid lightskyblue;
    color: aqua;
}
#dificultad {
    width: auto;
}
.add-routine-form form .input-number,
.input-difficulty,
.input-time,
.input-rir {
    border-radius: 5px;
    border-left: 1px solid aquamarine;
    border-bottom: 1px solid aquamarine;
    width: 70px;
    text-align: center;
}
.input-time {
    min-width: 100px;
    width: auto;
}
.input-difficulty {
    width: 120px;
    text-align: start;
}
.input-difficulty option, .input-time option {
    background-color: #151515;
}
.bloque-container {
    border-left: 3px solid lightskyblue;
    background-color: #101010;
}
.setting-exercise {
    display: flex;
    justify-content: center;
    gap: 20px;
    align-items: baseline;
}
.setting-exercise div {
    width: 70px;
}
.ejercicio-container {
    border: 0px;
    border-radius: 0px;
}
.btns-set-bloque {
    width: 100%;
    display: flex;
    align-items: end;
    justify-content: center;
    gap: 10px;
}
.btns-set-bloque button {
    padding: 5px 10px;
    width: 80%;
    height: min-content;
    margin: 0px auto;
}
.btns-set-routine button {
    width: 80%;
}
.descanso-container {
    width: 100%;
    border-left: 3px solid aquamarine;
    border-radius: 5px;
    padding: 5px;
}
.add-routine-form {
    width: 100%;
    margin: 0 auto;
    padding-top: 80px;
    display: flex;
    flex-direction: column;
}
.add-routine-form form {
    border-radius: 0px;
    width: 96%;
}
.add-routine-form .btn {
    display: flex;
    justify-content: center;
    align-items: baseline;
    padding: 4px 12px;
    width: 80%;
    gap: 10px;
}
.add-routine-form .btn-guardar {
    width: auto;
    transition: all 0.3s ease;
    background-color: aqua;
    color: #000;
}
.add-routine-form .btn-guardar:hover {
    background-color: #007575;
    color: #fff;
}
.btn-nota {
    display: flex;
    justify-content: center;
    align-items: baseline;
    padding: 6px 12px;
    gap: 10px;
    border-radius: 5px;
    border: 1px solid aquamarine;
    width: 70px;
    text-align: center;
    background-color: transparent;
    transition: all 0.3s ease;
}
.btn-nota:hover {
    background-color: aqua;
    cursor: pointer;
}
.text-notas {
    background: transparent;
    color: aqua;
    width: 300px;
}
.text-notas::placeholder {
    color: #007575;
}
.add-routine-form .border-card {
    border-radius: 5px;
    border: 1px solid rgba(127, 255, 212, 0.315);
}
.add-routine-form .personalizado input {
    width: 80px;
    text-align: center;
}
.btn-danger {
    background-color: #4e1818a4;
    color: white;
    border: 1px solid #6820207c;
    transition: all 0.3s ease;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
}
@media only screen and (min-width: 768px) {
    .add-routine-form {
        width: 100%;
        padding: 20px 0px 20px 20px;
        padding-left: 240px;
    }
    .add-routine-form form {
        min-width: 500px;
        max-width: 600px;
    }
    .btn {
        width: 80%;
    }
    .setting-exercise {
        gap: 40px;
    }
    .bloque-container .btn {
        min-width: 180px;
        width: 80%;
        max-width: 240px;
    }
    .sticky-header {
        position: relative;
        top: 0;
    }
}
.input-alert {
    animation: blink 2s infinite;
    border-color: rgb(0, 255, 242) !important;
}
@keyframes blink {
    0%, 100% { border-bottom-color: aquamarine; box-shadow: 0 2px 0 0 transparent; }
    50% { border-bottom-color: aqua; box-shadow: 0 2px 8px 2px aqua; }
}
.divisor {
    width: 100%;
    height: 1px;
}
.slide-fade-enter-active, .slide-fade-leave-active {
    transition: all 200ms ease;
    overflow: hidden;
}
.slide-fade-enter-from, .slide-fade-leave-to {
    opacity: 0;
    transform: translateX(-20px);
    max-height: 0;
    margin-top: 0;
    padding-top: 0;
    padding-bottom: 0;
}
.slide-fade-enter-to, .slide-fade-leave-from {
    opacity: 1;
    transform: translateX(0);
    max-height: 300px;
}
</style>
