<template>
    <li class="routine-list-item" @click="$emit('click-card', routine.id)">

        <div class="list-content">

            <!-- icon -->
            <div class="icon-box">
                <span class="material-symbols-outlined">fitness_center</span>
            </div>

            <!-- info -->
            <div class="info-box">

                <h3 class="routine-name">{{ routine.nombre }}</h3>

                <!-- meta principal -->
                <div class="meta-info">
                    <span class="difficulty-tag">{{ routine.dificultad }}</span>
                    <span class="dot">•</span>
                    <span>{{ totalBloques }} bloques</span>
                    <span class="dot">•</span>
                    <span>{{ totalEjercicios }} ejercicios</span>
                </div>

                <!-- stats extendidos -->
                <div class="stats-row">

                    <span class="stat">
                        <i class="bi bi-layers"></i>
                        {{ totalSets }} sets
                    </span>

                    <span class="stat">
                        <i class="bi bi-clock"></i>
                        {{ duration }} min
                    </span>

                    <span class="stat volume" :class="volumeClass">
                        {{ volume }}
                    </span>

                    <span v-if="routine.tipo" class="stat tag">
                        {{ routine.tipo }}
                    </span>

                    <span v-if="routine.lastTrained" class="stat last">
                        Último: {{ routine.lastTrained }}
                    </span>

                </div>
            </div>

            <!-- acciones -->
            <div class="actions-box" @click.stop>

                <span @click.stop="$emit('toggle-fav', routine)" class="fav-btn">
                    <i class="bi" :class="routine.favorita ? 'bi-heart-fill text-danger' : 'bi-heart'"></i>
                </span>

                <div class="menu-wrapper">
                    <span @click.stop="menuAbierto = !menuAbierto" class="dots-btn">
                        <i class="bi bi-three-dots-vertical"></i>
                    </span>

                    <transition name="fade-item">
                        <ul v-if="menuAbierto" class="mini-menu">
                            <li @click.stop="handleAction('register')"><i class="bi bi-play-fill"></i> Entrenar</li>
                            <li @click.stop="handleAction('edit')"><i class="bi bi-pencil"></i> Editar</li>
                            <li @click.stop="handleAction('copy')"><i class="bi bi-copy"></i> Duplicar</li>
                            <li @click.stop="handleAction('delete')" class="text-danger"><i class="bi bi-trash"></i>
                                Borrar</li>
                        </ul>
                    </transition>
                </div>

            </div>

        </div>
    </li>
</template>


<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import {
    countBloques,
    countEjercicios,
    countSets,
    estimateDuration,
    volumeLevel
} from '@/utils/routineStats'

const props = defineProps({ routine: Object })
const emit = defineEmits(['click-card', 'toggle-fav', 'edit', 'delete', 'copy', 'register'])

const menuAbierto = ref(false)

const totalBloques = computed(() => countBloques(props.routine))
const totalEjercicios = computed(() => countEjercicios(props.routine))
const totalSets = computed(() => countSets(props.routine))
const duration = computed(() => estimateDuration(props.routine))
const volume = computed(() => volumeLevel(props.routine))

const volumeClass = computed(() => {
    if (volume.value === 'Ligero') return 'v-light'
    if (volume.value === 'Moderado') return 'v-mid'
    return 'v-high'
})

const handleAction = (type) => {
    menuAbierto.value = false
    emit(type, props.routine)
}

const closeMenu = () => menuAbierto.value = false
onMounted(() => window.addEventListener('click', closeMenu))
onUnmounted(() => window.removeEventListener('click', closeMenu))
</script>


<style scoped>
.routine-list-item {
    background: rgba(17, 17, 17, 0.76);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    margin-bottom: 12px;
    cursor: pointer;
    transition: all 0.3s ease;
    list-style: none;
    width: 100%;
}

.routine-list-item:hover {
    border-color: #00d4ff;
    background: rgba(0, 212, 255, 0.05);
    transform: translateX(4px);
}

.list-content {
    display: flex;
    align-items: center;
    padding: 12px 16px;
    gap: 16px;
}

.icon-box {
    width: 48px;
    height: 48px;
    background: rgba(0, 212, 255, 0.15);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #00d4ff;
}

.material-symbols-outlined {
    font-size: 24px;
}

.info-box {
    flex: 1;
    min-width: 0;
}

.routine-name {
    margin: 0;
    font-size: 1rem;
    font-weight: 600;
    color: #f8fafc;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: start;
}

.meta-info {
    font-size: 0.75rem;
    display: flex;
    align-items: center;
    gap: 6px;
    margin-top: 2px;
}

.difficulty-tag {
    text-transform: uppercase;
    font-weight: 700;
    color: #00d4ff;
    font-size: 0.65rem;
}

.dot {
    color: #475569;
}

.actions-box {
    display: flex;
    align-items: center;
    gap: 8px;
}

.fav-btn,
.dots-btn {
    padding: 8px;
    color: #94a3b8;
    font-size: 1.2rem;
    transition: color 0.2s;
}

.fav-btn:hover {
    color: #ef4444;
}

.dots-btn:hover {
    color: #00d4ff;
}

.stats-row {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 6px;
    font-size: 0.7rem;
}

.stat {
    opacity: 0.8;
}

.volume {
    font-weight: 600;
    padding: 2px 6px;
    border-radius: 6px;
}

.v-light {
    background: rgba(34, 197, 94, .15);
    color: #22c55e
}

.v-mid {
    background: rgba(234, 179, 8, .15);
    color: #eab308
}

.v-high {
    background: rgba(239, 68, 68, .15);
    color: #ef4444
}

.tag {
    color: #00d4ff;
    font-weight: 600;
}

.last {
    opacity: .6;
}


.menu-wrapper {
    position: relative;
}

.mini-menu {
    position: absolute;
    right: 0;
    top: 0%;
    background: #1a262b;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    z-index: 100;
    padding: 8px 0;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.5);
    min-width: 140px;
}

.mini-menu li {
    padding: 8px 16px;
    font-size: 0.85rem;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: all 0.2s ease;
}

.mini-menu li:hover {
    background: rgba(0, 212, 255, 0.1);
    color: #00d4ff;
}
</style>