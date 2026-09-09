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
                    <label for="descansoBloques" class="form-label  mb-0">
                        Descanso entre Bloques
                    </label>

                    <div class="">
                        <select id="descansoBloques" v-model="descansoBloquesSeleccionado"
                            class="form-select input-time">
                            <option :value="60">1 min</option>
                            <option :value="120">2 min</option>
                            <option :value="180">3 min</option>
                            <option :value="300">5 min</option>
                            <option :value="600">10 min</option>
                            <option value="personalizado">Personalizado</option>
                        </select>

                        <div v-if="descansoBloquesSeleccionado === 'personalizado'" class="d-flex gap-2 mt-2">
                            <input type="number" v-model.number="descansoBloquesPersonalizado.minutos"
                                class="form-control text-center" min="0" placeholder="Min">
                            <span class="mt-2">:</span>
                            <input type="number" v-model.number="descansoBloquesPersonalizado.segundos"
                                class="form-control text-center" min="0" max="59" placeholder="Seg">
                        </div>
                    </div>
                </div>
                <!-- Descanso entre Series -->
                <div
                    class="descanso-container mb-3 text-start d-flex flex-column justify-content-start gap-1 align-items-center">
                    <label for="descansoSeries" class="form-label  mb-0">
                        Descanso entre Series
                    </label>

                    <div class="">
                        <select id="descansoSeries" v-model="descansoSeriesSeleccionado" class="form-select input-time">
                            <option :value="30">30 seg</option>
                            <option :value="60">1 min</option>
                            <option :value="90">1:30 min</option>
                            <option :value="120">2 min</option>
                            <option :value="180">3 min</option>
                            <option value="personalizado">Personalizado</option>
                        </select>

                        <div v-if="descansoSeriesSeleccionado === 'personalizado'"
                            class="d-flex personalizado gap-2 mt-2">
                            <input type="number" v-model.number="descansoSeriesPersonalizado.minutos"
                                class="form-control text-center" min="0" placeholder="Min">

                            <input type="number" v-model.number="descansoSeriesPersonalizado.segundos"
                                class="form-control text-center" min="0" max="59" placeholder="Seg">
                        </div>
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
                            class="ejercicio-container p-3 p-md-2 d-flex flex-column align-items-center gap-2 drag-handle">
                            <div class="row w-100 d-flex flex-column justify-content-center gap-3">
                                <div class="w-100 mb-2 px-3 px-md-2">
                                    <label :for="'ejercicio-' + indexBloque + '-' + ejercicioIndex"
                                        class="form-label mb-0">Ejercicio</label>
                                    <input type="text" v-model="ejercicio.nombre" spellcheck="false" autocomplete="on"
                                        required :class="['form-control', inputClass(nuevaRutina.nombre)]"
                                        :id="'ejercicio-' + indexBloque + '-' + ejercicioIndex" />
                                </div>
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

                                <!-- NOTAS EJERCICIO-->
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
                            v-model="nuevaRutina.bloques[indexBloque].notas" class=" form-control text-notas mt-2 me-2"
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
                <button type="button" @click="guardarRutina" class="btn btn-guardar mt-0 px-5"><i
                        class="bi bi-box-arrow-down"></i>
                    Guardar rutina </button>

                <button type="button" @click="handleCancelar" class="btn btn-danger mt-3 mb-2">
                    <i class="bi bi-x-circle"></i> Cancelar
                </button>
            </div>
        </form>
    </div>
</template>

<!-- AddFormRoutine.vue -->
<script setup>
import { cloneDeep } from 'lodash-es';
import { reactive, onMounted, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useProfileStore } from '@/stores/profile';
import Draggable from 'vuedraggable';
import { confirmAction } from '@/utils/confirm';
import { getCurrentInstance } from 'vue';
import { useNotificationStore } from '@/stores/notificationStore';


const { proxy } = getCurrentInstance();

/** Store global con los datos del perfil (incluye las rutinas) */
const profileStore = useProfileStore();

/** Acceso al enrutador y a la ruta actual */
const route = useRoute();
const router = useRouter();

const rutinaIdFromRoute = route.query.id;

/** Estado de carga (útil para desactivar botones o mostrar spinners) */
const isLoadingSave = ref(false);

const isLoadingInfo = ref(false);

const isMobile = ref(window.innerWidth < 768);
/**
 * Estado reactivo de la rutina que se está creando o editando.
 * Contiene nombre, dificultad, descansos y bloques (cada uno con ejercicios).
 */
const nuevaRutina = reactive({
    nombre: '',
    dificultad: 'Intermedia',
    descansoBloques: 60,
    descansoSeries: 60,
    bloques: [{
        series: 3,
        ejercicios: [
            { nombre: '', repeticiones: 1, tiempo: 0, esfuerzo: 0, notas: '' }
        ],
        notas: ''
    }]
});

