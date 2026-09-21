/**
 * Cruza las rutinas del usuario con el catálogo global de ejercicios 
 * para asegurar que cada ejercicio tenga el nombre actualizado.
 * 
 * @param {Array} routines - Lista de rutinas crudas de la BD
 * @param {Array} exercises - Catálogo global de ejercicios del usuario
 * @returns {Array} Rutinas hidratadas
 */
export function hydrateRoutines(routines = [], exercises = []) {
    return routines.map(routine => ({
        ...routine,
        bloques: (routine.bloques || []).map(bloque => ({
            ...bloque,
            ejercicios: (bloque.ejercicios || []).map(ej => {
                if (ej.exerciseId) {
                    const ejercicioGlobal = exercises.find(ex => ex.id === ej.exerciseId);
                    if (ejercicioGlobal) {
                        return { ...ej, nombre: ejercicioGlobal.nombre };
                    }
                }
                return ej;
            })
        }))
    }));
}