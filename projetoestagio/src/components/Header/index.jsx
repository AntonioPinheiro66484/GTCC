import React from "react"
import styles from './styles.module.css'
import LogoFatec from '../../assets/images/LogoFatecZL.png'
import LogoGoverno from '../../assets/images/LogoGovernoeCps.png'

const Header =()=>{
     return(
         <div className={styles.caixa}>
            <img className={styles.logoFatec} src={LogoFatec}/>
            <img className={styles.logoGoverno} src={LogoGoverno}/>
         </div>
    )
}

export default Header