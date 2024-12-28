<template>
    <div class="component">
        <h1>Componente com Props</h1>
        <p>{{ item }}</p>
        <p>(Preco: R${{ preco }})</p>
    </div>
</template>


<script setup>
    import { defineProps } from 'vue';
    defineProps({
        item:String,
        preco: Number
    })

</script>