import React from "react"
import styles from './styles.module.css'
import { Icon } from '@iconify/react'

const PaginaTrabalho =()=>{
    return(
        <div className={styles.caixa}>
            <div className={styles.topoCaixa}>
                <h1 className={styles.tituloPrincipal}>Site 1</h1>
                <a href="/PaginaEditar" className={styles.linkEditar}><Icon className={styles.imagemEditar} icon="material-symbols:edit"/></a>
            </div>
            <div className={styles.caixaBloco}>
                <div>
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
                            <a href="/PaginaIntegrantes" className={styles.linkMaisDetalhes}><Icon className={styles.imagemMaisDetalhes} icon="material-symbols:info-outline"/></a>
                        </div>
                        <p className={styles.textoBloco}>Ana</p>
                        <p className={styles.textoBloco}>Carlos</p>
                        <p className={styles.textoBloco}>João</p>
                    </div>
                    <div className={styles.bloco}>
                        <div className={styles.topoBloco}>
                            <h2 className={styles.tituloBloco}>Etapas</h2>
                            <a  href="/PaginaEtapas" className={styles.linkMaisDetalhes}><Icon className={styles.imagemMaisDetalhes} icon="material-symbols:info-outline"/></a>
                        </div>
                        <p className={styles.textoBloco}>Etapa 1</p>
                        <p className={styles.textoBloco}>Etapa 2</p>
                        <p className={styles.textoBloco}>Etapa 3</p>
                        <p className={styles.textoBloco}>Etapa 4</p>
                    </div>
                </div>
                <div>
                    <div className={styles.bloco}>
                        <h2 className={styles.tituloBloco}>Descrição</h2>
                        <p className={styles.textoBloco}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className={styles.bloco}>
                        <div className={styles.topoBloco}>
                            <h2 className={styles.tituloBloco}>Orientador</h2>
                            <a href="/PaginaOrientador"className={styles.linkMaisDetalhes}><Icon className={styles.imagemMaisDetalhes} icon="material-symbols:info-outline"/></a>
                        </div>
                        <p className={styles.textoBloco}>Maria</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PaginaTrabalho