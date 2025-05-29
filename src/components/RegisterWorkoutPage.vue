<template>
    <div class="register-workout-container mt-5 mt-md-0">
        <h1 class="mb-4 mt-5">Agregar Entreno</h1>
        <div v-if="isLoadingInfo" class="loader"></div>
        <!-- STEPPER -->
        <div v-if="!isLoadingInfo && rutinaId" class="info-container">
            <!-- Fecha -->
            <div class="mb-2 mt-3 mt-md-4">
                <p class="h4"><span class="fst-italic">"{{ rutina?.nombre }}" {{ formatDate(workoutDate) }} </span></p>
            </div>
            <!-- Progress Bar Bootstrap -->
            <div class="progress mb-3" role="progressbar" aria-label="Progreso" :aria-valuenow="progressPercentage"
                aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar bg-info" :style="{ width: progressPercentage + '%' }">
                    <!-- {{ progressPercentage }}% -->
                </div>
            </div>
            <div class="stepper-wrapper">

                <Transition :name="direction === 'forward' ? 'slide-left' : 'slide-right'" mode="out-in" class="w-100">
                    <!-- Stepper -->
                    <div v-if="step < steps.length" :key="step" class="stepper-container">
                        <!-- Mostrar serie actual del bloque -->
                        <div class="exercise-card p-3 pb-0 mb-3 ">
                            <div class="d-flex justify-content-between mb-3">
                                <strong>{{ current.stepLabel }}</strong>
                                <span>Serie <span class="text-info fw-bold">{{ current.serie + 1 }}</span> de <span
                                        class="text-info fw-bold">{{
                                            current.totalSeries }}</span>
                                </span>
                            </div>

                            <div v-for="(ej, eIndex) in current.ejercicios" :key="eIndex"
                                class="mb-3 d-flex p-1 align-items-baseline gap-2">
                                <label class="text-start label-ejercicio" :for="`ej-${step}-${eIndex}`">
                                    {{ eIndex + 1 }}° {{ ej.nombre }}
                                </label>
                                <input type="number" :id="`ej-${step}-${eIndex}`"
                                    v-model.number="logs[step].actualReps[eIndex]" min="0"
                                    class="form-control input-cant text-aqua" />
                            </div>
                        </div>

                        <!-- Navegación -->
                        <div class="navigation-container">
                            <button class="btn btn-outline-secondary" @click="prevStep" :disabled="step === 0">
                                <i class="bi bi-arrow-bar-left"></i> Anterior
                            </button>
                            <button class="btn btn-outline-info" @click="nextStep">
                                {{ step + 1 === steps.length ? 'Finalizar' :
                                    'Siguiente' }} <i class="bi bi-arrow-bar-right"></i>
                            </button>
                        </div>
                        <div class="cancel-container">
                            <button type="button" @click="handleCancelar" class="btn w-100 btn-danger mt-3 mb-2">
                                <i class="bi bi-x-circle"></i> Cancelar
                            </button>
                        </div>
                    </div>
                    <!-- Nota final -->
                    <div v-else class="mt-4 d-flex flex-column align-items-center">
                        <label for="workout-notes" class="form-label">Notas del Entrenamiento</label>
                        <textarea id="workout-notes" v-model="notes" class="form-control w-50" rows="4"
                            placeholder="¿Cómo te sentiste hoy?"></textarea>
                        <!-- Loader / Feedback -->
                        <div v-if="isSaving" class="loader-form mt-3"></div>


                        <div class="cancel-container mt-4">
                            <button class="btn w-100 btn-success" @click="submit">Guardar Registro</button>
                            <button type=" button" @click="handleCancelar" class="btn w-100 btn-danger mt-3 mb-2">
                                <i class="bi bi-x-circle"></i> Cancelar
                            </button>
                        </div>
                        <Notifier v-show="showNotifier" :message="notification.message" :type="notification.type"
                            @after-leave="showNotifier = false" />
                    </div>

                </Transition>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useProfileStore } from '@/stores/profile';
import Notifier from '@/components/NotifierComponent.vue';

const route = useRoute();
const router = useRouter();
const profileStore = useProfileStore();

const rutinaId = route.query.id;
const rutina = ref(null);
const isSaving = ref(false);
const isLoadingInfo = ref(false);

const workoutDate = ref(new Date().toISOString().substr(0, 10));
const notes = ref('');
const notification = reactive({ message: '', type: 'success' });
const showNotifier = ref(false);

