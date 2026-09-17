<!-- src/components/common/DifficultyBadge.vue -->
<template>
    <div class="badge-difficulty small" :class="getDifficultyClass(dificultad)">
        <small class="text-uppercase fw-bold">{{ dificultad }}</small>
        <span class="ms-1">{{ getDifficultyIcons(dificultad) }}</span>
    </div>
</template>

<script setup>
import { getDifficultyIcons, getDifficultyClass } from '@/utils/routineStats';

defineProps({
    dificultad: {
        type: String,
        required: true,
        default: 'Intermedia'
    }
});
</script>