import React from "react"
import styles from './MapaFooter.module.css'

const MapaFooter =()=>{
    return(
            <div className={styles.caixa}>
                <div className={styles.caixaLista}>
                    <ul className={styles.lista}>
                        <li><h2 className={styles.titulo}>Trabalho</h2></li>
                        <li><a>Meu trabalho</a></li>
                        <li><a>Integrantes</a></li>
                        <li><a>Orientador</a></li>
                        <li><a>Etapas</a></li>
                    </ul>
                    <ul className={styles.lista}>
                        <li><h2 className={styles.titulo}>Contatos</h2></li>
                        <li><a></a></li>
                        <li><a></a></li>
                        <li><a></a></li>
                        <li><a></a></li>
                    </ul>
                </div>
            </div>
    )
}

export default MapaFooter