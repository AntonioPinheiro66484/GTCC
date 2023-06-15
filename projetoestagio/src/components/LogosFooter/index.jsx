import React from "react";
import styles from "./styles.module.css";
import LogoFatec from "../../assets/images/LogoFatecZL.png";
import LogoGoverno from "../../assets/images/LogoGovernoeCps.png";

const LogosFooter =()=>{
    return(
        <div className={styles.caixa}>
            <img className={styles.logoFatec} src={LogoFatec} alt={"Logo da Fatec"}/>
            <img className={styles.logoGoverno} src={LogoGoverno} alt={"Logo do governo"}/>
        </div>
    )
}

export default LogosFooter