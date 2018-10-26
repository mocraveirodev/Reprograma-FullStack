import React from 'react'
import Link from '../../componentes/Link/Link';
import Botao from '../../componentes/Botao/Botao';
import Campo from '../../componentes/Campo/Campo';
import Legenda from '../../componentes/Legenda/Legenda';
import './Conta.css'

function Conta() {
    return (
        <main className="conta">
            <h1>Conta</h1>
            <p>Envie o formulário para criar uma conta!</p>

            <Legenda htmlFor="nome">Nome:</Legenda>
            <Campo type="text" name="nome" id="nome" placeholder="Nome" obrigatorio />

            <Legenda htmlFor="telefone">Telefone:</Legenda>
            <Campo type="tel" name="telefone" id="telefone" placeholder="Telefone" />

            <Legenda htmlFor="email">E-mail:</Legenda>
            <Campo type="email" name="email" id="email" placeholder="E-mail" />


            <Legenda htmlFor="senha">Senha:</Legenda>
            <Campo type="password" name="senha" id="senha" placeholder="Senha" />

            <Botao desabilitado>Enviar</Botao>
            <Link url="/login">Fazer Login</Link>
        </main>
    );
}

export default Conta