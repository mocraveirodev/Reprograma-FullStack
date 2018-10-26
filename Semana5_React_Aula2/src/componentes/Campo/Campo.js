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

    render() {
        return(
            <input type={this.props.type} className="caixa-texto" name={this.props.name} id={this.props.id} placeholder={this.props.placeholder} />
        )
    }
}

export default Campo