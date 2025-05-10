<template>
    <div class="add-routine-form">
        <h2 class="text-center mb-4">
            {{ props.rutinaParaEditar ? 'Editar Rutina' : 'Agregar Nueva Rutina' }}
        </h2>



        <form @submit.prevent="guardarRutina" class="bg-dark p-4">
            <div class="mb-3 text-start">
                <label for="nombre" class="form-label">Nombre</label>
                <input type="text" v-model="nuevaRutina.nombre" spellcheck="false" autocomplete="on"
                    :class="['form-control', inputClass(nuevaRutina.nombre)]" id="nombre" required>
            </div>
            <div class="mb-3 flex-column d-flex justify-content-center align-items-start col-md-3">
                <label for="dificultad" class="form-label">Dificultad</label>
                <select v-model="nuevaRutina.dificultad" class="form-select bg-dark text-info input-difficulty"
                    id="dificultad" required>
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
                class="bloque-container mb-3 px-3 py-2 rounded text-start">
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
                            <select v-model="ejercicio.esfuerzo" class="form-select bg-dark text-info input-rir"
                                :id="'esfuerzo-' + index + '-' + ejercicioIndex">

                                <option value="">-</option> <!-- Opción vacía -->
                                <option value="1">RIR 1</option>
                                <option value="2">RIR 2</option>
                                <option value="3">RIR 3</option>
                            </select>
                        </div>
                    </div>
                    <div v-if="ejercicioIndex > 0" class="d-flex w-100 justify-content-center">
                        <button type="button" @click="eliminarEjercicio(index, ejercicioIndex)"
                            class="btn btn-outline-danger delete-exercise w-50">Eliminar
                            Ejercicio </button>
                    </div>

                </div>
                <div class="btns-set-bloque mb-2">
                    <button type="button" @click="agregarEjercicio(index)"
                        class="btn w-50 px-1 btn-outline-success mt-2">Agregar
                        Ejercicio</button>
                    <button v-if="index > 0" type="button" @click="eliminarBloque(index)"
                        class="btn w-50 btn-sm btn-outline-danger mt-2">
                        Eliminar Bloque
                    </button>
                </div>
            </div>
            <div class="text-center d-flex flex-column align-items-center">
                <button type="button" @click="agregarBloque" class="btn btn-outline-info w-50">
                    <i class="bi bi-plus-circle me-2"></i> Agregar Bloque
                </button>
            </div>

            <hr>

            <div class="text-center d-flex btns-set-routine flex-column align-items-center">
                <button type="submit" class="btn btn-success mt-0">
                    <i class="bi bi-box-arrow-down"></i>
                    {{ 'Guardar rutina' }}
                </button>

                <button type="button" @click="handleCancelar" class="btn btn-danger mt-3">
                    <i class="bi bi-x-circle me-2"></i> Cancelar
                </button>
            </div>

        </form>
    </div>
</template>

<!-- AddFormRoutine.vue -->
<script setup>
import { cloneDeep } from 'lodash-es';
import { reactive, watch, defineEmits, defineProps } from 'vue';

const props = defineProps({
    rutinaParaEditar: Object
});

const emit = defineEmits(['routine-added', 'close']);

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

watch(() => props.rutinaParaEditar, (nuevaRutinaEditada) => {
    if (nuevaRutinaEditada) {
        Object.assign(nuevaRutina, cloneDeep(props.rutinaParaEditar));
    }
}, { immediate: true });

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
    emit('close');
    setTimeout(() => {
        resetFormulario();
    }, 500);
};

const guardarRutina = async () => {
    if (props.rutinaParaEditar) {
        console.log("Editando", { ...nuevaRutina })
        emit('routine-added', { ...nuevaRutina, editada: true });
    } else {
        const newRoutine = {
            ...nuevaRutina,
        };
        console.log("Agregando", newRoutine)
        emit('routine-added', newRoutine);
    }

    setTimeout(() => {
        resetFormulario();
    }, 500);

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

#esfuerzo .add-routine-form {
    width: 100%;
}

.add-routine-form form {
    border-radius: 8px;
    width: 100%;
}


.add-routine-form form input,
select {
    background: transparent;
    border: 0px;
    border-radius: 0px;
    border-bottom: 1px solid lightskyblue;
    color: aqua;
}

.add-routine-form form .input-number,
.input-difficulty,
.input-rir {
    border-radius: 5px;
    border: 1px solid aquamarine;
    width: 70px;
    text-align: center;
    padding-right: 0px;

}

.input-difficulty {
    width: 120px;
    text-align: start;
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
    display: flex;
    justify-content: center;
    gap: 20px;
}

.btns-set-bloque button {
    font-size: 0.9rem;
    padding: 5px 10px;
}

.btns-set-routine button {
    width: 80%;

}

.delete-exercise {
    font-size: 0.9rem;
}

/* Estilos adicionales si es necesario */
.my-workouts {
    padding: 20px;
}

.add-routine-form {
    width: 100%;
    min-width: 350px;
    max-width: 600px;
}

.card {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.input-rir {
    padding: 5px;
    text-align: center;
}

/* Solo se fija si NO es mobile */
@media only screen and (min-width: 768px) {
    .add-routine-form {
        width: 90%;
    }

    .btn {
        width: 80%;
    }

    .setting-exercise {
        gap: 40px;
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
</style>