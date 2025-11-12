<script setup>
import { ref, onBeforeUnmount, computed, watch, defineProps, defineEmits, defineExpose } from 'vue';

const props = defineProps({
    // initial seconds is optional; can start without it and use startWith()
    initialSeconds: { type: Number, default: 0 },
    autoStart: { type: Boolean, default: false }
});

const emit = defineEmits(['tick', 'finished']);

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
    stopInternal(true);
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
    <div class="card shadow-sm border-0 p-4 text-center mx-auto" style="max-width: 300px;">
        <h5 class="mb-3 fw-semibold text-light">⏱ Timer</h5>

        <!-- Display del tiempo -->
        <h1 class="display-5 fw-bold mb-3 text-light">
            {{ String(minutes).padStart(2, '0') }}:{{ String(seconds).padStart(2, '0') }}
        </h1>

        <!-- Controles (opcionales, el padre puede controlar via ref) -->
        <div class="d-flex justify-content-center gap-2">
            <button v-if="!isRunning" class="btn btn-primary px-3" @click="start">
                <i class="bi bi-play-fill"></i>
            </button>

            <button v-else class="btn btn-warning px-3" @click="pause">
                <i class="bi bi-pause-fill"></i>
            </button>
            <button class="btn btn-danger px-3" @click="reset">
                <i class="bi bi-ban"></i>
            </button>
        </div>
    </div>
</template>

<style scoped>
.card {
    background-color: transparent;
    border-radius: 1rem;
}

button i {
    vertical-align: middle;
    margin-right: 4px;
}
</style>
