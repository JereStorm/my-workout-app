<template>
    <div class="d-flex flex-column align-items-center gap-2">

        <!-- Avatar -->
        <div class="position-relative">
            <div class="avatar-ring d-flex align-items-center justify-content-center">
                <!-- Imagen o fallback -->
                <img v-if="photoURL" :src="photoURL" alt="User profile" class="avatar-img" />

                <span v-else class="avatar-initials">
                    {{ initials }}
                </span>
            </div>
        </div>

        <!-- User info -->
        <div class="text-center overflow-hidden">
            <h6 class="mb-0 fw-bold text-white text-truncate" :title="nickname" style="max-width: 140px">
                {{ nickname || 'Usuario' }}
            </h6>

            <small class=" fw-light text-light">
                Nivel {{ level }}
            </small>
        </div>

    </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    nickname: {
        type: String,
        default: ''
    },
    photoURL: {
        type: String,
        default: ''
    }, level: {
        type: Number,
        default: 1
    }
})

const initials = computed(() => {
    if (!props.nickname) return 'U'

    return props.nickname
        .split(' ')
        .map(word => word[0])
        .slice(0, 2)
        .join('')
        .toUpperCase()
})
</script>
<style scoped>
.avatar-ring {
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 50%;
    padding: 2px;
    border: 2px solid #00ffff;
    overflow: hidden;
    background-color: #1e1e1e;
}

.avatar-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
}

.avatar-initials {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #1e1e1e;
    ;
    font-weight: 400;
    font-size: 1.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
}
</style>
