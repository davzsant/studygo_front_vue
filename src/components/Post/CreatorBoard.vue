<script setup lang="ts">
    import { defineProps } from 'vue';
    const props = defineProps({
        user: {
            type: Object,
            required: true,
            default: "Usuario sem identificação"
        }
    })
</script>

<template>
    <div class="creator_container">
        <img src="/empty_user.png" alt="Usuario sem imagem" class="user_image">
        <div class="user_data">
            <h3>{{ user.name }}</h3>
            <div class="user_content">
                <i class="bi bi-feather"></i>
                <p>Filosofia e Ciencias Humanas</p>
            </div>
        </div>
        <button>Seguir</button>
    </div>
</template>

<style scoped>
    .creator_container{
        min-height: 7vh;
    }

    .creator_container{
        display: flex;
        align-items: center;
    }

    .creator_container .user_image{
        border: 1px solid rgb(78, 152, 255);
        background-color: white;
        padding: 20px;
        border-radius: 50%;
        width: 7vh;
        height: 7vh;
    }

    .creator_container .user_data{
        font-size: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
        justify-content: center;
        margin-inline: 10px;
    }

    .creator_container .user_data h3{
        font-size: 30px;
        margin: 0;
    }

    .creator_container .user_data .user_content{
        color: rgb(78, 152, 255);
        display: flex;
        gap: 10px;
    }

    .creator_container .user_data .user_content p{
        margin: 0;
    }

    .creator_container button{
        padding: 20px;
        border: none;
        border-radius: 5px;
        color: white;
        background-color: rgb(78, 152, 255);
        font-weight: bold;
        font-size: 20px;
        cursor: pointer;
        transition: .5s;
    }

    .creator_container button:hover{
        transform: scale(0.95);
        box-shadow: inset 0px 1px 10px rgba(0,0,0,0.5);
    }
</style>