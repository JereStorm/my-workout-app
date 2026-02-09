<template>
    <div class="px-3 md-px-5 py-1 py-3 rounded-xl shadow-md w-100 routine-detail">
        <!-- Header: nombre, dificultad, favorita, fecha y totales -->
        <div class="d-flex justify-content-between">
            <h2 class="h2 text-lg font-semibold mb-1">{{ rutina.nombre }}</h2>
            <div class="mb-2 d-flex align-items-baseline gap-3">
                <span class="d-flex">
                    <span class="ml-1 h5 me-2">{{ rutina.dificultad }}</span>
                    <span v-html="difficultyIcons"></span>
                </span>
                <button @click.stop="toggleFavorito()" class="fav-btn" :aria-pressed="rutina.favorita" title="Favorita">
                    <span>{{ rutina?.favorita ? "❤️" : "🤍" }}</span>
                </button>
            </div>
        </div>
        <div class="px-2 px-md-5 d-flex flex-column align-items-center my-3">
            <div class="text-gray-500 d-flex flex-column align-items-start">

            </div>

            <div class="d-flex justify-content-between mt-3 gap-3 mx-auto text-gray-500">
                <div class="h5">
                    Bloques ({{ totalBlocks }})
                </div>
                <div class="h5">
                    Series ({{ totalSeries }})
                </div>
                <div class="h5">
                    Ejercicios ({{ totalExercises }})
                </div>
            </div>
        </div>

        <div class="px-2 d-flex gap-5 justify-content-center mt-4 px-md-5 text-start text-sm text-gray-500">
            <h5 class="mb-1 h5">
                Descanso bloques: <span>{{ formatTiempo(rutina.descansoBloques) }} Min.</span>
            </h5>
            <h5 class="mb-1 h5">
                Descanso series: <span>{{ formatTiempo(rutina.descansoSeries) }} Min.</span>
            </h5>
        </div>
        <hr class="text-danger">
        <div v-for="(bloque, indexBloque) in rutina.bloques" :key="indexBloque" class="my-3 ">
            <div class="d-flex justify-content-between align-items-baseline">
                <p class="h5 text-lg text-start font-semibold mb-2">{{ indexBloque + 1 }}° Bloque </p>
                <p class="h5 text-sm text-end text-gray-400 mb-2">{{ bloque.series }} Series</p>
            </div>
            <ul class="space-y-2 list-unstyled border-cards bg-block">
                <li v-for="(ejercicio, indexEjercicio) in bloque.ejercicios" :key="indexEjercicio"
                    class="p-3 rounded bg-exercise">
                    <div class="font-medium mb-3">
                        <h4 class="mb-0">{{ ejercicio.nombre }}</h4>
                    </div>
                    <div class="text-sm d-flex justify-content-center gap-5 align-items-baseline">
                        <div class="d-flex flex-column">
                            <span>Reps</span> <span>{{ ejercicio.repeticiones ?? '-' }}</span>
                        </div>
                        <div class="d-flex flex-column">
                            <span>Tiempo</span>
                            <span v-if="ejercicio.tiempo != null && ejercicio.tiempo > 0">{{ ejercicio.tiempo }}s</span>
                            <span v-else>-</span>
                        </div>

                        <!-- <div class="d-flex flex-column">
                            <span>Esfuerzo</span>
                            <span v-if="ejercicio.esfuerzo && ejercicio.esfuerzo > 0">{{ ejercicio.esfuerzo }}
                                RIR</span>
                            <span v-else>-</span>
                        </div> -->

                    </div>
                    <div v-if="ejercicio.notas">
                        <hr class="my-3 mx-3">
                        <div class="text-sm d-flex gap-1">
                            <p class="mb-0 mx-md-3">Notas: {{ ejercicio.notas }}</p>
                        </div>
                    </div>

                    <hr v-if="indexEjercicio != bloque.ejercicios.length - 1" class="text-info mb-3">
                </li>
                <div v-if="bloque.notas" class="text-start pb-3">
                    <hr class="my-3 mx-3">
                    <div class="text-sm d-flex">
                        <p class="mb-0 mx-md-3">Notas bloque: {{ bloque.notas }}</p>
                    </div>
                </div>
            </ul>
            <hr class="my-3 mx-3">

        </div>

    </div>
</template>

<script>
import { useProfileStore } from '@/stores/profile';

export default {
    props: ['rutina'],
    computed: {
        bloques() {
            return Array.isArray(this.rutina?.bloques) ? this.rutina.bloques : [];
        },

        totalBlocks() {
            return this.bloques.length;
        },

        totalSeries() {
            return this.bloques.reduce(
                (total, bloque) => total + (Number(bloque.series) || 0),
                0
            );
        },
        totalExercises() {
            return this.bloques.reduce(
                (total, bloque) => total + (bloque.ejercicios?.length || 0),
                0
            );
        },
        formattedDate() {
            if (!this.rutina || !this.rutina.fechaCreacion) return '-';
            try {
                const d = new Date(this.rutina.fechaCreacion);
                return d.toLocaleString();
            } catch (e) {
                return this.rutina.fechaCreacion;
            }
        },
        difficultyIcons() {
            const map = {
                'Muy facil': 1,
                'Facil': 2,
                'Intermedia': 3,
                'Dificil': 4,
                'Muy dificil': 5
            };
            const count = map[this.rutina?.dificultad] || 0;
            return '⚡'.repeat(count) || '';
        }
    },
    methods: {
        formatTiempo(segundos) {
            if (segundos == null) return '-';
            const m = Math.floor(segundos / 60);
            const s = segundos % 60;
            // Mostrar minutos cuando es múltiplo de 60 (ej: 60 -> 1)
            if (s === 0) return String(m);
            const mm = String(m).padStart(2, '0');
            const ss = String(s).padStart(2, '0');
            return `${mm}:${ss}`;
        },
        toggleFavorito() {
            const profileStore = useProfileStore();
            profileStore.toggleFavorita(this.rutina.id, this.rutina.favorita);
            this.rutina.favorita = !this.rutina.favorita;
        }
    }
}
</script>
<style scoped>
.routine-detail {
    max-width: 800px;
}

.fav-btn {
    background-color: transparent;
    border: none;
    transition: all 0.3s ease;
    font-size: 1.5rem;
}

.fav-btn:hover {
    transform: scale(1.2);
    cursor: pointer;
}
</style>