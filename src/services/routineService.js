import { db } from '../firebaseConfig';
import {
    collection, query, where, getDocs, getDoc, addDoc,
    updateDoc, deleteDoc, doc, orderBy, serverTimestamp
} from 'firebase/firestore';
import { handleServiceError } from '../utils/errorHandler';
import { useNotificationStore } from '../stores/notificationStore';


const COLLECTION_NAME = 'routines';

export const RoutineService = {
    /**
     * Obtiene las rutinas del usuario ordenadas por fecha
     */
    async fetchByUserId(uid) {
        try {
            const q = query(
                collection(db, COLLECTION_NAME),
                where('idUser', '==', uid),
                orderBy('fechaCreacion', 'desc')
            );

            const snap = await getDocs(q);
            return snap.docs.map(d => ({ id: d.id, ...d.data() }));
        } catch (error) {
            handleServiceError(error);
        }

    },

    /**
     * Obtiene una rutina específica por ID
     */
    async getById(routineId) {
        try {
            const docRef = doc(db, COLLECTION_NAME, routineId);
            const snap = await getDoc(docRef);
            return snap.exists() ? { id: snap.id, ...snap.data() } : null;
        } catch (error) {
            handleServiceError(error);
        }

    },

    /**
     * Crea una nueva rutina
     */
    async create(payload) {
        try {
            const notify = useNotificationStore();

            const data = {
                ...payload,
                fechaCreacion: serverTimestamp(),
                favorita: payload.favorita || false
            };
            const docRef = await addDoc(collection(db, COLLECTION_NAME), data);
            notify.show('¡Rutina guardada! Entrená ahora ⚡️', 'success');
            return docRef.id;
        } catch (error) {
            handleServiceError(error);
        }

    },

    /**
     * Actualiza una rutina existente
     */
    async update(routineId, payload) {
        try {
            const notify = useNotificationStore();

            const docRef = doc(db, COLLECTION_NAME, routineId);
            // Eliminamos el ID del payload para no intentar sobrescribirlo en Firestore
            const { id, ...dataToUpdate } = payload;
            await updateDoc(docRef, dataToUpdate);
            notify.show('Rutina actualizada con éxito', 'success');
        } catch (error) {
            handleServiceError(error);
        }

    },

    /**
     * Cambia el estado de favorito
     */
    async toggleFavorite(routineId, isFavorite) {
        try {
            const docRef = doc(db, 'routines', routineId);
            await updateDoc(docRef, { favorita: isFavorite });
        } catch (error) {
            handleServiceError(error);
        }
    },

    /**
     * Elimina una rutina
     */
    async delete(routineId) {
        try {
            const notify = useNotificationStore();
            const docRef = doc(db, COLLECTION_NAME, routineId);
            await deleteDoc(docRef);
            notify.show('Rutina eliminada con éxito', 'success');
        } catch (error) {
            handleServiceError(error);
        }

    }
};