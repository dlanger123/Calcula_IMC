import React from 'react'

export default function Dados(props){
    let n1 = 10
    let n2 = 5

    const textoDestaque = {
        color: '#0f0',
        fontSize: '3em'
    }

    return (
        <section>
           <p style={{color: '#f00', fontSize: '5em'}}>Canal: {props.canal()}</p> 
           <p style={textoDestaque}>Youtube: {props.youtube}</p> 
           <p className="texto">Curso: {props.curso}</p>
           <p>{'A soma de ' + n1 + ' com ' + n2 + '=' + props.somar(n1, n2) }</p>
           <a href="http://www.youtube.com/cfbcursos" target="_blank">CFB Cursos</a>
        </section>
    )
}