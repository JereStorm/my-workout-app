export function countBloques(routine) {
    return routine.bloques?.length || 0
}

export function countEjercicios(routine) {
    return routine.bloques?.reduce((acc, b) => acc + (b.ejercicios?.length || 0), 0) || 0
}

export function countSets(routine) {
    return routine.bloques?.reduce((acc, b) => acc + (b.series || 0), 0) || 0
}

export function estimateDuration(routine) {
    // regla simple: 90s por set promedio
    const sets = countSets(routine)
    return Math.round((sets * 90) / 60) // minutos
}

export function volumeLevel(routine) {
    const sets = countSets(routine)

    if (sets <= 10) return 'Ligero'
    if (sets <= 20) return 'Moderado'
    return 'Alto'
}
