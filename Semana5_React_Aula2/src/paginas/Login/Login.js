import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logaUsuario } from '../../redux/actions'
import Link from '../../componentes/Link/Link';
import Botao from '../../componentes/Botao/Botao';
import Campo from '../../componentes/Campo/Campo';
import Legenda from '../../componentes/Legenda/Legenda';
import './Login.css'

class Login extends Component {

    constructor(props) {
        super(props)
        this.emailRef = React.createRef(); //cria uma referencia à tudo que tem declarado na tag que está usando
        this.senhaRef = React.createRef();
        this.state = { desabilitado: true }
    }

    enviaDados = (ev) => {
        ev.preventDefault();

        const campoEmail = this.emailRef.current
        const campoSenha = this.senhaRef.current

        const dados = {
            email: campoEmail.getValor(),
            senha: campoSenha.getValor()
        }

        this.props.logaUsuario(dados)

        this.props.history.push('/')
    }

    handleChange = () => {
        const campoEmail = this.emailRef.current
        const campoSenha = this.senhaRef.current
        if (campoEmail.temErro() || campoSenha.temErro()) {
            this.setState({ desabilitado: true })
        }else{
            this.setState({ desabilitado: false })
        }
    }

    render() {
        return (
            <main className="login">
                <h1>Login</h1>
                <p>Entre com seu email e senha.</p>

                <form onSubmit={this.enviaDados}>
                    <Legenda htmlFor="email">E-mail:</Legenda>
                    <Campo ref={this.emailRef} type="email" name="email" id="email" placeholder="E-mail" obrigatorio onChange={this.handleChange} />
            
                    <Legenda htmlFor="senha">Senha:</Legenda>
                    <Campo ref={this.senhaRef} type="password" name="senha" id="senha" placeholder="Senha"  obrigatorio minLength={6} onChange={this.handleChange} />
            
                    <Botao desabilitado={this.state.desabilitado}>Enviar</Botao>
                    <Link url="/conta">Criar uma conta</Link>
                </form>
            </main>
        );
    }
}

export default connect(null, {logaUsuario})(Login)

// function Login() {
//     return (
//         <main className="login">
//             <h1>Login</h1>
//             <p>Entre com seu email e senha.</p>

//             <Legenda htmlFor="email">E-mail:</Legenda>
//             <Campo type="email" name="email" id="email" placeholder="E-mail"  obrigatorio />


//             <Legenda htmlFor="senha">Senha:</Legenda>
//             <Campo type="password" name="senha" id="senha" placeholder="Senha"  obrigatorio minLength={6} />

//             <Botao>Enviar</Botao>
//             <Link url="/conta">Criar uma conta</Link>
//         </main>
//     );
// }

// function passaNoPropsDisparadoresDeAcao(dispatch) {
//     return {
//         logaUsuario: (dados) => {
//             dispatch({
//                 type: 'LOGA_USUARIO',
//                 dados: dados
//             })
//         }
//     }
// }

// const conectaNaStore = connect(null, passaNoPropsDisparadoresDeAcao)
// const conectaNaStore = connect(null, {logaUsuario})

// const LoginConectado = conectaNaStore(Login)
// const LoginConectado = connect(null, {logaUsuario})(Login)

// export default LoginConectado