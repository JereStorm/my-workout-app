export const StimulusType = {
    REPS_ONLY: 'reps_only',
    REPS_TIME: 'reps_time',
    HOLD_TIME: 'hold_time',
    ONE_REP: 'one_rep',
    FREE: 'free'
}


/**
 * Determina el tipo de ejercicio según su meta programada.
 */
export function getStimulusType(reps, seconds) {

    if (reps == 1 && seconds == 0) return StimulusType.ONE_REP

    if (reps > 1 && seconds > 0) return StimulusType.REPS_TIME
    if (reps === 1 && seconds > 0) return StimulusType.HOLD_TIME
    if (reps > 1 && (!seconds || seconds === 0)) return StimulusType.REPS_ONLY

    return StimulusType.FREE
}


/**
 * Devuelve etiqueta estándar del estímulo programado.
 */
export function formatStimulusTarget(reps, seconds) {

    const type = getStimulusType(reps, seconds)

    switch (type) {

        case StimulusType.REPS_TIME:
            return `${reps} reps × ${seconds}s`

        case StimulusType.HOLD_TIME:
            return `Hold ${seconds}s`

        case StimulusType.REPS_ONLY:
            return `${reps} reps`

        case StimulusType.ONE_REP:
            return `${reps} rep`
        default:
            return 'Libre'
    }
}


/**
 * Devuelve etiqueta del resultado real.
 */
export function formatStimulusActual(reps, seconds) {
    return formatStimulusTarget(reps, seconds)
}


/**
 * Volumen equivalente en reps (para métricas).
 * Hold no suma volumen.
 */
export function getStimulusVolume(reps, seconds) {

    const type = getStimulusType(reps, seconds)

    if (type === StimulusType.REPS_ONLY) return reps
    if (type === StimulusType.REPS_TIME) return reps

    return 0
}
