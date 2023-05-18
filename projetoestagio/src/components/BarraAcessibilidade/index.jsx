import React from "react";
import styles from "./styles.module.css";
import { aumentarFonte,diminuirFonte } from "../../static/fonte";
import { mudarContraste } from "../../static/modoContraste";

const BarraAcessibilidade =()=>{
    return(
        <div className={styles.barraAcessibilidade}>
            <ul className={styles.caixaItens}>
                <li className={styles.item}><a className={styles.linkItem} href="/acessibilidade">Acessibilidade</a></li>
                <li className={styles.item} onClick={mudarContraste}>Alto Contraste</li>
                <li className={styles.item} onClick={aumentarFonte}>A+</li>
                <li className={styles.item} onClick={diminuirFonte}>A-</li>
            </ul>
        </div>
    )
}

export default BarraAcessibilidade