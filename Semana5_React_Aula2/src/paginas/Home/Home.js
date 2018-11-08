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
export default connect((state) => ({ usuario: state.usuario }))(Home)


// function passaDadosDoEstadoParaMeuComponente(state){
//     return {
//         usuario: state.usuario
//     }
// }
// (state) => ({ usuario: state.usuario })

// const conectaNaStore = connect((state) => ({ usuario: state.usuario }))

// const HomeConectada = conectaNaStore(Home)
// const HomeConectada = connect((state) => ({ usuario: state.usuario }))(Home)

// export default HomeConectada