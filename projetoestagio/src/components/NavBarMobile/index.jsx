import React from "react";
import styles from "./styles.module.css";
import { Icon } from "@iconify/react";
import Logo3 from "../../assets/images/Logo3.png";

const NavBarMobile =({active})=>{

    const closeNavBar =()=>{
        active(false)
    }

    return(
        <nav className={styles.navBar} navBar={active}>
            <div className={styles.topoNavBar}>
                <Icon className={styles.menuHamburguer} icon="ic:baseline-menu" onClick={closeNavBar}/>
                <img className={styles.logoImagem} src={Logo3}/>
            </div>
            <ul className={styles.paiItens}>
                <li className={styles.item}><a className={styles.linkItem} href="/">Início</a></li>
                <li className={styles.item}><a className={styles.linkItem} href="/trabalho">Trabalho</a></li>
                <li className={styles.item}><a className={styles.linkItem} href="/orientadores">Orientadores</a></li>
                <li className={styles.item}><a className={styles.linkItem} href="/trabalhos">Trabalhos</a></li>
                <li className={styles.item}><a className={styles.linkItem} href="/solicitacoes">Solicitações</a></li>
                <li className={styles.item}><a className={styles.linkItem} href="/tipos-de-trabalho">Tipos de trabalho</a></li>
                <li className={styles.item}><a className={styles.linkItem} href="/login">Entrar</a></li>
                <li className={styles.item}><a className={styles.linkItem} href="http://suporte.fateczl.edu.br">Suporte</a></li>
            </ul>
        </nav>
    ) 
}

export default NavBarMobile