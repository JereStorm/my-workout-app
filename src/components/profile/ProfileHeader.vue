<template>
    <div class="text-center mb-4">

        <!-- Avatar -->
        <div class="position-relative d-inline-block mb-3">
            <div class="avatar-wrapper">
                <span class="avatar-initials">{{ initials }}</span>
            </div>
        </div>

        <!-- Estado -->
        <div class="text-uppercase small text-info opacity-75 mb-1">
            Usuario Activo
        </div>

        <!-- Nickname Editable -->
        <input v-model="localNickname" class="form-control nickname-input text-center fw-bold" @blur="emitSave" />

        <div v-if="error" class="text-danger small mt-1">
            {{ error }}
        </div>

        <!-- Nivel -->
        <div class="text-light small mt-2">
            <p>Calistenico • Nivel {{ levelLabel }}</p>
        </div>

    </div>
</template>
<script setup>
import { computed, ref, watch } from 'vue'

const props = defineProps({
    nickname: String,
    level: Number
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

const emitSave = () => {
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

const levelLabel = computed(() => {
    const map = ['Novato', 'Aprendiz', 'Intermedio', 'Avanzado', 'Elite']
    return map[props.level] || 'Novato'
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
    border: none;
    border-bottom: 1px solid rgba(255, 255, 255, .2);
    background: transparent;
}

.nickname-input:focus {
    color: white;
}
</style>
