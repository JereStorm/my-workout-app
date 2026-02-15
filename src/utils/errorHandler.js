import { useNotificationStore } from '@/stores/notificationStore';

export const handleServiceError = (error) => {
    const notify = useNotificationStore();
    let userMessage = 'Ocurrió un error inesperado. Inténtalo de nuevo.';

    // Mapeo de errores conocidos de Firebase
    switch (error.code) {
        case 'permission-denied':
            userMessage = 'No tienes permiso para realizar esta acción.';
            break;
        case 'unauthenticated':
            userMessage = 'Tu sesión ha expirado. Por favor, inicia sesión de nuevo.';
            break;
        case 'unavailable':
            userMessage = 'El servicio no está disponible. Revisa tu conexión a internet.';
            break;
        case 'not-found':
            userMessage = 'El recurso solicitado no existe.';
            break;
        default:
            console.error('Error no mapeado:', error);
    }

    notify.show(userMessage, 'error');

    // Seguimos lanzando el error por si el componente necesita reaccionar (ej: detener un loading)
    throw error;
};