<template>
    <div class="register-workout-container mt-5">
        <!-- HEADER -->
        <div class="page-header mt-4 mb-4">
            <div class="header-content">
                <span class="header-label">
                    <i class="bi bi-activity"></i>
                    Entrenamiento
                </span>

                <h1 class="titulo">
                    {{ rutina?.nombre }}
                </h1>
            </div>
        </div>

        <div v-if="isLoading" class="loader"></div>

        <div v-if="!isLoading" class="info-container">

            <!-- INFO DE LA RUTINA -->
            <div class=" workout-info d-flex justify-content-between align-items-center mb-4">
                <div class="workout-date">
                    <i class="bi bi-calendar3"></i>
                    {{ formatDate(workoutDate) }}
                </div>
                <div class="workout-dificultad text-end">
                    <span class="badge difficulty">
                        {{ rutina?.dificultad }}
                    </span>
                </div>


            </div>

            <!-- PROGRESO -->
            <div class="progress-section">
                <div class="progress-info">
                    <span>Progreso</span>

                    <strong>
                        {{ step + 1 }} / {{ steps.length }}
                    </strong>
                </div>

                <div class="progress" role="progressbar" aria-label="Progreso" :aria-valuenow="progressPercentage"
                    aria-valuemin="0" aria-valuemax="100">
                    <div class="progress-bar bg-info" :style="{ width: progressPercentage + '%' }"></div>
                </div>
            </div>

            <!-- STEPPER -->
            <div class="stepper-wrapper">

                <Transition name="fade-slide" mode="out-in" class="w-100">

                    <!-- EJERCICIO ACTUAL -->
                    <div v-if="step < steps.length" :key="step" class="stepper-container">

                        <!-- CARD -->
                        <div class="exercise-card">

                            <!-- CARD HEADER -->
                            <div class="exercise-card-header">


                                <span class="step-label">
                                    {{ current.stepLabel }}
                                </span>

                                <div class="series-info">
                                    Serie
                                    <strong>
                                        {{ current.serie + 1 }}
                                    </strong>
                                    <span class="series-divider">/</span>
                                    {{ current.totalSeries }}
                                </div>
                            </div>

                            <!-- EJERCICIOS -->
                            <div class="exercise-list">

                                <div v-for="(ej, eIndex) in current.ejercicios" :key="eIndex" class="exercise-row">

                                    <!-- NOMBRE -->
                                    <div class="exercise-name">

                                        <span class="exercise-number">
                                            {{ eIndex + 1 }}
                                        </span>

                                        <div>
                                            <p>
                                                {{ ej.nombre }}
                                            </p>

                                            <small v-if="ej.notas">
                                                {{ ej.notas }}
                                            </small>
                                        </div>

                                    </div>

                                    <!-- INPUTS -->
                                    <div class="exercise-inputs">

                                        <!-- REPS -->
                                        <div class="input-group-workout">

                                            <label :for="`ej-${step}-${eIndex}-reps`">
                                                Reps
                                            </label>

                                            <input type="number" :id="`ej-${step}-${eIndex}-reps`"
                                                v-model.number="logs[step].actualReps[eIndex]" min="0"
                                                class="form-control input-cant" />

                                        </div>

                                        <!-- SEGS -->
                                        <div v-if="logs[step].actualSegs[eIndex] !== 0" class="input-group-workout">

                                            <label :for="`ej-${step}-${eIndex}-segs`">
                                                Seg
                                            </label>

                                            <input type="number" :id="`ej-${step}-${eIndex}-segs`"
                                                v-model.number="logs[step].actualSegs[eIndex]" min="0"
                                                class="form-control input-cant" />

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                        <!-- NAVEGACIÓN -->
                        <div class="navigation-container">

                            <button class="btn btn-outline-secondary navigation-btn" @click="prevStep"
                                :disabled="step === 0 || isResting">
                                <i class="bi bi-chevron-left"></i>
                                <span>Anterior</span>
                            </button>

                            <button class="btn btn-outline-info navigation-btn rest-btn" @click="startRest"
                                :disabled="isResting || step + 1 >= steps.length || !rutina">
                                <i class="bi bi-clock-history"></i>

                                <span v-if="!isResting">
                                    Descanso
                                </span>

                                <span v-else>
                                    Descansando...
                                </span>
                            </button>

                            <button class="btn btn-info navigation-btn next-btn" @click="nextStep"
                                :disabled="isResting">
                                <span>
                                    {{ step + 1 === steps.length ? 'Finalizar' : 'Siguiente' }}
                                </span>

                                <i class="bi bi-chevron-right"></i>
                            </button>

                        </div>

                        <!-- CANCELAR -->
                        <div class="cancel-container">
                            <button type="button" @click="handleCancelar" class="btn btn-link cancel-btn">
                                <i class="bi bi-x-circle"></i>
                                Cancelar entrenamiento
                            </button>
                        </div>

                    </div>

                    <!-- NOTA FINAL -->
                    <div v-else class="finish-container">

                        <div class="finish-icon">
                            <i class="bi bi-check2-circle"></i>
                        </div>

                        <h2>
                            ¡Entrenamiento terminado!
                        </h2>

                        <p>
                            Antes de guardar, podés agregar una nota sobre cómo te sentiste.
                        </p>

                        <div class="notes-container">
                            <label for="workout-notes" class="form-label">
                                Notas del entrenamiento
                            </label>

                            <textarea id="workout-notes" v-model="notes" class="form-control" rows="4"
                                placeholder="¿Cómo te sentiste hoy?"></textarea>
                        </div>

                        <!-- LOADER -->
                        <div v-if="isSaving" class="loader-form mt-3"></div>

                        <Notifier v-show="showNotifier" :message="notification.message" :type="notification.type"
                            @after-leave="showNotifier = false" />

                        <div class="finish-actions">

                            <button class="btn btn-success save-btn" @click="submit">
                                <i class="bi bi-check-lg"></i>
                                Guardar registro
                            </button>

                            <button type="button" @click="handleCancelar" class="btn btn-link cancel-btn">
                                Cancelar
                            </button>

                        </div>

                    </div>

                </Transition>

                <!-- TIMER -->
                <Transition name="fade-slide" mode="out-in" duration="200">
                    <Timer v-show="isResting" ref="timerRef" @canceled="onTimerCanceled" @finished="onTimerFinished"
                        @tick="onTimerTick" />
                </Transition>

            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useProfileStore } from '@/stores/profile';
