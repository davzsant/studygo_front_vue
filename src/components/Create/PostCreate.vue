<template>
    <div class="createPost">
        <div class="createTitle">
            <label for="title">Titulo</label>
            <input type="text" name="title" v-model="title">
        </div>
        
        <div class="contentCreator">
            <QuillEditor theme="snow" ref="quillEditor" v-model="textContent" @text-change="atualizarTexto"></QuillEditor>
        </div>

        <div class="resumeContainer">
            <label for="resume">Resumo</label>
            <textarea name="resume" v-model="resume" class="textContent" ></textarea>
        </div>

        <div class="midiaContent">
            <div class="explication">
                <h1>Conteudo AudioVisual</h1>
                <ul>
                    <li>Videos de Até 1 minuto e 30 segundos</li>
                    <li>Ate 5 Fotos</li>
                    <li>Audios de ate 3 minutos</li>
                </ul>
            </div>
            <div class="addMidia">
                <input type="file" name="midia">
                <button>Carregar</button>
            </div>
        </div>

        <div class="linksContent">
            <h1>Links:</h1>
            <ul>
                <li><a href="http://youtube.com">Youtube</a></li>
            </ul>
            <div class="add_link">
                <input type="text" v-model="linkName">
                <input type="text" v-model="linkContent">
            </div>
            <button>Adicionar Link</button>
        </div>

        <div class="addContainer">
            <p v-if="error">{{ error }}</p>
            <button class="btn_adicionar" @click="adicionar_post">Adicionar</button>
        </div>
    </div>

    <div class="preview">
        <h1>{{ title }}</h1>
        <div v-html="textContent"></div>
    </div>
</template>

<script setup lang="ts">
import { add_post } from '@/services/post';
import { QuillEditor } from '@vueup/vue-quill';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

    const title = ref<string>('')
    const quillEditor = ref(null)
    const textContent = ref<string>('asdasds')
    const resume = ref<string>('')
    const linkName = ref<string>('')
    const linkContent = ref<string>('')
    const error = ref<string>('')

    const router = useRouter()

    async function adicionar_post()
    {
        console.log(quillEditor.value.getHTML())
        const result = await add_post(title.value,quillEditor.value.getHTML(),resume.value)
        console.log("Resultado:",result)
        if(!result?.success)
        {
            error.value = result?.message
            return
        }

        await router.replace('/timeline')
    }

    function atualizarTexto(value:any)
    {
        console.log(quillEditor)
        textContent.value = quillEditor.value.getHTML();
    }
</script>

<style scoped>
    .createPost{
        padding: 10px;
        width: 50%;
        margin-inline: auto;
        background-color: #161616;
        margin-top: 20px;
    }

    .createTitle{
        display: flex;
        flex-direction: column;
        display: flex;
        align-items: center;
    }

    .createTitle > label{
        font-size: 20px;
        font-weight: bold;
        
    }

    .createTitle > input{
        background-color: #333;
        width: 80%;
        padding: 20px;
        font-size: 20px;
        border: 1px solid ;
        border-radius: 8px;
        border: none;
    }

    .resumeContainer{
        width: 80%;
        margin-inline: auto;
    }

    .resumeContainer > label{
        font-weight: bold;
        font-size: 20px;
    }

    .resumeContainer > textarea{
        min-height: 15vh !important;
    }


    .preview{
        color: white;
        background-color: #222;
        width: 30%;
    }

    .contentCreator{
        width: 80%  ;
        margin: auto;
        padding: 20px;
    }

    .styleText{
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-around;
        background-color: #252525;
        padding: 5px;
    }

    .styleText button{
        background-color: #252525;
        color: white;
        font-weight: bold;
        font-size: 18px;
        padding: 5px;
        border: none;
        cursor: pointer;
    }


    .textContent{
        background-color: #444;
        color: white;
        width: 100%;
        padding: 5px;
        min-height: 30vh;
        resize: none;
        outline: none;
        font-size: 20px;
        border: none;
    }

    .midiaContent{
        display: none;
        width: 80%;
        height: 50vh;
        padding: 5px;
        margin-inline: auto;
        border: 1px solid red;
    }

    .explication{
        width: 50%;
        border: 1px solid yellow;
    }

    .addMidia{
        border: 1px solid blue;
        width: 50%;
        margin-inline: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .addMidia > input{
        width: 90%;
        height: 35vh;
        border: 3px solid green;
    }

    .addMidia > button{
        width: 90%;
        padding: 5px;
        cursor: pointer;
        font-weight: bold;
        font-size: 20px;
    }

    .linksContent{
        display: none;
    }

    .addContainer{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .btn_adicionar{
        width: 80%;
        background-color: var(--main-color);
        border: none;
        padding: 5px;
        cursor: pointer;
        color: white;
        border-radius: 8px;
        font-size: 20px;
    }
</style>