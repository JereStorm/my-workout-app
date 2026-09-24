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
                    <div class="list-group-item small py-0 border-info bg-transparent text-info">
                        <span class="d-flex gap-2"><i class="bi bi-info-circle"></i>Se creará un nuevo ejercicio al guardar</span>
                    </div>
                </div>
            </div>

            <!-- Botón de edición: Solo si estamos editando y tiene un exerciseId -->
            <button v-if="esEdicion && ejercicio.exerciseId" type="button" class="btn btn-outline-info btn-sm px-2 py-1"
                title="Editar detalles del ejercicio" @click="abrirModalEdicion">
                <i class="bi bi-pencil-fill"></i>
            </button>
        </div>
    </div>
</template>

<script setup>
import { computed, getCurrentInstance, ref } from 'vue';
import { useExerciseStore } from '@/stores/exerciseStore';

const props = defineProps({
    ejercicio: { type: Object, required: true },
    indexBloque: { type: Number, required: true },
    ejercicioIndex: { type: Number, required: true },
    esEdicion: { type: Boolean, default: false }
});

const { proxy } = getCurrentInstance();
const exerciseStore = useExerciseStore();
const exercises = computed(() => exerciseStore.getExercises);

const esExacto = ref(false);

const filtrarExercises = computed(() => {
    const query = props.ejercicio.nombre?.trim().toLowerCase() || '';
    if (!query) {
        esExacto.value = false;
        return [];
    }

    const coincideExacto = exercises.value.some(
        exercise => exercise.nombre.trim().toLowerCase() === query
    );

    if (coincideExacto) {
        esExacto.value = true;
        return [];
    }

    esExacto.value = false;
    return exercises.value.filter(exercise =>
        exercise.nombre.toLowerCase().includes(query)
    );
});

const seleccionarExercise = (exercise) => {
    props.ejercicio.exerciseId = exercise.id;
    props.ejercicio.nombre = exercise.nombre;
    esExacto.value = true;
};

const onInputNombre = () => {
    if (props.ejercicio.exerciseId) {
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
        backdrop: true,
        allowOutsideClick: false,
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
                await exerciseStore.updateExercise({
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