import { storeToRefs } from 'pinia';
import { confirmAction } from '@/utils/confirm';
import { getCurrentInstance } from 'vue';

const { proxy } = getCurrentInstance();

import Notifier from '@/components/common/Notifier.vue';
import Timer from '@/components/common/Timer.vue';

const route = useRoute();
const router = useRouter();
const profileStore = useProfileStore();

const rutinaId = route.query.id;
const rutina = ref(null);
const isSaving = ref(false);
const { isLoading } = storeToRefs(profileStore);

const workoutDate = ref(new Date().toISOString());
const notes = ref('');
const notification = reactive({ message: '', type: 'success' });
const showNotifier = ref(false);

// Cada step representa una serie de un bloque
const steps = ref([]);
// logs[step] = { actualReps: [] } para esa serie
const logs = ref([]);
const step = ref(0);

// Timer ref + estado de descanso
const timerRef = ref(null);
const isResting = ref(false);

const progressPercentage = computed(() => {
    if (steps.value.length === 0) return 0;
    return Math.floor((step.value / steps.value.length) * 100);
});

const direction = ref('forward');

const formatDate = (iso) => {
    const d = new Date(iso);
    return `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}/${d.getFullYear()}`;
}

onMounted(() => {
    if (!profileStore.profile.id) {
        console.log("No hay usuario")
        return
    }

    // Construir steps: por cada bloque y cada serie
});

const construirSiCorresponde = async () => {
    if (!rutinaId) {
        console.log("No sen encontro la Rutina");
        router.push({ name: 'MyWorkouts' });
        return;
    }

    steps.value = [];
    logs.value = [];

    let data = null;
    if (profileStore.getRutinaLocal(rutinaId)) {
        data = profileStore.getRutinaLocal(rutinaId);
    } else {
        data = await profileStore.getRutina(rutinaId);
    }

    if (!data) {
        console.log("Rutina no encontrada.")
        router.push({ name: 'MyWorkouts' });
        return;
    }

    rutina.value = { ...data };

    data.bloques.forEach((bloque, bi) => {
        for (let si = 0; si < bloque.series; si++) {
            steps.value.push({
                bloqueIndex: bi,
                serie: si,
                totalSeries: bloque.series,
                stepLabel: `Bloque ${bi + 1}`,
                ejercicios: bloque.ejercicios.map(e => ({ ...e }))
            });
            logs.value.push({
                actualReps: bloque.ejercicios.map(e => e.repeticiones),
                actualSegs: bloque.ejercicios.map(e => e.tiempo),
            });
        }
    });
}

watch(isLoading, (nuevoValor) => {
    if (!nuevoValor) {
        construirSiCorresponde();
    }
}, { immediate: true });

const current = computed(() => steps.value[step.value] || {});

// navegación
const nextStep = () => {
    if (step.value < steps.value.length) {
        direction.value = 'forward';
        step.value++;
    }
}

const prevStep = () => {
    if (step.value > 0) {
        direction.value = 'backward';
        step.value--;
    }
}

