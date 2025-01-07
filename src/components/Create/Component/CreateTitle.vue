<template>
    <div>
        <input type="text" v-model="title" @change="updateTitle">
    </div>
</template>

<script setup lang="ts">
    import { defineProps } from 'vue';
    const props = defineProps({
        title:String
    })
</script>

<style scoped>

</style>