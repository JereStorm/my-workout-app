<template>
    <div class="add-routine-form">
        <h2 class="text-center mb-4">
            {{ nuevaRutina.id ? 'Editar Rutina' : 'Agregar Nueva Rutina' }}
        </h2>
        <form @submit.prevent="guardarRutina" class="p-2 p-md-4">
            <div class="mb-3 text-start">
                <label for="nombre" class="form-label">Nombre</label>
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
            <div class="mb-3 text-start d-flex justify-content-start gap-5 align-items-center">
                <label for="descansoBloques" class="form-label w-50 mb-0">
                    Descanso entre Bloques
                </label>
                <input type="number" v-model="nuevaRutina.descansoBloques" class="form-control  input-number"
                    id="descansoBloques">
            </div>
            <div class="mb-3 text-start d-flex justify-content-start gap-5 align-items-center ">
                <label for="descansoSeries" class="form-label w-50 mb-0">Descanso entre Series</label>
                <input type="number" v-model="nuevaRutina.descansoSeries" class="form-control  input-number"
                    id="descansoSeries">
            </div>

            <div v-for="(bloque, index) in nuevaRutina.bloques" :key="index"
                class="bloque-container mb-3 px-2 pt-2 pb-3 rounded text-start">
                <div class="mb-3 d-flex justify-content-between align-items-baseline ">
                    <h5 class="text-start m-0">{{ index + 1 }}° Bloque</h5>
                    <div class="d-flex flex-column align-items-center justify-content-center col-md-2">
                        <label for="series-bloque-{{ index }}" class="form-label mb-1">Series</label>
                        <input type="number" v-model="bloque.series" class="form-control input-number"
                            :id="'series-bloque-' + index" min="1">
                    </div>
                </div>

                <div v-for="(ejercicio, ejercicioIndex) in bloque.ejercicios" :key="ejercicioIndex"
                    class="ejercicio-container  p-2 d-flex flex-column align-items-center gap-3">
                    <!-- <h6>Ejercicio {{ ejercicioIndex + 1 }}</h6> -->
                    <div class="row w-100 d-flex flex-column justify-content-center gap-3">
                        <div class="w-100 mb-2">
                            <label for="ejercicio-{{ index }}-{{ ejercicioIndex }}" class="form-label">Ejercicio</label>
                            <input type="text" v-model="ejercicio.nombre" spellcheck="false" autocomplete="on" required
                                :class="['form-control', inputClass(nuevaRutina.nombre)]"
                                :id="'ejercicio-' + index + '-' + ejercicioIndex">
                        </div>
                    </div>
                    <div class="setting-exercise ">
                        <div class="col-md-3 mb-2 text-center">
                            <label for="reps-{{ index }}-{{ ejercicioIndex }}" class="form-label">Reps</label>
                            <input type="number" v-model="ejercicio.repeticiones" class="form-control input-number"
                                :id="'reps-' + index + '-' + ejercicioIndex" min="1">
                        </div>
                        <div class="col-md-3 text-center">
                            <label for="tiempo-{{ index }}-{{ ejercicioIndex }}" class="form-label">Tiempo</label>
                            <input type="number" v-model="ejercicio.tiempo" class="form-control input-number"
                                :id="'tiempo-' + index + '-' + ejercicioIndex" min="0">
                        </div>
                        <div class="col-md-3 text-center">
                            <label for="esfuerzo-{{ index }}-{{ ejercicioIndex }}" class="form-label">Esfuerzo</label>
                            <select v-model="ejercicio.esfuerzo" class="form-select text-info input-rir"
                                :id="'esfuerzo-' + index + '-' + ejercicioIndex">

                                <option select value="">-</option> <!-- Opción vacía -->
                                <option value="1">RIR 1</option>
                                <option value="2">RIR 2</option>
                                <option value="3">RIR 3</option>
                            </select>
                        </div>
                    </div>
                    <div class="d-flex w-100 justify-content-center gap-2">
                        <button type="button" @click="agregarEjercicio(index)" class="btn btn-outline-info">
                            <i class="bi bi-plus-circle-fill"></i> Ejercicio
                        </button>
                        <button v-if="ejercicioIndex > 0" type="button"
                            @click="eliminarEjercicio(index, ejercicioIndex)"
                            class="btn btn-outline-danger delete-exercise ">
                            <i class="bi bi-trash-fill"></i> Ejercicio
                        </button>

                    </div>

                </div>
                <div class="btns-set-bloque ">
                    <button v-if="index > 0" type="button" @click="eliminarBloque(index)"
                        class="btn btn-outline-danger">
                        <i class="bi bi-trash-fill"></i> Bloque
                    </button>
                </div>
            </div>
            <div class="text-center d-flex flex-column align-items-center">
                <button type="button" @click="agregarBloque" class="btn btn-outline-info">
                    <i class="bi bi-plus-circle-fill"></i> Agregar Bloque
                </button>
            </div>

            <hr>

            <div v-if="isLoading" class="loader-form"></div>

            <div class="text-center d-flex btns-set-routine flex-column align-items-center">
                <button type="submit" class="btn btn-success mt-0">
                    <i class="bi bi-box-arrow-down"></i>
                    Guardar rutina
                </button>

                <button type="button" @click="handleCancelar" class="btn btn-danger mt-3">
                    <i class="bi bi-x-circle"></i> Cancelar
                </button>
            </div>

        </form>
    </div>
