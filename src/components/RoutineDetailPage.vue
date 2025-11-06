<template>
    <div class="routine-detail-page">
        <h1 class="my-md-5">Detalle Rutina <i class="bi bi-clipboard2-fill"></i></h1>

        <div v-if="isLoadingInfo" class="loader"></div>
        <div v-else-if="!rutina && !isLoadingInfo">Rutina no encontrada.</div>
        <RoutineDetail v-else :rutina="rutina" />
    </div>
</template>

<script setup>
import { computed, onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useProfileStore } from '@/stores/profile';
import RoutineDetail from '@/components/RoutineDetail.vue';

const route = useRoute();
const profileStore = useProfileStore();

// igual que en ProfilePage: isLoadingInfo inicial true
const isLoadingInfo = ref(true);

const id = computed(() => route.params.id || route.query.id);

const rutina = computed(() => {
    return profileStore.getUserRoutines?.find(r => r.id === id.value) || null;
});

async function loadRoutine() {
    // sin id, no hay nada que buscar → no loader
    if (!id.value) {
        isLoadingInfo.value = false;
        return;
    }

    // arrancamos loader: permanecerá true hasta que:
    //  1) la rutina aparezca en el store (watch sobre `rutina`) o
    //  2) terminemos la petición y comprobemos que no existe
    isLoadingInfo.value = true;

    try {
        if (typeof profileStore.fetchRutinaById === 'function') {
            await profileStore.fetchRutinaById(id.value);
        } else if (typeof profileStore.fetchUserRoutines === 'function') {
            await profileStore.fetchUserRoutines();
        }
    } catch (e) {
        console.error('Error cargando rutina:', e);
        // en caso de error dejamos que el componente muestre "no encontrada"
    }

    // después de la carga, si la rutina ya está en el store el watcher la detectará
    // Si no está, quitamos el loader para mostrar "no encontrada"
    if (!rutina.value) {
        isLoadingInfo.value = false;
    }
}

onMounted(async () => {
    // si ya está en el store, cancelar loader inmediatamente (igual que ProfilePage)
    if (rutina.value) {
        isLoadingInfo.value = false;
        return;
    }
    await loadRoutine();
});

// reintenta cuando cambia el id de la ruta
watch(id, async (newId, oldId) => {
    if (newId !== oldId) {
        await loadRoutine();
    }
});

// si la rutina aparece/actualiza en el store, aseguramos isLoadingInfo=false
watch(
    rutina,
    (val) => {
        if (val) isLoadingInfo.value = false;
    },
    { immediate: true }
);
</script>

<style scoped>
.routine-detail-page {
    padding-top: 80px;
    padding-right: 0px;
    display: flex;
    flex-direction: column;
}

@media (min-width: 768px) {
    .routine-detail-page {
        padding-left: 160px;
        padding-top: 20px;
    }
}
</style>