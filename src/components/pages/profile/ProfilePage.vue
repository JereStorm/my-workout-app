<template>
    <div class="contenedor">
        <h1 class="my-md-5">Mi Perfil <i class="bi bi-person-circle"></i></h1>
        <div v-if="isLoadingInfo" class="loader"></div>

        <div v-else class="info-container">
            <form class="needs-validation w-100" novalidate @submit.prevent="guardarNickname">
                <div class="text-start w-100 mb-3">
                    <label for="username" class="form-label">Nombre de usuario</label>
                    <div class="input-group has-validation">
                        <span class="input-group-text bg-dark text-info" id="inputGroupPrepend">#</span>
                        <input type="text" v-model="nickname" spellcheck="false" autocomplete="off"
                            class="form-control bg-dark text-light" id="username" aria-describedby="inputGroupPrepend"
                            :class="{ 'is-invalid': showValidation && !valid, 'is-valid': showValidation && valid }"
                            required ref="nicknameInput" />
                        <div class="invalid-feedback">
                            Debe tener al menos 3 caracteres.
                        </div>
                    </div>
                </div>

                <button type="submit" class="btn mt-2 w-50 btn-outline-success btn-guardar position-relative"
                    :disabled="nickname === profile.nickname || isLoadingSave">
                    <i class="bi bi-box-arrow-down"></i> Guardar
                </button>
            </form>

            <!-- Notificador -->
            <Notifier v-show="showNotifier" :message="notification.message" :type="notification.type"
                @after-leave="clearNotification" />

            <div v-if="isLoadingSave" class="loader-form"></div>

            <div class="w-100 mt-4 text-start">
                <label for="email" class="form-label">Email</label>
                <input id="email" type="text" :value="profile.email" class="form-control bg-dark" readonly disabled />
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref, computed, watch } from 'vue';
import Notifier from "@/components/common/Notifier.vue";
import { useProfileStore } from '@/stores/profile';

const profileStore = useProfileStore();
const profile = computed(() => profileStore.profile);
const nickname = ref('');
const isLoadingSave = ref(false);
const isLoadingInfo = ref(true);
const nicknameInput = ref(null);

// Notifier state
const showNotifier = ref(false);
const notification = ref({ message: '', type: 'success' });

// Mostrar validación Bootstrap después de primer intento
const showValidation = ref(false);

// Reglas personalizadas
const valid = computed(() => nickname.value.trim().length >= 3);

// Watch: al cargar perfil
onMounted(() => {
    if (profile.value.nickname) {
        nickname.value = profile.value.nickname;
        isLoadingInfo.value = false;
    }
});

// También si cambia profile.id
watch(() => profileStore.profile.id, (uid) => {
    if (!uid) return;
    nickname.value = profile.value.nickname;
    isLoadingInfo.value = false;
}, { immediate: true });

const clearNotification = () => {
    showNotifier.value = false;
};

const guardarNickname = async () => {
    showValidation.value = true;

    // Forzar validación nativa de Bootstrap + propia
    const input = nicknameInput.value;
    if (!valid.value) {
        input.setCustomValidity("Debe tener al menos 3 caracteres.");
    } else {
        input.setCustomValidity("");
    }

    if (!input.checkValidity()) {
        input.reportValidity();
        return;
    }

    isLoadingSave.value = true;

    try {
        await profileStore.setNickname(nickname.value.trim());
        notification.value = { message: 'Nombre de usuario actualizado', type: 'success' };
    } catch (error) {
        console.error('Error al actualizar nickname:', error);
        notification.value = { message: 'Error al guardar, intenta de nuevo', type: 'error' };
    } finally {
        isLoadingSave.value = false;
        showNotifier.value = true;
    }

    setTimeout(() => {
        showNotifier.value = false;
    }, 2000);
};
</script>

<style scoped>
#email {
    border: none;
    color: #868686;
}

#username {
    border: none;
    border-bottom: 1px solid rgb(228, 228, 228);
    border-radius: 0px;
    height: 40px;
    animation: blink 2s infinite ease;
}

.contenedor {
    padding-top: 100px;
    width: 100%;
    height: 100%;
    max-width: 700px;
    margin-bottom: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.info-container {
    margin-top: 1rem;
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 20px;
}

.list-group-item {
    background-color: #121212;
    border-color: #444;
    color: #fff;
}

h2 {
    margin-bottom: 1rem;
}

.btn-guardar {
    height: 40px;
}



@media only screen and (min-width: 768px) {
    .contenedor {
        padding-left: 160px;
        margin: 0 auto;
        margin-bottom: auto;
        padding-top: 0px;
    }
}
</style>