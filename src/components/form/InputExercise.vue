<template>
    <div class="w-100 mb-5 px-3 px-md-2">
        <label :for="'ejercicio-' + indexBloque + '-' + ejercicioIndex" class="form-label mb-0">
            Ejercicio
        </label>

        <div class="d-flex align-items-center gap-2">
            <div class="position-relative flex-grow-1">
                <input type="text" v-model="ejercicio.nombre" @input="onInputNombre" @focus="isFocused = true"
                    @blur="handleBlur" spellcheck="false" autocomplete="off" required
                    :class="['form-control', inputClass(ejercicio.nombre)]"
                    :id="'ejercicio-' + indexBloque + '-' + ejercicioIndex" />

                <!-- Autocomplete list: Solo se muestra si está escribiendo, hay sugerencias, NO tiene ID y TIENE el foco -->
                <div v-if="isFocused && ejercicio.nombre.trim() && filtrarExercises.length && !ejercicio.exerciseId"
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

                <!-- Nuevo ejercicio indicador: Se muestra si hay texto, no tiene ID, no es exacto Y YA NO TIENE EL FOCO -->
                <div v-if="!isFocused && ejercicio.nombre.trim() && !ejercicio.exerciseId && !esExacto"
                    class="list-group position-absolute w-100 shadow-sm">
                    <div class="list-group-item small py-0 border-info bg-transparent text-info">
                        <span class="d-flex gap-2"><i class="bi bi-info-circle"></i>Se creará un nuevo ejercicio al
                            guardar</span>
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
import { computed, ref, getCurrentInstance, watchEffect, watch } from 'vue';
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

// Estado para controlar el foco del input
const isFocused = ref(false);

const handleBlur = () => {
    setTimeout(() => {
        isFocused.value = false;
        
        if (!props.ejercicio.nombre) return;

        // 1. Limpiamos espacios sobrantes al salir
        const nombreLimpio = props.ejercicio.nombre.trim().replace(/\s+/g, ' ');
        props.ejercicio.nombre = nombreLimpio;

        // 2. Buscamos si ya existe uno igual ignorando mayúsculas/minúsculas
        const queryLower = nombreLimpio.toLowerCase();
        const existente = exercises.value.find(
            ex => ex.nombre.trim().toLowerCase() === queryLower
        );

        if (existente) {
            // Si ya existe con otro formato de letras, lo vinculamos automáticamente para evitar duplicados
            props.ejercicio.exerciseId = existente.id;
            props.ejercicio.nombre = existente.nombre; // Opcional: lo unificamos con el formato oficial guardado
        }
    }, 200);
};

// Determinamos de forma limpia si el nombre actual coincide exactamente con un ejercicio ya guardado
const esExacto = computed(() => {
    const query = props.ejercicio.nombre?.trim().toLowerCase();
    if (!query || exercises.value.length === 0) return false;

    return exercises.value.some(
        exercise => exercise.nombre.trim().toLowerCase() === query
    );
});

// Watch simple solo para autovincular el ID si por casualidad coincide al cargar los datos
watch(
    [exercises],
    ([newExercises]) => {
        const nombreActual = props.ejercicio.nombre?.trim().toLowerCase();
        if (!nombreActual || props.ejercicio.exerciseId) return;

        if (newExercises.length > 0) {
            const encontrado = newExercises.find(
                ex => ex.nombre.trim().toLowerCase() === nombreActual
            );
            if (encontrado) {
                props.ejercicio.exerciseId = encontrado.id;
            }
        }
    },
    { immediate: true }
);

const filtrarExercises = computed(() => {
    const query = props.ejercicio.nombre?.trim().toLowerCase();
    if (!query || esExacto.value) return [];

    return exercises.value.filter(exercise =>
        exercise.nombre.toLowerCase().includes(query)
    );
});

// Agregá esto para debuguear en la consola del navegador
watchEffect(() => {
    console.log("DEBUG INPUT EXERCISE:", {
        nombre: props.ejercicio.nombre,
        exerciseId: props.ejercicio.exerciseId,
        esExacto: esExacto.value,
        totalEjerciciosStore: exercises.value.length,
        mostrarIndicador: Boolean(props.ejercicio.nombre?.trim() && !props.ejercicio.exerciseId && !esExacto.value)
    });
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
                // CORREGIDO: Usamos el exerciseStore modularizado en lugar de profileStore
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