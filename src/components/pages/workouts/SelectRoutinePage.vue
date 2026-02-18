<template>
    <div class="routine-container mt-5 pb-5">

        <!-- HEADER -->
        <div
            class="page-header mt-5 mt-md-0 gap-3 mb-4 d-flex flex-column justify-content-between align-items-start align-items-md-center">
            <h1 class="h5 mb-0 text-uppercase titulo">Selecciona una rutina</h1>

        </div>

        <div v-if="isLoading" class="loader">

        </div>
        <div v-else class="routine-content">

            <!-- QUICK START -->
            <section v-if="lastRoutine" class="quick-section ">

                <div class="section-label">
                    Acceso rápido
                    <div class="line"></div>
                </div>

                <div class="quick-card">

                    <div class=" d-flex gap-2 flex-column">
                        <div class="quick-icon mx-auto">
                            <i class="bi bi-clock-history"></i>
                        </div>
                        <div class="quick-sub">Último entrenamiento</div>

                        <div class="d-flex flex-column gap-1">
                            <div class="quick-title">{{ lastRoutine.nombre }}</div>
                            <div class="quick-meta">{{ lastRoutineMeta }} - {{ formatDate(lastWorkout.date) }}</div>
                        </div>
                    </div>

                    <button class="btn btn-aqua btn-start rounded-circle ms-md-3 mt-md-2"
                        @click="empezarEntreno(lastRoutine.id)">
                        <i class="bi bi-play-fill my-auto"></i>

                    </button>

                </div>

            </section>


            <!-- ALL ROUTINES -->
            <section class="w-100 px-3">

                <div class="section-label muted">
                    Todas las rutinas
                    <div class="line"></div>
                </div>
                <div class="search-box me-auto mb-4 px-2 ms-md-3 ">
                    <i class="bi bi-search"></i>
                    <input v-model="search" type="text" placeholder="Buscar rutina..." class="form-control">
                </div>
                <div class="controls d-flex gap-2 mb-4 px-2 ms-md-3">

                    <button class="btn btn-outline-info btn-sm" :class="{ active: sortByDifficulty }"
                        @click="sortByDifficulty = !sortByDifficulty">
                        <i class="bi bi-sort-down"></i>
                        Dificultad
                    </button>

                    <button class="btn btn-dark btn-sm" :class="{ active: showFavoritesOnly }"
                        @click="showFavoritesOnly = !showFavoritesOnly">
                        <i class="bi bi-heart-fill text-danger"></i>
                        Favoritos
                    </button>



                </div>

                <div class="routine-grid px-md-5">

                    <div v-for="routine in processedRoutines" :key="routine.id" class="routine-card">


                        <div class="routine-top">
                            <span class="badge difficulty text-uppercase pt-1">
                                {{ routine.dificultad }}
                            </span>

                            <span class="time text-info">
                                <i class="bi bi-clock"></i>
                                {{ estimateDuration(routine) }}m
                            </span>
                        </div>

                        <div class="routine-name my-auto w-100">
                            <span class="favorite-btn">
                                <i class="bi" :class="routine.favorita ? 'bi-heart-fill text-danger' : 'bi-heart'"></i>
                            </span>
                            <div class="mb-1 text-center w-100">{{ routine.nombre }}</div>
                        </div>
                        <div class="d-flex py-1 text-center">
                            <small class="text-secondary text-align-center">
                                {{ getSummary(routine) }}
                            </small>
                        </div>
                        <button class="btn btn-aqua w-100 mt-3 text-capitalize" @click="empezarEntreno(routine.id)">
                            <i class="bi bi-play-fill my-auto"></i>
                            Empezar entrenamiento
                        </button>
                    </div>
                </div>
                <!-- CREATE -->
                <RouterLink to="/dashboard/form-routine" class="routine-card create-card">
                    <i class="bi bi-plus-circle"></i>
                    Crear rutina
                </RouterLink>
            </section>
        </div>

    </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useProfileStore } from '@/stores/profile'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import { estimateDuration, DIFFICULTY_ORDER, getSummary, formatDate } from '../../../utils/routineStats'

const router = useRouter()
const profileStore = useProfileStore()
const { profile } = storeToRefs(profileStore)
const isLoading = computed(() => profileStore.isLoading)

const search = ref('')

const routines = computed(() => profile.value.routines || [])

const sortByDifficulty = ref(false)
const showFavoritesOnly = ref(false)


function getDifficultyWeight(routine) {
    return DIFFICULTY_ORDER[routine.dificultad] ?? 999
}

const processedRoutines = computed(() => {

    let list = [...routines.value]

    if (search.value) {
        list = list.filter(r =>
            r.nombre.toLowerCase().includes(search.value.toLowerCase())
        )
    }

    if (showFavoritesOnly.value) {
        list = list.filter(r => r.favorita)
    }

    if (sortByDifficulty.value) {
        list.sort((a, b) =>
            getDifficultyWeight(a) - getDifficultyWeight(b)
        )
    }

    list.sort((a, b) => {

        if (a.favorita && !b.favorita) return -1
        if (!a.favorita && b.favorita) return 1

        if (sortByDifficulty.value) {
            return getDifficultyWeight(a) - getDifficultyWeight(b)
        }

        return 0
    })

    return list
})

/* quick start */
const lastRoutine = computed(() => {
    const workouts = profile.value.workouts || []
    if (!workouts.length) return null

    const last = workouts.at(0)
    return last.dataRoutine
})

const lastWorkout = computed(() => {
    const workouts = profile.value.workouts || []
    if (!workouts.length) return null
    const lastWorkout = workouts.at(0);
    console.log('lastWorkout:', lastWorkout)
    return lastWorkout
})

const lastRoutineMeta = computed(() => {
    if (!lastRoutine.value) return ''

    console.log(lastRoutine.value)
    return `Última sesión registrada`
})


function empezarEntreno(id) {
    router.push({
        name: 'RegisterWorkout',
        query: { id }
    })
}
</script>


<style scoped>
.routine-container {
    margin: auto;
    display: flex;
    flex-direction: column;
}

.routine-content {
    width: 80%;
}

.quick-section {
    width: 100%;
    max-width: 550px;
    margin: 10px auto;
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
    background: #0e151a;
    border-radius: 10px;
    padding: 24px;
    display: flex;
    gap: 12px;
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

.btn-start {
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* GRID */
.routine-grid {
    display: grid;
    /* auto-fit suele verse mejor cuando hay pocos elementos */
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 24px;
    width: 100%;
    /* Asegúrate de que el contenedor use todo el ancho */
}

.routine-card {
    background: #0e151a;
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

.favorite-btn {
    background: none;
    border: none;
    font-size: 1.2rem;
    opacity: .8;
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
    font-weight: 400;
}

.time {
    font-size: .8rem;
}

/* NAME */
.routine-name {
    font-size: 1.1rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 8px;
}

/* BUTTON */
.btn-aqua {
    color: #cacaca;
    border: 1px solid rgb(59, 235, 235);
    font-weight: 500;
    transition: all .3s ease;
}

.btn-aqua:hover {
    color: rgb(59, 235, 235);
    box-shadow: 0 0 8px cyan;
}


/* CREATE */
.create-card {
    border: 2px dashed rgba(255, 255, 255, .1);
    margin: 30px auto;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    text-decoration: none;
    color: #aaa;
    transition: all .3s ease;
}

.create-card:hover {
    color: rgb(59, 235, 235);
}

@media (min-width: 768px) {
    .routine-container {
        padding-left: 240px;
    }

    .quick-card {
        flex-direction: row;
    }

    .btn-start {
        width: 5rem;
        height: 5rem;

    }
}
</style>
