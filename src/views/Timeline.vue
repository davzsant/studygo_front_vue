<script lang="ts">
import type { PostType } from '@/types/PostType';
import Post from '@/components/Timeline/Post.vue';
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  components: {
    Post, // Registrando o componente
  },
  setup() {
    const posts = ref<null|PostType[]>(null);
    const loading = ref<null|boolean>(null);
    const error = ref<null|string>(null);

    onMounted(async () => {
      try {
        loading.value = true
        const response = await fetch('http://localhost:8765/api/post'); // URL da API
        if (!response.ok) {
          throw new Error(`Erro na requisição: ${response.status} ${response.statusText}`)
        }
        let jsonData = await response.json()
        posts.value = jsonData.data
      } catch (err) {
        error.value = "Ocorreu um erro na busca de Posts"
        console.error("Erro na requisição:", err)
      } finally {
        loading.value = false
      }
    });

    return { posts, loading, error }
  },
});
</script>


<template>
    <div>
    <div v-if="loading">Carregando Postagens...</div>
    <div v-else-if="error">Erro ao carregar Postagens :(</div>
    <div v-else>
      <div class="timeline">
        <Post v-for="post in posts" :content="post" :key="post.id"/>
      </div>
    </div>
  </div>
</template>

s
<style scoped>
    .timeline{
      margin: auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
    }
</style>
