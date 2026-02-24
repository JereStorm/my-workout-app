<template>
    <div class="my-workouts">
        <div class="routines-container mb-auto">
            <!-- HEADER -->
            <div
                class="page-header px-3 py-2 gap-5 mt-5 mt-md-1 mb-3 mb-md-5 d-flex justify-content-center gap-5 align-items-center">
                <h1 class="h5 mb-0 text-uppercase titulo">Biblioteca de Rutinas</h1>
                <RouterLink to="/dashboard/form-routine" class="btn btn-outline-info p-3 rounded-circle add-btn">
                    <i class="bi bi-plus-lg text-light"></i>
                </RouterLink>
            </div>

            <div class="search-container mb-4 mx-5">
                <div class="input-group ">
                    <span class="input-group-text bg-dark border-secondary text-secondary">
                        <i class="bi bi-search"></i>
                    </span>
                    <input v-model="searchQuery" type="text" class="form-control text-white border-secondary"
                        placeholder="Buscar rutina por nombre..." />
                </div>
            </div>

            <div v-if="!isLoading"
                class="d-flex justify-content-center justify-content-md-between align-items-center mx-md-5 mb-3">
                <div class="d-flex align-items-baseline text-start mx-md-5">
                    <label for="orderBy" class="me-2">Ordenar por</label>
                    <select v-model="order" id="orderBy" class="p-2 m-2 rounded bg-dark text-white">
                        <option value="fechaCreacionDesc">Más Reciente</option>
                        <option value="fechaCreacionAsc">Más Antigua</option>
                        <option value="asc">De más fácil</option>
                        <option value="desc">De más difícil</option>
                    </select>
                </div>

                <div class="view-toggle rounded mx-md-5">
                    <button @click="viewMode = 'grid'"
                        :class="['btn btn-sm', viewMode === 'grid' ? 'btn-primary' : 'text-white']">
                        <i class="bi bi-grid-fill"></i>
                    </button>
                    <button @click="viewMode = 'list'"
                        :class="['btn btn-sm', viewMode === 'list' ? 'btn-primary' : 'text-white']">
                        <i class="bi bi-list-ul"></i>
                    </button>
                </div>
            </div>

            <div v-if="isLoading || isLocalLoading" class="loader"></div>

            <div v-if="!isLoading && sortedRoutines.length > 0">
                <transition-group name="fade-item" tag="ul" :class="['routine-resumen', viewMode]">
                    <component :is="viewMode === 'grid' ? RoutineCard : RoutineListItem"
                        v-for="routine in sortedRoutines" :key="routine.id" :routine="routine" @click-card="showRoutine"
                        @toggle-fav="toggleFavorito" @edit="editarRutina" @delete="confirmarEliminar"
                        @copy="copiarRutina" @register="registrarEntrenamiento" />
                </transition-group>
            </div>

            <div v-else-if="!isLoading" class="text-center mt-5 text-secondary">
                <h5>No hay rutinas guardadas aún.</h5>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useProfileStore } from '@/stores/profile';
import { useRouter, RouterLink } from 'vue-router';
import { storeToRefs } from 'pinia';
import { confirmAction } from '@/utils/confirm';
import { getCurrentInstance } from 'vue';

// Importación de ambos componentes
import RoutineCard from '@/components/workout/RoutineCard.vue';
import RoutineListItem from '@/components/workout/RoutineListItem.vue';

const { proxy } = getCurrentInstance();
const router = useRouter();
const profileStore = useProfileStore();
const { isLoading } = storeToRefs(profileStore);

const viewMode = ref('grid'); // Estado para controlar la vista
const isLocalLoading = ref(false);
const order = ref('fechaCreacionDesc');
const searchQuery = ref('');

const rawRoutines = computed(() => profileStore.getUserRoutines);

const sortedRoutines = computed(() => {
    let filtered = [...rawRoutines.value];
    if (searchQuery.value) {
        filtered = filtered.filter(r => r.nombre.toLowerCase().includes(searchQuery.value.toLowerCase()));
    }
    const niveles = { 'Muy facil': 1, 'Facil': 2, 'Intermedia': 3, 'Dificil': 4, 'Muy dificil': 5 };
    return filtered.sort((a, b) => {
        if (a.favorita && !b.favorita) return -1;
        if (!a.favorita && b.favorita) return 1;
        if (order.value.includes('fechaCreacion')) {
            return order.value === 'fechaCreacionDesc'
                ? new Date(b.fechaCreacion) - new Date(a.fechaCreacion)
                : new Date(a.fechaCreacion) - new Date(b.fechaCreacion);
        }
        const na = niveles[a.dificultad] || 0;
        const nb = niveles[b.dificultad] || 0;
        return order.value === 'asc' ? na - nb : nb - na;
    });
});

// Handlers (se mantienen igual porque los eventos son idénticos)
const showRoutine = (id) => router.push({ name: 'DetailRoutine', query: { id } });
const editarRutina = (r) => router.push({ name: 'FormRoutine', query: { id: r.id } });
const registrarEntrenamiento = (r) => router.push({ name: 'RegisterWorkout', query: { id: r.id } });
const toggleFavorito = (r) => profileStore.toggleFavorite(r.id, r.favorita);
const confirmarEliminar = async (r) => {
    const ok = await confirmAction(proxy.$swal, { title: '¿Eliminar rutina?', text: 'No se podrá recuperar' });
    if (ok) await profileStore.deleteRoutine(r.id);
};
const copiarRutina = async (r) => {
    isLocalLoading.value = true;
    try {
        const copia = { ...JSON.parse(JSON.stringify(r)), nombre: `${r.nombre} (copia)` };
        delete copia.id; delete copia.fechaCreacion;
        await profileStore.createRoutine(copia);
    } finally { isLocalLoading.value = false; }
};
</script>

<style scoped>
.my-workouts {
    padding-top: 100px;
    display: flex;
    justify-content: center;
}

.routines-container {
    width: 90%;
    height: 100%;
    max-width: 1200px;
}

.routine-resumen {
    padding: 0;
    list-style: none;
    display: flex;
    gap: 20px;
    transition: all 0.3s;
}

/* HEADER */
.page-header {
    position: sticky;
    top: 0;
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

/* Layout dinámico */
.grid {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
}

.list {
    flex-direction: column;
    align-items: center;
}

.view-toggle .btn-primary {
    background-color: #00d4ff;
    border-color: #00d4ff;
    color: #0a1114;
}

.search-container {
    display: flex;
    justify-content: center;
}

.search-container .input-group {
    max-width: 500px;
}

@media (min-width: 768px) {
    .my-workouts {
        padding-top: 20px;
        padding-left: 240px;
        min-height: 100vh;
    }

    .grid :deep(.routine-card) {
        width: 45% !important;
        max-width: 500px;
    }

    .list :deep(.routine-list-item) {
        max-width: 900px;
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