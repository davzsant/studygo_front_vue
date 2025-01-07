<!-- src/views/About.vue -->
<template>
    <div>
      <h1>Profile Page</h1>
      <p>Perfil de Usuario</p>
      <Slots>
        &eqcolon; Conteudo do Botao
      </Slots>
    </div>
  </template>
  
<script setup>
    import Slots from '@/components/Slots.vue'
</script>