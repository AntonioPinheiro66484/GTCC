import React from "react";
import styles from './ConteudoHome.module.css'
import Logo3 from '../../../assets/images/Logo3.png'

const ConteudoHome =()=>{
    return(
        <div className={styles.caixa}>
            <img className={styles.logoImagem} src={Logo3}/>
            <h1 className={styles.titulo}>Para quem foi criado?</h1>
        </div>
    )
}

export default ConteudoHome