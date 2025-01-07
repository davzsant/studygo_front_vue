import axios from "axios"

export default async function getCsrfToken()
{
    try
    {
        //Verifica se o CrfsToken ja existe
        if(localStorage.getItem('csrfToken'))
        {
            return true
        }
    
        //Vai fazer uma requisicao a API para conseguir este token
        const response = await axios.get('http://localhost:8765/api/request/get_csrf_token')
        const csrfToken = response.data.csrfToken
    
        localStorage.setItem('csrfToken',csrfToken)
        console.log("Token Salvo")
    }
    catch(error)
    {
        console.log('Token nao foi salvo, nao sera possivel fazer requisicoes',error)
    }



} 