import React, {useState} from "react";
import styles from './styles.module.css';
import LogoFatec from '../../assets/images/LogoFatecZL.png'
import LogoGoverno from '../../assets/images/LogoGovernoeCps.png'
import {Icon} from '@iconify/react'
import NavBar from '../NavBar';

const Header =()=>{
    const [navBar, setNavBar] = useState(false)

    const showNavBar = () => setNavBar(!navBar)

    return(
        <div className={styles.caixa}>
            <Icon icon="ic:baseline-menu" onClick={showNavBar}/>
            {navBar && <NavBar active={setNavBar}/>}
            <div>
                <img className={styles.logoFatec} src={LogoFatec}/>
                <img className={styles.logoGoverno} src={LogoGoverno}/>
            </div>
        </div>
    )
}

export default Header