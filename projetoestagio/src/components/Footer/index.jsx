import React from "react"
import styles from './Footer.module.css'
import LogoFatec from '../../../assets/images/LogoFatecZL.png'
import LogoGoverno from '../../../assets/images/LogoGovernoeCps.png'

const Footer =()=>{
    return(
        <div className={styles.caixa}>
            <img className={styles.logo} src={LogoFatec}></img>
            <img className={styles.logo} src={LogoGoverno}></img>
        </div>
    )
}

export default Footer