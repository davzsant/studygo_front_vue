import axios from "axios"
import getUrl, { returnHeader } from "./config"

export async function add_post(title:string,body:string,resume?:string){
    try{
        const {success, headers, consoleMessage} = returnHeader()
        if(!success) return { success: false, message: consoleMessage }
            
        const user_id = localStorage.getItem('userId')
        if(!user_id) return { success: false, message: "Usuario nao autenticado" }
        console.log({headers})
        const response = await axios.post(getUrl('/post/add'),{
            title,
            body,
            user_id,
            resume
        },{headers:headers})

        console.log(response)

        if(!response.data.success) return { success: false, message: response.data.message }
        return {success: true, message: "Post criado com sucesso"}
    

    }catch(error:any)
    {
        console.log("Erro na requisicao:",error)
        return { success: false, message:  "Erro desconhecido na requisicao"}
    }
}

export async function get_post_data(post_id:number|string){
    try{
        const {success, headers, consoleMessage} = returnHeader()
        if(!success) return { success: false, message: consoleMessage }
            
        const user_id = localStorage.getItem('userId')
        if(!user_id) return { success: false, message: "Usuario nao autenticado" }
        console.log({headers})
        const response = await axios.get(getUrl(`/post/view/${post_id}`),{
            headers: headers
        })
        console.log("TEste")
        console.log(response.headers)

        if(!response.data.success) return { success: false, message: response.data.message }
        return {success: true, post: response.data.post}
    

    }catch(error:any)
    {
        console.log("Erro na requisicao:",error)
        return { success: false, message:  "Erro desconhecido na requisicao"}
    }
}
