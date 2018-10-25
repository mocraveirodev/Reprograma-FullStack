import React from 'react'
import Link from '../../componentes/Link/Link';
import Botao from '../../componentes/Botao/Botao';
import Campo from '../../componentes/Campo/Campo';
import Legenda from '../../componentes/Legenda/Legenda';
import './Login.css'

function Login() {
    return (
        <main className="login">
            <h1>Conta</h1>
            <p>Entre com seu email e senha.</p>

            <Legenda htmlFor="email">E-mail:</Legenda>
            <Campo type="email" name="email" id="email" placeholder="E-mail" />


            <Legenda htmlFor="senha">Senha:</Legenda>
            <Campo type="password" name="senha" id="senha" placeholder="Senha" />

            <Botao>Enviar</Botao>
            <Link url="/conta">Criar uma conta</Link>
        </main>
    );
}

export default Login