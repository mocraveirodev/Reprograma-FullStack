import React from 'react'
import Link from '../../componentes/Link/Link';
import Botao from '../../componentes/Botao/Botao';
import './Login.css'

function Login() {
    return (
        <main className="login">
            <h1>Conta</h1>
            <p>Entre com seu email e senha.</p>

            <Botao>Enviar</Botao>
            <Botao desabilitado>Enviar</Botao>
            <Link url="/conta">Criar uma conta</Link>
            <Link url="/login">Fazer login</Link>
            <Link url="/xuxu">xuxu</Link>
        </main>
    );
}

export default Login