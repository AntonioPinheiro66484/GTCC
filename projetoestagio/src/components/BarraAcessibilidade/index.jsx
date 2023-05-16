import React from 'react'
import styles from './styles.module.css'

const BarraAcessibilidade =()=>{
    return(
        <div className={styles.barraAcessibilidade}>
            <ul className={styles.caixaItens}>
                <li className={styles.item}><a className={styles.linkItem} href="/acessibilidade">Acessibilidade</a></li>
                <li className={styles.item}>Alto Contraste</li>
                <li className={styles.item}>A+</li>
                <li className={styles.item}>A-</li>
            </ul>
        </div>
    )
}

export default BarraAcessibilidade