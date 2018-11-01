import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Home from './paginas/Home/Home';
import Login from './paginas/Login/Login';
import Conta from './paginas/Conta/Conta';
import QuemSomos from './paginas/QuemSomos/QuemSomos';
import Contato from './paginas/Contato/Contato';
import NaoEncontrada from './paginas/NaoEncontrada/NaoEncontrada';
import './index.css'

let usuario = JSON.parse(localStorage.getItem('usuario'))

function logaUsuario(dados) {
    const json = JSON.stringify(dados)
    localStorage.setItem('usuario', json)
    usuario = dados
    console.log('usuario', usuario)
}

function App(){
    return (
        <div className="app">
            {/*<Navbar />*/}
            <Switch>
                <Route path='/' exact render={() => {
                    return usuario ? <Home /> : <Redirect to="/login" />
                }}/>
                <Route path='/login' render={(props) => {
                    return <Login historico={props.history} onEnviar={logaUsuario} />
                }}/>
                <Route path='/conta' component={Conta}/>
                <Route path='/quemsomos' component={QuemSomos}/>
                <Route path='/contato' component={Contato}/>
                <Route component={NaoEncontrada}/>
            </Switch>
        </div>
    )
}

// const divProjeto = document.getElementById('projeto');
ReactDOM.render(
<BrowserRouter>
    <App />
</BrowserRouter>, document.getElementById('projeto'));

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