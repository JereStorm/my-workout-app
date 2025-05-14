<template>
    <div class="px-2 py-1 rounded-xl shadow-md">
        <div class="text-start text-sm text-gray-500">
            <p class="mb-1">
                Descanso entre bloques: {{ rutina.descansoBloques }}s
            </p>
            <p>
                Descanso entre series: {{ rutina.descansoSeries }}s
            </p>
        </div>
        <hr>
        <div v-for="(bloque, indexBloque) in rutina.bloques" :key="indexBloque" class="my-3">
            <div class="d-flex justify-content-between align-items-baseline">
                <p class="h5 text-lg text-start font-semibold mb-2">{{ indexBloque + 1 }}° Bloque </p>
                <p class="h5 text-sm text-end text-gray-400 mb-2">{{ bloque.series }} Series</p>
            </div>
            <ul class="space-y-2 list-unstyled">
                <li v-for="(ejercicio, indexEjercicio) in bloque.ejercicios" :key="indexEjercicio" class="p-3 rounded">
                    <div class="font-medium mb-4">
                        <h4>{{ ejercicio.nombre }}</h4>
                    </div>
                    <div class="text-sm mt-2 d-flex justify-content-center gap-5 align-items-baseline">
                        <div class="d-flex flex-column">
                            <span>Reps</span> <span>{{ ejercicio.repeticiones }}</span>
                        </div>
                        <div class="d-flex flex-column">
                            <span>Tiempo</span> <span v-if="ejercicio.tiempo != 0">{{ ejercicio.tiempo }}s</span>
                            <span v-else>-</span>
                        </div>

                        <div class="d-flex flex-column">
                            <span>Esfuerzo</span> <span v-if="ejercicio.esfuerzo">{{ ejercicio.esfuerzo }}
                                RIR</span>
                            <span v-else>-</span>
                        </div>

                    </div>

                    <hr v-if="indexEjercicio != bloque.ejercicios.length - 1" class="mb-0">
                </li>
                <hr class="mb-0">
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: ['rutina']
}
</script>
