// src/stores/profile.js
import { defineStore } from 'pinia';
import { ProfileService } from '@/services/profileService';

export const useProfileStore = defineStore('profile', {
    state: () => ({
        profile: {
            id: null,
            email: '',
            nickname: '',
            weeklyGoal: 1,
        },
        isLoading: false,
    }),

    getters: {
        // Getters exclusivos de perfil e identidad
        getNickname: (state) => state.profile.nickname,
        getWeeklyGoal: (state) => state.profile.weeklyGoal,
    },

    actions: {
        async loadProfile(uid, email) {
            this.isLoading = true;
            try {
                // Solo consultamos los datos específicos del perfil en Firestore
                const profileData = await ProfileService.getProfile(uid);

                this.profile = {
                    id: uid,
                    email: email,
                    nickname: profileData?.nickname || '',
                    weeklyGoal: profileData?.weeklyGoal || 1,
                };
            } finally {
                this.isLoading = false;
            }
        },

        async setWeeklyGoal(goal) {
            if (!this.profile.id) return;
            try {
                await ProfileService.updateWeeklyGoal(this.profile.id, goal);
                this.profile.weeklyGoal = goal;
            } catch (error) { 
                /* El servicio maneja la notificación */ 
            }
        },

        async setNickname(newNickname) {
            if (!this.profile.id) return;
            try {
                await ProfileService.updateNickname(this.profile.id, newNickname);
                this.profile.nickname = newNickname;
            } catch (error) { 
                /* El servicio maneja la notificación */ 
            }
        }
    }
});