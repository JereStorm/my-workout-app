import { defineStore } from 'pinia';
import { db } from '../firebaseConfig'; // Asegúrate de que la ruta sea correcta
import { collection, query, where, getDocs, getDoc, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore';

export const useProfileStore = defineStore('profile', {
    state: () => ({
        profile: {
            id: null,
            email: '',
            nickname: '',
            routines: [],
            // ... otras propiedades del perfil
        },
    }),
    actions: {
        setProfile(profileData) {
            this.profile = { ...this.profile, ...profileData };
            if (this.profile.routines === undefined) {
                this.profile.routines = [];
            }

            console.log(this.profile)
        },
        updateNickname(nickname) {
            this.profile = { ...this.profile, nickname };
            console.log("UNick:", this.profile)
        },
        async getRutinas() {
            try {
                if (!this.profile.id) {
                    throw new Error('El usuario no está autenticado');
                }

                const routinesRef = collection(db, 'routines');
                const q = query(routinesRef, where('idUser', '==', this.profile.id));
                const querySnapshot = await getDocs(q);

                const fetchedRoutines = [];

                querySnapshot.forEach((docSnap) => {
                    fetchedRoutines.push({ id: docSnap.id, ...docSnap.data() });
                });

                const sortedRoutines = fetchedRoutines.sort(
                    (a, b) => new Date(b.fechaCreacion) - new Date(a.fechaCreacion)
                );

                this.profile.routines = sortedRoutines;

                console.log('Rutinas ordenadas y obtenidas de Firebase:', sortedRoutines);
            } catch (error) {
                console.error('Error al obtener rutinas de Firebase:', error);
                throw error;
            }
        },
        async deleteRutina(routineId) {
            try {
                // Eliminar de Firebase
                await deleteDoc(doc(db, 'routines', routineId));
                console.log('Rutina eliminada de Firebase:', routineId);

                // Opcional: volver a sincronizar desde Firebase
                await this.getRutinas();
            } catch (error) {
                console.error('Error al eliminar rutina de Firebase:', error);
                throw error;
            }
        },
        async updateRutina(rutinaEditada) {
            try {
                if (!rutinaEditada.id) {
                    throw new Error('La rutina no tiene un ID válido.');
                }

                const rutinaRef = doc(db, 'routines', rutinaEditada.id);

                // Verificá si el documento existe antes de actualizar
                const rutinaSnap = await getDoc(rutinaRef);
                if (!rutinaSnap.exists()) {
                    throw new Error(`La rutina con ID ${rutinaEditada.id} no existe en Firebase.`);
                }

                const rutinaParaFirebase = { ...rutinaEditada };
                delete rutinaParaFirebase.id;

                await updateDoc(rutinaRef, rutinaParaFirebase);
                console.log('Rutina actualizada en Firebase:', rutinaEditada.id);

                const index = this.profile.routines.findIndex(
                    (rutina) => rutina.id === rutinaEditada.id
                );

                if (index !== -1) {
                    // this.profile.routines.splice(index, 1, rutinaEditada);
                    console.log('Rutina actualizada en estado local:', rutinaEditada);
                    await this.getRutinas();
                } else {
                    console.warn(`No se encontró la rutina con ID: ${rutinaEditada.id}`);
                }
            } catch (error) {
                console.error('Error al actualizar rutina en Firebase:', error);
                throw error;
            }
        },
        async createRutinaFirebase(rutinaData) {
            try {
                const newRoutine = {
                    fechaCreacion: new Date().toISOString(),
                    idUser: this.profile.id,
                    ...rutinaData,
                };

                const docRef = await addDoc(collection(db, 'routines'), newRoutine);

                const serverRoutine = { ...newRoutine, id: docRef.id };
                // console.log("Server Routine: ", serverRoutine)
                this.profile.routines.unshift(serverRoutine);
                return docRef; //Devolvemos el ref para que lo uses en copiar
            } catch (error) {
                console.error('Error al crear rutina en Firebase:', error);
                throw error;
            }
        },

    },
    getters: {
        getNickname: (state) => state.profile.nickname,
        getUserRoutines: (state) => state.profile.routines,
    }
});