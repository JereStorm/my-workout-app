<!-- @/views/ExerciseLibraryView.vue -->
<template>
    <div class="my-exercises">
        <div class="exercises-container mb-auto">
            <!-- HEADER -->
            <div
                class="page-header px-3 py-2 gap-5 mt-md-1 mb-5 mb-md-5 d-flex justify-content-center gap-5 align-items-center">
                <h1 class="h5 mb-0 text-uppercase titulo">Biblioteca de Ejercicios</h1>
                <div @click="abrirModalCrear" class="btn btn-outline-info p-3 rounded-circle add-btn">
                    <i class="bi bi-plus-lg text-light"></i>
                </div>
            </div>

            <!-- Buscador y Filtros -->
            <div class="mb-3 mx-5">
                <div class="section-label text-info">
                    Todos los ejercicios
                    <div class="line"></div>
                </div>
                <div class="search-box mx-auto mb-4 px-2 ">
                    <i class="bi bi-search"></i>
                    <input v-model="searchQuery" type="text" placeholder="Buscar ejercicio..." class="form-control">
                </div>
            </div>

            <div v-if="isLoading" class="loader"></div>

            <!-- Listado Agrupado por Letra (Estilo Diccionario) -->
            <div v-if="ejerciciosAgrupadosPorLetra.length > 0" class="px-3">
                <transition-group name="fade-item" tag="ul" class="px-0">
                    <div v-for="grupo in ejerciciosAgrupadosPorLetra" :key="grupo.letra" class="mb-4">

                        <!-- Separador por letra solicitado -->
                        <div class="section-label glosario fw-semibold h2 text-uppercase mb-3">
                            {{ grupo.letra }}
                            <div class="line"></div>
                        </div>

                        <!-- Fila de ejercicios para esta letra -->
                        <div class="row g-3">
                            <div v-for="exercise in grupo.ejercicios" :key="exercise.id"
                                class="col-12 col-md-6 col-lg-4 col-xl-3 px-3">
                                <div class="card-exercise h-100 px-2 py-1">
                                    <div class="card-body d-flex flex-column justify-content-between">
                                        <div
                                            class="d-flex flex-column justify-content-between align-items-start gap-2 mt-2">
                                            <div class="d-flex w-100 justify-content-between">
                                                <span class="badge d-flex align-items-center bg-opacity-10 small"
                                                    :class="exercise.categoria ? 'bg-info  text-info' : 'bg-secondary text-secondary'">
                                                    {{ exercise.categoria || 'Sin categoría' }}
                                                </span>
                                                <div class="d-flex gap-1">
                                                    <!-- Editar -->
                                                    <button type="button" class="btn btn-outline-info btn-actions"
                                                        title="Editar ejercicio" @click="editarEjercicio(exercise)">
                                                        <i class="bi bi-pencil-fill"></i>
                                                    </button>

                                                    <!-- Eliminar -->
                                                    <button type="button" class="btn btn-outline-danger btn-actions"
                                                        title="Eliminar ejercicio" @click="eliminarEjercicio(exercise)">
                                                        <i class="bi bi-trash-fill"></i>
                                                    </button>
                                                </div>
                                            </div>
                                            <h5 class="fs-6 text-start text-break mb-0">{{ exercise.nombre }}</h5>
                                        </div>
                                        <hr>
                                        <!-- Informacion del ExerciseStats -->
                                        <div
                                            class="d-flex align-items-center justify-content-between text-muted small px-1">
                                            <div class="d-flex align-items-center gap-1"
                                                title="Rutinas que usan este ejercicio">
                                                <i class="bi bi-collection text-info"></i>
                                                <span>{{ countRoutinesWithExercise(exercise, routineStore.routines)
                                                    }}
                                                    rutinas</span>
                                            </div>
                                            <div class="d-flex align-items-center gap-1"
                                                title="Récord máximo de repeticiones (RM)">
                                                <i class="bi bi-trophy text-info"></i>
                                                <span>PR: <b>{{ calculateExerciseMaxReps(exercise,
                                                    workoutStore.workouts) }}</b> reps</span>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </transition-group>

            </div>

            <!-- Estado vacío -->
            <div v-if="!isLoading && ejerciciosFiltrados.length == 0" class="text-center py-5">
                <div class="text-muted mb-3" style="font-size: 2.5rem;">
                    <i class="bi bi-journal-x"></i>
                </div>
                <h5 class="fw-semibold">No se encontraron ejercicios</h5>
                <p class="text-muted small">Intenta con otro término de búsqueda o crea uno nuevo para empezar.</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, getCurrentInstance } from 'vue';
