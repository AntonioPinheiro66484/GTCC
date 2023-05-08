import React from "react";
import styles from './styles.module.css'

const Acessibilidade =()=>{
    return(
        <div className={styles.barraAcessibilidade}>
            <div className={styles.caixaFerramentas}>
                <div className={styles.itemFerramenta}>Acessibilidade</div>
                <div className={styles.itemFerramenta}>Alto Contraste</div>
                <div className={styles.itemFerramenta}>A+</div>
                <div className={styles.itemFerramenta}>A-</div>
            </div>   
        </div>
    )
}

export default Acessibilidade