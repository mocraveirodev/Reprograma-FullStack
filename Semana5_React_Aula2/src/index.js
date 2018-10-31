import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './paginas/Login/Login';
import Conta from './paginas/Conta/Conta';
import QuemSomos from './paginas/QuemSomos/QuemSomos';
import Contato from './paginas/Contato/Contato';
import './index.css'

function App(){
    return (
        <div className="app">
            {/*<Navbar />*/}
            <Switch>
                <Route path='/' exact component={Login}/>
                <Route path='/login' component={Login}/>
                <Route path='/conta' component={Conta}/>
                <Route path='/quemsomos' component={QuemSomos}/>
                <Route path='/contato' component={Contato}/>
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