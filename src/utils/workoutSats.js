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

export function levelFromVolume(volume) {
    if (volume < 1000) return 1
    if (volume < 5000) return 2
    if (volume < 15000) return 3
    if (volume < 40000) return 4
    if (volume < 80000) return 5
    return 6
}
export const LEVEL_THRESHOLDS = [0, 1000, 5000, 15000, 40000, 80000]

export function calculateStreaks(workouts) {
    if (!workouts.length) return { current: 0, best: 0 }

    const uniqueDays = [...new Set(
        workouts.map(w => new Date(w.date).toISOString().slice(0, 10))
    )].sort().reverse()

    let current = 0
    let best = 0
    let temp = 1

    for (let i = 0; i < uniqueDays.length - 1; i++) {
        const today = new Date(uniqueDays[i])
        const prev = new Date(uniqueDays[i + 1])

        const diff = (today - prev) / (1000 * 60 * 60 * 24)

        if (diff === 1) {
            temp++
        } else {
            best = Math.max(best, temp)
            temp = 1
        }
    }

    best = Math.max(best, temp)

    // calcular current streak desde hoy
    const today = new Date().toISOString().slice(0, 10)
    const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10)

    if (uniqueDays[0] === today || uniqueDays[0] === yesterday) {
        current = temp
    }

    return { current, best }
}
