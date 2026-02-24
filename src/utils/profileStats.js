export const LEVEL_THRESHOLDS = [0, 1000, 5000, 15000, 40000, 80000];
export const MAX_LEVEL_VOL = 150000;

const TITULOS = [
    { min: 0, label: "Recluta del Parque" },      // Nivel 1
    { min: 1000, label: "Iniciado de Hierro" },   // Nivel 2
    { min: 5000, label: "Atleta Promesa" },      // Nivel 3
    { min: 15000, label: "Especialista en Barras" }, // Nivel 4
    { min: 40000, label: "Maestro de la Gravedad" }, // Nivel 5
    { min: 80000, label: "Leyenda de Acero" }     // Nivel 6
];

export function getLevelInfo(totalVolume) {
    // 1. Encontrar el índice del nivel
    const levelIndex = LEVEL_THRESHOLDS.findLastIndex(t => totalVolume >= t);

    // Si no encuentra nada (totalVolume < 0), por defecto nivel 1 (índice 0)
    const safeIndex = levelIndex === -1 ? 0 : levelIndex;
    const level = safeIndex + 1;

    // 2. Umbrales para la barra de progreso
    const currentThreshold = LEVEL_THRESHOLDS[safeIndex];
    const nextThreshold = LEVEL_THRESHOLDS[safeIndex + 1] || MAX_LEVEL_VOL;

    // 3. Títulos (Actual y Siguiente para motivar)
    const currentTitle = TITULOS[safeIndex]?.label || "Atleta";
    const nextTitle = TITULOS[safeIndex + 1]?.label || "Nivel Máximo";

    // 4. Cálculo de progreso (0 a 1)
    let progress = (totalVolume - currentThreshold) / (nextThreshold - currentThreshold);
    progress = Math.min(1, Math.max(0, progress));

    return {
        level,
        currentTitle,
        nextTitle,
        progress,
        currentThreshold,
        nextThreshold,
        isMaxLevel: level >= LEVEL_THRESHOLDS.length
    };
}