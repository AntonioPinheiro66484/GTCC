import React,{ useState } from "react";
import styles from "./styles.module.css";
import LogoFatec from "../../assets/images/LogoFatecZL.png";
import { Icon } from "@iconify/react";
/*import NavBarMobile from "../NavBarMobile";*/
import BarraPesquisa from "../BarraPesquisa";
import BotaoNotificacoes from "../BotaoNotificacoes";

const Header =()=>{
    /*const [navBar, setNavBar] = useState(false)

    const showNavBar = () => setNavBar(!navBar)*/

    return(
        <div className={styles.caixa}>
            {/*<button className={styles.menuHamburguer} onClick={showNavBar}>
                <Icon icon="ic:baseline-menu"/>
            </button>
            {navBar && <NavBarMobile active={setNavBar}/>}*/}
            <BarraPesquisa/>
            <ul className={styles.caixaFerramentas}>
                <li className={styles.item}><BotaoNotificacoes/></li>
                <li className={styles.item}><img className={styles.perfil} alt="Perfil" src={LogoFatec}/></li>
            </ul>
        </div>
    )
}

export default Header