<template>
    <div class="contenedor">
        <h1>Mi Perfil</h1>

        <div class="info-container">
            <div class="w-100 mb-4 justify-content-center d-flex align-items-end gap-3">
                <div class="text-start w-100">
                    <label for="username" class="form-label">Nombre de Usuario</label>
                    <input type="text" v-model="nickname" spellcheck="false" autocomplete="off" id="username"
                        class="form-control" />
                </div>
                <div>
                    <button class="btn btn-outline-success btn-guardar"
                        :class="nickname === profile.nickname ? 'disabled' : ''"
                        @click="guardarNickname">Guardar</button>
                </div>
            </div>
            <div class="w-100">
                <div class="text-start">
                    <label for="email" class="form-label">Email</label>
                    <input type="text" :value="profile.email" id="email" class="form-control" readonly disabled />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue';
import { useProfileStore } from '../stores/profile';

const profileStore = useProfileStore();
const profile = computed(() => profileStore.profile);
const nickname = ref('');

onMounted(async () => {
    await profileStore.getRutinas();
    nickname.value = profile.value.nickname;
});

const guardarNickname = async () => {
    try {
        profileStore.updateNickname(nickname.value);
        // También actualiza en Firestore si tenés ese código
        alert('Nombre de usuario actualizado correctamente');
    } catch (error) {
        console.error("Error al actualizar nickname:", error);
        alert("Ocurrió un error al guardar.");
    }
};
</script>


<style scoped>
#email {
    border: none;
}

#username {
    border: none;
    border-bottom: 1px solid aqua;
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
    margin-top: 50px;
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 20px;
}

.form-control {
    background-color: #1e1e1e;
    color: rgb(204, 204, 204);
    width: 100%;
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

@keyframes blink {

    0%,
    100% {
        box-shadow: 0 0 0px aquamarine;
    }

    50% {
        box-shadow: 0 0 8px 2px aqua;
    }
}

@media only screen and (min-width: 768px) {
    .contenedor {
        padding-left: 180px;
        margin: 0 auto;
    }
}
</style>
