<template>
    <div class="routine-detail">

        <!-- ================= HEADER ================= -->

        <header class="routine-header p-4 rounded-4 shadow-lg mb-4">
            <div class="d-flex flex-column gap-2 flex-md-row justify-content-between align-items-center mb-3">
                <h1 class="routine-title m-0 text-white fw-bold">
                    {{ rutina.nombre }}
                </h1>
                <div class="badge-difficulty" :class="difficultyClass(rutina.dificultad)">
                    <small class="text-uppercase fw-bold">{{ rutina.dificultad }}</small>
                    <span class="ms-1">{{ difficultyIcons(rutina.dificultad) }}</span>
                </div>

            </div>

            <div class="row g-2 mb-3">
                <div class="col-6">
                    <div class="info-card p-2 rounded-3 text-center">
                        <p class="d-block px-3 mx-md-0 small mb-0 text-uppercase">Descanso Series</p>
                        <span class="text-aqua fw-semibold">
                            <i class="bi bi-stopwatch"></i> {{ formatTiempoDesc(rutina.descansoSeries) }}
                        </span>
                    </div>
                </div>
                <div class="col-6">
                    <div class="info-card p-2 rounded-3 text-center">
                        <p class="d-block small mb-0 text-uppercase">Descanso Bloques</p>
                        <span class="text-aqua fw-semibold">
                            <i class="bi bi-arrow-repeat"></i> {{ formatTiempoDesc(rutina.descansoBloques) }}
                        </span>
                    </div>
                </div>
            </div>

            <div class="global-stats d-flex justify-content-around align-items-center py-2 border-top border-secondary">
                <div class="stat-item text-center">
                    <div class="text-white fw-bold h5 mb-0">{{ totalBlocks }}</div>
                    <small class="">Bloques</small>
                </div>
                <div class="v-line"></div>
                <div class="stat-item text-center">
                    <div class="text-white fw-bold h5 mb-0">{{ totalSeries }}</div>
                    <small class="">Series</small>
                </div>
                <div class="v-line"></div>
                <div class="stat-item text-center">
                    <div class="text-white fw-bold h5 mb-0">{{ totalExercises }}</div>
                    <small class="">Ejercicios</small>
                </div>
            </div>
        </header>


        <!-- ================= BLOQUES ================= -->

        <div class="blocks">

            <section v-for="(bloque, bi) in bloques" :key="bi" class="block">

                <!-- header bloque -->
                <div class="block-header ">
                    <h3 class="h5">Bloque {{ bi + 1 }}</h3>
                    <h3 class="h6">{{ bloque.series }} series</h3>
                </div>


                <!-- ejercicios -->
                <div class="exercise-list">

                    <div v-for="(ej, ei) in bloque.ejercicios" :key="ei" class="exercise-card">

                        <div class="exercise-main">

                            <div class="exercise-text">
                                <h4 class="h4">{{ ej.nombre }}</h4>

                            </div>
                            <div class="exercise-metrics">

                                <!-- etiqueta unificada del estímulo -->
                                <span class="stimulus-chip" :class="`stimulus-${getStimulus(ej)}`">
                                    {{ formatStimulus(ej) }}
                                </span>

                            </div>

                        </div>
                        <div v-if="ej.notas" class="block-note">
                            <p class="exercise-note my-auto">
                                ({{ ej.notas }})
                            </p>
                        </div>

                    </div>

                </div>


                <!-- nota bloque -->
                <div v-if="bloque.notas" class="block-note">
                    <span class="note-title">Nota</span>
                    {{ bloque.notas }}
                </div>

            </section>

        </div>

    </div>
</template>


<script>
import { formatStimulusTarget, getStimulusType } from '@/domain/stimulus'
import { getDifficultyIcons, getDifficultyClass } from '@/utils/routineStats'


export default {
    props: ['rutina'],

    computed: {

        bloques() {
            return Array.isArray(this.rutina?.bloques)
                ? this.rutina.bloques
                : []
        },

        totalBlocks() {
            return this.bloques.length
        },

        totalSeries() {
            return this.bloques.reduce(
                (t, b) => t + (Number(b.series) || 0),
                0
            )
        },

        totalExercises() {
            return this.bloques.reduce(
                (t, b) => t + (b.ejercicios?.length || 0),
                0
            )
        }
    },

    methods: {
        formatTiempoDesc(seg) {
            if (seg == null) return '-'
            const m = Math.floor(seg / 60)
            const s = seg % 60
            if (s === 0) return `${m}m`
            return `${m}m ${s}s`
        },

        getStimulus(ej) {
            return getStimulusType(ej.repeticiones, ej.tiempo)
        },

        formatStimulus(ej) {
            return formatStimulusTarget(
                ej.repeticiones,
                ej.tiempo
            )
        },

        difficultyIcons(dificultad) {
            return getDifficultyIcons(dificultad)
        },

        difficultyClass: getDifficultyClass
    }

}
</script>

<style scoped>
.routine-detail {
    margin: auto;
    padding: 16px;
}


/* ===== HEADER ===== */
.routine-header {
    border: 1px solid rgba(255, 255, 255, 0.05);
}

.routine-title {
    font-size: 1.5rem;
    letter-spacing: -0.5px;
    text-shadow: 0 0 10px rgba(0, 242, 255, 0.2);
}


/* Tarjetas de descanso */
.info-card {
    border: 1px solid rgba(255, 255, 255, 0.05);
    transition: transform 0.2s ease;
}

.text-aqua {
    color: #00f2ff;
    text-shadow: 0 0 8px rgba(0, 242, 255, 0.15);
}

/* Líneas separadoras verticales */
.v-line {
    width: 1px;
    height: 25px;
    background-color: rgba(255, 255, 255, 0.1);
}

/* Ajuste de stats */
.stat-item small {
    font-size: 0.65rem;
    text-transform: uppercase;
    letter-spacing: 1px;
}


/* ===== BLOQUES ===== */

.blocks {
    margin-top: 22px;
    display: flex;
    flex-direction: column;
    gap: 28px;
}

.block-header {
    display: flex;
    justify-content: space-between;
    font-size: .8rem;
    font-weight: 700;
    opacity: .9;
}


/* ===== EJERCICIO ===== */

.exercise-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.exercise-card {

    border-radius: 12px;
    padding: 14px;
    border: 1px solid rgba(255, 255, 255, .06);
}

.exercise-main {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.exercise-text {
    text-align: start;
}

.exercise-text h4 {
    margin: 0;
    font-size: .95rem;
}

.exercise-metrics {
    min-width: fit-content;
    margin-left: 30px;
}

.exercise-note {
    text-align: center;
    font-size: .75rem;
    opacity: .9;
}


/* ===== METRICS ===== */

.exercise-stimulus {
    font-size: 0.75rem;
    padding: 4px 10px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: #ccc;
    font-weight: 500;
}

.metric {
    text-align: right;
}

.metric-value {
    font-size: 1.1rem;
    font-weight: 700;
    color: #13ecec;
}

.metric-label {
    font-size: .7rem;
    opacity: .6;
}


/* ===== NOTA BLOQUE ===== */

.block-note {
    margin-top: 8px;
    padding: 10px;
    border-radius: 10px;
    background: rgba(0, 0, 0, .25);
    font-size: .75rem;
    opacity: .8;
}

.note-title {
    color: #13ecec;
    font-weight: 700;
    margin-right: 6px;
}

@media only screen and (min-width: 768px) {
    .routine-detail {
        min-width: 600px;
    }
}
</style>
