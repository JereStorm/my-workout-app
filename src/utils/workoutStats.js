export const sumWorkoutVolume = (workout) => {
    let volume = 0;
    if (!workout.blocks || !Array.isArray(workout.blocks)) return 0;

    workout.blocks.forEach(block => {
        if (!block.setLogs || !Array.isArray(block.setLogs)) return;
        block.setLogs.forEach(set => {
            if (!set.completedReps || !Array.isArray(set.completedReps)) return;
            volume += set.completedReps.reduce((acc, curr) => acc + (Number(curr) || 0), 0);
        });
    });

    return volume;
};

export function sumWorkoutVolumePerWeek(workouts) {
    if (!workouts || !Array.isArray(workouts)) return {}

    return workouts.reduce((acc, workout) => {
        if (!workout.date) return acc

        const date = new Date(workout.date)
        if (isNaN(date.getTime())) return acc

        // Cálculo estándar de la semana ISO (Año + Número de Semana, ej: "2026-W39")
        const targetDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()))
        const dayNum = targetDate.getUTCDay() || 7
        targetDate.setUTCDate(targetDate.getUTCDate() + 4 - dayNum)
        const yearStart = new Date(Date.UTC(targetDate.getUTCFullYear(), 0, 1))
        const weekNo = Math.ceil(((targetDate - yearStart) / 86400000 + 1) / 7)
        
        const weekKey = `${targetDate.getUTCFullYear()}-W${String(weekNo).padStart(2, '0')}`

        // Calculamos el volumen del entrenamiento actual
        const workoutVolume = sumWorkoutVolume(workout)

        // Acumulamos en la semana correspondiente
        if (!acc[weekKey]) {
            acc[weekKey] = 0
        }
        acc[weekKey] += workoutVolume

        return acc
    }, {})
}
export function countWorkoutBlocks(workout) {
    return workout.blocks?.length || 0;
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
