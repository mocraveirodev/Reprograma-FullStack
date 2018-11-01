import React, { Component } from 'react'
import './Campo.css'

/*
<input type="text" className="caixa-texto" name="email" id="email">
*/

// function Campo(props){
//     return(
//         <input type={props.type} className="caixa-texto" name={props.name} id={props.id} placeholder={props.placeholder} />
//     )
// }

class Campo extends Component {
    constructor(props) {
        super(props)
        this.valor = ''
        this.state = {
            modificado: false,
            erro: ''
        }
    }

    getValor = () => {
        return this.valor;
    }

    // this.valida = this.valida.bind(this);

    temErro = () => {
        return (!this.state.modificado || this.state.erro) ? true : false; //forma de fazer if-else na mesma linha
    }

    valida = (evento) => {
        const alvo = evento.target;
        const { value, type } = alvo
        const { obrigatorio, minLength } = this.props
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        let msg = ''

        if(obrigatorio && value.trim() === ''){
            msg = 'Campo obrigatório'
        }else if(minLength && value.length < minLength){
            msg = `Digite pelo menos ${minLength} caracteres.`
        }else if(type === 'email' && !regex.test(value)){
            msg = 'Valor inválido'
        }

        this.setState({ modificado: true, erro: msg }, this.props.onChange) //dessa forma ele obriga a chamar o onchange logo apos setar o erro

        this.valor = value
    }

    render() {

        return(
            <div>
                <input type={this.props.type} className="caixa-texto" name={this.props.name} id={this.props.id} placeholder={this.props.placeholder} onBlur={this.valida} onChange={this.valida} />
                <p className="grupo__erro">{this.state.erro}</p>
            </div>
        )
    }
}

export default Campo