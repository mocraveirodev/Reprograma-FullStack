import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Postit from '../../componentes/Postit/Postit'
import carregando from './carregando.svg'
import './Home.css'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = { carregando: false }
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
                        <Postit />

                        <div>
                            {this.props.postits.map(postit => (
                                <Postit key={postit.id} id={postit.id} titulo={postit.titulo} texto={postit.texto} />
                            ))}
                        </div>
                    </div>
                )}
            </main>
        )
    }
}

export default connect((state) => ({ 
    usuario: state.usuario,
    postits: state.postits })
)(Home)
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