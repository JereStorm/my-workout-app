<template>
    <div class="routine-detail-page">
        <h1 class="my-md-5">Detalle Rutina <i class="bi bi-clipboard2-fill"></i></h1>

        <div v-if="isLoading" class="loader"></div>

        <div v-else>
            <RoutineDetail :rutina="rutina" />
            <ul class="mini-menu pb-3">
                <li @click.stop="registrarEntrenamiento(rutina)">
                    <i class="bi bi-file-earmark-plus"></i>
                </li>
                <li @click.stop="editarRutina(rutina)">
                    <i class="bi bi-pencil-square"></i>
                </li>
                <li @click.stop="eliminarRutina(rutina.id)">
                    <i class="bi bi-trash3"></i>
                </li>
                <li @click.stop="copiarRutina(rutina)">
                    <i class="bi bi-copy"></i>
                </li>
            </ul>

        </div>
        <div class="mt-5" v-if="!isLoading && !rutina">
            <h5>Rutina guardadas aún.</h5>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useProfileStore } from '@/stores/profile';
import RoutineDetail from '@/components/RoutineDetail.vue';
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


/**
 * Elimina una rutina tras confirmación del usuario.
 * @param {string} rutinaId 
 */
async function eliminarRutina(rutinaId) {
    if (!confirm('¿Estás seguro de que querés eliminar esta rutina?')) {
        console.log("Eliminar cancelado")
        return;
    }
    try {
        const index = rutinasMostradas.value.indexOf(rutinaId);
        if (index !== -1) {
            rutinasMostradas.value.splice(index, 1);
        }

        await profileStore.deleteRutina(rutinaId);

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
    isLocalLoading.value = true
    const copia = {
        ...JSON.parse(JSON.stringify(rutina)),
        nombre: rutina.nombre + ' (copia)'
    };
    delete copia.id;
    delete copia.fechaCreacion;
    try {
        const docRef = await profileStore.createRutinaFirebase(copia);
        isLocalLoading.value = false;
        expandirRutina(docRef.id);
    } catch (err) {
        console.error('Error copiando rutina:', err);
        isLocalLoading.value = false;
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
    padding-top: 80px;
    padding-right: 0px;
    display: flex;
    flex-direction: column;
}

.mini-menu {
    display: flex;
    list-style: none;
    gap: 20px;
    justify-content: center;
    padding-left: 0;
}

.mini-menu li {
    cursor: pointer;
    font-size: 1.3rem;
    transition: all 0.3s ease;
}

.mini-menu li:hover {
    color: aqua;
    font-weight: bold;
}

@media (min-width: 768px) {
    .routine-detail-page {
        padding-left: 160px;
        padding-top: 20px;
    }
}
</style>