</template>

<!-- AddFormRoutine.vue -->
<script setup>
import { cloneDeep } from 'lodash-es';
import { reactive, watch, defineProps, onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useProfileStore } from '@/stores/profile';

const props = defineProps({
    rutinaParaEditar: Object
});

const profileStore = useProfileStore();

const route = useRoute();
const router = useRouter();

const isLoading = ref(false);

const nuevaRutina = reactive({
    nombre: '',
    dificultad: 'Intermedia',
    descansoBloques: 60,
    descansoSeries: 60,
    bloques: [{
        series: 3,
        ejercicios: [
            { nombre: '', repeticiones: 1, tiempo: 0, esfuerzo: 0 }
        ]
    }]
});

onMounted(async () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const rutinaIdFromRoute = route.query.id;
    if (rutinaIdFromRoute) {
        try {
            const rutinaExistente = profileStore.getRutinaLocal(rutinaIdFromRoute);
            if (rutinaExistente) {
                Object.assign(nuevaRutina, cloneDeep(rutinaExistente));
            } else {
                console.warn(`No se encontró la rutina con ID: ${rutinaIdFromRoute}`);
                // Opcional: Redirigir o mostrar un mensaje de error
            }
        } catch (error) {
            console.error('Error al cargar la rutina para editar:', error);
            // Opcional: Mostrar un mensaje de error al usuario
        }
    }
});

const resetFormulario = () => {
    Object.assign(nuevaRutina, {
        nombre: '',
        dificultad: 'Muy facil',
        descansoBloques: 60,
        descansoSeries: 60,
        bloques: [{
            series: 3,
            ejercicios: [
                { nombre: '', repeticiones: 1, tiempo: 0, esfuerzo: 0 }
            ]
        }]
    });
};

const handleCancelar = () => {
    router.push('/dashboard/my-workouts');
};

const guardarRutina = async () => {
    isLoading.value = true;
    try {
        if (nuevaRutina.id) {
            // Editar rutina existente
            await profileStore.updateRutina({ ...nuevaRutina });
        } else {
            // Crear nueva rutina
            await profileStore.createRutinaFirebase({ ...nuevaRutina });
        }
        isLoading.value = false;
        router.push('/dashboard/my-workouts');
    } catch (error) {
        console.error('Error al guardar la rutina:', error);
        // Manejar errores (mostrar mensaje al usuario, etc.)
    }
};

const agregarBloque = () => {
    nuevaRutina.bloques.push({
        series: 3, // Añadimos 'series' al nuevo bloque
        ejercicios: [
            { nombre: '', repeticiones: 1, tiempo: 0, esfuerzo: 0 } // Quitamos 'series' del nuevo ejercicio
        ]
    });
};

const eliminarBloque = (index) => {
    nuevaRutina.bloques.splice(index, 1);
};


const agregarEjercicio = (bloqueIndex) => {
    nuevaRutina.bloques[bloqueIndex].ejercicios.push({
        nombre: '', repeticiones: 1, tiempo: 0, esfuerzo: 0 // Quitamos 'series' del nuevo ejercicio
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
/* Estilos - Puedes añadir más para el formulario */
#descansoBloques,
#descansoSeries {
    width: 70px;
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
    border: 1px solid aquamarine;
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

.bloque-container {
    border: 1px solid lightskyblue;
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
}

.btns-set-bloque button {
    padding: 5px 10px;
    width: 80%;
    margin: 0px auto;
}

.btns-set-routine button {
    width: 80%;
}

.add-routine-form {
    width: 100%;
    margin: 0 auto;
    padding-top: 100px;
    display: flex;
    flex-direction: column;
}

.add-routine-form form {
    border-radius: 0px;
    width: 90%;
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

/* Solo se fija si NO es mobile */
@media only screen and (min-width: 768px) {
    .add-routine-form {
        width: 100%;
        padding: 20px;
        padding-left: 160px;

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

.loader-form {
    margin-bottom: 10px;
    width: 0;
    height: 4.8px;
    display: inline-block;
    position: relative;
    background: aqua;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
    box-sizing: border-box;
    animation: animFw 4s linear infinite;
}

.loader-form::after,
.loader-form::before {
    content: '';
    width: 10px;
    height: 1px;
    background: #FFF;
    position: absolute;
    top: 9px;
    right: -2px;
    opacity: 0;
    transform: rotate(-45deg) translateX(0px);
    box-sizing: border-box;
    animation: coli1 0.3s linear infinite;
}

.loader-form::before {
    top: -4px;
    transform: rotate(45deg);
    animation: coli2 0.3s linear infinite;
}

@keyframes animFw {
    0% {
        width: 0;
    }

    100% {
        width: 100%;
    }
}

@keyframes coli1 {
    0% {
        transform: rotate(-45deg) translateX(0px);
        opacity: 0.7;
    }

    100% {
        transform: rotate(-45deg) translateX(-45px);
        opacity: 0;
    }
}

@keyframes coli2 {
    0% {
        transform: rotate(45deg) translateX(0px);
        opacity: 1;
    }

    100% {
        transform: rotate(45deg) translateX(-45px);
        opacity: 0.7;
    }
}
</style>