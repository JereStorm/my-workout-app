import { defineStore } from 'pinia';
import { db } from '../firebaseConfig';
import {
    collection, query, where, getDocs, addDoc, deleteDoc, doc, getDoc, setDoc, updateDoc, orderBy
} from 'firebase/firestore';

/**
 * Define el store de Pinia para la información del perfil del usuario.
 */
export const useProfileStore = defineStore('profile', {
    /**
     * Estado del store. Contiene la información del perfil del usuario.
     */
    state: () => ({
        profile: {
            id: null,
            email: '',
            nickname: '',
            routines: [],
            workouts: [],
        },
        isLoading: false
    }),

    /**
      * Acciones del store. Contienen las funciones para modificar el estado
      * y realizar operaciones asíncronas, como interactuar con Firebase.
      */
    actions: {
        /**
         * Carga el perfil del usuario desde Firestore utilizando su UID.
         * Si el perfil no existe, crea uno nuevo con el UID y el email proporcionados.
         * @param {string} uid - El UID del usuario.
         * @param {string} email - El email del usuario.
         * @throws {Error} Si el UID del usuario es inválido.
         */
        async loadProfile(uid, email) {
            if (!uid) throw new Error('UID de usuario inválido');

            this.isLoading = true;

            const profileRef = doc(db, 'profiles', uid);
            try {
                const snapshot = await getDoc(profileRef);

                if (snapshot.exists()) {
                    const data = snapshot.data();
                    this.profile = {
                        id: uid,
                        email: data.email,
                        nickname: data.nickname || '',
                        routines: [],
                        workouts: []
                    };
                } else {
                    const initialProfile = { idUser: uid, email, nickname: '' };
                    await setDoc(profileRef, initialProfile);
                    this.profile = {
                        id: uid,
                        email,
                        nickname: '',
                        routines: [],
                        workouts: []
                    };
                }

                await this.getRutinas();
                await this.loadWorkouts();

            } catch (error) {
                console.error('Error al cargar o crear el perfil:', error);
                throw error;
            } finally {
                this.isLoading = false;
            }
        },
        /**
         * Actualiza el nickname del usuario tanto en Firestore como en el estado local.
         * @param {string} newNickname - El nuevo nickname del usuario.
         * @throws {Error} Si el usuario no está autenticado (no tiene un ID de perfil).
         */
        async setNickname(newNickname) {
            if (!this.profile.id) {
                throw new Error('Usuario no autenticado');
            }

            const profileRef = doc(db, 'profiles', this.profile.id);
            try {
                await updateDoc(profileRef, { nickname: newNickname });
                this.profile.nickname = newNickname;
            } catch (error) {
                console.error('Error al actualizar el nickname:', error);
                throw error;
            }
        },

        /**
         * Obtiene todas las rutinas asociadas al usuario autenticado desde Firestore.
         * Las rutinas se ordenan por fecha de creación de forma descendente.
         * @throws {Error} Si el usuario no está autenticado.
         */
        async getRutinas() {
            console.log("GetRutinas()")
            if (!this.profile.id) {
                throw new Error('Usuario no autenticado');
            }

            const routinesRef = collection(db, 'routines');
            const queryConstraints = [
                where('idUser', '==', this.profile.id),
                orderBy('fechaCreacion', 'desc') // Ordenar por fecha de creación descendente por defecto
            ];
            const q = query(routinesRef, ...queryConstraints);

            try {
                const snapshot = await getDocs(q);
                const routines = [];
                snapshot.forEach((document) => {
                    routines.push({ id: document.id, ...document.data() });
                });
                this.profile.routines = routines;
                console.log(this.profile.routines)
            } catch (error) {
                console.error('Error al obtener las rutinas:', error);
                throw error;
            }
        },
        /**
         * Obtiene una rutina específica por su ID desde Firestore.
         * @param {string} idRutina - El ID de la rutina a obtener.
         * @returns {Promise<object|null>} - Un objeto con los datos de la rutina o null si no se encuentra.
         */
        async getRutina(idRutina) {
            try {
                const docRef = doc(db, 'routines', idRutina);
                const snapshot = await getDoc(docRef);

                if (snapshot.exists()) {
                    return { id: snapshot.id, ...snapshot.data() };
                } else {
                    console.warn(`No se encontró la rutina con ID: ${idRutina}`);
                    return null;
                }
            } catch (error) {
                console.error(`Error al obtener la rutina con ID ${idRutina}:`, error);
                throw error;
            }
        },
        /**
         * Busca una rutina en el array local de rutinas del perfil por su ID.
         * No realiza ninguna llamada a la base de datos.
         * @param {string} rutinaId - El ID de la rutina a buscar.
         * @returns {object|undefined} - El objeto de la rutina si se encuentra, undefined en caso contrario.
         */
        getRutinaLocal(rutinaId) {
            return this.profile.routines.find(rutina => rutina.id === rutinaId);
        },

        /**
         * Elimina una rutina de Firestore y actualiza el estado local.
         * @param {string} routineId - El ID de la rutina a eliminar.
         */
        async deleteRutina(routineId) {
            try {
                this.profile.routines = this.profile.routines.filter((routine) => routine.id !== routineId);
                await deleteDoc(doc(db, 'routines', routineId));
            } catch (error) {
                console.error('Error al eliminar la rutina:', error);
                throw error;
            }
        },

        /**
         * Actualiza una rutina existente en Firestore y actualiza el estado local.
         * @param {object} rutina - El objeto de la rutina con los datos actualizados.
         * @throws {Error} Si la rutina no tiene un ID.
         */
        async updateRutina(rutina) {
            if (!rutina.id) {
                throw new Error('Rutina sin ID');
            }

            const rutinaRef = doc(db, 'routines', rutina.id);
            const { id, ...payload } = rutina;
            try {
                console.log("Antes del horror:", rutina)
                await updateDoc(rutinaRef, payload);
                const index = this.profile.routines.findIndex((r) => r.id === rutina.id);
                if (index !== -1) {
                    this.profile.routines.splice(index, 1, rutina);
                }
            } catch (error) {
                console.error('Error al actualizar la rutina:', error);
                throw error;
            }
        },

        /**
         * Crea una nueva rutina en Firestore y la añade al estado local.
         * @param {object} rutinaData - Los datos de la nueva rutina a crear.
         * @returns {Promise<import('firebase/firestore').DocumentReference>} - La referencia del documento creado en Firestore.
         */
        async createRutinaFirebase(rutinaData) {
            const payload = {
                ...rutinaData,
                fechaCreacion: new Date().toISOString(),
                idUser: this.profile.id,
            };

            try {
                const docRef = await addDoc(collection(db, 'routines'), payload);
                const newRutina = { id: docRef.id, ...payload };
                this.profile.routines.unshift(newRutina);
                return docRef;
            } catch (error) {
                console.error('Error al crear la rutina en Firebase:', error);
                throw error;
            }
        },

        /**
     * Registra un nuevo workout en Firestore y lo añade al estado local.
     * @param {object} workoutData
     * @param {string} workoutData.rutinaId
     * @param {string} workoutData.date (ISO string)
     * @param {Array} workoutData.logs  // [{ actualReps: [...] }, …]
     * @param {string} workoutData.notes
     */
        async registerWorkout(data) {
            if (!this.profile.id) {
                throw new Error("Usuario no autenticado");
            }
            // Prepara el payload
            const payload = {
                idUser: this.profile.id,
                ...data,
                createdAt: new Date().toISOString(),
            };
            console.log("Payload", payload)
            try {
                // Guarda en la colección 'workouts'
                const colRef = collection(db, 'workouts');
                const docRef = await addDoc(colRef, payload);
                // Opcionalmente manténlo en cache local
                if (!this.profile.workouts) {
                    this.profile.workouts = [];
                }
                this.profile.workouts.unshift({ id: docRef.id, ...payload });
                return docRef.id;
            } catch (error) {
                console.error("Error registrando workout:", error);
                throw error;
            }
        },
        /**
         * Obtiene todos los workouts (entrenamientos) del usuario desde Firestore.
         * Los ordena por fecha descendente.
         * @throws {Error} Si el usuario no está autenticado.
         */
        async loadWorkouts() {
            console.log("loadWorkouts()")
            if (!this.profile.id) {
                throw new Error('Usuario no autenticado');
            }

            const workoutsRef = collection(db, 'workouts');
            const q = query(
                workoutsRef,
                where('idUser', '==', this.profile.id),
                orderBy('date', 'desc')
            );

            try {
                const snapshot = await getDocs(q);
                const workouts = [];
                snapshot.forEach((doc) => {
                    workouts.push({ id: doc.id, ...doc.data() });
                });
                this.profile.workouts = workouts;
                console.log(this.profile.workouts)
            } catch (error) {
                console.error('Error al obtener los workouts:', error);
                throw error;
            }
        },
        /**
         * Busca un workout en el array local de workouts del perfil por su ID.
         * No realiza ninguna llamada a la base de datos.
         * @param {string} workoutId - El ID del workout a buscar.
         * @returns {object|undefined} - El objeto del workout si se encuentra, undefined en caso contrario.
         */
        getDoneWorkoutLocal(workoutId) {
            return this.profile.workouts.find(w => w.id === workoutId);
        },

        /**
         * Obtiene un workout específico por su ID desde Firestore.
         * @param {string} workoutId - El ID del workout a obtener.
         * @returns {Promise<object|null>} - Un objeto con los datos del workout o null si no se encuentra.
         * @throws {Error} Si el usuario no está autenticado.
         */
        async getDoneWorkout(workoutId) {
            console.log("getDoneWorkout FB")
            if (!this.profile.id) {
                throw new Error('Usuario no autenticado');
            }
            try {
                const docRef = doc(db, 'workouts', workoutId);
                const snapshot = await getDoc(docRef);
                if (snapshot.exists()) {
                    return { id: snapshot.id, ...snapshot.data() };
                } else {
                    console.warn(`No se encontró el workout con ID: ${workoutId}`);
                    return null;
                }
            } catch (error) {
                console.error(`Error al obtener el workout con ID ${workoutId}:`, error);
                throw error;
            }
        },

    },
    /**
     * Getters del store. Permiten acceder al estado de forma computada.
     */
    getters: {
        /**
         * Obtiene el nickname del perfil del usuario.
         * @param {object} state - El estado actual del store.
         * @returns {string} - El nickname del usuario.
         */
        getNickname: (state) => state.profile.nickname,

        /**
         * Obtiene la lista de rutinas del perfil del usuario.
         * @param {object} state - El estado actual del store.
         * @returns {Array<object>} - La lista de rutinas del usuario.
         */
        getUserRoutines: (state) => state.profile.routines,

        getWorkouts: (state) => state.profile.workouts,
    },
});