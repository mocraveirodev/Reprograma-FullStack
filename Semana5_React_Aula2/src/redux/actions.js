export function logaUsuario(dados) {
    return {
        type: 'LOGA_USUARIO',
        dados
        // dados: dados    quando o objeto tem o mesmo nome nao precisa repetir
    }
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
    return {
        type: 'CADASTRA_POSTIT',
        dados
    }
}

export function alteraPostit(dados){
    return {
        type: 'ALTERA_POSTIT',
        dados
    }
}