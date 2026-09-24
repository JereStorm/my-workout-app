
// src/stores/exerciseStore.js
import { defineStore } from 'pinia';
import { ExerciseService } from '@/services/exerciseService';

export const useExerciseStore = defineStore('exercise', {
    state: () => ({
        exercises: [],
        isLoading: true,
    }),

    getters: {
        getExercises: (state) => state.exercises,
        getExerciseLocal: (state) => (id) => state.exercises.find(e => e.id === id),
    },

    actions: {
        async fetchExercises(userId) {
            this.isLoading = true;
            try {
                this.exercises = await ExerciseService.fetchByUserId(userId);
            } finally {
                this.isLoading = false;
            }
        },
        async createExercise(exerciseData, userId) {
            try {
                // 1. Limpiamos y normalizamos el nombre ingresado (sin importar espacios extra ni mayúsculas)
                const nombreLimpio = exerciseData.nombre ? exerciseData.nombre.trim().replace(/\s+/g, ' ') : '';
                const nombreLower = nombreLimpio.toLowerCase();

                // 2. Buscamos si ya existe un ejercicio con el mismo nombre en el state local
                const existente = this.exercises.find(
                    ex => ex.nombre.trim().toLowerCase() === nombreLower
                );

                // 3. Si ya existe, no lo creamos de nuevo: retornamos su ID directamente
                if (existente) {
                    return existente.id;
                }

                // 4. Si no existe, procedemos con la creación normal asegurando el nombre limpio
                const payload = {
                    ...exerciseData,
                    nombre: nombreLimpio,
                    idUser: userId,
                    fechaCreacion: new Date().toISOString()
                };

                const id = await ExerciseService.create(payload);
                this.exercises.push({ id, ...payload });
                return id;
            } catch (error) {
                throw error;
            }
        },

        async updateExercise(exercise) {
            try {
                await ExerciseService.update(exercise.id, exercise);
                const index = this.exercises.findIndex(e => e.id === exercise.id);
                if (index !== -1) {
                    this.exercises.splice(index, 1, exercise);
                }
            } catch (error) {
                throw error;
            }
        },

        async deleteExercise(exerciseId) {
            try {
                await ExerciseService.delete(exerciseId);
                this.exercises = this.exercises.filter(e => e.id !== exerciseId);
            } catch (error) {
                throw error;
            }
        }
    }
});