import React from 'react'
import styles from './styles.module.css'

const Orientador =()=>{
    return(
        <div className={styles.caixa}>
            <h1 className={styles.tituloPrincipal}>Orientador</h1>
            <div className={styles.caixaBloco}>
                <div className={styles.bloco}>
                    <h2 className={styles.tituloBloco}>Maria Fulana Lima</h2>
                    <p className={styles.textoBloco}>maria.lima43@fatec.sp.gov.br</p>
                </div>
            </div>
        </div>
    )
}

export default Orientador