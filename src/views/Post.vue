<!-- src/views/Home.vue -->
<template>
    
    <div class="post">
        <CreatorBoard :user="post?.user"/>
        <PostBody  :post="post"/>
        <Actions/>
    </div>

</template>
  
<script setup lang="ts">
    import Actions from '@/components/Post/Actions.vue';
import CreatorBoard from '@/components/Post/CreatorBoard.vue';
    import PostBody from '@/components/Post/PostBody.vue';
    import { get_post_data } from '@/services/post';
    import type { PostType } from '@/types/PostType';
    import { ref, onMounted } from 'vue';
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

            post.value = response.post
            
        
        }catch(err){
            error.value = "Ocorreu um erro na busca de Dados desta Postagem"
            console.log("Erro na requisicao:",err)
        }
        finally{
            isLoading.value = false
        }
    })
</script>

<style scoped>
    .post{
        background-color: #151515;
        color: white;
        padding: 5%;
        border-radius: 5px;
        margin: 5%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>