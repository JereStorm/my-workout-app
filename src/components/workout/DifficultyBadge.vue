<!-- src/components/common/DifficultyBadge.vue -->
<template>
    <div class="badge-difficulty" :class="[getDifficultyClass(dificultad), sizeClasses]">
        <span class="text-uppercase fw-bold">{{ dificultad }}</span>
        <span class="ms-1">{{ getDifficultyIcons(dificultad) }}</span>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { getDifficultyIcons, getDifficultyClass } from '@/utils/routineStats';

const props = defineProps({
    dificultad: {
        type: String,
        required: true,
        default: 'Intermedia'
    },
    size: {
        type: String,
        default: 'md', // Tamaños disponibles: 'sm', 'md', 'lg'
        validator: (value) => ['sm', 'md', 'lg'].includes(value)
    }
});

// Propiedad computada para retornar las clases de tamaño (usando utilidades de Bootstrap)
const sizeClasses = computed(() => {
    switch (props.size) {
        case 'sm':
            return 'px-2 py-1 chico'; // Más pequeño y compacto
        case 'lg':
            return 'px-4 py-2 grande'; // Más grande y llamativo
        default:
            return 'small px-2 mediano'; // Tamaño estándar/mediano original
    }
});
</script>
<style scoped>

/* Badge Dificultad */
.badge-difficulty {
  backdrop-filter: blur(6px);
  border-radius: 999px;
  font-weight: 600;
}

.chico{
  font-size: 0.65rem;
}
.mediano{
  font-size: 0.75rem;
}
.grande{
    font-size: 0.85rem;
}

</style>