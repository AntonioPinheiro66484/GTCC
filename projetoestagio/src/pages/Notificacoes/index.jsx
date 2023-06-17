import React from "react";
import styles from "./styles.module.css";

const Notificacoes =()=>{
    return(
        <div>
            <div className={styles.caixa}>
                <h1 className={styles.tituloPrincipal}>Notificações</h1>
                <div className={styles.caixaBloco}>
                    <div className={styles.bloco}>
                        <div className={styles.caixaTexto}>
                            <p className={styles.textoBloco}>Um grupo do Xº semestre do curso de Y solicitou a sua orientação para um trabalho sobre Z.</p>
                        </div>
                        <div className={styles.caixaBotao}>
                            <button className={styles.botao}>Aceitar</button>
                            <button className={styles.botao}>Recusar</button>
                        </div>
                    </div>
                    <div className={styles.bloco}>
                        <div className={styles.caixaTexto}>
                            <p className={styles.textoBloco}>A Xº etapa do seu trabalho expira em Y dias.</p>
                        </div>
                        <div className={styles.caixaBotao}>
                            <button className={styles.botao}>Ok</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Notificacoes