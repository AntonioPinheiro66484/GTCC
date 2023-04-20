import React from "react"
import styles from './LogosFooter.module.css'
import LogoFatec from '../../assets/images/LogoFatecZL.png'
import LogoGoverno from '../../assets/images/LogoGovernoeCps.png'

const LogosFooter =()=>{
    return(
        <div className={styles.caixa}>
            <img className={styles.logoFatec} src={LogoFatec}/>
            <img className={styles.logoGoverno} src={LogoGoverno}/>
        </div>
    )
}

export default LogosFooter