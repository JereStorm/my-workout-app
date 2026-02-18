export function sumWorkoutVolume(workout) {
    if (!workout.logs) return 0

    return workout.logs.reduce((total, log) => {
        if (!log.actualReps) return total
        return total + log.actualReps.reduce((a, b) => a + b, 0)
    }, 0)
}

export function countWorkoutBlocks(workout) {
    return workout.logs?.length || 0
}


export function calculateStreaks(workouts) {
    if (!workouts?.length) return { current: 0, best: 0 }

    // ===== normalizar fechas en LOCAL (no UTC)
    const toLocalDay = (date) => {
        const d = new Date(date)
        return new Date(d.getFullYear(), d.getMonth(), d.getDate())
    }

    const uniqueDays = [
        ...new Set(workouts.map(w => toLocalDay(w.date).getTime()))
    ]
        .map(t => new Date(t))
        .sort((a, b) => b - a) // más reciente primero


    // ===== calcular BEST STREAK
    let best = 1
    let streak = 1

    for (let i = 0; i < uniqueDays.length - 1; i++) {
        const diff = (uniqueDays[i] - uniqueDays[i + 1]) / 86400000

        if (diff === 1) streak++
        else {
            best = Math.max(best, streak)
            streak = 1
        }
    }

    best = Math.max(best, streak)


    // ===== calcular CURRENT STREAK (desde el más reciente)
    let current = 0

    if (uniqueDays.length) {
        const today = toLocalDay(new Date())
        const diffToday = (today - uniqueDays[0]) / 86400000

        // solo hay racha si entrenaste hoy o ayer
        if (diffToday === 0 || diffToday === 1) {
            current = 1

            for (let i = 0; i < uniqueDays.length - 1; i++) {
                const diff = (uniqueDays[i] - uniqueDays[i + 1]) / 86400000
                if (diff === 1) current++
                else break
            }
        }
    }

    return { current, best }
}
