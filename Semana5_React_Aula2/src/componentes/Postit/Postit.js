import React, { Component } from 'react'
import { connect } from 'react-redux'
import { cadastraPostit, alteraPostit } from '../../redux/actions'
import './Postit.css'

class Postit extends Component {
    constructor(props) {
        super(props)
        this.state = { editando: false }
    }

    cadastraOuAltera = (ev) => {
        ev.preventDefault();

        const cadastrando = !this.props.id

        const form = ev.target

        if (cadastrando) {
            const dados = {
                id: `77f288c6-aa8f-429a-8112-c845c8d56fa${Math.random(100)}`,
                titulo: form.titulo.value,
                texto: form.texto.value
            }

            this.props.cadastraPostit(dados)

            form.reset()
        } else {
            const dados = {
                id: this.props.id,
                titulo: form.titulo.value,
                texto: form.texto.value
            }

            this.props.alteraPostit(dados)

            this.setState({ editando: false })
        }
    }

    habilitaEdicao = () => {

        this.setState({ editando: true })
    }

    render() {
        const cadastrando = !this.props.id

        return (
            <form className='postit' onClick={this.habilitaEdicao} onSubmit={this.cadastraOuAltera}>
                <input type='text' name='titulo' className='postit__titulo' placeholder='Título' autoComplete='off' defaultValue={this.props.titulo} />
                <textarea className='postit__texto' name='texto' placeholder='Digite um Texto...' autoComplete='off' rows={5} defaultValue={this.props.texto} />
                {(cadastrando || this.state.editando) && (
                    <button className='postit__botao-concluir'>Concluído</button>)}
            </form>
        )
    }
}

export default connect(null, { cadastraPostit, alteraPostit })(Postit)