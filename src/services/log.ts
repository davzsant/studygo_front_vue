import axios from "axios";
import api from "./api";

type loginResponse = {
    success: boolean,
    message: string,
    nextStep?: boolean
}

async function login(userData:string,password:string): Promise<loginResponse>
{
    try{

        const csrfToken = localStorage.getItem('csrfToken')
    
        if(!csrfToken)
        {
            return {
                success: false,
                message: 'Não Há Token CSRF'
            }
        }
    
        const headers = {
            'Content-Type': 'application/json',
        }
        const response = await axios.post('http://localhost:8765/api/user/login',{
            userData,
            password
        },{headers})
    
        console.log(response)
    
        localStorage.setItem('userId',response.data.user_id)
        if(response.data.nextStep === true)
        {
            return {
                success: true,
                nextStep: true,
                message: 'Codigo enviado ao Email'
            }
        }

        localStorage.setItem('jwtToken',response.data.token)

        return {
            success: true,
            nextStep: false,
            message: 'Login bem sucedido'
        }
    }
    catch(error:any)
    {
        console.log("teste")
        return {
            success: false,
            message:  error.response?.data?.message || 'Erro de conexão com o servidor'
        }
    }
}

async function check_code(code:string) {
    try{
        const csrfToken = localStorage.getItem('csrfToken')
    
        if(!csrfToken)
        {
            return {
                success: false,
                message: 'Não Há Token CSRF'
            }
        }
    
        /* const headers = {
            'Content-Type': 'application/json',
            'X-CSRF-Token': csrfToken,
        } */

        const user_id = localStorage.getItem('userId')
        const response = await axios.post('http://localhost:8765/api/user/verify_code',{
            user_id,
            user_code:code
        })

        console.log(response)
    
        if(!response.data.success)
        {
            return{
                success: false,
                message:  response?.data?.message || 'Erro no envio do Codigo'
            }
        }

        localStorage.setItem('jwtToken',response.data.token)

        return {
            success: true,
        }


    }catch(error:any)
    {
        console.log("teste")
        return {
            success: false,
            message:  error.response?.data?.message || 'Erro no envio do codigo'
        }
    }
}

async function verify_auth()
{
    const user_id = localStorage.getItem('userId')
    const jwtToken = localStorage.getItem('jwtToken')

    if(!jwtToken || !user_id)
    {
        return false
    }
    return true
}

async function get_user()
{
    const isAuth = await verify_auth()
    const user_id = localStorage.getItem('userId')
    const response = await api.get(`user/${user_id}`)
    const { success, data, message } = response.data
    if(!success)
    {
        return message
    }

    return data
}



async function logout()
{
    localStorage.removeItem('jwtToken')
    localStorage.removeItem('userId')
}




const log = {
    login,
    check_code,
    get_user,
    verify_auth,
    logout
}

export default log