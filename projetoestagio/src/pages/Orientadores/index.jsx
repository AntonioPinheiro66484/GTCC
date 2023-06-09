import React from "react";
import styles from "./styles.module.css";

const Orientadores =()=>{
    return(
        <div>
            <div className={styles.caixa}>
                <h1 className={styles.tituloPrincipal}>Orientadores</h1>
                <div className={styles.caixaBloco}>
                    <div className={styles.bloco}>
                        <div className={styles.caixaTexto}>
                            <h2 className={styles.tituloBloco}>Maria Fulana Lima</h2>
                            <p className={styles.textoBloco}>Área de conhecimento: Engenharia</p>
                            <p className={styles.textoBloco}>Disponibilidade: Tarde</p>
                        </div>
                        <div className={styles.caixaBotao}>
                            <button className={styles.botao}>Solicitar orientação</button>
                        </div>
                    </div>
                    <div className={styles.bloco}>
                        <div className={styles.caixaTexto}>
                            <h2 className={styles.tituloBloco}>Edson Saraiva</h2>
                            <p className={styles.textoBloco}>Área de conhecimento: Desenvolvimento web</p>
                            <p className={styles.textoBloco}>Disponibilidade: Tarde</p>
                        </div>
                        <div className={styles.caixaBotao}>
                            <button className={styles.botao}>Solicitar orientação</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Orientadores