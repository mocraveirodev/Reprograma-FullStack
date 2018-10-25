import React from 'react'
import './Campo.css'

/*
<input type="text" className="caixa-texto" name="email" id="email">
*/

function Campo(props){
    return(
        <input type={props.type} className="caixa-texto" name={props.name} id={props.id} placeholder={props.placeholder} />
    )
}

export default Campo