import { useExerciseStore } from '@/stores/exerciseStore';
import { useUserStore } from '@/stores/user';
import { storeToRefs } from 'pinia';

import { countRoutinesWithExercise, calculateExerciseMaxReps } from '@/utils/exerciseStats';
import { useRoutineStore } from '@/stores/routineStore';
import { useWorkoutStore } from '@/stores/workoutStore';


const routineStore = useRoutineStore();
const workoutStore = useWorkoutStore();

// Ejemplo dentro de un computed para un ejercicio dado:
const totalRutinas = computed(() => countRoutinesWithExercise(ejercicioActual.value, routineStore.routines));
const maxRepeticiones = computed(() => calculateExerciseMaxReps(ejercicioActual.value, workoutStore.workouts));

const { proxy } = getCurrentInstance();
const exerciseStore = useExerciseStore();
const userStore = useUserStore();
const { isLoading } = storeToRefs(exerciseStore);
const searchQuery = ref('');


const busqueda = ref('');

// Obtener ejercicios globales del store
const ejercicios = computed(() => exerciseStore.getExercises || []);

// Filtrar por nombre o categoría
const ejerciciosFiltrados = computed(() => {
    const query = searchQuery.value.trim().toLowerCase();
    if (!query) return ejercicios.value;

    return ejercicios.value.filter(ex =>
        ex.nombre.toLowerCase().includes(query) ||
        (ex.categoria && ex.categoria.toLowerCase().includes(query))
    );
});

const ejerciciosAgrupadosPorLetra = computed(() => {
    const filtrados = ejerciciosFiltrados.value;
    if (!filtrados.length) return [];

    // 1. Ordenar alfabéticamente por nombre
    const ordenados = [...filtrados].sort((a, b) =>
        a.nombre.localeCompare(b.nombre, 'es', { sensitivity: 'base' })
    );

    // 2. Agrupar por la letra inicial
    const gruposMap = {};
    ordenados.forEach(ex => {
        const letra = (ex.nombre.charAt(0) || '#').toUpperCase();
        if (!gruposMap[letra]) {
            gruposMap[letra] = [];
        }
        gruposMap[letra].push(ex);
    });

    // 3. Convertir a un array de objetos ordenado por la letra
    return Object.keys(gruposMap)
        .sort((a, b) => a.localeCompare(b, 'es'))
        .map(letra => ({
            letra,
            ejercicios: gruposMap[letra]
        }));
});

// 1. Crear nuevo ejercicio desde la biblioteca
const abrirModalCrear = async () => {
    const { value: formValues } = await proxy.$swal.fire({
        title: 'Crear Nuevo Ejercicio',
        html: `
            <div class="text-start">
                <label class="form-label small text-muted mb-1">Nombre del ejercicio</label>
                <input id="swal-nombre" class="form-control mb-3" placeholder="Ej: Dominadas" autocomplete="off">
                
                <label class="form-label small text-muted mb-1">Categoría (opcional)</label>
                <input id="swal-categoria" class="form-control" placeholder="Ej: Espalda / Fuerza" autocomplete="off">
            </div>
        `,
        focusConfirm: false,
        showCancelButton: true,
        confirmButtonText: 'Crear',
        cancelButtonText: 'Cancelar',
        backdrop: true,        // <--- Soluciona el primer warning
        allowOutsideClick: () => !proxy.$swal.isLoading(), // Evita que cierren el modal haciendo click afuera mientras carga
        preConfirm: async () => {
            const nombre = document.getElementById('swal-nombre').value.trim();
            const categoria = document.getElementById('swal-categoria').value.trim();
            if (!nombre) {
                proxy.$swal.showValidationMessage('El nombre es obligatorio');
                return false;
            }

            const userId = userStore.user?.id;
            if (!userId) {
                proxy.$swal.showValidationMessage('No se encontró el usuario activo.');
                return false;
            }

            // Muestra el loader nativo de SweetAlert dentro del modal
            proxy.$swal.showLoading();

            try {
                await exerciseStore.createExercise({
                    nombre,
                    categoria,
                    fechaCreacion: new Date()
                }, userId);
                return true; // Esto permite que el modal se cierre solo al terminar con éxito
            } catch (error) {
                console.error('Error al crear ejercicio:', error);
                proxy.$swal.showValidationMessage('Error al crear el ejercicio');
                return false;
            }
        }
    });
};

// 3. Editar ejercicio
const editarEjercicio = async (exercise) => {
    // Obtenemos las categorías únicas existentes para alimentar el autocompletado
    const categoriasUnicas = [...new Set(ejercicios.value.map(ex => ex.categoria).filter(Boolean))].sort();

    await proxy.$swal.fire({
        title: 'Editar Ejercicio',
        html: `
            <div class="text-start position-relative">
                <label class="form-label small text-muted mb-1">Nombre del ejercicio</label>
                <input id="swal-input-nombre" class="form-control mb-3" value="${exercise.nombre}" autocomplete="off">
                
                <label class="form-label small text-muted mb-1">Categoría</label>
                <div class="position-relative">
                    <input id="swal-input-categoria" class="form-control" placeholder="Ej: Espalda / Fuerza" value="${exercise.categoria || ''}" autocomplete="off">
                    <div id="swal-categoria-suggestions" class="dropdown-menu w-100 shadow-sm border-0 mt-1" style="max-height: 150px; overflow-y: auto; display: none; position: absolute; z-index: 1050;"></div>
                </div>

                <p class="small text-muted mt-3 mb-0" id="feedback-span">
                    * Modificar este ejercicio actualizará su nombre y categoría en la biblioteca.
                </p>
            </div>
        `,
        didOpen: () => {
            const inputCat = document.getElementById('swal-input-categoria');
            const suggestionsBox = document.getElementById('swal-categoria-suggestions');

            // Lógica de autocompletado similar a InputExercise
            inputCat.addEventListener('input', () => {
                const query = inputCat.value.trim().toLowerCase();
                if (!query) {
                    suggestionsBox.style.display = 'none';
                    return;
                }

                const filtradas = categoriasUnicas.filter(cat =>
                    cat.toLowerCase().includes(query) && cat.toLowerCase() !== inputCat.value.trim().toLowerCase()
                );

                if (filtradas.length > 0) {
                    suggestionsBox.innerHTML = filtradas.map(cat => `
                        <button type="button" class="dropdown-item py-2 px-3 text-start" data-categoria="${cat}">
                            ${cat}
                        </button>
                    `).join('');
                    suggestionsBox.style.display = 'block';

                    // Manejar click en la sugerencia
                    suggestionsBox.querySelectorAll('.dropdown-item').forEach(item => {
                        item.addEventListener('click', () => {
                            inputCat.value = item.getAttribute('data-categoria');
                            suggestionsBox.style.display = 'none';
                        });
                    });
                } else {
                    suggestionsBox.style.display = 'none';
                }
            });

            // Ocultar sugerencias al hacer click fuera
            document.addEventListener('click', (e) => {
                if (e.target !== inputCat && !suggestionsBox.contains(e.target)) {
                    suggestionsBox.style.display = 'none';
                }
            });
        },
        focusConfirm: false,
        showCancelButton: true,
        confirmButtonText: 'Guardar cambios',
        cancelButtonText: 'Cancelar',
        allowOutsideClick: () => !proxy.$swal.isLoading(),
        preConfirm: async () => {
            const nuevoNombre = document.getElementById('swal-input-nombre').value.trim();
            const nuevaCategoria = document.getElementById('swal-input-categoria').value.trim();

            if (!nuevoNombre) {
                proxy.$swal.showValidationMessage('El nombre no puede estar vacío');
                return false;
            }

            const nombreHaCambiado = nuevoNombre !== exercise.nombre;
            const categoriaHaCambiado = nuevaCategoria !== (exercise.categoria || '');

            if (!nombreHaCambiado && !categoriaHaCambiado) {
                return true; // Si no cambió nada, cierra nomás
            }

            // Validar nombre duplicado solo si cambió el nombre
            if (nombreHaCambiado) {
                const nombreNormalizado = nuevoNombre.toLowerCase();
                const existeOtro = ejercicios.value.some(
                    ex => ex.id !== exercise.id && ex.nombre.trim().toLowerCase() === nombreNormalizado
                );

                if (existeOtro) {
                    const feedbackElem = document.getElementById("feedback-span");
                    feedbackElem.className = "small text-danger mt-3 mb-0";
                    feedbackElem.innerHTML = "El ejercicio '" + nuevoNombre + "' ya existe. Cambia a un nombre diferente.";
                    return false;
                }
            }

            // Activamos el loader
            proxy.$swal.showLoading();

            try {
                await exerciseStore.updateExercise({
                    ...exercise,
                    nombre: nuevoNombre,
                    categoria: nuevaCategoria
                });
                return true;
            } catch (error) {
                console.error('Error al actualizar:', error);
                proxy.$swal.showValidationMessage('Error al actualizar el ejercicio');
                return false;
            }
        }
    });
};

// 4. Eliminar ejercicio
const eliminarEjercicio = async (exercise) => {
    await proxy.$swal.fire({
        title: '¿Eliminar ejercicio?',
        html: `¿Estás seguro de eliminar <b>${exercise.nombre}</b> de tu biblioteca global?<br><br><span class="text-muted small">Tus rutinas e historiales pasados no se verán afectados.</span>`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar',
        confirmButtonColor: '#dc3545',
        allowOutsideClick: () => !proxy.$swal.isLoading(),
        preConfirm: async () => {
            // Activamos el loader
            proxy.$swal.showLoading();

            try {
                await exerciseStore.deleteExercise(exercise.id);
                return true;
            } catch (error) {
                console.error('Error al eliminar:', error);
                proxy.$swal.showValidationMessage('Error al eliminar el ejercicio');
                return false;
            }
        }
    });
};
</script>
<style scoped>
.my-exercises {
    padding-top: 100px;
    display: flex;
    justify-content: center;
}

.exercises-container {
    width: 100%;
    height: 100%;
    max-width: 1200px;
}

.search-box {
    position: relative;
    max-width: 500px;
}

.search-box i {
    position: absolute;
    left: 14px;
    top: 50%;
    transform: translateY(-50%);
    opacity: .5;
}

.search-box input {
    padding-left: 40px;
    background-color: transparent;
    border: 1 px solid rgba(255, 255, 255, .2);
    border-radius: 6px;
    height: 50px;
    color: white;
}

.search-box input::placeholder {
    color: #7a7a7a;
}

/* SECTION LABEL */
.section-label {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: .7rem;
    letter-spacing: .15em;
    text-transform: uppercase;
    color: cyan;
    margin-bottom: 18px;
}

.section-label.muted {
    color: #7a7a7a;
}

.section-label .line {
    height: 1px;
    flex: 1;
    background: rgba(255, 255, 255, .1);
}

.glosario {
    font-size: medium;
}

.card-exercise {
    /* La tarjeta en sí */
    position: relative;
    display: flex;
    justify-content: center;
    cursor: pointer;
    background-color: #101010;
    border: 1px solid rgba(211, 211, 211, 0.144);
    border-radius: 8px;
    width: 100%;
    transition: all 0.45s ease-in-out;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    list-style: none;
    /* Quitamos el punto de la lista aquí */
}

/* HEADER */
.page-header {
    position: sticky;
    top: 50px;
    padding: 10px 0 20px;
    backdrop-filter: blur(12px);
    z-index: 5;
}

.add-btn {
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.btn-actions {
    width: 28px;
    height: 28px;
    padding: 5px 10px;
    border-radius: 5px;
    border: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.85rem;
}

.card-exercise h3 {
    margin: 20px 5px;
}

.card-exercise:hover {
    border-color: #14a59e;
    box-shadow: 0 4px 10px rgba(8, 192, 192, 0.89);
    transform: translateY(-2px);
    background-color: rgba(26, 26, 26, 0.5);
    /* Un poco de fondo para resaltar */
}

.card-exercise:active {
    transform: scale(0.98);
    box-shadow: 0 2px 6px rgb(20, 20, 20);
}

@media (min-width: 768px) {

    .my-exercises {
        padding-top: 20px;
        padding-left: 240px;
        min-height: 100vh;
    }

    .exercises-container {
        width: 90%;
    }

    .page-header {
        top: 0;
    }


}


.fade-item-enter-active,
.fade-item-leave-active {
    transition: all 0.3s ease;
}

.fade-item-enter-from,
.fade-item-leave-to {
    opacity: 0;
    transform: scale(0.9);
}
</style>