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
                            <h2 className={styles.tituloBloco}>Etapa 1</h2>
                            <p className={styles.textoBlocoProgresso}>Definição de identidade do projeto</p>
                            <p className={styles.textoBlocoProgresso}>Entrega até segunda-feira, 27 de março</p>
                            <p className={styles.textoBlocoProgresso}>Conclusão</p>
                        </div>
                    </div>
                {/* </div>
                <div className={styles.caixaProgresso}>
                    <div className={styles.caixaBloco}>
                        <div className={styles.bloco}>
                            <h2 className={styles.tituloBloco}>Etapa 2</h2>
                            <p className={styles.textoBlocoProgresso}>Definição de identidade do projeto</p>
                            <p className={styles.textoBlocoProgresso}>Entrega até segunda-feira, 27 de março</p>
                            <p className={styles.textoBlocoProgresso}>Conclusão</p>
                        </div>
                    </div>
                    <div className={styles.caixaBloco}>
                        <div className={styles.bloco}>
                            <h2 className={styles.tituloBloco}>Etapa 3</h2>
                            <p className={styles.textoBlocoProgresso}>Definição de identidade do projeto</p>
                            <p className={styles.textoBlocoProgresso}>Entrega até segunda-feira, 27 de março</p>
                            <p className={styles.textoBlocoProgresso}>Conclusão</p>
                        </div>
                    </div>
                    <div className={styles.caixaBloco}>
                        <div className={styles.bloco}>
                            <h2 className={styles.tituloBloco}>Etapa 4</h2>
                            <p className={styles.textoBlocoProgresso}>Definição de identidade do projeto</p>
                            <p className={styles.textoBlocoProgresso}>Entrega até segunda-feira, 27 de março</p>
                            <p className={styles.textoBlocoProgresso}>Conclusão</p>
                        </div>
                    </div>
                    <div className={styles.caixaBloco}>
                        <div className={styles.bloco}>
                            <h2 className={styles.tituloBloco}>Etapa 5</h2>
                            <p className={styles.textoBlocoProgresso}>Definição de identidade do projeto</p>
                            <p className={styles.textoBlocoProgresso}>Entrega até segunda-feira, 27 de março</p>
                            <p className={styles.textoBlocoProgresso}>Conclusão</p>
                        </div>
                    </div> */}
                </div>
                
        </div>
    )
}
export default ConteudoAluno