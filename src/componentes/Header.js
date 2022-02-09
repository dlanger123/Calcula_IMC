import React from 'react'
import Cavalo from './imgs/cavalo.jpg'

export default function Header(){
    return (
        <header>
            <img src={Cavalo} />
            <h1>CFB Cursos</h1>
        </header>
    )
}