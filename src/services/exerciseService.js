import { db } from '../firebaseConfig';
import {
    collection, query, where, getDocs, getDoc, addDoc,
    updateDoc, deleteDoc, doc, orderBy, serverTimestamp
} from 'firebase/firestore';

import { handleServiceError } from '@/utils/errorHandler';
import { useNotificationStore } from '@/stores/notificationStore';

const COLLECTION_NAME = 'exercises';

export const ExerciseService = {
    /**
     * Obtiene los ejercicios del usuario ordenados por fecha
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
     * Obtiene un ejercicio específico por ID
     */
    async getById(exerciseId) {
        try {
            const docRef = doc(db, COLLECTION_NAME, exerciseId);
            const snap = await getDoc(docRef);
            return snap.exists() ? { id: snap.id, ...snap.data() } : null;
        } catch (error) {
            handleServiceError(error);
        }
    },

        /**
     * Obtiene un ejercicio específico por nombre
     */
    async getByName(exerciseName) {
        try {
            const q = query(
                collection(db, COLLECTION_NAME),
                where('nombre', '==', exerciseName)
            );

            const snap = await getDocs(q);
            return snap.docs.map(d => ({ id: d.id, ...d.data() }));
        } catch (error) {
            handleServiceError(error);
        }
    },

    /**
     * Crea un nuevo ejercicio
     */
    async create(payload) {
        try {
            const notify = useNotificationStore();

            const data = {
                ...payload,
                fechaCreacion: serverTimestamp(),
            };

            const docRef = await addDoc(collection(db, COLLECTION_NAME), data);
            notify.show('¡Ejercicio guardado! ⚡️', 'success');
            return docRef.id;
        } catch (error) {
            handleServiceError(error);
        }
    },

    /**
     * Actualiza un ejercicio existente
     */
    async update(exerciseId, payload) {
        try {
            const notify = useNotificationStore();
            const docRef = doc(db, COLLECTION_NAME, exerciseId);
            const { id, ...dataToUpdate } = payload;

            await updateDoc(docRef, dataToUpdate);
            notify.show('Ejercicio actualizado con éxito', 'success');
        } catch (error) {
            handleServiceError(error);
        }
    },

    /**
     * Cambia el estado de favorito de un ejercicio
     */
    async toggleFavorite(exerciseId, isFavorite) {
        try {
            const docRef = doc(db, COLLECTION_NAME, exerciseId);
            await updateDoc(docRef, { favorito: isFavorite });
        } catch (error) {
            handleServiceError(error);
        }
    },

    /**
     * Elimina un ejercicio
     */
    async delete(exerciseId) {
        try {
            const notify = useNotificationStore();
            const docRef = doc(db, COLLECTION_NAME, exerciseId);

            await deleteDoc(docRef);
            notify.show('Ejercicio eliminado con éxito', 'success');
        } catch (error) {
            handleServiceError(error);
        }
    }
};