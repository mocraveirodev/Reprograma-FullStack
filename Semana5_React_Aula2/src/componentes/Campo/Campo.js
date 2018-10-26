import React from 'react'
import './Campo.css'

/*
<input type="text" className="caixa-texto" name="email" id="email">
*/

// function Campo(props){
//     return(
//         <input type={props.type} className="caixa-texto" name={props.name} id={props.id} placeholder={props.placeholder} />
//     )
// }

class Campo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            erro: ''
        }
    }

    // this.valida = this.valida.bind(this);

    valida = evento => {
        const alvo = evento.target;

        if(this.props.obrigatorio && alvo.value.trim() === ''){
            const state = {
                erro: 'Campo obrigatório'
            }

            this.setState(state);
        }
    }

    render() {
        return(
            <div>
                <input type={this.props.type} className="caixa-texto" name={this.props.name} id={this.props.id} placeholder={this.props.placeholder} onChange={this.valida} />
                <p className="grupo__erro">{this.state.erro}</p>
            </div>
        )
    }
}

export default Campo