const descansoBloquesSeleccionado = ref(nuevaRutina.descansoBloques);
const descansoSeriesSeleccionado = ref(nuevaRutina.descansoSeries);

const descansoBloquesPersonalizado = reactive({
    minutos: 0,
    segundos: 0
});

const descansoSeriesPersonalizado = reactive({
    minutos: 0,
    segundos: 0
});

watch(descansoBloquesSeleccionado, (valor) => {
    if (valor !== 'personalizado') {
        nuevaRutina.descansoBloques = Number(valor);
    }
});

watch(descansoSeriesSeleccionado, (valor) => {
    if (valor !== 'personalizado') {
        nuevaRutina.descansoSeries = Number(valor);
    }
});

watch(
    descansoBloquesPersonalizado,
    (valor) => {
        if (descansoBloquesSeleccionado.value === 'personalizado') {
            nuevaRutina.descansoBloques =
                Number(valor.minutos) * 60 +
                Number(valor.segundos);
        }
    },
    { deep: true }
);

watch(
    descansoSeriesPersonalizado,
    (valor) => {
        if (descansoSeriesSeleccionado.value === 'personalizado') {
            nuevaRutina.descansoSeries =
                Number(valor.minutos) * 60 +
                Number(valor.segundos);
        }
    },
    { deep: true }
);

function configurarDescansos() {
    const opcionesBloques = [60, 120, 180, 300, 600];
    const opcionesSeries = [30, 60, 90, 120, 180];

    // BLOQUES
    if (opcionesBloques.includes(nuevaRutina.descansoBloques)) {
        descansoBloquesSeleccionado.value = nuevaRutina.descansoBloques;
    } else {
        descansoBloquesSeleccionado.value = 'personalizado';

        descansoBloquesPersonalizado.minutos =
            Math.floor(nuevaRutina.descansoBloques / 60);

        descansoBloquesPersonalizado.segundos =
            nuevaRutina.descansoBloques % 60;
    }

    // SERIES
    if (opcionesSeries.includes(nuevaRutina.descansoSeries)) {
        descansoSeriesSeleccionado.value = nuevaRutina.descansoSeries;
    } else {
        descansoSeriesSeleccionado.value = 'personalizado';

        descansoSeriesPersonalizado.minutos =
            Math.floor(nuevaRutina.descansoSeries / 60);

        descansoSeriesPersonalizado.segundos =
            nuevaRutina.descansoSeries % 60;
    }
}

// Mostrar/ocultar notas (por ejercicio y por bloque)
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

const hasNotaEjercicio = (bloqueIndex, ejercicioIndex) => {
    return showNotasEjercicio.value.has(`${bloqueIndex}-${ejercicioIndex}`);
};

const hasNotaBloque = (bloqueIndex) => {
    return showNotasBloque.value.has(String(bloqueIndex));
};


/**
 * Intenta cargar la rutina en función del query.id
 */
function aplicarRutinaSiCorresponde() {

    if (rutinaIdFromRoute) {
        isLoadingInfo.value = true;
        try {
            const rutinaExistente = profileStore.getRutinaLocal(rutinaIdFromRoute);
            if (rutinaExistente) {
                Object.assign(nuevaRutina, cloneDeep(rutinaExistente));
                configurarDescansos();
                console.log(nuevaRutina)
                isLoadingInfo.value = false;
            } else {
                console.warn(`No se encontró la rutina con ID: ${rutinaIdFromRoute}`);
                router.push({ name: "MyWorkouts" });
                // Aquí podrías redirigir o mostrar un mensaje al usuario
            }
        } catch (error) {
            console.error('Error al cargar la rutina para editar:', error);
            // Se recomienda mostrar feedback al usuario
        }
    }
}

watch(
    () => profileStore.getUserRoutines.length,
    (len) => {
        if (len > 0) {
            // Cuando por fin haya alguna rutina, prueba a mapear la que toque
            aplicarRutinaSiCorresponde();
        }
    }
);


/**
 * Al montar el componente, revisa si se pasó un ID por la ruta para cargar una rutina existente.
 * Si se encuentra, clona profundamente y carga en el estado `nuevaRutina`.
 */
onMounted(async () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // si ya llegaron antes, aplica de una vez:
    aplicarRutinaSiCorresponde();
});

/**
 * Restablece el formulario a sus valores por defecto.
 * Ideal para "crear nueva rutina" o limpiar después de guardar.
 */
