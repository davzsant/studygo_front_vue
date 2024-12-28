<template>
    <div>
    <div v-if="loading">Carregando dados...</div>
    <div v-else-if="error">Erro ao carregar dados: {{ error }}</div>
    <pre v-else>{{ jsonData }}</pre>
  </div>
</template>

<script lang="ts">
import type { PostType } from '@/types/PostType';
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  setup() {
    const jsonData = ref<null|PostType[]>(null);
    const loading = ref<null|boolean>(null);
    const error = ref<null|string>(null);

    onMounted(async () => {
      try {
        const response = await fetch('http://localhost:8765/api/post'); // URL da API
        if (!response.ok) {
          throw new Error(`Erro na requisição: ${response.status} ${response.statusText}`);
        }
        jsonData.value = await response.json();
      } catch (err) {
        error.value = "Ocorreu um erro na busca de Posts"
        console.error("Erro na requisição:", err);
      } finally {
        loading.value = false;
      }
    });

    return { jsonData, loading, error };
  },
});
</script>