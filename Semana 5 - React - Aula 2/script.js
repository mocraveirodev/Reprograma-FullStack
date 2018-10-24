// const linkCriarUmaConta = React.createElement('a',{
//     className: 'link',
//     href: '/conta',
//     children: 'Criar uma conta'
// });

// const linkCriarUmaConta = <a class="link" href="/conta">Criar uma conta</a>

function Link(props){
    return (
        <a className="link" href={props.url}>{props.children}</a>
    )
}

function Botao(props){
    let classes = 'botao'

    if (props.desabilitado){
        classes += " botao--desabilitado"
    }

    return (
        <input type="button" className={classes} value={props.children} />
    )
}

const pagLogin = (
    <main className="pagina-login">
        <h1>Login</h1>
        <p>Entre com seu email e senha.</p>

        <Botao>Enviar</Botao>
        <Botao desabilitado>Enviar</Botao>
        <Link url="/conta">Criar uma conta</Link>
        <Link url="/login">Fazer login</Link>
    </main>
)

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

const divProjeto = document.getElementById('projeto');
ReactDOM.render(pagLogin, divProjeto);