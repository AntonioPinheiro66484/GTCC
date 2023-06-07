import React from "react"
import styles from "./styles.module.css";
import { Icon } from "@iconify/react";
import MenuOpcoes from "../../components/MenuOpcoes"

const Trabalho =()=>{
    return(
        <div className={styles.caixa}>
            <div className={styles.topoCaixa}>
                <h1 className={styles.tituloPrincipal}>Site 1</h1>
                <MenuOpcoes/>
            </div>
            <div className={styles.caixaBloco}>
                <div className={styles.ladoCaixaBloco}>
                    <div className={styles.bloco}>
                        <h2 className={styles.tituloBloco}>Tipo</h2>
                        <p className={styles.textoBloco}>Projeto web</p>
                    </div>
                    <div className={styles.bloco}>
                        <h2 className={styles.tituloBloco}>Tema</h2>
                        <p className={styles.textoBloco}>Acessibilidade em sites web</p>
                    </div>
                    <div className={styles.bloco}>
                        <div className={styles.topoBloco}>
                            <h2 className={styles.tituloBloco}>Integrantes</h2>
                            <a href="/integrantes" className={styles.linkMaisDetalhes}><Icon className={styles.imagemMaisDetalhes} icon="material-symbols:info-outline"/></a>
                        </div>
                        <p className={styles.textoBloco}>Ana</p>
                        <p className={styles.textoBloco}>Carlos</p>
                        <p className={styles.textoBloco}>João</p>
                    </div>
                    <div className={styles.bloco}>
                        <div className={styles.topoBloco}>
                            <h2 className={styles.tituloBloco}>Etapas</h2>
                            <a  href="/etapas" className={styles.linkMaisDetalhes}><Icon className={styles.imagemMaisDetalhes} icon="material-symbols:info-outline"/></a>
                        </div>
                        <ul className={styles.caixaItens}>
                            <li className={styles.item}>
                                <div className={styles.blocoItem}>
                                    <div className={styles.numeroEtapa}>
                                        <p className={styles.textoBloco}>1</p>
                                    </div>
                                    <div className={styles.informacaoEtapa}>
                                        <div>
                                            <p className={styles.textoBloco}>Definição de identidade do projeto</p>
                                            <p className={styles.textoBloco}>Fechou em 27 de março</p>
                                        </div>
                                        <div>
                                            <p className={styles.textoBloco}>Entregue</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className={styles.item}>
                                <div className={styles.blocoItem}>
                                    <div className={styles.numeroEtapa}>
                                        <p className={styles.textoBloco}>2</p>
                                    </div>
                                    <div className={styles.informacaoEtapa}>
                                        <div>
                                            <p className={styles.textoBloco}>Estudo de caso do tema escolhido</p>
                                            <p className={styles.textoBloco}>Entrega até 29 de março</p>
                                        </div>
                                        <div>
                                            <p className={styles.textoBloco}>Em andamento</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className={styles.item}>
                                <div className={styles.blocoItem}>
                                    <div className={styles.numeroEtapa}>
                                        <p className={styles.textoBloco}>3</p>
                                    </div>
                                    <div className={styles.informacaoEtapa}>
                                        <div>
                                            <p className={styles.textoBloco}>Análise de solução proposta</p>
                                        </div>
                                        <div>
                                            <p className={styles.textoBloco}>Não iniciada</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.ladoCaixaBloco}>
                    <div className={styles.bloco}>
                        <h2 className={styles.tituloBloco}>Descrição</h2>
                        <p className={styles.textoBloco}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className={styles.bloco}>
                        <div className={styles.topoBloco}>
                            <h2 className={styles.tituloBloco}>Orientador</h2>
                            <a href="/orientador"className={styles.linkMaisDetalhes}><Icon className={styles.imagemMaisDetalhes} icon="material-symbols:info-outline"/></a>
                        </div>
                        <p className={styles.textoBloco}>Maria</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trabalho