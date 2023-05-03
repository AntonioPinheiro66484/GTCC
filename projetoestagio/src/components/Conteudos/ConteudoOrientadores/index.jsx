import React from "react"
import styles from './ConteudoOrientadores.module.css'

const ConteudoOrientadores =()=>{
    return(
        <div className={styles.caixa}>
            <h1 className={styles.tituloPrincipal}>Orientadores</h1>
            <div className={styles.caixaBloco}>
                <div className={styles.bloco}>
                    <h2 className={styles.tituloBloco}>Maria Fulana Lima</h2>
                    <p className={styles.textoBloco}>Matéria de especialização: Engenharia</p>
                    <p className={styles.textoBloco}>Disponibilidade: Tarde</p>
                </div>
                <div className={styles.bloco}>
                    <h2 className={styles.tituloBloco}>Edson Saraiva</h2>
                    <p className={styles.textoBloco}>Matéria de especialização: Desenvolvimento Web</p>
                    <p className={styles.textoBloco}>Disponibilidade: Tarde</p>
                </div>
            </div>
        </div>
    )
}

export default ConteudoOrientadores