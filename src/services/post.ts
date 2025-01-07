import api from "./api"

async function add_post(title:string,description:string,resume?:string){
    try{
        const user_id = localStorage.getItem('userId')
        if(!user_id) return { success: false, message: "Usuario nao autenticado" }
    
        const response = await api.post('/post/add',{
            title,
            description,
            user_id,
            resume
        })

        console.log(response)

        if(!response.data.success) return { success: false, message: response.data.message }

    

    }catch(error:any)
    {
        console.log("Erro na requisicao:",error)
        return { sucess: false, message: error.response.data.message || "Erro desconhecido na requisicao"}
    }

    
}