<template>
    <transition name="fade-slide" mode="out-in" @after-leave="$emit('after-leave')">
        <div v-show="isVisible" class="notifier rounded" :class="typeClass">

            <!-- ICONO -->
            <div class="notifier-icon me-3">
                <i class="bi" :class="iconClass"></i>
            </div>

            <!-- TEXTO -->
            <div class="notifier-body">
                <p class="notifier-title mb-0">
                    {{ message }}
                </p>

            </div>

        </div>
    </transition>
</template>


<script setup>
import { computed } from 'vue'

const props = defineProps({
    message: String,
    type: {
        type: String,
        default: 'success'
    },
    visible: Boolean
})

const isVisible = computed(() => props.visible && props.message)

const typeClass = computed(() => ({
    'notifier-success': props.type === 'success',
    'notifier-error': props.type === 'error',
    'notifier-info': props.type === 'info',
    'notifier-warning': props.type === 'warning'
}))

const iconClass = computed(() => {
    const map = {
        success: 'bi-check-circle-fill',
        error: 'bi-x-circle-fill',
        info: 'bi-info-circle-fill',
        warning: 'bi-exclamation-triangle-fill'
    }
    return map[props.type] || map.info
})
</script>

<style scoped>
.notifier {
    padding: 12px 16px;
    margin-top: 12px;
    display: flex;
    align-items: center;
    border-radius: 14px;
    border: 1px solid transparent;
    backdrop-filter: blur(6px);
}

.notifier-icon i {
    font-size: 1.2rem;
}

/* contenido */
.notifier-body {
    display: flex;
    flex-direction: column;
}

.notifier-title {
    font-size: 0.9rem;
    font-weight: 700;
}

.notifier-text {
    font-size: 0.75rem;
    opacity: 0.7;
}

/* variantes */

.notifier-success {
    background: rgba(0, 255, 255, 0.08);
    border-color: rgba(0, 255, 255, 0.25);
    color: #a5f8ff;
}

.notifier-error {
    background: rgba(255, 80, 80, 0.08);
    border-color: rgba(255, 80, 80, 0.25);
    color: #ffb3b3;
}

.notifier-info {
    background: rgba(255, 255, 255, 0.06);
    border-color: rgba(255, 255, 255, 0.12);
    color: #d1d5db;
}

.notifier-warning {
    background: rgba(255, 193, 7, 0.08);
    border-color: rgba(255, 193, 7, 0.25);
    color: #ffe08a;
}


/* ---------- ANIMACIONES ---------- */

.fade-slide-enter-active {
    transition: opacity 0.4s ease, transform 0.4s ease;
}

.fade-slide-enter-from {
    opacity: 0;
    transform: translateY(-8px);
}

.fade-slide-leave-active {
    transition: opacity 0.25s ease, transform 0.25s ease;
}

.fade-slide-leave-to {
    opacity: 0;
    transform: translateY(-8px);
}
</style>
