<!--profile/ProfilePage.vue-->
<template>
    <div class="contenedor mt-md-5">
        <!-- Titulo de la page -->
        <h1 class="mb-3 mb-md-5 h5 text-uppercase titulo">Perfil del Atleta</h1>

        <!-- Loader -->
        <div v-if="profileStore.isLoading" class="loader">
        </div>

        <div v-else>
            <ProfileHeader :nickname="profile?.nickname" :level-info="levelInfo" @update:nickname="guardarNickname" />

            <ProfileStats :stats="stats" />

            <WeeklyGoalCard :workouts="workouts" :weekly-goal="profile?.weeklyGoal"
                @update:goal="actualizarMetaSemanal" />
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useProfileStore } from '@/stores/profile'
import { useWorkoutStore } from '@/stores/workoutStore'
import ProfileHeader from '../../profile/ProfileHeader.vue'
import ProfileStats from '../../profile/ProfileStats.vue'
import WeeklyGoalCard from '../../profile/WeeklyGoalCard.vue'
import { getLevelInfo } from '@/utils/profileStats.js' // Ajusta la ruta a tu archivo de utils si es necesario

const profileStore = useProfileStore();
const workoutStore = useWorkoutStore();

const profile = computed(() => profileStore.profile)
const stats = computed(() => workoutStore.userStats)
const workouts = computed(() => workoutStore.workouts)

// Computamos la info de nivel de forma reactiva basándonos en el volumen total de las stats
const levelInfo = computed(() => {
    const totalVolume = stats.value?.totalVolume || 0;
    return getLevelInfo(totalVolume)
})

const guardarNickname = async (newNickname) => {
    if (!newNickname) return

    try {
        await profileStore.setNickname(newNickname)
        // El store ya maneja su propia notificación/estado de éxito
    } catch (err) {
        console.error('Error al guardar el nombre:', err)
        // El manejo de error también recae o se reporta desde el store
    }
}

const actualizarMetaSemanal = async (newGoal) => {
    try {
        await profileStore.setWeeklyGoal(newGoal)
        // Como el store maneja internamente las notificaciones (gracias al notificationStore en el service), 
        // la alerta de éxito aparecerá automáticamente en pantalla.
    } catch (err) {
        console.error('No se pudo actualizar la meta', err)
    }
}
</script>


<style scoped>
#email {
    border: none;
    color: #868686;
}

#username {
    border: none;
    border-bottom: 1px solid rgb(228, 228, 228);
    border-radius: 0px;
    height: 40px;
    animation: blink 2s infinite ease;
}

.contenedor {
    padding-top: 80px;
    width: 100%;
    height: 100%;
    max-width: 700px;
    margin-bottom: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.info-container {
    margin-top: 1rem;
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 20px;
}

.list-group-item {
    background-color: #121212;
    border-color: #444;
    color: #fff;
}

h2 {
    margin-bottom: 1rem;
}

.btn-guardar {
    height: 40px;
}

@media only screen and (min-width: 768px) {
    .contenedor {
        padding-left: 240px;
        margin: 0 auto;
        margin-bottom: auto;
        padding-top: 0px;
    }
}
</style>