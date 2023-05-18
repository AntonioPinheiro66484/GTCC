import React from "react";
import styles from "./styles.module.css";

const MapaFooter =()=>{
    return(
            <div className={styles.caixa}>
                <div className={styles.caixaLista}>
                    <ul className={styles.lista}>
                        <li><h2 className={styles.tituloLista}>Trabalho</h2></li>
                        <li><a href="/PaginaTrabalho" className={styles.itemLista}>Meu trabalho</a></li>
                        <li><a href="/PaginaIntegrantes" className={styles.itemLista}>Integrantes</a></li>
                        <li><a href="PaginaOrientador"className={styles.itemLista}>Orientador</a></li>
                        <li><a href="/PaginaEtapas" className={styles.itemLista}>Etapas</a></li>
                        <li><a href="/PaginaTrabalhos" className={styles.itemLista}>Trabalhos</a></li>
                    </ul>
                    <ul className={styles.lista}>
                        <li><h2 className={styles.tituloLista}>Suporte</h2></li>
                        <li><a href="http://suporte.fateczl.edu.br/" className={styles.itemLista}>Abra um chamado</a></li>
                    </ul>
                </div>
            </div>
    )
}

export default MapaFooter