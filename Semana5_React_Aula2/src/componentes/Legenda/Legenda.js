import React from 'react'
import './Legenda.css'


/*
<Legenda htmlfor="email">E-mail:</Legenda>

const props = {
    htmlFor: 'email',
    children: 'E-mail:'
}
*/
function Legenda(props) {
    return (
        <label className="legenda" for={props.htmlFor}>{props.children}</label>
    )
}

export default Legenda