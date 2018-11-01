import React from 'react'
import notFound from './notFound.gif'
import './NaoEncontrada.css'

function NaoEncontrada(){
    return (
        <main className='nao-encontrada'>
            <h1>Página não encontrada</h1>
            <p className='nao-encontrada__simbolo'>:-(</p>
            <img src={notFound} alt='Deu ruim mermão!   ' />
        </main>
    )
}

export default NaoEncontrada