<template>
    <div class="selection" v-if="selectedView === null">
        <h2>O que voce deseja Criar?</h2>
        <h3>O engajamento que gerar sera convertido em pontos para adquirir itens costumizaveis</h3>
        <a href="#">Leia Mais</a>
        <select v-model="selectedCreation">
            <option value="post">📚 Postagem</option>
            <option value="video">🎥 Video Aula</option>
            <option value="frame">🖼️ Quadro</option>
            <option value="topics">🔖 Tópicos</option>
            <option value="question">❓ Questões</option>
            <option value="poll">💬 Enquete</option>
            <option value="action">🚀 Atividade de Ação!</option>
        </select>
        <p>{{ description }}</p>
        <button @click="selectView" class="select_btn">Vamos La</button>
    </div>
    <div class="ViewCreations" v-if="selectedView !== null">
        <div>
            <component :is="currentViewComponent"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

    import PostCreate from './PostCreate.vue';

    const optionsTexts = {
        post: "Crie postagens que vão impactar as pessoas, compartilhe suas ideais e debata com as pessoas",
        frame: "Organize suas ideias e crie topicos aqui dentro para estudar de forma mais organizada",
        topics: "Agrupe as postagens que deseja",
        question: "Crie Questoes que vao desafiar os limites do conhecimento",
        poll: "Colete dados dos seus seguidores para montar um conteudo com embasamento",
        action: "Crie Atividades Personalizadas para se divertir"
    }

    const selectedCreation = ref<string>('postagem')
    const selectedView = ref<string|null>(null)
    const description = computed(()=>{
        return optionsTexts[selectedCreation.value] || "Selecione uma opção para ver a descrição."
    })

    const selectView = () =>
    {
        selectedView.value = selectedCreation.value
    }

    const currentViewComponent = computed(()=>{
        const views = {
            post: PostCreate
        }
        return views[selectedView.value] || null
    })
</script>


<style scoped>
    .selection{
        position: absolute;
        top: 60%;
        left: 50%;
        width: 60%;
        height: 70%;
        transform: translate(-50%,-50%);
        background-color: #333;
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .selection > h2{
        font-weight: bold;
        font-size: 40px;
        color: var(--main-color);
    }

    h2,h3{
        width: 60%;
        text-align: center;
    }

    a{
        text-decoration: none;
        color: rgb(192, 192, 255);
    }

    .selection > select{
        padding: 20px;
        font-size: 20px;
        outline: none;
        border-radius: 8px;
        font-weight: bold;
        margin-top: 20px;
    }

    .selection > p{
        font-size: 20px;
        width: 60%;
    }

    .selection > button{
        border: none;
        background-color: var(--main-color);
        cursor: pointer;
        width: 60%;
        padding-block: 20px;
        font-weight: bold;
        color: white;
        font-size: 18px;
        border-radius: 10px;
    }

    @media screen and (max-width:1000px) {
        .selection > button,.selection > p{
            width: 80%;
        }
    }
</style>