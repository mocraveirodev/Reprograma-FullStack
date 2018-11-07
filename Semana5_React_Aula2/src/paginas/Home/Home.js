import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import './Home.css'

function Home(props) {

    if (!props.usuario) {
        return <Redirect to="/login" />
    }

    return (
        <main className='home'>

        </main>
    )
}

function passaDadosDoEstadoParaMeuComponente(state){
    return {
        usuario: state.usuario
    }
}

const conectaNaStore = connect(passaDadosDoEstadoParaMeuComponente)

const HomeConectada = conectaNaStore(Home)

export default HomeConectada