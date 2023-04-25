import React from "react"
import styles from './MapaFooter.module.css'

const MapaFooter =()=>{
    return(
            <div className={styles.caixa}>
                <div className={styles.caixaLista}>
                    <ul className={styles.lista}>
                        <li><h2 className={styles.tituloLista}>Trabalho</h2></li>
                        <li><a className={styles.itemLista}>Meu trabalho</a></li>
                        <li><a className={styles.itemLista}>Integrantes</a></li>
                        <li><a className={styles.itemLista}>Orientador</a></li>
                        <li><a className={styles.itemLista}>Etapas</a></li>
                    </ul>
                    <ul className={styles.lista}>
                        <li><h2 className={styles.tituloLista}>Suporte</h2></li>
                        <li><a className={styles.itemLista}>Tem alguma dúvida?</a></li>
                        <li><a className={styles.itemLista}>Fale conosco</a></li>
                    </ul>
                </div>
            </div>
    )
}

export default MapaFooter