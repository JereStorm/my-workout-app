<!-- @/profile/ProfileHeader.vue -->
<template>
    <div class="text-center mb-4 mx-2">
        <!-- Avatar -->
        <div class="position-relative d-inline-block mb-3">
            <div class="avatar-wrapper shadow-sm">
                <span class="avatar-initials">{{ initials }}</span>
            </div>
        </div>

        <!-- Título / Rango de Calistenia (Usando los utils) -->
        <div class="text-uppercase small text-info opacity-75 mb-2 subtitulo">
            "{{ levelInfo.currentTitle }}"
        </div>

        <!-- Nickname Editable con Botón de Confirmación -->
        <div class="input-group input-group-sm w-75 mx-auto mb-1">
            <input 
                v-model="localNickname" 
                class="form-control nickname-input text-center fw-bold bg-transparent text-light border-secondary" 
                placeholder="Tu apodo"
                @keyup.enter="confirmSave"
            />
            <button 
                class="btn btn-outline-info" 
                type="button" 
                @click="confirmSave"
                title="Guardar apodo"
            >
                <i class="bi bi-check-lg"></i>
            </button>
        </div>

        <div v-if="error" class="text-danger small mt-1">
            {{ error }}
        </div>

    </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'

const props = defineProps({
    nickname: String,
    levelInfo: {
        type: Object,
        required: true
    }
})

const emit = defineEmits(['update:nickname'])

const localNickname = ref(props.nickname || '')
const error = ref('')

watch(() => props.nickname, v => {
    localNickname.value = v || ''
})

const validate = () => {
    const value = localNickname.value.trim()
    if (value.length < 3) {
        error.value = 'Debe tener al menos 3 caracteres'
        return false
    }
    error.value = ''
    return true
}

const confirmSave = () => {
    if (localNickname.value === props.nickname) return
    if (!validate()) return

    emit('update:nickname', localNickname.value.trim())
}

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
.avatar-wrapper {
    width: 110px;
    height: 110px;
    border-radius: 24px;
    background: linear-gradient(135deg, rgba(0, 255, 255, .25), rgba(0, 255, 255, .05));
    border: 1px solid rgba(0, 255, 255, .2);
    display: flex;
    align-items: center;
    justify-content: center;
}

.avatar-initials {
    font-size: 2.5rem;
    color: #00ffff;
    font-weight: 300;
}

.avatar-edit {
    position: absolute;
    right: -8px;
    bottom: -8px;
    border-radius: 12px;
}

.nickname-input {
    font-size: 1.8rem;
    border: 1px solid rgba(255, 255, 255, .2);
    background: transparent;
    color: #707070;
}

.nickname-input:focus {
    color: white;
}

.subtitulo {
    letter-spacing: 6px;
}

.titulo {
    letter-spacing: 4px;
}
</style>
