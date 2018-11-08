import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import carregando from './carregando.svg'
import './Home.css'

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            carregando: true
        }
    }

    render() {
        if (!this.props.usuario) {
            return <Redirect to="/login" />
        }

        return (
            <main className='home'>
                {this.state.carregando ? (
                    <img className="home__loading" src={carregando} alt="Carregando" ></img>
                ) : (
                    <div>
                        Aqui lista postit amanhã
                    </div>
                )}
            </main>
        )
    }
}

export default connect((state) => ({ usuario: state.usuario }))(Home)
// function Home(props) {

//     if (!props.usuario) {
//         return <Redirect to="/login" />
//     }

//     return (
//         <main className='home'>

//         </main>
//     )
// }


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