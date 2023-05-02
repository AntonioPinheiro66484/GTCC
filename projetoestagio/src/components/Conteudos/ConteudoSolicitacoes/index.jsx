import React from "react";
import styles from './ConteudoSolicitacoes.module.css'

const ConteudoSolicitacoes =()=>{
    return(
        <div className={styles.caixa}>
            <h1 className={styles.tituloPrincipal}>Solicitações</h1>
            <div className={styles.caixaBloco}>
                <div className={styles.bloco}>
                    <div className={styles.caixaTexto}>
                        <h2 className={styles.tituloBloco}>Site 1</h2>
                        <p className={styles.textoBloco}>Projeto web • Acessibilidade em sites web</p>
                        <p className={styles.textoBloco}>Criado por Ana, Carlos, João</p>
                    </div>
                    <div className={styles.caixaBotao}>
                        <button className={styles.botao}>
                            Aceitar
                        </button>
                        <button className={styles.botao}>
                            Recusar
                        </button>
                    </div>
                </div>
                <div className={styles.bloco}>
                    <div className={styles.caixaTexto}>
                        <h2 className={styles.tituloBloco}>Site 2</h2>
                        <p className={styles.textoBloco}>PProjeto web • E-commerce de livros</p>
                        <p className={styles.textoBloco}>Criado por Ana, Carlos, João</p>
                    </div>
                    <div className={styles.caixaBotao}>
                        <button className={styles.botao}>
                            Aceitar
                        </button>
                        <button className={styles.botao}>
                            Recusar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConteudoSolicitacoes