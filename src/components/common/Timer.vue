<script setup>
import { ref, onBeforeUnmount, computed, watch, defineProps, defineEmits, defineExpose } from 'vue';

const props = defineProps({
    // initial seconds is optional; can start without it and use startWith()
    initialSeconds: { type: Number, default: 0 },
    autoStart: { type: Boolean, default: false }
});

const emit = defineEmits(['tick', 'finished', 'canceled']);

const secondsLeft = ref(props.initialSeconds || 0);
const intervalId = ref(null);

const minutes = computed(() => Math.floor(secondsLeft.value / 60));
const seconds = computed(() => secondsLeft.value % 60);
const isRunning = ref(false);

function start() {
    if (isRunning.value) return;
    if (secondsLeft.value <= 0) return; // nada que contar
    isRunning.value = true;
    intervalId.value = setInterval(() => {
        secondsLeft.value = Math.max(0, secondsLeft.value - 1);
        emit('tick', secondsLeft.value);
        if (secondsLeft.value === 0) {
            stopInternal(true);
        }
    }, 1000);
}

function startWith(sec) {
    // sec en segundos
    if (typeof sec !== 'number' || sec <= 0) {
        // nada que hacer
        return;
    }
    resetInternal(false);
    secondsLeft.value = Math.floor(sec);
    // small timeout to ensure UI updates before starting
    start();
}

function pause() {
    if (!isRunning.value) return;
    clearInterval(intervalId.value);
    intervalId.value = null;
    isRunning.value = false;
}

function reset() {
    pause();
    emit('canceled');
}

function resetInternal(emitFinished = false) {
    pause();
    secondsLeft.value = props.initialSeconds || 0;
    if (emitFinished && secondsLeft.value === 0) {
        // nothing
    }
}

function stopInternal(emitFinishedEvent = true) {
    pause();
    if (emitFinishedEvent) emit('finished');
}

onBeforeUnmount(() => {
    if (intervalId.value) clearInterval(intervalId.value);
});

// exponer métodos al componente padre (ref)
defineExpose({
    startWith,
    start,
    pause,
    reset,
    getSecondsLeft: () => secondsLeft,
    isRunning: () => isRunning
});

watch(() => props.initialSeconds, (v) => {
    secondsLeft.value = v || 0;
});

if (props.autoStart && props.initialSeconds > 0) {
    startWith(props.initialSeconds);
}
</script>

<template>
    <div class="card shadow-sm mb-3 p-4 text-center mx-auto" style="max-width: 300px;">
        <h5 class="mb-1 fw-semibold small titulo-timer text-uppercase">TIEMPO TOTAL</h5>

        <!-- Display del tiempo -->
        <h1 class="display-5 mb-1 text-info">
            {{ String(minutes).padStart(2, '0') }}:{{ String(seconds).padStart(2, '0') }}
        </h1>

        <!-- Controles (opcionales, el padre puede controlar via ref) -->
        <div class="d-flex justify-content-center gap-2">
            <button v-if="!isRunning" class="btn btn-primary px-3 text-center" @click="start">
                <i class="bi me-0 bi-play-fill"></i>
            </button>

            <button v-else class="btn btn-secondary px-3 text-center" @click="pause">
                <i class="bi me-0 bi-pause-fill"></i>
            </button>
            <button class="btn btn-outline-danger px-3 d-flex justify-content-center align-items-center" @click="reset">
                <i class="bi me-0 bi-ban"></i>
            </button>
        </div>
    </div>
</template>

<style scoped>

.titulo-timer {
    font-size: 0.75rem;
    letter-spacing: 0.1rem;
    color: #777;

}
.card {
    background-color: transparent;
    border-radius: 1rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
}

button i {
    vertical-align: middle;
    margin-right: 4px;
}
</style>
