import axios from 'axios'

const config = {
    baseURL: 'https://reprograma-postit-api.herokuapp.com'
}

const json = localStorage.getItem('usuario')

if (json) {
    let usuario = JSON.parse(json)
    config.headers = {
        'Authorization': usuario.token
    }
}

const api = axios.create(config)

export function logaUsuario(dados) {
    return (dispatch) => {
        api.post('/login', dados).then(response => {
            api.defaults.headers.common['Authorization'] = response.data.usuario.token
            dispatch({
                type: 'LOGA_USUARIO',
                dados: response.data.usuario
            })
        })
    }
    // return {
    //     type: 'LOGA_USUARIO',
    //     dados
    //     dados: dados    quando o objeto tem o mesmo nome nao precisa repetir
    // }
    // return {
    //     logaUsuario: (dados) => {
    //         dispatch({
    //             type: 'LOGA_USUARIO',
    //             dados: dados
    //         })
    //     }
    // }
}

export function deslogaUsuario() {
    return {
        type: 'DESLOGA_USUARIO'
    }
    // return {
    //     deslogaUsuario: () => {
    //         // const acao = {
    //         //     type: 'DESLOGA_USUARIO'
    //         // }

    //         // dispatch(acao)

    //         dispatch({
    //             type: 'DESLOGA_USUARIO'
    //         })
    //     }
    // }
}

export function cadastraPostit(dados) {
    return (dispatch) => {
        api.post('/postits', dados).then(response => {
            dados.id = response.data.id
            dispatch({
                type: 'CADASTRA_POSTIT',
                dados
            })
        })
    }

    // return {
    //     type: 'CADASTRA_POSTIT',
    //     dados
    // }
}

export function alteraPostit(dados) {
    return (dispatch) => {
        const url = `/postits/${dados.id}`
        api.put(url, dados).then(response => {
            dispatch({
                type: 'ALTERA_POSTIT',
                dados
            })
        })
    }

    // return {
    //     type: 'ALTERA_POSTIT',
    //     dados
    // }
}

export function removePostit(id) {
    return (dispatch) => {
        const url = `/postits/${id}`
        api.delete(url).then(response => {
            dispatch({
                type: 'REMOVE_POSTIT',
                id
            })
        })
    }
    // return {
    //     type: 'REMOVE_POSTIT',
    //     id
    // }
}