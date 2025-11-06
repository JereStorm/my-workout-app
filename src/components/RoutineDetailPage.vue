<template>
    <div class="routine-detail-page">
        <div v-if="!rutina && isLoading">Cargando...</div>
        <div v-else-if="!rutina">Rutina no encontrada.</div>
        <RoutineDetail v-else :rutina="rutina" />
    </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useProfileStore } from '@/stores/profile';
import RoutineDetail from '@/components/RoutineDetail.vue';

const route = useRoute();
const router = useRouter();
const profileStore = useProfileStore();
const isLoading = ref(true);

const id = computed(() => route.params.id || route.query.id);

const rutina = computed(() => {
    return profileStore.getUserRoutines?.find(r => r.id === id.value);
});

onMounted(async () => {
    // Si no está en el store, puedes pedirla al backend (si tienes acción)
    if (!rutina.value) {
        try {
            // ejemplo: si tienes una acción para cargar una rutina concreta
            if (profileStore.fetchRutinaById) {
                await profileStore.fetchRutinaById(id.value);
            } else {
                // si no, carga todas las rutinas (opcional)
                if (profileStore.fetchUserRoutines) await profileStore.fetchUserRoutines();
            }
        } catch (e) {
            console.error(e);
        }
    }
    // si aún no existe, podrías redirigir o mostrar mensaje
    isLoading.value = false;
    console.log(rutina.value)
});
</script>

<style scoped>
.routine-detail-page {
    padding-top: 20px;
    padding-right: 0px;
    padding-left: 160px;
}
</style>