const resetFormulario = () => {
    Object.assign(nuevaRutina, {
        nombre: '',
        dificultad: 'Muy facil',
        descansoBloques: 60,
        descansoSeries: 60,
        bloques: [{
            series: 3,
            ejercicios: [
                { nombre: '', repeticiones: 1, tiempo: 0, esfuerzo: 0, notas: '' }
            ],
            notas: ''
        }]
    });
    // limpiar toggles de notas
    showNotasEjercicio.value = new Set();
    showNotasBloque.value = new Set();
};

/**
 * Navega a la vista de rutinas del usuario.
 */
const handleCancelar = async () => {
    if (rutinaIdFromRoute) {
        const ok = await confirmAction(proxy.$swal, {
            title: '¿Seguro deseas cancelar la edición?',
            text: 'Se perderán los cambios realizados'
        })
        if (!ok) return
    } else {
        const ok = await confirmAction(proxy.$swal, {
            title: '¿Seguro deseas cancelar?',
            text: 'Se perderá el progreso actual'
        })
        if (!ok) return
    }
    router.back();
};

const focusField = (id) => {
    const element = document.getElementById(id);

    if (!element) return;

    element.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });

    // Esperamos a que termine mínimamente el scroll antes del focus
    setTimeout(() => {
        element.focus();
    }, 300);
};

const validarRutina = () => {
    const notify = useNotificationStore();

    // Nombre de la rutina
    if (!nuevaRutina.nombre.trim()) {
        notify.show(
            'El nombre de la rutina no puede estar vacío.',
            'error'
        );

        focusField('nombre');
        return false;
    }

    // Validación de bloques
    for (const [indexBloque, bloque] of nuevaRutina.bloques.entries()) {

        // Series
        if (!bloque.series || bloque.series < 1) {
            notify.show(
                `El bloque ${indexBloque + 1} debe tener al menos 1 serie.`,
                'error'
            );

            focusField(`series-bloque-${indexBloque}`);
            return false;
        }

        // Validación de ejercicios
        for (const [ejercicioIndex, ejercicio] of bloque.ejercicios.entries()) {

            if (!ejercicio.nombre.trim()) {
                notify.show(
                    `El ejercicio ${ejercicioIndex + 1} del bloque ${indexBloque + 1} necesita un nombre.`,
                    'error'
                );

                focusField(
                    `ejercicio-${indexBloque}-${ejercicioIndex}`
                );

                return false;
            }

            // Repeticiones
            if (!ejercicio.repeticiones || ejercicio.repeticiones < 1) {
                notify.show(
                    `Las repeticiones del ejercicio ${ejercicioIndex + 1} deben ser mayores a 0.`,
                    'error'
                );

                focusField(
                    `reps-${indexBloque}-${ejercicioIndex}`
                );

                return false;
            }

            // Tiempo
            if (ejercicio.tiempo < 0) {
                notify.show(
                    `El tiempo del ejercicio ${ejercicioIndex + 1} no puede ser negativo.`,
                    'error'
                );

                focusField(
                    `tiempo-${indexBloque}-${ejercicioIndex}`
                );

                return false;
            }
        }
    }

    return true;
};

/**
 * Guarda la rutina actual: si tiene ID, se actualiza; si no, se crea una nueva.
 * Muestra mensajes de error si ocurre algún problema.
 */
const guardarRutina = async () => {
    isLoadingSave.value = true;

    const isValid = validarRutina();

    if (!isValid) {
        isLoadingSave.value = false;
        return;
    }

    try {
        if (nuevaRutina.id) {
            // Edición de rutina existente
            await profileStore.updateRoutine({ ...nuevaRutina });
        } else {
            // Creación de rutina nueva
            await profileStore.createRoutine({ ...nuevaRutina });
        }
        isLoadingSave.value = false;
        router.push({ name: "MyWorkouts" });
    } catch (error) {
        console.error('Error al guardar la rutina:', error);
        // Aquí podrías usar un sistema de notificaciones o alertas
    }
};

/**
 * Agrega un nuevo bloque de ejercicios a la rutina inmediatamente después de uno existente.
 * @param {number} bloqueIndex Índice del bloque donde se agrega el ejercicio.
 */
const agregarBloque = (bloqueIndex) => {
    nuevaRutina.bloques.splice(bloqueIndex + 1, 0, {
        series: 3,
        ejercicios: [
            { nombre: '', repeticiones: 1, tiempo: 0, esfuerzo: 0, notas: '' }
        ],
        notas: ''
    });
};

/**
 * Elimina el bloque en la posición indicada.
 * @param {number} index Índice del bloque a eliminar.
 */
const eliminarBloque = (index) => {
    nuevaRutina.bloques.splice(index, 1);
};

