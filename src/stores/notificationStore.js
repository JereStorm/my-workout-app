import { defineStore } from 'pinia';

export const useNotificationStore = defineStore('notifications', {
    state: () => ({
        message: null,
        type: 'info', // 'error', 'success', 'warning'
        visible: false
    }),
    actions: {
        show(message, type = 'error') {
            this.message = message;
            this.type = type;
            this.visible = true;

            // Auto-ocultar después de 4 segundos
            setTimeout(() => {
                this.visible = false;
            }, 4000);
        },
        hide() {
            this.visible = false;
        }
    }
});