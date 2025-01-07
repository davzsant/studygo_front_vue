<template>
    <div class="step-1" v-if="step === 1">
        <h2>StudyGo</h2>
        <form @submit.prevent="handleLogin">
            <p v-if="error !== null">{{ error }}</p>
            <div class="form-entry">
                <input name="userData" type="text" v-model="userData" required>
                <label for="userData">Email/Username</label>
            </div>
            <div class="form-entry">
                <input v-bind:type="passwordType" v-model="password" required>
                <label for="password">Senha</label>
                <button v-if="passwordType === 'password'" @click="showPassword" class="btn-visible show-password"><i class="bi bi-eye"></i></button>
                <button v-if="passwordType === 'text'" @click="hidePassoword" class="btn-visible hide-password"><i class="bi bi-eye-slash"></i></button>
            </div>
            <button type="submit" class="btn_submit">{{ loginStatus }}</button>
        </form>
        <div class="redirect-links">
            <router-link to="register">Fazer Cadastro</router-link>
            <router-link to="forget">Esqueci a Senha</router-link>
        </div>
    </div>

</template>

<script setup lang="ts">
    import log from '@/services/log';
    import { ref,defineProps,defineEmits } from 'vue';
    import { useRouter } from 'vue-router';
    const userData = ref<string>('')
    const password = ref<string>('')
    const error = ref<string|null>(null)
    const loginStatus = ref<string>('Fazer Login')
    const passwordType = ref<string>('password')

    const emit = defineEmits(['twoStep'])
    const router = useRouter()

    const props = defineProps({
        step: Number
    })

    async function handleLogin()
    {
        loginStatus.value = "Verificando Dados"
        const response = await log.login(userData.value,password.value)
        if(!response.success)
        {
            loginStatus.value = "Reenviar"
            error.value = response.message
            return
        }

        if(response.nextStep)
        {
            setTimeout(()=>{
                emit('twoStep')
            },2000)
            return
        }
        router.push('/')

    }
    const showPassword = () => {passwordType.value = 'text'}
    const hidePassoword = () => {passwordType.value = 'password'}
</script>

<style scoped>
    .step-1{
        position: absolute;
        transform: translate(-50%,-50%);
        top: 60%;
        left: 50%;
        display: flex;
        width: 50%;
        height: 70%;
        background-color: #242424;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .step-1 > form{
        position: relative;
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;

    }

    .form-entry{
        position: relative;
        width: 60%;
        display: flex;
        align-items: center;
        margin-block: 20px;
    }

    .form-entry input{
        padding: 15px;
        width: 100%;
        background-color: #444;
        font-size: 23px;
        color: white;
        border: none;
        border-radius: 8px;
        cursor: text;
        outline: none;
        border: 2px solid #212121;
    }

    .form-entry input:valid ~ label,
    .form-entry input:hover ~ label{
        top: 0%;
        left: 8%;

    }

    .form-entry > label{
        position: absolute;
        top: 50%;
        transition: 0.4s;
        left: 10%;
        user-select: none;
        transform: translateY(-50%);
        color: rgb(195, 195, 195);
        font-weight: bold;
        
    }

    .btn-visible{
        position: absolute;
        right: 5%;
        top: 50%;
        transform: translateY(-50%);
        border: none;
        font-size: 20px;
        font-weight: bolder;
        background-color: #444;
        color:white;
        cursor: pointer;
    }

    .btn_submit{
        background-color: var(--main-color);
        border: none;
        width: calc(60%);
        padding-block: 15px;
        font-size: 20px;
        margin-block: 5px;
        color: white;
        font-weight: bolder;
        border-radius: 5px;
        cursor: pointer;
    }

    .redirect-links{
        width: calc(60%);
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 10px;
    }

    .redirect-links > a{
        color: white;
        text-decoration: none;
        font-weight: bold;
    }

    .redirect-links > a:hover{
        text-decoration: underline;
    }

    @media screen and (max-width:1000px) {
        .step-1{
            width: 80%;
        }

        .form-entry{
            width: 80%;
        }

        .form-entry label{
            font-size: 18px;
        }

        .form-entry > input{
            padding: 20px;
            font-size: 25px;
        }

        .btn_submit{
            width: 80%;
        }

        .redirect-links{
            width: 80%;
        }
    }
</style>