<template>
    <div class="register-workout-container mt-5 mt-md-0">
        <h1 class="mb-4 mt-5">Agregar Entreno</h1>
        <div v-if="isLoading" class="loader"></div>
        <!-- STEPPER -->
        <div v-if="!isLoading" class="info-container">
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
            <div class="stepper-wrapper bg-transparent">

                <Transition name="fade-slide" mode="out-in" class="w-100">
                    <!-- Stepper -->
                    <div v-if="step < steps.length" :key="step" class="stepper-container">
                        <!-- Mostrar serie actual del bloque -->
                        <div class="exercise-card p-3 pb-0 mb-3 ">
                            <div class="d-flex justify-content-between mb-3">
                                <strong class="text-info">{{ current.stepLabel }}</strong>
                                <span>Serie <span class="text-info fw-bold">{{ current.serie + 1 }}</span> de <span
                                        class="text-info fw-bold">{{
                                            current.totalSeries }}</span>
                                </span>
                            </div>

                            <div v-for="(ej, eIndex) in current.ejercicios" :key="eIndex"
                                class="mb-3 d-flex p-1 align-items-center justify-content-between gap-2">
                                <p class="text-start mb-0">
                                    {{ eIndex + 1 }}° {{ ej.nombre }}
                                </p>
                                <div class="d-flex">
                                    <div class="d-flex flex-column align-items-center">
                                        <label :for="`ej-${step}-${eIndex}-reps`">Reps</label>
                                        <input type="number" :id="`ej-${step}-${eIndex}-reps`"
                                            v-model.number="logs[step].actualReps[eIndex]" min="0"
                                            class="form-control input-cant text-aqua" />
                                    </div>
                                    <div v-if="logs[step].actualSegs[eIndex] !== 0"
                                        class="d-flex flex-column align-items-center">
                                        <label :for="`ej-${step}-${eIndex}-segs`">Segs</label>
                                        <input type="number" :id="`ej-${step}-${eIndex}-segs`"
                                            v-model.number="logs[step].actualSegs[eIndex]" min="0"
                                            class="form-control input-cant text-aqua" />
                                    </div>
                                </div>

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
                        <Notifier v-show="showNotifier" :message="notification.message" :type="notification.type"
                            @after-leave="showNotifier = false" />
                        <div class="cancel-container my-4">
                            <button class="btn w-100 btn-success" @click="submit">Guardar Registro</button>
                            <button type="button" @click="handleCancelar" class="btn w-100 btn-danger mt-3 mb-5">
                                <i class="bi bi-x-circle"></i> Cancelar
                            </button>
                        </div>

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
import { storeToRefs } from 'pinia';
import Notifier from '@/components/NotifierComponent.vue';

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
        return
    }

    // Construir steps: por cada bloque y cada serie
    // construirSiCorresponde();
});

const construirSiCorresponde = async () => {
    if (!rutinaId) {
        console.log("No hay encontro Rutina");
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
            // Inicializamos los logs con el valor por defecto
            logs.value.push({
                actualReps: bloque.ejercicios.map(e => e.repeticiones),
                actualSegs: bloque.ejercicios.map(e => e.tiempo),
            });
        }
    });
}

// Esperamos a que el perfil este listo
watch(isLoading, (nuevoValor) => {
    if (!nuevoValor) {
        construirSiCorresponde();
    }
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
    overflow: visible;
    width: 100%;
    height: auto;
    transition: height 0.3s ease;
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

}

.fade-slide-leave-to {
    opacity: 0;
    transform: translateY(-10px);
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
    }

    .exercise-card {
        width: 600px;
    }
}
</style>
