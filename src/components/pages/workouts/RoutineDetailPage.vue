<template>
    <div class="routine-detail-page">
        <h1 class="titulo mb-3 mb-md-5 h5 text-uppercase mt-3 pt-2">Detalle Rutina</h1>

        <div v-if="!rutinaLocal && isLoading" class="loader"></div>

        <div v-if="rutinaLocal">
            <RoutineDetail :rutina="rutinaLocal" />
        </div>
        <div v-if="rutinaLocal && isLoading" class="loader"></div>

        <ul class="mini-menu pb-3 mt-3">
            <li @click.stop="registrarEntrenamiento(rutinaLocal)">
                <span><i class="bi bi-file-earmark-plus color-principal"></i>Entrenar</span>
            </li>
            <li @click.stop="editarRutina(rutinaLocal)">
                <span><i class="bi bi-pencil-square color-principal"></i>Editar</span>
            </li>
            <li @click.stop="eliminarRutina(rutinaLocal?.id)">
                <span><i class="bi bi-trash3 color-principal"></i>Eliminar</span>
            </li>
            <li @click.stop="copiarRutina(rutinaLocal)">
                <span><i class="bi bi-copy color-principal"></i>Clonar</span>
            </li>
        </ul>
        <div class="mt-5" v-if="!isLoading && !rutinaLocal">
            <h5>No hay rutina guardada o no se encuentra.</h5>
        </div>
    </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useRoutineStore } from '@/stores/routineStore';
import { confirmAction } from '@/utils/confirm';
import { getCurrentInstance } from 'vue';
import RoutineDetail from '@/components/workout/RoutineDetail.vue';
import { storeToRefs } from 'pinia';

const route = useRoute();
const router = useRouter();
const { proxy } = getCurrentInstance();

// Usamos el store modularizado de rutinas
const routineStore = useRoutineStore();

const { isLoading, routines } = storeToRefs(routineStore);
const id = computed(() => route.params.id || route.query.id);

const rutina = computed(() => {
    return routines.value?.find(r => r.id === id.value) || null;
});

// Mantener una copia local (deep copy) para evitar que la UI quede sin datos
const rutinaLocal = ref(null);
const deepCopy = (v) => v ? JSON.parse(JSON.stringify(v)) : null;

// Solo actualizar la copia cuando la rutina exista
watch(rutina, (val) => {
    if (val) rutinaLocal.value = deepCopy(val);
}, { immediate: true });

/**
 * Elimina una rutina tras confirmación del usuario.
 */
async function eliminarRutina(rutinaId) {
    const ok = await confirmAction(proxy.$swal, {
        title: '¿Seguro deseas eliminar esta rutina?',
        text: 'Los datos se perderán y no podrán recuperarse.'
    })
    if (!ok) return;

    isLoading.value = true;
    
    const idToDelete = rutinaId || rutinaLocal.value?.id;
    if (!idToDelete) return;
    
    try {
        await routineStore.deleteRoutine(idToDelete);
        isLoading.value = false
        router.push({ name: 'MyWorkouts' });
    } catch (error) {
        console.log("Error al borrar la rutina.", error);
    }
}

/**
 * Prepara el formulario para editar una rutina existente.
 */
function editarRutina(rutina) {
    if (!rutina?.id) return;
    router.push({
        name: 'FormRoutine',
        query: { id: rutina.id }
    });
}

/**
 * Copia una rutina y la agrega al inicio de la lista.
 */
async function copiarRutina(rutina) {
    if (!rutina) return;
    isLoading.value = true;
    const copia = {
        ...JSON.parse(JSON.stringify(rutina)),
        nombre: rutina.nombre + ' (copia)',
        fechaCreacion: new Date().toISOString()
    };
    delete copia.id;
    try {
        // En lugar de mutar isLoading, dejamos que el store lo maneje o lo controlamos de forma local si deseas
        const newId = await routineStore.createRoutine(copia, copia.idUser);
        isLoading.value = false
        router.push({
            name: 'DetailRoutine',
            query: { id: newId }
        });
    } catch (err) {
        console.error('Error copiando rutina:', err);
    }
}

const registrarEntrenamiento = (rutina) => {
    if (!rutina?.id) return;
    router.push({
        name: 'RegisterWorkout',
        query: { id: rutina.id }
    });
}
</script>

<style scoped>
.routine-detail-page {
    padding-right: 0px;
    display: flex;
    flex-direction: column;
}

.mini-menu {
    display: flex;
    list-style: none;
    gap: 10px;
    justify-content: center;
    padding-left: 0;
}

.mini-menu li span {
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #ffffff;
    cursor: pointer;
    padding: 5px 1rem;
    border-radius: 8px;
    transition: all 0.3s ease;
    font-weight: 400;
}

.mini-menu li span:hover {
    background-color: rgba(0, 255, 255, 0.1);
    color: #00ffff;
    text-shadow: 0 0 5px #00ffff;
    transform: translateY(-2px);
}

@media (min-width: 768px) {
    .routine-detail-page {
        padding-left: 240px;
        padding-top: 20px;
    }

    .mini-menu {
        gap: 20px;
    }
}
</style>