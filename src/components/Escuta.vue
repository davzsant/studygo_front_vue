<template>
    <div>
        <h1>Escuta Evento</h1>
        <p>Valor Total: R$: {{ total }}</p>
    </div>

    <div class="itens_gerais">
        <Emite item="Leite" :preco="1.50" @foiAdicionado="atualizarTotal" />
        <Emite item="Chocolate" :preco="12.76" @foiAdicionado="atualizarTotal"/>
        <Emite item="Salgadinho" :preco="12.90" @foiAdicionado="atualizarTotal"/>
    </div>
</template>


<script setup>
    import Emite from './Emite.vue';
    import {ref} from 'vue'
    const total = ref(0)

    function atualizarTotal(preco){
        let valor = total.value + preco
        total.value = Number(valor.toFixed(2))
    }

</script>

<style scoped>
    .itens_gerais{
        padding: 10px;
        background-color: #333;
        border-radius: 8px;
    }
</style>