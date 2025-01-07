export function returnHeader()
{
    const token = localStorage.getItem('jwtToken')
    const csrfToken = localStorage.getItem('csrfToken')

    if(!token || !csrfToken)
    {
        return {
            success: false,
            consoleMessage: "Problema no envio de cabecalhos da requisicao",
            message: "Autenticacao Falhou"
        }
    }
    return {
        success: true,
        header: {
            'Authorization': `Bearer ${token}`,
        }
    }
}

export default function getUrl(url:string){
    const url_base =` http://localhost:8765/api${url}`
    return url_base
}