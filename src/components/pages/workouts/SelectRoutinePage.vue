<template>
    <div class="routine-container mt-5 pb-5">

        <!-- HEADER -->
        <div
            class="page-header mt-5 mt-md-0 gap-3 mb-4 d-flex flex-column justify-content-between align-items-start align-items-md-center">
            <h1 class="h5 mb-0 text-uppercase titulo">Selecciona una rutina</h1>


            <div class="search-box mx-auto">
                <i class="bi bi-search"></i>
                <input v-model="search" type="text" placeholder="Buscar rutina..." class="form-control">
            </div>
        </div>


        <!-- QUICK START -->
        <section v-if="lastRoutine" class="quick-section">

            <div class="section-label">
                Quick Start
                <div class="line"></div>
            </div>

            <div class="quick-card">

                <div class="quick-info">
                    <div class="quick-icon">
                        <i class="bi bi-clock-history"></i>
                    </div>

                    <div>
                        <div class="quick-sub">Último entrenamiento</div>
                        <div class="quick-title">{{ lastRoutine.nombre }}</div>

                    </div>
                </div>

                <button class="btn btn-aqua ms-3" @click="empezarEntreno(lastRoutine.id)">
                    <i class="bi bi-play-fill"></i>
                    Entrenar
                </button>

            </div>

        </section>


        <!-- ALL ROUTINES -->
        <section>

            <div class="section-label muted">
                Todas las rutinas
                <div class="line"></div>
            </div>

            <div class="routine-grid">

                <div v-for="routine in filteredRoutines" :key="routine.id" class="routine-card">

                    <div class="routine-top">
                        <span class="badge difficulty text-uppercase pt-1">
                            {{ routine.dificultad }}
                        </span>

                        <span class="time">
                            <i class="bi bi-clock"></i>
                            {{ estimateDuration(routine) }}m
                        </span>
                    </div>

                    <div class="routine-name">
                        {{ routine.nombre }}
                    </div>

                    <button class="btn btn-aqua w-100 mt-auto text-capitalize" @click="empezarEntreno(routine.id)">
                        Empezar entrenamiento
                    </button>

                </div>


                <!-- CREATE -->
                <RouterLink to="/dashboard/form-routine" class="routine-card create-card">
                    <i class="bi bi-plus-circle"></i>
                    Crear rutina
                </RouterLink>

            </div>

        </section>

    </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useProfileStore } from '@/stores/profile'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'

const router = useRouter()
const profileStore = useProfileStore()
const { profile } = storeToRefs(profileStore)

const search = ref('')

const routines = computed(() => profile.value.routines || [])

const filteredRoutines = computed(() =>
    routines.value.filter(r =>
        r.nombre.toLowerCase().includes(search.value.toLowerCase())
    )
)

/* quick start */
const lastRoutine = computed(() => {
    const workouts = profile.value.workouts || []
    if (!workouts.length) return null

    const last = workouts.at(-1)
    return routines.value.find(r => r.id === last.rutinaId)
})

const lastRoutineMeta = computed(() => {
    if (!lastRoutine.value) return ''
    return `Última sesión registrada`
})

function estimateDuration(routine) {
    return Math.round((routine.bloques?.length || 0) * 4 + 10)
}

function empezarEntreno(id) {
    router.push({
        name: 'RegisterWorkout',
        query: { id }
    })
}
</script>


<style scoped>
.routine-container {
    max-width: 1000px;
    margin: auto;
    display: flex;
    flex-direction: column;
}

/* HEADER */
.page-header {
    margin-bottom: 40px;
}

.title {
    font-weight: 700;
    margin-bottom: 20px;
}

.search-box {
    position: relative;
    max-width: 500px;
}

.search-box i {
    position: absolute;
    left: 14px;
    top: 50%;
    transform: translateY(-50%);
    opacity: .5;
}

.search-box input {
    padding-left: 40px;
    background-color: transparent;
    border: 1 px solid rgba(255, 255, 255, .2);
    border-radius: 6px;
    height: 50px;
    color: white;
}

.search-box input::placeholder {
    color: #7a7a7a;
}

/* SECTION LABEL */
.section-label {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: .7rem;
    letter-spacing: .15em;
    text-transform: uppercase;
    color: cyan;
    margin-bottom: 18px;
}

.section-label.muted {
    color: #7a7a7a;
}

.section-label .line {
    height: 1px;
    flex: 1;
    background: rgba(255, 255, 255, .1);
}

/* QUICK */

.quick-card {
    background: #162129;
    border-radius: 10px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
}

.quick-info {
    display: flex;
    gap: 18px;
}

.quick-icon {
    width: 56px;
    height: 56px;
    background: rgba(0, 255, 255, .15);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    color: cyan;
    font-size: 1.6rem;
}

.quick-sub {
    font-size: .7rem;
    text-transform: uppercase;
    letter-spacing: .1em;
    color: cyan;
}

.quick-title {
    font-weight: 700;
}

.quick-meta {
    font-size: .85rem;
    opacity: .6;
}

/* GRID */
.routine-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 16px;
}

.routine-card {
    background: #162129;
    border-radius: 10px;
    padding: 22px;
    display: flex;
    flex-direction: column;
    border: 1px solid rgba(255, 255, 255, .05);
    transition: .2s;
}

.routine-card:hover {
    border-color: rgba(0, 255, 255, .4);
}

/* CARD TOP */
.routine-top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
}

.badge.difficulty {
    background: rgba(0, 255, 255, .1);
    border: 1px solid rgba(0, 255, 255, .2);
    color: cyan;
    font-size: .65rem;
    letter-spacing: .08em;
}

.time {
    font-size: .8rem;
    opacity: .6;
}

/* NAME */
.routine-name {
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 20px;
}

/* BUTTON */
.btn-aqua {
    background: cyan;
    color: #0a1218;
    font-weight: 500;
    border-radius: 6px;
    transition: all .3s ease;
}

.btn-aqua:hover {
    color: black;
    box-shadow: 0 0 8px cyan;
}


/* CREATE */
.create-card {
    border: 2px dashed rgba(255, 255, 255, .1);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    text-decoration: none;
    color: #aaa;
}

@media (min-width: 768px) {
    .routine-container {
        padding-left: 220px;
    }

    .quick-card {
        flex-direction: row;
    }
}
</style>
