<template>
    <div class="step-2" v-if="step === 2">
        <h3>Verifique o Codigo Enviado ao seu Email</h3>
        <p>Um codigo com 6 digitos alfanumerico foi enviado para o seu email, digite abaixo para terminar a autenticacao</p>
        <p v-if="error !== null">{{ error }}</p>
        <div class="form-entry">
            <input type="text" v-model="code" >
        </div>
        <button @click="validate_code" class="valid-button">{{ message }}</button>
        <button class="send-again">Enviar Novamente</button>
    </div>
</template>

<script setup lang="ts">
    import log from '@/services/log';
    import { ref,defineProps } from 'vue';
    import {  useRouter } from 'vue-router';

    const router = useRouter()

    const props = defineProps({
        step: Number
    })

    const code = ref<string>('')
    const message = ref<string>('Validar')
    const error = ref<string>('')

    async function validate_code()
    {
        message.value = "Validando..."
        const response = await log.check_code(code.value)
        console.log(response)
        if(!response.success)
        {
            console.log("Problema")
            error.value = response.message
            return
        }
        console.log("Muda de rota")
        router.push('/')
    }
</script>

<style scoped>
    .step-2{
        position: absolute;
        background-color: #232323;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 60%;
        height: 40%;
        padding: 5%;
        border-radius: 8px;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        
    }   

    .form-entry{    
        width: 60%;
    }

    .form-entry > input{
        width: 100%;
        padding-block: 20px;
        background-color: #444;
        font-size: 30px;
        color: white;
        border: none;
        border-radius: 5px;
        outline: none;
    }

    button{
        width: 60%;
        margin-top: 20px;
        font-size: 15px;
        padding: 10px;
        cursor: pointer;
        border: none;
        color:white;
        font-weight: bold;
        border-radius: 8px;
    }

    .valid-button{
        background-color: var(--main-color);
    }

    .valid-button:hover{
        background-color: var(--main-color-dark);
    }

    .send-again{
        background-color: rgb(71, 126, 71);
    }

    .send-again:hover{
        background-color: rgb(50, 89, 50);
    }

    @media screen and (max-width: 1000px) {
        .step-2{
            width: 80%;
            height: 50%;
        }

        .step-2 > p,button,.form-entry{
            width: 80%;
        }
    }
</style>