<template>
    <div class="post_body">
        <h1>{{ post?.title }}</h1>
        <div class="content" v-html="post?.body"></div>
    </div>
</template>

<script setup lang="ts">
    import { defineProps } from 'vue';
    const props = defineProps({
        post: {
            type: [null , Object]
        }
    })
</script>

<style scoped>
    h1{
        font-size: 50px;
    }

    .content{
        font-size: 30px;
    }

</style>