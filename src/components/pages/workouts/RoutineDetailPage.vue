<template>
    <div class="routine-detail-page">
        <h1 class="titulo mb-3 mb-md-5 h5 text-uppercase mt-3 pt-2">Detalle Rutina</h1>



        <div v-if="isLoading" class="loader"></div>

        <div v-else>
            <RoutineDetail :rutina="rutinaLocal" />
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
                    <span><i class="bi bi-copy color-principal"></i>Copiar</span>
                </li>
            </ul>

        </div>
        <div class="mt-5" v-if="!isLoading && !rutinaLocal">
            <h5>Rutina guardadas aún.</h5>
        </div>
    </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useProfileStore } from '@/stores/profile';
import RoutineDetail from '@/components/workout/RoutineDetail.vue';
import { storeToRefs } from 'pinia';

const route = useRoute();
const router = useRouter();

// instancia el store
const profileStore = useProfileStore();

const { isLoading } = storeToRefs(profileStore);
const id = computed(() => route.params.id || route.query.id);

const rutina = computed(() => {
    return profileStore.getUserRoutines?.find(r => r.id === id.value) || null;
});

// Mantener una copia local (deep copy) para evitar que la UI quede sin datos
const rutinaLocal = ref(null);
const deepCopy = (v) => v ? JSON.parse(JSON.stringify(v)) : null;

// Solo actualizar la copia cuando la rutina exista; si pasa a null por borrado,
// mantenemos la copia hasta redirigir.
watch(rutina, (val) => {
    if (val) rutinaLocal.value = deepCopy(val);
}, { immediate: true });


/**
 * Elimina una rutina tras confirmación del usuario.
 * @param {string} rutinaId 
 */
async function eliminarRutina(rutinaId) {
    if (!confirm('¿Estás seguro de que querés eliminar esta rutina?')) {
        console.log("Eliminar cancelado")
        return;
    }
    // usar id seguro (parámetro o copia local)
    const idToDelete = rutinaId || rutinaLocal.value?.id;
    if (!idToDelete) return;
    try {
        await profileStore.deleteRutina(idToDelete);
        router.push({ name: 'MyWorkouts' });
    } catch (error) {
        console.log("Error al borrar la rutina.", error);
    }
}

/**
 * Prepara el formulario para editar una rutina existente.
 * @param {Object} rutina 
 */
function editarRutina(rutina) {
    router.push({
        name: 'FormRoutine',
        query: { id: rutina.id }
    });
}

/**
 * Copia una rutina y la agrega al inicio de la lista.
 * @param {Object} rutina 
 */
async function copiarRutina(rutina) {
    isLoading.value = true
    const copia = {
        ...JSON.parse(JSON.stringify(rutina)),
        nombre: rutina.nombre + ' (copia)'
    };
    delete copia.id;
    delete copia.fechaCreacion;
    try {
        const docRef = await profileStore.createRutinaFirebase(copia);
        isLoading.value = false;
        router.push({
            name: 'DetailRoutine',
            query: { id: docRef.id }
        });
    } catch (err) {
        console.error('Error copiando rutina:', err);
        isLoading.value = false;
    }
}
const registrarEntrenamiento = (rutina) => {
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