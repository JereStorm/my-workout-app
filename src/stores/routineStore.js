// src/stores/routineStore.js
import { defineStore } from 'pinia';
import { RoutineService } from '@/services/routineService';
import { hydrateRoutines } from '@/utils/routinesHydratation';
import { useExerciseStore } from '@/stores/exerciseStore';
import { useUserStore } from '@/stores/user';


export const useRoutineStore = defineStore('routine', {
    state: () => ({
        routines: [],
        isLoading: true,
    }),

    getters: {
        getUserRoutines: (state) => state.routines,
        getRutinaLocal: (state) => (id) => state.routines.find(r => r.id === id),
    },

    actions: {
        async fetchRoutines(userId, exercisesList) {
            this.isLoading = true;
            try {
                const rawRoutines = await RoutineService.fetchByUserId(userId);
                // Hidratamos usando el catálogo de ejercicios pasado por parámetro
                this.routines = hydrateRoutines(rawRoutines, exercisesList);

            } finally {
                this.isLoading = false;
            }
        },

        // Función auxiliar interna para buscar ejercicios sin ID y crearlos sobre la marcha
        async _asegurarEjercicios(routineData) {
            const exerciseStore = useExerciseStore();

            // Dentro de _asegurarEjercicios o createRoutine:
            const userStore = useUserStore();
            const userId = userStore.user?.id; // Siempre disponible de forma global

            for (const bloque of routineData.bloques) {
                for (const ejercicio of bloque.ejercicios) {
                    // Si no tiene exerciseId pero tiene un nombre escrito, es un ejercicio nuevo
                    if (!ejercicio.exerciseId && ejercicio.nombre && ejercicio.nombre.trim()) {
                        try {
                            // Creamos el ejercicio en su respectivo store/servicio y obtenemos su nuevo ID
                            const nuevoId = await exerciseStore.createExercise({
                                nombre: ejercicio.nombre.trim()
                            }, userId);
                            // Asignamos el ID recién generado al ejercicio de la rutina
                            ejercicio.exerciseId = nuevoId;
                        } catch (err) {
                            console.error(`Error al crear el ejercicio automático "${ejercicio.nombre}":`, err);
                        }
                    }
                }
            }
        },

        async createRoutine(routineData, userId) {
            try {
                // 1. Primero aseguramos que todos los ejercicios nuevos existan y tengan ID
                await this._asegurarEjercicios(routineData);

                const payload = { ...routineData, idUser: userId, fechaCreacion: new Date().toISOString() };
                const id = await RoutineService.create(payload);
                this.routines.unshift({ id, ...payload });
                return id;
            } catch (error) {
                throw error;
            }
        },

        async updateRoutine(routine) {
            try {
                await this._asegurarEjercicios(routine);

                await RoutineService.update(routine.id, routine);
                const index = this.routines.findIndex(r => r.id === routine.id);
                if (index !== -1) this.routines.splice(index, 1, routine);
            } catch (error) {
                throw error;
            }
        },

        async deleteRoutine(routineId) {
            try {
                await RoutineService.delete(routineId);
                this.routines = this.routines.filter(r => r.id !== routineId);
            } catch (error) { throw error; }
        },

        async toggleFavorite(routineId, currentValue) {
            try {
                const newValue = !currentValue;
                const routine = this.routines.find(r => r.id === routineId);
                if (routine) routine.favorita = newValue;
                await RoutineService.toggleFavorite(routineId, newValue);
            } catch (error) { throw error; }
        }
    }
});