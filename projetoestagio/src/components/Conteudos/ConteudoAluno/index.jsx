import React from "react";
import styles from './ConteudoAluno.module.css'

const ConteudoAluno=()=>{
    return(
        <div className={styles.caixa}>
             <div className={styles.caixaLista}>
                    <ul className={styles.lista}>
                        <li><h1 className={styles.tituloLista}>Site 1</h1></li>
                        <li><h2 className={styles.subTituloLista}>Tipo</h2></li>
                        <li><a className={styles.itemLista}>Projeto Web</a></li>
                        <li><h2 className={styles.subTituloLista}>Tema</h2></li>
                        <li><a className={styles.itemLista}>Acessibilidades em sites web</a></li>
                        <li><h2 className={styles.subTituloLista}>Integrantes</h2></li>
                        <li><a className={styles.itemLista}>Ana</a></li>
                        <li><a className={styles.itemLista}>Carlos</a></li>
                        <li><a className={styles.itemLista}>João</a></li>
                        <li><h2 className={styles.subTituloLista}>Orientador</h2></li>
                        <li><a className={styles.itemLista}>Edson Junior</a></li>
                    </ul>
                </div>
                <div className={styles.caixaDescricao}>
                    <div className={styles.caixaBloco}>
                        <div className={styles.bloco}>
                            <h2 className={styles.tituloBloco}>Descrição</h2>
                            <p className={styles.textoBloco}>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </div>
                </div>
                <div className={styles.caixaProgresso}>
                    <div className={styles.caixaBloco}>
                        <div className={styles.bloco}>
                            <h2 className={styles.tituloBloco}>Descrição</h2>
                            <p className={styles.textoBloco}>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </div>
                </div>
                
        </div>
    )
}
export default ConteudoAluno