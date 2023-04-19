import React from "react"
import styles from './Header.module.css'
import LogoFatec from '../../../assets/images/LogoFatecZL.png'
import LogoGoverno from '../../../assets/images/LogoGovernoeCps.png'

const Header =()=>{
    return(
        <div className={styles.caixa}>
            <img className={styles.logo} src={LogoFatec}></img>
            <img className={styles.logo} src={LogoGoverno}></img>
        </div>
    )
}

export default Header