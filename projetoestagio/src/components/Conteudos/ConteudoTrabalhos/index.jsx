import React from "react";
import styles from './ConteudoTrabalhos.module.css'

const ConteudoTrabalhos =()=>{
    return(
        <div className={styles.caixa}>
            <h1 className={styles.tituloPrincipal}>Trabalhos</h1>
            <div className={styles.caixaBloco}>
                <div className={styles.bloco}>
                    <h2 className={styles.tituloBloco}>Site 1</h2>
                    <p className={styles.textoBloco}>Projeto web • Acessibilidade em sites web</p>
                    <p className={styles.textoBloco}>Criado por Ana, Carlos, João</p>
                    <p className={styles.textoBloco}>Orientado por Maria Fulana</p>
                    <p className={styles.textoBloco}>Em andamento</p>
                    <div className={styles.barraProgresso}>
                        <div className={styles.progressao}></div>
                    </div>
                </div>
                <div className={styles.bloco}>
                    <h2 className={styles.tituloBloco}>Site 2</h2>
                    <p className={styles.textoBloco}>Projeto web • E-commerce de livros</p>
                    <p className={styles.textoBloco}>Criado por Ana, Carlos, João</p>
                    <p className={styles.textoBloco}>Orientado por Edson Saraiva</p>
                    <p className={styles.textoBloco}>Em andamento</p>
                    <div className={styles.barraProgresso}>
                        <div className={styles.progressao}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConteudoTrabalhos