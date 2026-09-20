<!-- @/views/ExerciseLibraryView.vue -->
<template>
    <div class="my-exercises">
        <div class="exercises-container mb-auto">
            <!-- Cabecera -->
            <div
                class="page-header px-3 py-2 gap-5 mt-md-1 mb-5 mb-md-5 d-flex justify-content-center gap-5 align-items-center">
                <h1 class="h5 mb-0 text-uppercase titulo">Biblioteca de Ejercicios</h1>
                <div @click="abrirModalCrear" class="btn btn-outline-info p-3 rounded-circle add-btn">
                    <i class="bi bi-plus-lg text-light"></i>
                </div>
            </div>

            <!-- Buscador y Filtros -->
            <div class="mb-3 mx-5">
                <div class="section-label muted">
                    Todos los ejercicios
                    <div class="line"></div>
                </div>
                <div class="search-box mx-auto mb-4 px-2 ">
                    <i class="bi bi-search"></i>
                    <input v-model="searchQuery" type="text" placeholder="Buscar ejercicio..." class="form-control">
                </div>
            </div>

            <div v-if="isLoading || isLocalLoading" class="loader"></div>

            <!-- Listado Agrupado por Letra (Estilo Diccionario) -->
            <div v-if="ejerciciosAgrupadosPorLetra.length > 0" class="px-5">
                <div v-for="grupo in ejerciciosAgrupadosPorLetra" :key="grupo.letra" class="mb-4">

                    <!-- Separador por letra solicitado -->
                    <div class="section-label muted fw-bold text-uppercase mb-3">
                        {{ grupo.letra }}
                        <div class="line"></div>
                    </div>

                    <!-- Fila de ejercicios para esta letra -->
                    <div class="row g-3">
                        <div v-for="exercise in grupo.ejercicios" :key="exercise.id"
                            class="col-12 col-md-6 col-lg-4 col-xl-3">
                            <div class="card-exercise h-100 px-2 py-1">
                                <div class="card-body d-flex flex-column justify-content-between">
                                    <div class="d-flex justify-content-between align-items-center gap-2 mt-2">
                                        <h5 class="fs-6 text-start text-break mb-0">{{ exercise.nombre }}</h5>
                                        <span
                                            class="badge bg-secondary bg-opacity-10 text-secondary border border-secondary-subtle small">
                                            {{ exercise.categoria || 'Sin categoría' }}
                                        </span>
                                    </div>
                                    <hr>
                                    <!-- Botones de Acción -->
                                    <div class="d-flex align-items-center justify-content-center gap-2">
                                        <!-- Ver Detalle -->
                                        <button type="button" class="btn btn-outline-secondary btn-actions"
                                            title="Ver detalles" @click="showExerciseDetail(exercise.id)">
                                            <i class="bi bi-eye-fill"></i>
                                        </button>

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
                            </div>
                        </div>
                    </div>

                </div>
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
import { useProfileStore } from '@/stores/profile';
import { storeToRefs } from 'pinia';

const { proxy } = getCurrentInstance();
const profileStore = useProfileStore();
const { isLoading } = storeToRefs(profileStore);
const searchQuery = ref('');


const busqueda = ref('');

// Obtener ejercicios globales del store
const ejercicios = computed(() => profileStore.getUserExercises || []);

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
        preConfirm: () => {
            const nombre = document.getElementById('swal-nombre').value.trim();
            const categoria = document.getElementById('swal-categoria').value.trim();
            if (!nombre) {
                proxy.$swal.showValidationMessage('El nombre es obligatorio');
            }
            return { nombre, categoria };
        }
    });

    if (formValues) {
        try {
            await profileStore.addExercise({
                nombre: formValues.nombre,
                categoria: formValues.categoria,
                fechaCreacion: new Date()
            });

        } catch (error) {
            console.error('Error al crear ejercicio:', error);

        }
    }
};

// 2. Ver Detalle (Sección 3 opcional / Modal informativo rápido)
const showExerciseDetail = (id) => router.push({ name: 'DetailExercise', query: { id } });


// 3. Editar ejercicio (Reutilizando la lógica del modal de SweetAlert2)
const editarEjercicio = async (exercise) => {
    const { value: nuevoNombre } = await proxy.$swal.fire({
        title: 'Editar Ejercicio',
        html: `
            <div class="text-start">
                <label class="form-label small text-muted mb-1">Nombre del ejercicio</label>
                <input id="swal-input-nombre" class="form-control text-info bg-transparent border-bottom" value="${exercise.nombre}" autocomplete="off">
                <p class="small text-muted mt-2 mb-0">
                    * Modificar este ejercicio actualizará su nombre en la biblioteca global.
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

    if (nuevoNombre && nuevoNombre !== exercise.nombre) {
        try {
            await profileStore.updateExercise({
                ...exercise,
                nombre: nuevoNombre
            });


        } catch (error) {
            console.error('Error al actualizar:', error);
        }
    }
};

// 4. Eliminar ejercicio (Con la tranquilidad del enfoque Snapshot)
const eliminarEjercicio = async (exercise) => {
    const result = await proxy.$swal.fire({
        title: '¿Eliminar ejercicio?',
        html: `¿Estás seguro de eliminar <b>${exercise.nombre}</b> de tu biblioteca global?<br><br><span class="text-muted small">Tus rutinas e historiales pasados no se verán afectados.</span>`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar',
        confirmButtonColor: '#dc3545'
    });

    if (result.isConfirmed) {
        try {
            await profileStore.deleteExercise(exercise.id);

        } catch (error) {
            console.error('Error al eliminar:', error);

        }
    }
};
</script>
<style scoped>
.my-exercises {
    padding-top: 100px;
    display: flex;
    justify-content: center;
}

.exercises-container {
    width: 90%;
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

.card-exercise {
    /* La tarjeta en sí */
    position: relative;
    display: flex;
    justify-content: center;
    cursor: pointer;
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