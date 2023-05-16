import React from 'react'
import styles from './styles.module.css'

const BarraAcessibilidade =()=>{
    var tamanhoFonte = 16

    const aumentarFonte =()=>{
        if (tamanhoFonte < 20) {
            tamanhoFonte++
            document.body.style.fontSize = tamanhoFonte + "px"
        }
    }

    const diminuirFonte =()=>{
        if (tamanhoFonte > 14) {
            tamanhoFonte--
            document.body.style.fontSize = tamanhoFonte + "px"
        }
    }

    return(
        <div className={styles.barraAcessibilidade}>
            <ul className={styles.caixaItens}>
                <li className={styles.item}><a className={styles.linkItem} href="/acessibilidade">Acessibilidade</a></li>
                <li className={styles.item}>Alto Contraste</li>
                <li className={styles.item} onClick={aumentarFonte}>A+</li>
                <li className={styles.item} onClick={diminuirFonte}>A-</li>
            </ul>
        </div>
    )
}

export default BarraAcessibilidade