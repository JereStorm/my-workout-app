<template>
    <div class="px-5 py-1 pb-3 rounded-xl shadow-md w-100 routine-detail">
        <!-- Header: nombre, dificultad, favorita, fecha y totales -->
        <div class="d-flex justify-content-between">
            <h2 class="h3 text-lg font-semibold mb-1">{{ rutina.nombre }}</h2>
            <div class="mb-2">
                <button class="fav-btn" :aria-pressed="rutina.favorita" title="Favorita"
                    style="background:transparent;border:none;cursor:default">
                    <span v-if="rutina.favorita" style="color:#ef4444;font-size:1.2rem">❤️</span>
                    <span v-else style="font-size:1.2rem">🤍</span>
                </button>
            </div>
        </div>
        <div class="d-flex flex-wrap justify-content-between align-items-center my-3">
            <div class="text-sm text-gray-500 d-flex flex-column align-items-start">
                <span class=""><strong>Dificultad:</strong>
                    <span v-html="difficultyIcons"></span>
                    <span class="ml-1">({{ rutina.dificultad }})</span>
                </span>
                <span class=""><strong>Creada:</strong> {{ formattedDate }}</span>
            </div>


            <div class="d-flex justify-content-between flex-column text-sm text-end text-gray-500">
                <div>
                    Bloques (<strong>{{ rutina.bloques?.length ?? 0 }}</strong>)
                </div>
                <div>
                    Series (<strong>{{ totalSeries }}</strong>)
                </div>
                <div>
                    Ejercicios (<strong>{{ totalExercises }}</strong>)
                </div>
            </div>
        </div>

        <div class="text-start text-sm text-gray-500">
            <p class="mb-1">
                <strong>Descanso entre bloques:</strong> <span>{{ formatTiempo(rutina.descansoBloques) }} Min.</span>
            </p>
            <p>
                <strong>Descanso entre series:</strong> <span>{{ formatTiempo(rutina.descansoSeries) }} Min.</span>
            </p>
        </div>
        <hr class="text-danger">
        <div v-for="(bloque, indexBloque) in rutina.bloques" :key="indexBloque" class="my-3">
            <div class="d-flex justify-content-between align-items-baseline">
                <p class="h5 text-lg text-start font-semibold mb-2">{{ indexBloque + 1 }}° Bloque </p>
                <p class="h5 text-sm text-end text-gray-400 mb-2">{{ bloque.series }} Series</p>
            </div>
            <ul class="space-y-2 list-unstyled">
                <li v-for="(ejercicio, indexEjercicio) in bloque.ejercicios" :key="indexEjercicio"
                    class="p-3 pt-1 pb-0 rounded">
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
                        <hr class="my-3">
                        <div class="text-sm d-flex gap-1">

                            <p class="mb-0"><strong>Notas: </strong>{{ ejercicio.notas }}</p>
                        </div>
                    </div>

                    <hr v-if="indexEjercicio != bloque.ejercicios.length - 1" class="text-info mb-0">
                </li>
                <hr class="mb-0 text-danger">
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: ['rutina'],
    computed: {
        totalSeries() {
            if (!this.rutina || !Array.isArray(this.rutina.bloques)) return 0;
            return this.rutina.bloques.reduce((acc, b) => acc + (b.series || 0), 0);
        },
        totalExercises() {
            if (!this.rutina || !Array.isArray(this.rutina.bloques)) return 0;
            return this.rutina.bloques.reduce((acc, b) => acc + ((b.ejercicios && b.ejercicios.length) || 0), 0);
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
        }
    }
}
</script>
<style scoped>
.routine-detail {
    max-width: 800px;
}
</style>