<template>
    <div class="component">
        <h1>Componente com propriedades Computadas</h1>
        <p>{{ idade }}</p>

        <label >Ano Nascimento:{{ anoNascimento }}</label>
        <input type="number" v-model="anoNascimento">

        <label >Ano Atual:{{ anoAtual }}</label>
        <input type="number" v-model="anoAtual">
    </div>
</template>

<script setup>
    import { ref,computed } from 'vue';

    const anoNascimento = ref(1900)
    const anoAtual = ref(2000)

    const idade = computed(()=>{
        return anoAtual.value - anoNascimento.value
    })
    
</script>