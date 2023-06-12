import React from "react";
import styles from "./styles.module.css";

const MapaFooter =()=>{
    return(
        <div className={styles.caixa}>
            <div className={styles.caixaLista}>
                <h2 className={styles.tituloLista}>Trabalho</h2>
                <ul className={styles.lista}>
                    <li><a className={styles.itemLista} href="/trabalho">Meu trabalho</a></li>
                    <li><a className={styles.itemLista} href="/etapas">Etapas</a></li>
                    <li><a className={styles.itemLista} href="/integrantes">Integrantes</a></li>
                    <li><a className={styles.itemLista} href="/orientador">Orientador</a></li>
                    <li><a className={styles.itemLista} href="/trabalhos">Trabalhos</a></li>
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