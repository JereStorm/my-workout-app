<template>
    <div class="row g-3 mb-4 mx-2">

        <div class="row g-3 mx-auto">

            <StatCard icon="bi-grid" label="Entrenos" :value="stats?.totalWorkouts || 0" extra="Totales" />

            <StatCard icon="bi-fire" label="Racha" :value="stats?.currentStreak || 0" extra="Días activos" />

        </div>


        <div class="col-12 mx-auto">
            <div class="card stat-card text-secondary">
                <div class="card-body d-flex justify-content-between align-items-center">

                    <div>
                        <div class="stat-label">
                            <i class="bi bi-bar-chart"></i>
                            Volumen Total
                        </div>

                        <div class="stat-value text-light">
                            {{ stats?.totalVolume || 0 }} / {{ stats?.nextLevelVolume || 10000 }} <small>Reps</small>
                        </div>
                    </div>

                    <div class="progress-circle text-light" :style="progressStyle">
                        {{ progressPercent }}
                    </div>


                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
import { computed } from 'vue'
import StatCard from './StatCard.vue'

const props = defineProps({
    stats: Object
})

const progress = computed(() => props.stats?.levelProgress || 0)

const progressPercent = computed(() =>
    Math.round(progress.value * 100) + '%'
)

const progressStyle = computed(() => ({
    background: `
        conic-gradient(
            #00ffff ${progress.value * 360}deg,
            rgba(255,255,255,.08) 0deg
        )
    `
}))
</script>


<style scoped>
.stat-card {
    background: #121414;
    border: 1px solid rgba(255, 255, 255, .05);
    border-radius: 16px;
    transition: all .25s ease;
}

.stat-card:hover {
    transform: translateY(-4px);
    border-color: rgba(0, 255, 255, .25);
    box-shadow: 0 10px 25px rgba(0, 255, 255, .08);
}

.stat-label {
    font-size: .90rem;
    text-transform: uppercase;
    opacity: .6;
    display: flex;
    gap: 6px;
}

.stat-label i {
    color: #00ffff;
}

.stat-value {
    font-size: 1.8rem;
    font-weight: 600;
}

.progress-circle {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    position: relative;
}

/* círculo interior */
.progress-circle::after {
    content: "";
    position: absolute;
    width: 92%;
    height: 92%;
    background: #121414;
    border-radius: 50%;
}

.progress-circle {
    z-index: 0;
}

.progress-circle::after {
    z-index: -1;
}
</style>
