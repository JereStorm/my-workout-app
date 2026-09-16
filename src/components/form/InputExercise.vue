<!-- @/components/form/InputExercise.vue -->
<template>
    <div class="w-100 mb-4 px-3 px-md-2">
        <label :for="'ejercicio-' + indexBloque + '-' + ejercicioIndex" class="form-label mb-0">
            Ejercicio
        </label>

        <div class="d-flex align-items-center gap-2">
            <div class="position-relative flex-grow-1">
                <input type="text" v-model="ejercicio.nombre" @input="onInputNombre" spellcheck="false"
                    autocomplete="off" required :class="['form-control', inputClass(ejercicio.nombre)]"
                    :id="'ejercicio-' + indexBloque + '-' + ejercicioIndex" />

                <!-- Autocomplete list -->
                <div v-if="ejercicio.nombre.trim() && filtrarExercises.length && !ejercicio.exerciseId"
                    class="list-group position-absolute w-100 shadow-sm" style="z-index: 1000;">
                    <div class="list-group-item bg-body-secondary small fw-semibold">
                        Ejercicios guardados
                    </div>

                    <button v-for="exercise in filtrarExercises.slice(0, 6)" :key="exercise.id" type="button"
                        class="list-group-item list-group-item-action text-start"
                        @mousedown.prevent="seleccionarExercise(exercise)">
                        {{ exercise.nombre }}
                    </button>
                </div>

                <!-- Nuevo ejercicio indicador -->
                <div v-else-if="ejercicio.nombre.trim() && !ejercicio.exerciseId && !esExacto"
                    class="list-group position-absolute w-100 shadow-sm" style="z-index: 1000;">
                    <div class="list-group-item small py-0 bg-transparent text-info">
                        <span class="d-flex gap-2"><i class="bi bi-info-circle"></i>Se creará un nuevo ejercicio al
                            guardar</span>
                    </div>
                </div>
            </div>

            <!-- 
              Botón de edición: 
              Solo aparece si estamos editando la rutina (esEdicion) y el ejercicio ya tiene un exerciseId asignado.
            -->
            <button v-if="esEdicion && ejercicio.exerciseId" type="button" class="btn btn-outline-info btn-sm px-2 py-1"
                title="Editar detalles del ejercicio" @click="abrirModalEdicion">
                <i class="bi bi-pencil-fill"></i>
            </button>
        </div>
    </div>
</template>

<script setup>
import { computed, getCurrentInstance } from 'vue';
import { useProfileStore } from '@/stores/profile';

const props = defineProps({
    ejercicio: {
        type: Object,
        required: true
    },
    indexBloque: {
        type: Number,
        required: true
    },
    ejercicioIndex: {
        type: Number,
        required: true
    },
    esEdicion: {
        type: Boolean,
        default: false
    }
});

const { proxy } = getCurrentInstance();
const profileStore = useProfileStore();
const exercises = computed(() => profileStore.getUserExercises);

let esExacto = false; // Variable para controlar si hay coincidencia exacta

const filtrarExercises = computed(() => {
    const query = props.ejercicio.nombre.trim().toLowerCase();
    if (!query) return []; // Si está vacío, no mostramos nada

    // Buscamos si ya existe un ejercicio con el nombre exacto que está escribiendo
    const coincideExacto = exercises.value.some(
        exercise => exercise.nombre.trim().toLowerCase() === query
    );

    // Si coincide exactamente, devolvemos un array vacío para ocultar el dropdown
    if (coincideExacto){
        esExacto = true;
        return [];
    };

    // Si no es exacto, filtramos las coincidencias parciales como antes
    return exercises.value.filter(exercise =>
        exercise.nombre.toLowerCase().includes(query)
    );
});

const seleccionarExercise = (exercise) => {
    props.ejercicio.exerciseId = exercise.id;
    props.ejercicio.nombre = exercise.nombre;
};

const onInputNombre = () => {
    // Si el usuario modifica el texto manualmente, desvinculamos el ID 
    // para que pase a considerarse un ejercicio nuevo (a menos que vuelva a seleccionarlo de la lista)
    if (props.ejercicio.exerciseId) {
        // Opcional: validamos si el texto actual coincide exactamente con el ID que tenía
        const currentEx = exercises.value.find(ex => ex.id === props.ejercicio.exerciseId);
        if (!currentEx || currentEx.nombre !== props.ejercicio.nombre) {
            props.ejercicio.exerciseId = null;
        }
    }
};

const inputClass = (nombre) => {
    return nombre && nombre.trim() ? 'is-valid' : '';
};

const abrirModalEdicion = async () => {
    const ejercicioActual = exercises.value.find(ex => ex.id === props.ejercicio.exerciseId);

    if (!ejercicioActual) return;

    const { value: nuevoNombre } = await proxy.$swal.fire({
        title: 'Editar Ejercicio',
        html: `
            <div class="text-start">
                <label class="form-label small text-muted mb-1">Nombre del ejercicio</label>
                <input id="swal-input-nombre" class="form-control text-info bg-transparent border-bottom" value="${ejercicioActual.nombre}" autocomplete="off">
                <p class="small text-muted mt-2 mb-0">
                    * Modificar este ejercicio actualizará su nombre en todas las rutinas que lo utilicen.
                </p>
            </div>
        `,
        focusConfirm: false,
        showCancelButton: true,
        confirmButtonText: 'Guardar cambios',
        cancelButtonText: 'Cancelar',
        preConfirm: () => {
            const inputVal = document.getElementById('swal-input-nombre').value.trim();
            if (!inputVal) {
                proxy.$swal.showValidationMessage('El nombre no puede estar vacío');
            }
            return inputVal;
        }
    });

    if (nuevoNombre && nuevoNombre !== ejercicioActual.nombre) {
        try {
            const nombreNormalizado = nuevoNombre.toLowerCase();

            const ejercicioExistente = exercises.value.find(
                ex => ex.nombre.trim().toLowerCase() === nombreNormalizado && ex.id !== ejercicioActual.id
            );

            if (ejercicioExistente) {
                props.ejercicio.exerciseId = ejercicioExistente.id;
                props.ejercicio.nombre = ejercicioExistente.nombre;
            } else {
                await profileStore.updateExercise({
                    ...ejercicioActual,
                    nombre: nuevoNombre
                });

                props.ejercicio.nombre = nuevoNombre;
            }

            proxy.$swal.fire({
                icon: 'success',
                title: '¡Actualizado!',
                text: 'El ejercicio se modificó correctamente.',
                timer: 1500,
                showConfirmButton: false
            });
        } catch (error) {
            console.error('Error al actualizar el ejercicio:', error);
            proxy.$swal.fire('Error', 'No se pudo actualizar el ejercicio', 'error');
        }
    }
};
</script>