// Inicia descanso acorde al tipo entre current y siguiente step
const startRest = () => {
    if (isResting.value) return;
    if (!rutina.value) return;
    if (step.value + 1 >= steps.value.length) return; // no hay siguiente

    const next = steps.value[step.value + 1];
    const currentStep = steps.value[step.value];
    const sameBlock = next && currentStep && next.bloqueIndex === currentStep.bloqueIndex;
    const restSeconds = sameBlock ? (rutina.value.descansoSeries ?? 60) : (rutina.value.descansoBloques ?? 60);

    // iniciar timer con segundos
    if (timerRef.value && typeof timerRef.value.startWith === 'function') {
        isResting.value = true;
        timerRef.value.startWith(restSeconds);
    }
};

// manejadores del timer
const onTimerFinished = () => {
    isResting.value = false;
    nextStep();
};

// manejadores del timer
const onTimerCanceled = () => {
    isResting.value = false;
};

const onTimerTick = (secondsLeft) => {
    // opcional: podrías mostrar segundosLeft en UI o usar para animaciones
};

const submit = async () => {
    isSaving.value = true;
    try {
        await profileStore.registerWorkout({
            rutinaId,
            dataRoutine: {
                bloques: rutina.value.bloques,
                descansoBloques: rutina.value.descansoBloques,
                descansoSeries: rutina.value.descansoSeries,
                dificultad: rutina.value.dificultad,
                nombre: rutina.value.nombre,
            },
            date: workoutDate.value,
            steps: steps.value,
            logs: logs.value,
            notes: notes.value
        });

    } catch (err) {
        console.error(err);

    } finally {
        isSaving.value = false;
        router.push({ name: 'DoneWorkouts' })
    }
}

const handleCancelar = async () => {

    const ok = await confirmAction(proxy.$swal, {
        title: '¿Cancelar entrenamiento?',
        text: 'Se perderá el progreso actual'
    })

    if (!ok) return

    router.back();
}

</script>

<style scoped>
.register-workout-container {
    display: flex;
    flex-direction: column;
}

/* =========================
   CONTENEDOR
========================= */

.info-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

/* =========================
   HEADER
========================= */

.page-header {
    width: 100%;
    margin-bottom: 1.5rem;
}

.badge.difficulty {
    background: rgba(0, 255, 255, .1);
    border: 1px solid rgba(0, 255, 255, .2);
    color: cyan;
    font-size: .65rem;
    letter-spacing: .08em;
    font-weight: 400;
}

.header-content {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
}

.header-label {
    color: aqua;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
}

.header-label i {
    margin-right: 0.35rem;
}

.titulo {
    margin: 0;
    font-weight: 700;
    text-transform: uppercase;
}

/* =========================
   INFO RUTINA
========================= */

.workout-info {
    width: 60%;
    margin-bottom: 1.25rem;
}

.workout-title {
    font-size: 1.35rem;
    font-weight: 600;
    line-height: 1.3;
}

.quote {
    color: aqua;
    font-weight: 800;
}

.workout-date {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    margin-top: 0.35rem;
    color: #888;
    font-size: 0.85rem;
}

.workout-date i {
    color: aqua;
}

/* =========================
   PROGRESO
========================= */

.progress-section {
    width: 60%;
    margin-bottom: 1.5rem;
}

.progress-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.45rem;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.06em;
}

.progress-info strong {
    color: aqua;
}

.progress {
    height: 7px;
    width: 100%;
    overflow: hidden;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.08);
}

.progress-bar {
    border-radius: 10px;
    transition: width 0.4s ease;
}

/* =========================
   STEPPER
========================= */

.stepper-wrapper {
    position: relative;
    width: 100%;
}

.stepper-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

/* =========================
   EXERCISE CARD
========================= */

.exercise-card {
    width: 600px;
    max-width: 94%;
    overflow: hidden;
    border: 1px solid rgba(0, 255, 255, 0.35);
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.025);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
}

/* HEADER CARD */

.exercise-card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.15rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.step-label {
    display: block;
    margin-bottom: 0.2rem;
    color: aqua;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
}

.series-info {
    font-size: 0.9rem;
    color: #aaa;
}

.series-info strong {
    color: aqua;
    font-size: 1.1rem;
}

.series-divider {
    margin: 0 0.2rem;
    color: #555;
}

.series-icon {
    width: 38px;
    height: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    color: aqua;
    background: rgba(0, 255, 255, 0.08);
}

/* =========================
   EJERCICIOS
========================= */

.exercise-list {
    padding: 0.25rem 1rem;
}

.exercise-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding: 1rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.07);
}

.exercise-row:last-child {
    border-bottom: none;
}

.exercise-name {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    min-width: 0;
    text-align: left;
}

.exercise-number {
    flex-shrink: 0;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    color: aqua;
    background: rgba(0, 255, 255, 0.08);
    font-size: 0.8rem;
    font-weight: 700;
}

