import React from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import Menu from '../Menu/Menu'
import logo from './logo.png'
import './Navbar.css'

function Navbar(props) {
    return (
        <header className='navbar'>
            <Link to='/'>
                <img className='navbar__logo' src={logo} alt='logo' />
            </Link>

            <Menu usuario={props.usuario} deslogaUsuario={props.deslogaUsuario} />
        </header>
    )
}

function passaNoPropsDadosDoEstado(state) {
    return {
        usuario: state.usuario
    }
}

function passaNoPropsDisparadoresDeAcao(dispatch) {
    return {
        deslogaUsuario: () => {
            // const acao = {
            //     type: 'DESLOGA_USUARIO'
            // }

            // dispatch(acao)

            dispatch({
                type: 'DESLOGA_USUARIO'
            })
        }
    }
}

const conectaNaStore = connect(passaNoPropsDadosDoEstado, passaNoPropsDisparadoresDeAcao)

const NavbarConectada = conectaNaStore(Navbar)

export default withRouter(NavbarConectada)