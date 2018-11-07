import React from 'react'
import ReactDOM from 'react-dom'
import { withRouter, BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { Provider, connect } from 'react-redux'
import store from './redux/store'
import Navbar from './componentes/Navbar/Navbar';
import Home from './paginas/Home/Home';
import Login from './paginas/Login/Login';
import Conta from './paginas/Conta/Conta';
import QuemSomos from './paginas/QuemSomos/QuemSomos';
import Contato from './paginas/Contato/Contato';
import NaoEncontrada from './paginas/NaoEncontrada/NaoEncontrada';
import './index.css'

// let usuario = JSON.parse(localStorage.getItem('usuario'))

// function logaUsuario(dados) {
//     const json = JSON.stringify(dados)
//     localStorage.setItem('usuario', json)
//     usuario = dados
//     console.log('usuario', usuario)
// }

// function deslogaUsuario() {
//     localStorage.removeItem('usuario')
//     usuario = null
// }

function App(props) {
    const usuario = props.usuario
    const logaUsuario = props.logaUsuario
    const deslogaUsuario = props.deslogaUsuario

    return (
        <div className="app">
            {/* <Navbar usuario={usuario} deslogaUsuario={deslogaUsuario} /> */}
            <Navbar />
            <Switch>
                <Route path='/' exact render={() => {
                    return usuario ? <Home /> : <Redirect to="/login" />
                }} />
                {/* <Route path='/login' component={(props) => {
                    return <Login historico={props.history} onEnviar={logaUsuario} />
                }} /> */}
                <Route path='/login' component={Login} />
                <Route path='/conta' component={Conta} />
                <Route path='/quemsomos' component={QuemSomos} />
                <Route path='/contato' component={Contato} />
                <Route component={NaoEncontrada} />
            </Switch>
        </div>
    )
}

function passaDadosDoEstadoParaMeuComponente(state) {
    const props = {
        usuario: state.usuario
    }

    return props
}

function PassaFuncoesQueDisparamAcoesViaProps(dispatch) {
    const props = {
        logaUsuario: (dados) => {
            const acao = {
                type: 'LOGA_USUARIO',
                dados: dados
            }
            dispatch(acao)
        },
        deslogaUsuario: () => {
            const acao = {
                type: 'DESLOGA_USUARIO'
            }
            dispatch(acao)
        }
    }

    return props
}

const conectaNaStore = connect(
    passaDadosDoEstadoParaMeuComponente,
    PassaFuncoesQueDisparamAcoesViaProps
)

const AppConectada = withRouter( conectaNaStore(App) )

// const divProjeto = document.getElementById('projeto');
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <AppConectada />
        </BrowserRouter>
    </Provider>, 
    document.getElementById('projeto')
);

// const linkCriarUmaConta = React.createElement('a',{
//     className: 'link',
//     href: '/conta',
//     children: 'Criar uma conta'
// });
// const linkCriarUmaConta = <a class="link" href="/conta">Criar uma conta</a>

// const props = {
//     url: '/conta',
//     children: 'Criar uma conta'
// }

// const linkFazerLogin = React.createElement('a',{
//     className: 'link',
//     href: '/login',
//     children: 'Fazer login'
// });

// const linkFazerLogin = <a class="link" href="/login">Fazer login</a>

// const formLogin = React.createElement('form',{
//     children:[linkCriarUmaConta, linkFazerLogin]
// });

// const formLogin = (
//     <form>
//         {[linkCriarUmaConta,linkFazerLogin]}
//     </form>
// )