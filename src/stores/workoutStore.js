// src/stores/workoutStore.js
import { defineStore } from 'pinia';
import { WorkoutService } from '@/services/workoutService';
import {
    calculateStreaks,
    sumWorkoutVolume
} from '@/utils/workoutStats';
import { getLevelInfo } from '@/utils/profileStats';

export const useWorkoutStore = defineStore('workout', {
    state: () => ({
        workouts: [],
        isLoading: false,
    }),

    getters: {
        /**
         * Las estadísticas del atleta se calculan automáticamente de forma reactiva 
         * cada vez que la lista de entrenamientos cambia.
         */
        userStats: (state) => {
            const workouts = state.workouts || [];

            // Calculamos volumen total
            const totalVolume = workouts.reduce((sum, w) => sum + sumWorkoutVolume(w), 0);

            // Delegamos la lógica de niveles y progresión
            const levelInfo = getLevelInfo(totalVolume);

            // Delegamos el cálculo de rachas (actual y mejor racha)
            const { current, best } = calculateStreaks(workouts);

            return {
                totalWorkouts: workouts.length,
                totalVolume,
                currentStreak: current,
                bestStreak: best,
                level: levelInfo.level,
                levelProgress: levelInfo.progress,
                nextLevelVolume: levelInfo.nextThreshold,
                isMaxLevel: levelInfo.isMaxLevel
            };
        },

        getWorkouts: (state) => state.workouts,

        getWorkoutLocal: (state) => (id) => {
            return state.workouts.find(w => w.id === id);
        },
    },

    actions: {
        async fetchWorkouts(userId) {
            this.isLoading = true;
            try {
                this.workouts = await WorkoutService.fetchByUserId(userId);
            } finally {
                this.isLoading = false;
            }
        },

        async getDoneWorkout(workoutId) {
            try {
                return await WorkoutService.fetchById(workoutId);
            } catch (error) {
                throw error;
            }
        },

        async registerWorkout(data, userId) {
            if (!userId) return;
            try {
                const payload = { ...data, idUser: userId };
                const id = await WorkoutService.create(payload);

                // Al insertar aquí, el getter de 'userStats' se recalcula automáticamente
                this.workouts.unshift({ id, ...payload });
                return id;
            } catch (error) {
                throw error;
            }
        },

        async deleteWorkout(workoutId) {
            try {
                await WorkoutService.delete(workoutId);
                this.workouts = this.workouts.filter(w => w.id !== workoutId);
            } catch (error) {
                throw error;
            }
        }
    }
});