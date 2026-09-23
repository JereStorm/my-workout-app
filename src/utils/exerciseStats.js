/**
 * Calcula la cantidad de rutinas distintas que incluyen un ejercicio específico.
 * @param {Object} exercise - El ejercicio a evaluar (puede buscarse por su id).
 * @param {Array} routines - El listado completo de rutinas del store.
 * @returns {number} Cantidad de rutinas que utilizan el ejercicio.
 */
export function countRoutinesWithExercise(exercise, routines) {
    if (!exercise || !routines || !routines.length) return 0;

    const exerciseId = exercise.id;
    const exerciseName = exercise.nombre?.trim().toLowerCase();

    let count = 0;

    for (const routine of routines) {
        if (!routine.bloques || !routine.bloques.length) continue;

        const hasExercise = routine.bloques.some(bloque => {
            if (!bloque.ejercicios) return false;
            return bloque.ejercicios.some(ex => {
                // Comparamos por ID si existe, o por coincidencia de nombre exacto
                if (ex.exerciseId && exerciseId) {
                    return ex.exerciseId === exerciseId;
                }
                if (ex.id && exerciseId) {
                    return ex.id === exerciseId;
                }
                if (ex.nombre && exerciseName) {
                    return ex.nombre.trim().toLowerCase() === exerciseName;
                }
                return false;
            });
        });

        if (hasExercise) {
            count++;
        }
    }

    return count;
}

/**
 * Calcula el RM (Repetición Máxima) en repeticiones brutas a partir del historial de entrenamientos.
 * Revisa los registros (logs) donde se hayan guardado repeticiones reales.
 * @param {Object} exercise - El ejercicio a evaluar.
 * @param {Array} workouts - El listado histórico de entrenamientos del store.
 * @returns {number} El récord máximo de repeticiones en una sola serie para este ejercicio.
 */
export function calculateExerciseMaxReps(exercise, workouts) {
    if (!exercise || !workouts || !workouts.length) return 0;

    const exerciseId = exercise.id;
    const exerciseName = exercise.nombre?.trim().toLowerCase();
    let maxReps = 0;

    for (const workout of workouts) {
        if (!workout.logs || !workout.logs.length) continue;

        for (const log of workout.logs) {
            // Verificamos si el log pertenece a este ejercicio
            const matchesId = log.exerciseId === exerciseId || log.id === exerciseId;
            const matchesName = log.nombre && exerciseName && log.nombre.trim().toLowerCase() === exerciseName;

            if (matchesId || matchesName) {
                // Evaluamos el array de repeticiones reales hechas en las series (ej: actualReps: [10, 8, 7])
                if (log.actualReps && Array.isArray(log.actualReps)) {
                    for (const reps of log.actualReps) {
                        const numReps = Number(reps) || 0;
                        if (numReps > maxReps) {
                            maxReps = numReps;
                        }
                    }
                }
            }
        }
    }

    return maxReps;
}