// Cada step representa una serie de un bloque
const steps = ref([]);
// logs[step] = { actualReps: [] } para esa serie
const logs = ref([]);
const step = ref(0);

//Maenja el porcentaje de la barra de progreso
const progressPercentage = computed(() => {
    if (steps.value.length === 0) return 0;
    return Math.floor((step.value / steps.value.length) * 100);
});

//Para animar los steps
const direction = ref('forward');

// formatea YYYY-MM-DD → DD/MM/YYYY
const formatDate = (iso) => {
    const d = new Date(iso);
    return `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}/${d.getFullYear()}`;
}

onMounted(() => {
    if (!profileStore.profile.id) {
        console.log("No hay usuario")
        isLoadingInfo.value = true;
        return
    }

    // Construir steps: por cada bloque y cada serie
    // construirSiCorresponde();
});

const construirSiCorresponde = async () => {
    if (!rutinaId) {
        isLoadingInfo.value = false;
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
            // Inicializamos los logs con el valor por defecto
            logs.value.push({
                actualReps: bloque.ejercicios.map(e => e.repeticiones)
            });
        }
    });

    isLoadingInfo.value = false;
}

// También si cambia profile.id
watch(() => profileStore.profile.id, (uid) => {
    if (!uid) return;
    construirSiCorresponde();
}, { immediate: true });

// Computed con el paso actual
const current = computed(() => steps.value[step.value] || {});

//pasos
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
        notification.message = 'Entrenamiento guardado correctamente';
        notification.type = 'success';
        // // (Opcional) Redirigir al listado de workouts:
        // router.push({ name: 'MyWorkouts' });

    } catch (err) {
        console.error(err);
        notification.message = 'Error al guardar, intenta de nuevo';
        notification.type = 'error';
    } finally {
        isSaving.value = false;
        showNotifier.value = true;

        setTimeout(() => {
            router.push({ name: 'DoneWorkouts' })
        }, 2000);
    }
}

const handleCancelar = () => {
    router.push({ name: "MyWorkouts" });
}

</script>

<style scoped>
.register-workout-container {
    display: flex;
    flex-direction: column;
}

.info-container {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

.progress {
    width: 60%;
    border-radius: 2px;
}

.text-aqua {
    color: aqua;
}

.stepper-wrapper {
    position: relative;
    overflow: hidden;
    width: 100%;
    min-height: 370px;
    /* o lo que necesites */
}

.stepper-container {
    text-align: center;
    margin: 0px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.navigation-container {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 50px;
}

.stepper-header {
    margin-top: 0px;
}

.loader-form {
    margin-top: 1rem;
    height: 4px;
    background: aqua;
    animation: animFw 4s linear infinite;
}

.exercise-card {
    width: 96%;
    border: 1px solid aqua;
    border-radius: 3px;
}

.input-cant {
    width: 20%;
    min-width: 75px;
    max-width: 90px;
    text-align: center;
    background-color: transparent;
    color: aqua;
}

.label-ejercicio {
    width: 80%;
}

.cancel-container {
    width: 100%;
    padding: 0px 3rem;
    max-width: 400px;
}

.fade-slide-enter-active,
.fade-slide-leave-active {
    transition: all 0.3s ease;
}

.fade-slide-enter-from {
    opacity: 0;
    transform: translateX(20px);
}

.fade-slide-leave-to {
    opacity: 0;
    transform: translateX(-20px);
}

.slide-left-enter-active,
.slide-right-enter-active,
.slide-left-leave-active,
.slide-right-leave-active {
    transition: all 0.3s ease;
    position: absolute;
}

.slide-left-enter-from {
    transform: translateX(20px);
    opacity: 0;
}

.slide-left-leave-to {
    transform: translateX(-20px);
    opacity: 0;
}

.slide-right-enter-from {
    transform: translateX(-20px);
    opacity: 0;
}

.slide-right-leave-to {
    transform: translateX(20px);
    opacity: 0;
}



@keyframes animFw {
    0% {
        width: 0;
    }

    100% {
        width: 100%;
    }
}

@media only screen and (min-width: 768px) {
    .register-workout-container {
        padding-left: 160px;
        padding-right: 0px;
        padding-top: 0px;
        width: 100%;
        height: 100%;
    }

    .exercise-card {
        width: 600px;
    }
}
</style>
