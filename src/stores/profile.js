import { defineStore } from 'pinia';
import { RoutineService } from '@/services/routineService';
import { WorkoutService } from '@/services/workoutService';
import { ProfileService } from '@/services/profileService'; // Asumiendo que moviste setNickname aquí
import {
    calculateStreaks,
    LEVEL_THRESHOLDS,
    levelFromVolume,
    sumWorkoutVolume
} from '@/utils/workoutStats';

export const useProfileStore = defineStore('profile', {
    state: () => ({
        profile: {
            id: null,
            email: '',
            nickname: '',
            routines: [],
            workouts: [],
        },
        isLoading: false,
    }),

    getters: {
        /**
         * Las estadísticas se calculan automáticamente cada vez que 
         * el array de workouts cambia. Son reactivas y cacheadas.
         */
        userStats: (state) => {
            const workouts = state.profile.workouts || [];
            if (workouts.length === 0) {
                return {
                    totalWorkouts: 0, totalVolume: 0, currentStreak: 0,
                    bestStreak: 0, level: 1, levelProgress: 0,
                    nextLevelVolume: LEVEL_THRESHOLDS[1]
                };
            }

            console.log(workouts)

            const totalVolume = workouts.reduce((sum, w) => sum + sumWorkoutVolume(w), 0);
            const level = levelFromVolume(totalVolume);
            const { current, best } = calculateStreaks(workouts);

            const prevVol = LEVEL_THRESHOLDS[level - 1] ?? 0;
            const nextVol = LEVEL_THRESHOLDS[level] ?? 100000;
            let progress = (totalVolume - prevVol) / (nextVol - prevVol);
            progress = Math.min(1, Math.max(0, progress));

            return {
                totalWorkouts: workouts.length,
                totalVolume,
                currentStreak: current,
                bestStreak: best,
                level,
                levelProgress: progress,
                nextLevelVolume: nextVol
            };
        },

        getNickname: (state) => state.profile.nickname,
        getUserRoutines: (state) => state.profile.routines,
        getWorkouts: (state) => state.profile.workouts,
    },

    actions: {
        /**
         * Carga inicial de todo el perfil.
         */
        async loadProfile(uid, email) {
            this.isLoading = true;
            try {
                // Ejecutamos peticiones en paralelo para mayor velocidad
                const [routines, workouts, profileData] = await Promise.all([
                    RoutineService.fetchByUserId(uid),
                    WorkoutService.fetchByUserId(uid),
                    ProfileService.getProfile(uid)
                ]);

                this.profile = {
                    id: uid,
                    email: email,
                    nickname: profileData?.nickname || '',
                    routines: routines,
                    workouts: workouts
                };
            } finally {
                this.isLoading = false;
            }
        },

        // --- ACCIONES DE NICKNAME ---
        async setNickname(newNickname) {
            if (!this.profile.id) return;
            try {
                await ProfileService.updateNickname(this.profile.id, newNickname);

                this.profile.nickname = newNickname;

            } catch (error) { /* El errorHandler ya notificó al usuario */ }
        },

        // --- ACCIONES DE RUTINAS ---
        async createRoutine(routineData) {
            try {
                const payload = { ...routineData, idUser: this.profile.id };
                const id = await RoutineService.create(payload);
                this.profile.routines.unshift({ id, ...payload });
                return id;
            } catch (error) { throw error; }
        },

        async updateRoutine(routine) {
            try {
                await RoutineService.update(routine.id, routine);
                const index = this.profile.routines.findIndex(r => r.id === routine.id);
                if (index !== -1) this.profile.routines.splice(index, 1, routine);
            } catch (error) { throw error; }
        },

        async deleteRoutine(routineId) {
            try {
                await RoutineService.delete(routineId);
                this.profile.routines = this.profile.routines.filter(r => r.id !== routineId);
            } catch (error) { throw error; }
        },

        async toggleFavorite(routineId, currentValue) {
            try {
                const newValue = !currentValue;
                // Actualizamos localmente para respuesta instantánea
                const routine = this.profile.routines.find(r => r.id === routineId);
                if (routine) routine.favorita = newValue;
                // Luego sincronizamos con Firebase
                await RoutineService.toggleFavorite(routineId, newValue);

            } catch (error) { throw error; }
        },

        // --- ACCIONES DE WORKOUTS ---
        async getDoneWorkout(workoutId) {
            try {
                return await WorkoutService.fetchById(workoutId);
            } catch (error) { throw error; }
        },
        async registerWorkout(data) {
            if (!this.profile.id) return;
            try {
                const payload = { ...data, idUser: this.profile.id };
                const id = await WorkoutService.create(payload);

                // Al insertar aquí, 'userStats' se recalcula solo
                this.profile.workouts.unshift({ id, ...payload });
                return id;
            } catch (error) { throw error; }
        },

        async deleteWorkout(workoutId) {
            try {
                await WorkoutService.delete(workoutId);
                this.profile.workouts = this.profile.workouts.filter(w => w.id !== workoutId);
            } catch (error) { throw error; }
        },

        // --- MÉTODOS LOCALES (Síncronos) ---
        getRutinaLocal(id) {
            return this.profile.routines.find(r => r.id === id);
        },

        getWorkoutLocal(id) {
            return this.profile.workouts.find(w => w.id === id);
        }
    }
});