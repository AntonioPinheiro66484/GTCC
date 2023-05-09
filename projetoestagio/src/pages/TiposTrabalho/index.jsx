import React from 'react'
import styles from './styles.module.css'
import {Icon} from '@iconify/react'

const TiposTrabalho =()=>{
    return (
        <div className={styles.caixa}>
            <h1 className={styles.tituloPrincipal}>Tipos de trabalho</h1>
            <div className={styles.caixaBloco}>
                <div className={styles.bloco}>
                    <div className={styles.caixaTexto}>
                        <h2 className={styles.tituloBloco}>Projeto Interdisciplinar</h2>
                        <p className={styles.textoBloco}>Máximo de integrantes por grupo: 5</p>
                        <p className={styles.textoBloco}>Cursos: ADS, DSM</p>
                    </div>
                    <div className={styles.caixaBotao}>
                        <a href="./editar-tipo-de-trabalho"><button className={styles.botao}>Editar</button></a>
                        <button className={styles.botao}>Excluir</button>
                    </div>
                </div>
                <a href="./cadastrar-tipo-de-trabalho"><button className={styles.botaoAdicionar}>
                    <Icon className={styles.imagemAdicionar} icon="ph:plus-circle"/>
                </button></a>
            </div>
        </div>
    )
}

export default TiposTrabalho