import React from "react"
import styles from './styles.module.css'
import LogoFatec from '../../assets/images/LogoFatecZL.png'
import LogoGoverno from '../../assets/images/LogoGovernoeCps.png'
import {Icon} from '@iconify/react';

const Header =()=>{
     return(
         <div className={styles.caixa}>
            <div>
                <button className={styles.menuHamburguer}>
                    <Icon icon="ic:baseline-menu"/>
                </button>
            </div>
            <div>
                <img className={styles.logoFatec} src={LogoFatec}/>
                <img className={styles.logoGoverno} src={LogoGoverno}/>
            </div>
         </div>
    )
}

export default Header