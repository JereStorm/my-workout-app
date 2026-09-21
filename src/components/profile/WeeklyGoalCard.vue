<!-- profile/WeeklyGoalCard.vue -->
<template>
    <div class="card stat-card bg-transparent h-100 p-3 mb-4 mx-2">
        <div class="d-flex justify-content-between align-items-center mb-2">
            <span class="text-secondary small text-uppercase fw-bold">
                <i class="bi bi-calendar-check me-1"></i> Objetivo Semanal
            </span>
            <button class="btn btn-sm btn-outline-secondary py-0 px-2" @click="isEditing = !isEditing">
                <i class="bi" :class="isEditing ? 'bi-x' : 'bi-gear'"></i>
            </button>
        </div>

        <!-- Vista Normal / Progreso -->
        <div v-if="!isEditing">
            <div class="d-flex justify-content-between align-items-baseline mb-1">
                <h3 class="text-light mb-0 fw-bold">
                    {{ progress.current }} <span class="fs-6 text-muted">/ {{ progress.goal }}</span>
                </h3>
                <span class="text-info small fw-bold">{{ progress.percentage }}%</span>
            </div>

            <!-- Barra de progreso -->
            <div class="progress bg-dark" style="height: 8px;">
                <div 
                    class="progress-bar bg-info" 
                    role="progressbar" 
                    :style="{ width: `${progress.percentage}%` }"
                    :aria-valuenow="progress.current" 
                    aria-valuemin="0" 
                    :aria-valuemax="progress.goal"
                ></div>
            </div>
            <small class="text-muted mt-2 d-block" style="font-size: 0.75rem;">
                {{ progress.current >= progress.goal ? '¡Objetivo cumplido esta semana! 🔥' : '¡A por ellos Atleta!' }}
            </small>
        </div>

        <!-- Vista de Edición de Meta -->
        <div v-else class="d-flex gap-2 align-items-center mt-1">
            <input 
                type="number" 
                v-model.number="tempGoal" 
                min="1" 
                max="7" 
                class="form-control form-control-sm bg-transparent text-light border-secondary text-center" 
            />
            <button class="btn btn-sm btn-info text-dark fw-bold" @click="saveGoal">Guardar</button>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { getWeeklyProgress } from '@/utils/profileStats.js'

const props = defineProps({
    workouts: {
        type: Array,
        default: () => []
    },
    weeklyGoal: {
        type: Number,
        default: 1
    }
})

const emit = defineEmits(['update:goal'])

const isEditing = ref(false)
const tempGoal = ref(props.weeklyGoal)

// Usando la función de utilidad que definimos
const progress = computed(() => getWeeklyProgress(props.workouts, props.weeklyGoal))

const saveGoal = () => {
    if (tempGoal.value < 1 || tempGoal.value > 7) return
    emit('update:goal', tempGoal.value)
    isEditing.value = false
}
</script>