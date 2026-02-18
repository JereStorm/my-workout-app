import { db } from '../firebaseConfig';
import { doc, getDoc, setDoc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { handleServiceError } from '@/utils/errorHandler';
import { useNotificationStore } from '@/stores/notificationStore';

const COLLECTION_NAME = 'profiles';

export const ProfileService = {

    /**
     * Obtiene el perfil de un usuario. 
     * Si no existe, devuelve datos por defecto.
     */
    async getProfile(uid) {
        try {
            const docRef = doc(db, COLLECTION_NAME, uid);
            const snap = await getDoc(docRef);

            if (snap.exists()) {
                return snap.data();
            } else {
                // Retornamos un objeto base si es un usuario nuevo
                return { nickname: '', level: 1 };
            }
        } catch (error) {
            handleServiceError(error);
        }
    },

    /**
     * Actualiza el nickname del usuario.
     * Usamos setDoc con { merge: true } por si el documento aún no existe.
     */
    async updateNickname(uid, nickname) {
        const notify = useNotificationStore();
        try {
            const docRef = doc(db, COLLECTION_NAME, uid);
            await setDoc(docRef, {
                nickname,
                updatedAt: serverTimestamp()
            }, { merge: true });
            //NOTIFICACIÓN DE ÉXITO
            notify.show('¡Nombre de usuario actualizado!', 'success');
        } catch (error) {
            //EL ERROR SE MANEJA AQUÍ (dentro del handler ya se llama a notify.show)
            handleServiceError(error);
        }

    },

    /**
     * Método de utilidad para crear/inicializar un perfil
     */
    async initProfile(uid, email) {
        try {
            const docRef = doc(db, COLLECTION_NAME, uid);
            await setDoc(docRef, {
                email,
                nickname: '',
                level: 1,
                createdAt: serverTimestamp()
            }, { merge: true });
        } catch (error) {
            handleServiceError(error);
        }
    }
};