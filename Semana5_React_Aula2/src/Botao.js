import React from 'react'
import './componentes/Botao/Botao.css'

function Botao(props) {
    let classes = 'botao';
    if (props.desabilitado) {
        classes += " botao--desabilitado";
    }
    return (<input type="button" className={classes} value={props.children} />);
}

export default Botao