.exercise-name p {
    margin: 0;
    font-size: 0.95rem;
    font-weight: 600;
}

.exercise-name small {
    display: block;
    margin-top: 0.15rem;
    color: #777;
    font-size: 0.75rem;
}

/* =========================
   INPUTS
========================= */

.exercise-inputs {
    display: flex;
    gap: 0.65rem;
    flex-shrink: 0;
}

.input-group-workout {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.3rem;
}

.input-group-workout label {
    color: #888;
    font-size: 0.65rem;
    font-weight: 700;
    letter-spacing: 0.05em;
    text-transform: uppercase;
}

.input-cant {
    width: 72px;
    height: 42px;
    padding: 0.25rem;
    border: 1px solid rgba(0, 255, 255, 0.25);
    border-radius: 8px;
    background: transparent;
    color: aqua;
    text-align: center;
    font-size: 1rem;
    font-weight: 700;
}

.input-cant:focus {
    border-color: aqua;
    box-shadow: 0 0 0 0.2rem rgba(0, 255, 255, 0.1);
    background: rgba(0, 255, 255, 0.03);
    color: aqua;
}

/* =========================
   NAVEGACIÓN
========================= */

.navigation-container {
    width: 600px;
    max-width: 94%;
    display: grid;
    grid-template-columns: 1fr 1.1fr 1fr;
    gap: 0.6rem;
    margin-top: 1rem;
}

.navigation-btn {
    height: 44px;
    border-radius: 8px;
    font-size: 0.85rem;
    font-weight: 600;
}

.navigation-btn i {
    font-size: 0.9rem;
}

.next-btn {
    color: #111;
}

.rest-btn {
    font-weight: 700;
}

/* =========================
   CANCELAR
========================= */

.cancel-container {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 0.6rem;
}

.cancel-btn {
    color: #777;
    font-size: 0.75rem;
    text-decoration: none;
}

.cancel-btn:hover {
    color: #dc3545;
}

/* =========================
   FINAL
========================= */

.finish-container {
    width: 600px;
    max-width: 94%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 2rem 1rem;
}

.finish-icon {
    width: 64px;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    border-radius: 50%;
    color: #198754;
    background: rgba(25, 135, 84, 0.1);
    font-size: 2rem;
}

.finish-container h2 {
    margin-bottom: 0.4rem;
    font-size: 1.4rem;
}

.finish-container>p {
    max-width: 450px;
    color: #888;
    font-size: 0.9rem;
}

.notes-container {
    width: 100%;
    margin-top: 1rem;
    text-align: left;
}

.notes-container textarea {
    resize: vertical;
    background: transparent;
}

.finish-actions {
    width: 100%;
    max-width: 400px;
    margin-top: 1.25rem;
}

.save-btn {
    width: 100%;
    height: 46px;
    font-weight: 600;
}

/* =========================
   LOADER
========================= */

.loader-form {
    width: 100%;
    height: 4px;
    margin-top: 1rem;
    background: aqua;
    animation: animFw 4s linear infinite;
}

@keyframes animFw {
    0% {
        width: 0;
    }

    100% {
        width: 100%;
    }
}

/* =========================
   ANIMACIÓN
========================= */

.fade-slide-enter-active,
.fade-slide-leave-active {
    transition: all 0.3s ease;
}

.fade-slide-enter-from {
    opacity: 0;
    transform: translateY(10px);
}

.fade-slide-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}

/* =========================
   DESKTOP
========================= */

@media only screen and (min-width: 768px) {

    .register-workout-container {
        padding-left: 240px;
        padding-right: 0;
        padding-top: 0;
        width: 100%;
    }
}

/* =========================
   MOBILE
========================= */

@media only screen and (max-width: 767px) {

    .page-header {
        margin-top: 1rem !important;
        margin-bottom: 1rem;
    }

    .workout-info,
    .progress-section {
        width: 94%;
    }

    .workout-title {
        font-size: 1.15rem;
    }

    .exercise-card {
        max-width: 94%;
        border-radius: 10px;
    }

    .exercise-card-header {
        padding: 0.9rem;
    }

    .exercise-list {
        padding: 0 0.8rem;
    }

    .exercise-row {
        align-items: flex-start;
        padding: 0.9rem 0;
    }

    .exercise-name {
        flex: 1;
    }

    .exercise-name p {
        font-size: 0.85rem;
    }

    .exercise-inputs {
        gap: 0.4rem;
    }

    .input-cant {
        width: 58px;
        height: 40px;
    }

    .navigation-container {
        max-width: 94%;
        gap: 0.4rem;
    }

    .navigation-btn {
        padding: 0.4rem 0.25rem;
        font-size: 0.75rem;
    }

    .navigation-btn i {
        font-size: 0.8rem;
    }

    .finish-container {
        padding-top: 1.5rem;
    }
}
</style>
