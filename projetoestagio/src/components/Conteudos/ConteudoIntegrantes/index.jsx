import React from "react"
import styles from './ConteudoIntegrantes.module.css'

const ConteudoIntegrantes =()=>{
    return(
        <div className={styles.caixa}>
            <h1 className={styles.tituloPrincipal}>Integrantes</h1>
            <div className={styles.caixaBloco}>
                <div className={styles.bloco}>
                    <h2 className={styles.tituloBloco}>Ana Fulana Lima</h2>
                    <p className={styles.textoBloco}>ana.lima33@fatec.sp.gov.br</p>
                </div>
                <div className={styles.bloco}>
                    <h2 className={styles.tituloBloco}>Carlos Fulano Lima</h2>
                    <p className={styles.textoBloco}>carlos.lima23@fatec.sp.gov.br</p>
                </div>
                <div className={styles.bloco}>
                    <h2 className={styles.tituloBloco}>João Fulano Lima</h2>
                    <p className={styles.textoBloco}>joao.lima13@fatec.sp.gov.br</p>
                </div>
            </div>
        </div>
    )
}

export default ConteudoIntegrantes