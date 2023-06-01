import React,{ useState } from "react";
import styles from "./styles.module.css";
import LogoFatec from "../../assets/images/LogoFatecZL.png";
import LogoGoverno from "../../assets/images/LogoGovernoeCps.png";
import { Icon } from "@iconify/react";
import NavBarMobile from "../NavBarMobile";

const Header =()=>{
    const [navBar, setNavBar] = useState(false)

    const showNavBar = () => setNavBar(!navBar)

    return(
        <div className={styles.caixa}>
            <Icon className={styles.menuHamburguer} icon="ic:baseline-menu" onClick={showNavBar}/>
            {navBar && <NavBarMobile active={setNavBar}/>}
            <div className={styles.caixaLogo}>
                <img className={styles.logoFatec} alt="Fatec Zona Leste" src={LogoFatec}/>
                <img className={styles.logoGoverno} alt="Centro Paula Souza, Governo do Estado de São Paulo" src={LogoGoverno}/>
            </div>
        </div>
    )
}

export default Header