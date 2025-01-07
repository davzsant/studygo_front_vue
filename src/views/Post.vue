<!-- src/views/Home.vue -->
<template>
    <div>
        <h1>{{ post?.title }}</h1>
    </div>
</template>
  
<script setup lang="ts">
    import type { PostType } from '@/types/PostType';
    import { ref,onMounted } from 'vue';
    import { useRoute } from 'vue-router';

    const route = useRoute()
    const postId = route.params.id

    const post = ref<null|PostType>(null)
    const isLoading = ref<null|boolean>(null)
    const error = ref<null|string>(null)

    onMounted(async ()=>{
        try{
            isLoading.value = true
            const response = await fetch(`http://localhost:8765/api/post/view/${postId}`)
            if (!response.ok) {
                throw new Error(`Erro na requisição: ${response.status} ${response.statusText}`)
            }
            const jsonData = await response.json()
            post.value = jsonData.data
            console.log(post.value)
        
        }catch(err){
            error.value = "Ocorreu um erro na busca de Dados desta Postagem"
            console.log("Erro na requisicao:",err)
        }
        finally{
            isLoading.value = false
        }
    })
</script>