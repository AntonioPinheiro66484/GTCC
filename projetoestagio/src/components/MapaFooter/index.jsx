import React from "react";
import styles from "./styles.module.css";

const MapaFooter =()=>{
    return(
        <div className={styles.caixa}>
            <div className={styles.caixaLista}>
                <h2 className={styles.tituloLista}>Área do aluno</h2>
                <ul className={styles.lista}>
                    <li><a className={styles.itemLista} href="/">Início</a></li>
                    <li><a className={styles.itemLista} href="/trabalho">Trabalho</a></li>
                    <li><a className={styles.itemLista} href="/orientadores">Orientadores</a></li>
                </ul>
            </div>
            <div className={styles.caixaLista}>
                <h2 className={styles.tituloLista}>Área do orientador</h2>
                <ul className={styles.lista}>
                    <li><a className={styles.itemLista} href="/">Início</a></li>
                    <li><a className={styles.itemLista} href="/trabalhos">Trabalhos</a></li>
                    <li><a className={styles.itemLista} href="/solicitacoes">Solicitações</a></li>
                </ul>
            </div>
            <div className={styles.caixaLista}>
                <h2 className={styles.tituloLista}>Área do coordenador</h2>
                <ul className={styles.lista}>
                    <li><a className={styles.itemLista} href="/">Início</a></li>
                    <li><a className={styles.itemLista} href="/trabalhos">Trabalhos</a></li>
                    <li><a className={styles.itemLista} href="/orientadores">Orientadores</a></li>
                    <li><a className={styles.itemLista} href="/tipos-de-trabalho">Tipos de trabalhos</a></li>
                </ul>
            </div>
            <div className={styles.caixaLista}>
                <h2 className={styles.tituloLista}>Entrar</h2>
                <ul className={styles.lista}>
                    <li><a className={styles.itemLista} href="/login" target="_blank" rel="noopener noreferrer">Fazer login</a></li>
                </ul>
            </div>  
            <div className={styles.caixaLista}>
                <h2 className={styles.tituloLista}>Suporte</h2>
                <ul className={styles.lista}>
                    <li><a className={styles.itemLista} href="http://suporte.fateczl.edu.br/" target="_blank" rel="noopener noreferrer">Abra um chamado</a></li>
                </ul>
            </div>    
        </div>
    )
}

export default MapaFooter