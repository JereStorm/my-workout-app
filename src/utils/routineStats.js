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
    if (!routine?.bloques?.length) return 0

    const avgSetWorkSeconds = 90

    let totalSets = 0
    let totalRestBetweenSets = 0

    for (const bloque of routine.bloques) {
        const sets = Number(bloque.series) || 0

        totalSets += sets

        // descansos internos del bloque
        if (sets > 1) {
            totalRestBetweenSets += (sets - 1) * (routine.descansoSeries || 0)
        }
    }

    const totalRestBetweenBlocks =
        (routine.bloques.length - 1) * (routine.descansoBloques || 0)

    const totalWork = totalSets * avgSetWorkSeconds

    const totalSeconds =
        totalWork +
        totalRestBetweenSets +
        totalRestBetweenBlocks

    const minutes = Math.round(totalSeconds / 60)

    return roundToNearest10(minutes)
}

function roundToNearest10(value) {
    return Math.round(value / 10) * 10
}


export function volumeLevel(routine) {
    const sets = countSets(routine)

    if (sets <= 10) return 'Ligero'
    if (sets <= 20) return 'Moderado'
    return 'Alto'
}

export function getSummary(routine) {
    const bloques = routine.bloques
    const totalSeries = bloques.reduce((acc, b) => acc + b.series, 0)
    const ejercicios = bloques.flatMap(b => b.ejercicios.map(e => e.nombre))
    const destacados = ejercicios.slice(0, 3).join(', ')
    return ` ${destacados}${ejercicios.length > 3 ? '...' : ''}`
}

export function formatDate(iso) {
    const dias = ['Dom.', 'Lun.', 'Mar.', 'Mié.', 'Jue.', 'Vie.', 'Sáb.'];
    const d = new Date(iso);
    const dia = dias[d.getDay()];
    const fecha = `${String(d.getDate()).padStart(2, '0')}/` +
        `${String(d.getMonth() + 1).padStart(2, '0')}/` +
        d.getFullYear();
    return `${dia} ${fecha}`;
}

export function getDifficultyIcons(dificultad) {

    const count = DIFFICULTY_ORDER[dificultad] || 0;
    return '⚡'.repeat(count) || '';
}


export const DIFFICULTY_ORDER = {
    "Muy facil": 1,
    "Facil": 2,
    "Intermedia": 3,
    "Dificil": 4,
    "Muy dificil": 5
}

export const DIFFICULTY_STYLE = {
    "Muy facil": "difficulty-very-easy",
    "Facil": "difficulty-easy",
    "Intermedia": "difficulty-medium",
    "Dificil": "difficulty-hard",
    "Muy dificil": "difficulty-extreme"
}

export const DIFFICULTY_COLOR = {
    "Muy facil": "#00c853",
    "Facil": "#4caf50",
    "Intermedia": "#ffc107",
    "Dificil": "#ff4747",
    "Muy dificil": "#c77dff"
}


export function getDifficultyClass(dificultad) {
    return DIFFICULTY_STYLE[dificultad] || ''
}
