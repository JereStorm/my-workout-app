import { db } from '../firebaseConfig';
import {
    collection, query, where, getDocs, addDoc, deleteDoc, doc, orderBy, serverTimestamp
} from 'firebase/firestore';
import { handleServiceError } from '@/utils/errorHandler';
import { useNotificationStore } from '@/stores/notificationStore';

const COLLECTION_NAME = 'workouts';

export const WorkoutService = {
    /**
     * Obtiene todos los workouts de un usuario
     */
    async fetchByUserId(uid) {
        try {
            const q = query(
                collection(db, COLLECTION_NAME),
                where('idUser', '==', uid),
                orderBy('date', 'desc')
            );
            const snap = await getDocs(q);
            return snap.docs.map(d => ({ id: d.id, ...d.data() }));
        } catch (error) {
            handleServiceError(error);
        }

    },

    async fetchById(workoutId) {
        try {
            const docRef = doc(db, COLLECTION_NAME, workoutId);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                return { id: docSnap.id, ...docSnap.data() };
            } else {
                throw new Error('Workout no encontrado');
            }
        } catch (error) {
            handleServiceError(error);
        }
    },

    /**
     * Crea un nuevo registro de entrenamiento
     */
    async create(payload) {
        try {
            const notify = useNotificationStore();
            const data = {
                ...payload,
            };
            const docRef = await addDoc(collection(db, COLLECTION_NAME), data);
            notify.show('¡Entrenamiento guardado! Sigue así ⚡️', 'success');
            return docRef.id;

        } catch (error) {
            handleServiceError(error);
        }

    },

    /**
     * Elimina un workout específico
     */
    async delete(workoutId) {
        try {
            const notify = useNotificationStore();
            const docRef = doc(db, COLLECTION_NAME, workoutId);
            await deleteDoc(docRef);
            notify.show('Entrenamiento eliminado con éxito', 'success');

        } catch (error) {
            handleServiceError(error);
        }

    }
};