import React from "react";
import styles from './ConteudoLogin.module.css'

const ConteudoLogin=()=>{
    return(
        <div className={styles.caixa}>
             <h1 className={styles.tituloPrincipal}>Cadastre seu TCC</h1>
                <form className={styles.formulario}>
                    <div className={styles.caixaInput}>
                        <label><h2 className={styles.tituloSecundario}>RA</h2></label>
                        <input  className={styles.input} type="text"/>
                    </div>
                    <div className={styles.caixaInput}>
                        <label><h2 className={styles.tituloSecundario}>Senha</h2></label>
                        <input  className={styles.input} type="text"/>
                    </div>
                </form>
        </div>
    )
}

export default ConteudoLogin