<template>
    <transition name="fade-slide" mode="out-in" @after-leave="$emit('after-leave')">
        <div v-show="message" class="notifier p-3 rounded text-light" :class="typeClass">
            {{ message }}
        </div>
    </transition>
</template>

<script setup>
import { computed, defineProps } from 'vue';

const props = defineProps({
    message: String,
    type: String
});

const typeClass = computed(() => props.type === "success" ? "bg-success" : "bg-danger");
</script>

<style scoped>
.notifier {
    padding: 0px;
    margin-top: 10px;
    padding: 8px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 1;
}



/* 🔥 Animación de entrada */
.fade-slide-enter-active {
    transition: opacity 0.5s ease, transform 0.5s ease;
}

.fade-slide-enter-from {
    opacity: 0;
    transform: translateY(-10px);
}

/* 🔥 Animación de salida */
.fade-slide-leave-active {
    transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-slide-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}
</style>
