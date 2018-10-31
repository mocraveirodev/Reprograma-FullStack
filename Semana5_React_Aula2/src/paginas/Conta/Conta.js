import React, { Component } from 'react'
import Link from '../../componentes/Link/Link';
import Botao from '../../componentes/Botao/Botao';
import Campo from '../../componentes/Campo/Campo';
import Legenda from '../../componentes/Legenda/Legenda';
import './Conta.css'

// function Conta() {
//     return (
//         <main className="conta">
//             <h1>Conta</h1>
//             <p>Envie o formulário para criar uma conta!</p>

//             <Legenda htmlFor="nome">Nome:</Legenda>
//             <Campo type="text" name="nome" id="nome" placeholder="Nome" obrigatorio minLength={10} />

//             <Legenda htmlFor="telefone">Telefone:</Legenda>
//             <Campo type="tel" name="telefone" id="telefone" placeholder="Telefone" obrigatorio />

//             <Legenda htmlFor="email">E-mail:</Legenda>
//             <Campo type="email" name="email" id="email" placeholder="E-mail" obrigatorio />


//             <Legenda htmlFor="senha">Senha:</Legenda>
//             <Campo type="password" name="senha" id="senha" placeholder="Senha" obrigatorio minLength={6}/>

//             <Botao desabilitado>Enviar</Botao>
//             <Link url="/login">Fazer Login</Link>
//         </main>
//     );
// }

class Conta extends Component{
    constructor(props){
        super(props)
        this.nomeRef = React.createRef();
        this.telRef = React.createRef();
        this.emailRef = React.createRef();
        this.senhaRef = React.createRef();
        this.state = { desabilitado: true }
    }
    handleChange = () => {
        const campoNome = this.nomeRef.current
        const campoTel = this.telRef.current
        const campoEmail = this.emailRef.current
        const campoSenha = this.senhaRef.current
        if (campoNome.temErro() || campoTel.temErro() || campoEmail.temErro() || campoSenha.temErro()) {
            this.setState({ desabilitado: true })
        }else{
            this.setState({ desabilitado: false })
        }
    }
    render(){
        return (
            <main className="conta">
                <h1>Conta</h1>
                <p>Envie o formulário para criar uma conta!</p>
    
                <Legenda htmlFor="nome">Nome:</Legenda>
                <Campo ref={this.nomeRef} type="text" name="nome" id="nome" placeholder="Nome" obrigatorio minLength={10} onChange={this.handleChange} />
    
                <Legenda htmlFor="telefone">Telefone:</Legenda>
                <Campo ref={this.telRef} type="tel" name="telefone" id="telefone" placeholder="Telefone" obrigatorio onChange={this.handleChange} />
    
                <Legenda htmlFor="email">E-mail:</Legenda>
                <Campo ref={this.emailRef} type="email" name="email" id="email" placeholder="E-mail" obrigatorio onChange={this.handleChange} />
    
    
                <Legenda htmlFor="senha">Senha:</Legenda>
                <Campo ref={this.senhaRef} type="password" name="senha" id="senha" placeholder="Senha" obrigatorio minLength={6} onChange={this.handleChange} />
    
                <Botao desabilitado={this.state.desabilitado}>Enviar</Botao>
                <Link url="/login">Fazer Login</Link>
            </main>
        );
    }
} 

export default Conta