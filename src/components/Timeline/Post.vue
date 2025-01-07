<template>
    <div class="post">
        <router-link :to="{name: 'Post',params:{id: content.id}}">
            <h1>{{ content?.title }}</h1>
        </router-link>
        <p>{{ mainText }}</p>

    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
    import type { PostType } from '@/types/PostType';
    const props = defineProps({
        content: {
            type: Object as () => PostType,
            required: true
        }
    })

    const mainText = ref((props.content?.imagePath && props.content.body && props.content.body.length <= 300 ? props.content.body : props.content.resume))
</script>

<style scoped>

    div{
        margin-top: 10px;
        border-radius: 3px;
        border: 1px solid rgba(255, 255, 255, 0.492);
        padding: 30px;
        color: white;
        background-color: #181718;
        min-height: 20vh;
        max-height: 60vh;
        width: 30vw;    
    }

    div > a > h1{
        text-align: center;
        text-transform: capitalize;
    }

    div > a{
        text-decoration: none;
        color: white;
        font-weight: bolder;
    }

    @media screen and (max-width:1000px) {
        div{
            width: 60%;
        }
    }
</style>