/**
 * Agrega un nuevo ejercicio inmediatamente después de uno existente.
 * @param {number} bloqueIndex Índice del bloque donde se agrega el ejercicio.
 * @param {number} ejercicioIndex Índice del ejercicio después del cual se insertará el nuevo.
 */
const agregarEjercicio = (bloqueIndex, ejercicioIndex) => {
    const ejercicios = nuevaRutina.bloques[bloqueIndex].ejercicios;
    ejercicios.splice(ejercicioIndex + 1, 0, {
        nombre: '',
        repeticiones: 1,
        tiempo: 0,
        esfuerzo: 0,
        notas: ''
    });
};

/**
 * Elimina un ejercicio de un bloque específico.
 * @param {number} bloqueIndex Índice del bloque.
 * @param {number} ejercicioIndex Índice del ejercicio a eliminar.
 */
const eliminarEjercicio = (bloqueIndex, ejercicioIndex) => {
    nuevaRutina.bloques[bloqueIndex].ejercicios.splice(ejercicioIndex, 1);
};

/**
 * Aplica una clase CSS de alerta si un valor es inválido (vacío o nulo).
 * @param {*} valor Valor a validar.
 * @returns {string} Clase CSS condicional.
 */
const inputClass = (valor) => {
    return valor === null || valor === '' || valor === undefined ? 'input-alert' : '';
};

const formatTiempo = (segundos) => {
    const m = Math.floor(segundos / 60);
    const s = segundos % 60;
    const mm = String(m).padStart(2, '0');
    const ss = String(s).padStart(2, '0');
    return `${mm}:${ss}`;
};
</script>

<style scoped>
.sticky-header {
    position: sticky;
    top: 0px;
    width: 100%;
    background-color: transparent;
    z-index: 1000;
    padding-top: 10px;
    padding-bottom: 10px;
}

/* Clases para el draggable */
.ghost {
    opacity: 0.5;
    background: #474747;
    border: 2px dashed #00bcd4;
    height: auto;
    margin-bottom: 1rem;
    /* Igual que el spacing entre items reales */
}

/* Transiciones suaves para mover los ítems */
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
    gap: 5px
}

.add-routine-form form input,
select {
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
.input-rir {
    border-radius: 5px;
    border-left: 1px solid aquamarine;
    border-bottom: 1px solid aquamarine;
    width: 70px;
    text-align: center;

}

.input-difficulty {
    width: 120px;
    text-align: start;
}

.input-difficulty option {
    background-color: #151515;
}

.input-time option {
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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

.card {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.input-rir {
    padding: 5px;
    text-align: center;
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

.descanso-min {
    width: 70px;
}

/* Solo se fija si NO es mobile */
@media only screen and (min-width: 768px) {
    .add-routine-form {
        width: 100%;
        padding: 20px 0px 20px 20px;
        padding-left: 240px;

    }

    .add-routine-form form .input-number {
        padding-right: 0px;
    }

    .add-routine-form .btn i {
        font-size: 18px;
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
    }
}

@keyframes blink {

    0%,
    100% {
        box-shadow: 0 0 0px aquamarine;
    }

    50% {
        box-shadow: 0 0 8px 2px aqua;
    }
}

.input-alert {
    animation: blink 2s infinite;
    border-color: rgb(0, 255, 242) !important;
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
    -webkit-text-fill-color: aqua !important;
    caret-color: aqua;
    transition: background-color 9999s ease-in-out 0s !important;
    background-color: transparent !important;
    box-shadow: inset 0 0 0 1000px #212529 !important;
    border-bottom: 1px solid lightskyblue;
}

.divisor {
    width: 100%;
    height: 1px;
}

/* Animación para el elemento que se está arrastrando */
.ejercicio-container.sortable-chosen {
    transition: opacity 0.3s ease-out;
    /* Define la transición de opacidad */
    opacity: 0.5;
    /* Reduce la opacidad para crear el efecto fade */
}

/* Opcional: Estilo para el elemento fantasma */
.ejercicio-container.sortable-ghost {
    opacity: 0.2;
    /* Lo hace más transparente */
    background-color: #f0f0f0;
    /* Cambia el color de fondo */
}

/* Transición para aparición/desaparición de notas */
.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: all 200ms ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    opacity: 0;
    transform: translateX(-20px);
    max-height: 0;
    margin-top: 0;
    padding-top: 0;
    padding-bottom: 0;
}

.slide-fade-enter-to,
.slide-fade-leave-from {
    opacity: 1;
    transform: translateX(0);
    max-height: 300px;
    /* suficiente para el textarea */
}

/* mejora para evitar salto en el layout */
.slide-fade-enter-active,
.slide-fade-leave-active {
    overflow: hidden;
}
</style>