export function levelFromVolume(volume) {
    if (volume < 1000) return 1
    if (volume < 5000) return 2
    if (volume < 15000) return 3
    if (volume < 40000) return 4
    if (volume < 80000) return 5
    return 6
}
export const LEVEL_THRESHOLDS = [0, 1000, 5000, 15000, 40000, 80000]
