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
 * Revisa los registros (steps y logs) sincronizados por índice.
 * @param {Object} exercise - El ejercicio a evaluar.
 * @param {Array} workouts - El listado histórico de entrenamientos del store.
 * @returns {number} El récord máximo de repeticiones en una sola serie para este ejercicio.
 */
export function calculateExerciseMaxReps(exercise, workouts) {
    if (!exercise || !workouts || !workouts.length) return 0;

    const exerciseId = exercise.id;
    const exerciseName = exercise.nombre?.trim().toLowerCase().replace(/\s+/g, ' ');
    let maxReps = 0;

    for (const workout of workouts) {
        if (!workout.steps || !Array.isArray(workout.steps)) continue;

        // Recorremos los steps del workout
        workout.steps.locForEach ? null : workout.steps.forEach((step, index) => {
            if (!step.ejercicios || !Array.isArray(step.ejercicios)) return;

            // Verificamos si este step incluye el ejercicio que buscamos
            const perteneceAlEjercicio = step.ejercicios.some(ej => {
                const matchesId = ej.exerciseId === exerciseId || ej.id === exerciseId;
                const ejName = ej.nombre?.trim().toLowerCase().replace(/\s+/g, ' ');
                const matchesName = ejName && exerciseName && ejName === exerciseName;
                return matchesId || matchesName;
            });

            if (perteneceAlEjercicio) {
                // Buscamos las repeticiones reales en su log correspondiente usando el índice del step
                const logCorrespondiente = workout.logs && workout.logs[index];
                
                if (logCorrespondiente && logCorrespondiente.actualReps && Array.isArray(logCorrespondiente.actualReps)) {
                    for (const reps of logCorrespondiente.actualReps) {
                        const numReps = Number(reps) || 0;
                        if (numReps > maxReps) {
                            maxReps = numReps;
                        }
                    }
                }
            }
        });
    }

    return maxReps;
}