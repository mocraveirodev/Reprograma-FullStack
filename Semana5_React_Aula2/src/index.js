import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Login from './paginas/Login/Login';
// import Conta from './paginas/Conta/Conta';

const divProjeto = document.getElementById('projeto');
ReactDOM.render(<Login />, divProjeto);

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