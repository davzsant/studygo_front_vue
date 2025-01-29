<!-- src/views/Home.vue -->
<template>
    <div>
        <h1>{{ post?.title }}</h1>
    </div>
</template>
  
<script setup lang="ts">
    import { get_post_data } from '@/services/post';
import type { PostType } from '@/types/PostType';
    import { ref,onMounted } from 'vue';
    import { useRoute } from 'vue-router';

    const route = useRoute()
    const postId = route.params.id as string

    const post = ref<null|PostType>(null)
    const isLoading = ref<null|boolean>(null)
    const error = ref<null|string>(null)

    onMounted(async ()=>{
        try{
            isLoading.value = true
            const response = await get_post_data(postId)
            console.log(response)
            if(!response.success)
            {
                isLoading.value = false
                error.value = response.message
            }
            
        
        }catch(err){
            error.value = "Ocorreu um erro na busca de Dados desta Postagem"
            console.log("Erro na requisicao:",err)
        }
        finally{
            isLoading.value = false
        }
    })
</script>