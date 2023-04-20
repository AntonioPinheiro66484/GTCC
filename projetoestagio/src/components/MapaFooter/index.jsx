import React from "react"
import styles from './MapaFooter.module.css'

const MapaFooter =()=>{
    return(
        <div className={styles.caixa}>
            <ul>
                <li>Trabalho</li>
                <li><a>Meu trabalho</a></li>
                <li><a>Integrantes</a></li>
                <li><a>Orientador</a></li>
                <li><a>Etapas</a></li>
            </ul>
        </div>
    )
}

export default Mapa