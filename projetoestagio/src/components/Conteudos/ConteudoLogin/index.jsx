import React from "react"
import styles from './ConteudoLogin.module.css'

const ConteudoLogin =()=>{
    return(
        <div className={styles.caixa}>
            <div className={styles.bloco}>
                <form className={styles.formulario}>
                    <h1 className={styles.tituloPrincipal}>Entre</h1>
                    <div className={styles.caixaInput}>
                        <label className={styles.labelPrincipal}>RA</label>
                        <input className={styles.input} type="text"/>
                    </div>
                    <div className={styles.caixaInput}>
                        <label className={styles.labelPrincipal}>Senha</label>
                        <input className={styles.input} type="password"/>
                    </div>
                    <button className={styles.botao}>Entrar</button>
                </form>
            </div>
        </div>
    )
}

export default ConteudoLogin