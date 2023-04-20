import React from "react";
import styles from './MapaItem.module.css'

const MapaItem =()=>{
    return(
        <div className={styles.caixa}>
            <ul className={styles.paiItens}>
                <li className={styles.item}></li>
                <li className={styles.item}></li>
                <li className={styles.item}></li>
            </ul>
        </div>
    )
}

export default MapaItem