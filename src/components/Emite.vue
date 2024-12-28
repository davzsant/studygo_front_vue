<template>
    <div class="component">
        <h1>Emissor de Evento</h1>
        <p>{{ item }} - (Preço: R${{ preco }})</p>
        <button @click="adicionar">Adicionar ao Carrinho</button>
    </div>
</template>


<script setup>
    import { defineProps,defineEmits } from 'vue';
    const props = defineProps({
        item:String,
        preco: Number
    })

    const emit = defineEmits([
        'foiAdicionado'
    ])

    function adicionar(){
        emit('foiAdicionado',props.preco)
    }
</script>