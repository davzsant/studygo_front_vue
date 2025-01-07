<template>
    <div>
        <h1>Voce realmente deseja terminar a sessão?</h1>
        <button @click="logout">Sim</button>
        <button @click="return_home">Não</button>
    </div>
</template>

<script setup lang="ts">
import log from '@/services/log';
import { useRouter } from 'vue-router';
    const router = useRouter()
    const logout = () => {
        log.logout()
        router.push('/login')
    }

    const return_home = () => {
        router.push('/timeline')
    }
</script>