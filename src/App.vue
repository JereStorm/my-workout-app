<template>
  <div class="notifier-wrapper">
    <Notifier :message="notification.message" :type="notification.type" :visible="notification.visible" />
  </div>

  <router-view />
</template>

<script setup>
import Notifier from '@/components/common/Notifier.vue';
import { useNotificationStore } from '@/stores/notificationStore';

const notification = useNotificationStore();
</script>

<style scoped>
/* Posicionamiento del notificador en la pantalla */
.notifier-wrapper {
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 10000;
  width: 90%;
  max-width: 400px;
  pointer-events: none;
  /* Para que no bloquee clics si está invisible */
}

.notifier-wrapper>* {
  pointer-events: auto;
  /* El notifier sí debe recibir clics si los necesita */
}
</style>