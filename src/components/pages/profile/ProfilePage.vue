<template>
    <div class="contenedor mt-md-5">


        <ProfileHeader :nickname="profile.nickname" :level="stats.level" @update:nickname="guardarNickname" />

        <ProfileStats :stats="stats" />

        <Notifier v-show="showNotifier" :message="notification.message" :type="notification.type" />

    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import Notifier from "@/components/common/Notifier.vue"
import { useProfileStore } from '@/stores/profile'
import ProfileHeader from '../../profile/ProfileHeader.vue'
import ProfileStats from '../../profile/ProfileStats.vue'

const profileStore = useProfileStore()

const profile = computed(() => profileStore.profile)
const stats = computed(() => profileStore.stats)

const showNotifier = ref(false)
const notification = ref({ message: '', type: 'success' })
const isSaving = ref(false)

const guardarNickname = async (newNickname) => {
    if (!newNickname) return

    isSaving.value = true

    try {
        await profileStore.setNickname(newNickname)

        notification.value = {
            message: 'Nombre actualizado correctamente',
            type: 'success'
        }

    } catch (err) {
        console.error(err)
        notification.value = {
            message: 'Error al guardar el nombre',
            type: 'error'
        }
    } finally {
        isSaving.value = false
        showNotifier.value = true
        setTimeout(() => showNotifier.value = false, 2000)
    }
}
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
    padding-top: 80px;
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
        padding-left: 240px;
        margin: 0 auto;
        margin-bottom: auto;
        padding-top: 0px;
    }
}
</style>