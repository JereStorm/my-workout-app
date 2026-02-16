<template>
    <li class="routine-card" @click="$emit('click-card', routine.id)">
        <div class="absolute d-flex justify-content-between top-2 left-0 text-sm text-gray-500">
            <h6>{{ routine.bloques?.length || 0 }} Bloques</h6>
            <h6>{{ totalSeries }} Series</h6>
        </div>

        <div class="text-center font-weight-medium my-2">
            <h3 class="ellipsis" :title="routine.nombre">{{ routine.nombre }}</h3>
        </div>

        <div class="d-flex justify-content-between align-items-center text-gray-700">
            <h6 class="mb-0 difficulty-container">
                <span class="difficulty-icons">{{ renderDifficulty }}</span>
                <span class="difficulty-text">({{ routine.dificultad }})</span>
            </h6>

            <div class="dropdown-menu-container" @click.stop>
                <span class="me-1" @click.stop="$emit('toggle-fav', routine)" title="Favorita">
                    <i class="bi fs-sm" :class="routine.favorita ? 'bi-heart-fill text-danger' : 'bi-heart'"></i>
                </span>

                <span @click.stop="menuAbierto = !menuAbierto">
                    <i class="bi bi-three-dots-vertical"></i>
                </span>

                <transition name="fade-item">
                    <ul v-if="menuAbierto" class="mini-menu">
                        <li @click.stop="handleAction('register')"><i class="bi bi-file-earmark-plus"></i></li>
                        <li @click.stop="handleAction('edit')"><i class="bi bi-pencil-square"></i></li>
                        <li @click.stop="handleAction('delete')"><i class="bi bi-trash3"></i></li>
                        <li @click.stop="handleAction('copy')"><i class="bi bi-copy"></i></li>
                    </ul>
                </transition>
            </div>
        </div>
    </li>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

const props = defineProps({
    routine: Object,
});

const emit = defineEmits(['click-card', 'toggle-fav', 'edit', 'delete', 'copy', 'register']);

const menuAbierto = ref(false);

const totalSeries = computed(() =>
    (props.routine.bloques || []).reduce((sum, b) => sum + (b.series || 1), 0)
);

const renderDifficulty = computed(() => {
    const niveles = { 'Muy facil': 1, 'Facil': 2, 'Intermedia': 3, 'Dificil': 4, 'Muy dificil': 5 };
    return '⚡️'.repeat(niveles[props.routine.dificultad] || 0);
});

const handleAction = (action) => {
    menuAbierto.value = false;
    emit(action, props.routine);
};

// Cerrar menú al hacer clic fuera
const closeMenu = () => menuAbierto.value = false;
onMounted(() => window.addEventListener('click', closeMenu));
onUnmounted(() => window.removeEventListener('click', closeMenu));
</script>

<style scoped>
/* La tarjeta en sí */
.routine-card {
    position: relative;
    cursor: pointer;
    border: 1px solid rgba(211, 211, 211, 0.527);
    padding: 20px 10px;
    border-radius: 8px;
    width: 100%;
    transition: all 0.45s ease-in-out;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    list-style: none;
    /* Quitamos el punto de la lista aquí */
}

.routine-card h3 {
    margin: 20px 5px;
}

.routine-card:hover {
    border-color: #14a59e;
    box-shadow: 0 4px 10px rgba(8, 192, 192, 0.89);
    transform: translateY(-2px);
    background-color: rgba(26, 26, 26, 0.5);
    /* Un poco de fondo para resaltar */
}

.routine-card:active {
    transform: scale(0.98);
    box-shadow: 0 2px 6px rgb(20, 20, 20);
}

/* Dificultad e iconos */
.difficulty-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 18px;
}

.difficulty-text {
    font-size: 14px;
}

.ellipsis {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    display: inline-block;
    width: 90%;
}

/* Menú de acciones (Mini Menu) */
.dropdown-menu-container {
    position: relative;
    display: flex;
    align-items: baseline;
    justify-content: center;
}

.dropdown-menu-container>span {
    cursor: pointer;
    font-size: 20px;
    padding: 5px;
    transition: color 0.3s;
}

.dropdown-menu-container>span:hover {
    color: aqua;
}

.mini-menu {
    position: absolute;
    top: -96px;
    right: 0;
    background-color: #1f1f1f;
    border: 1px solid #555;
    border-radius: 6px;
    list-style: none;
    padding: 5px 0;
    z-index: 550;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.mini-menu li {
    padding: 6px 15px;
    cursor: pointer;
    white-space: nowrap;
    font-size: 15px;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: background-color 0.2s;
}

.mini-menu li:hover {
    background-color: #333;
    color: aqua;
}

/* Animación del menú */
.fade-item-enter-active,
.fade-item-leave-active {
    transition: all 0.4s ease;
}

.fade-item-enter-from {
    opacity: 0;
    transform: translateY(10px);
}

.fade-item-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}

@media only screen and (min-width: 768px) {
    .routine-card {
        min-width: 350px;
        width: 100%;
        /* El padre controla el ancho del contenedor */
        font-size: 18px;
    }

    .difficulty-text {
        font-size: 16px;
    }
}
</style>