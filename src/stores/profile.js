import { defineStore } from 'pinia';
import { db } from '../firebaseConfig';
import {
    collection, query, where, getDocs, addDoc, deleteDoc, doc, getDoc, setDoc, updateDoc,
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
        },
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
            if (!uid) {
                throw new Error('UID de usuario inválido');
            }

            const profileRef = doc(db, 'profiles', uid);
            try {
                const snapshot = await getDoc(profileRef);

                if (snapshot.exists()) {
                    const data = snapshot.data();
                    this.profile = { id: uid, email: data.email, nickname: data.nickname || '', routines: [] };
                } else {
                    // Crear perfil inicial
                    const initialProfile = { idUser: uid, email, nickname: '' };
                    await setDoc(profileRef, initialProfile);
                    this.profile = { id: uid, email, nickname: '', routines: [] };
                }
            } catch (error) {
                console.error('Error al cargar o crear el perfil:', error);
                throw error;
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
            if (!this.profile.id) {
                throw new Error('Usuario no autenticado');
            }

            const routinesRef = collection(db, 'routines');
            const queryConstraints = [where('idUser', '==', this.profile.id)];
            const q = query(routinesRef, ...queryConstraints);

            try {
                const snapshot = await getDocs(q);
                const routines = [];
                snapshot.forEach((document) => {
                    routines.push({ id: document.id, ...document.data() });
                });

                // Ordenar las rutinas por fecha de creación descendente
                routines.sort((a, b) => new Date(b.fechaCreacion) - new Date(a.fechaCreacion));

                this.profile.routines = routines;
            } catch (error) {
                console.error('Error al obtener las rutinas:', error);
                throw error;
            }
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
                const index = this.profile.routines.findIndex((r) => r.id === rutina.id);
                if (index !== -1) {
                    this.profile.routines.splice(index, 1, rutina);
                }
                await updateDoc(rutinaRef, payload);
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
    },
});