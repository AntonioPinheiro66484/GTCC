import React,{ useState } from "react";
import styles from "./styles.module.css";
import LogoFatec from "../../assets/images/LogoFatecZL.png";
import LogoGoverno from "../../assets/images/LogoGovernoeCps.png";
import { Icon } from "@iconify/react";
import NavBarMobile from "../NavBarMobile";
import BarraPesquisa from "../BarraPesquisa";

const Header =()=>{
    const [navBar, setNavBar] = useState(false)

    const showNavBar = () => setNavBar(!navBar)

    return(
        <div className={styles.caixa}>
            <Icon className={styles.menuHamburguer} icon="ic:baseline-menu" onClick={showNavBar}/>
            {navBar && <NavBarMobile active={setNavBar}/>}
            <BarraPesquisa/>
            {/*<div className={styles.caixaLogo}>
                <img className={styles.logoFatec} alt="Fatec Zona Leste" src={LogoFatec}/>
            </div>*/}
            <div className={styles.caixaFerramentas}>
                <img className={styles.perfil} alt="Perfil" src={LogoFatec}/>
            </div>
        </div>
    )
}

export default Header