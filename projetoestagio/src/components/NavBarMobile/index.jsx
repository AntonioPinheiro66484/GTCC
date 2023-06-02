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
                <img alt="Logo" className={styles.logoImagem} src={Logo3}/>
            </div>
            <ul className={styles.paiItens}>
                <li className={styles.item}><a className={styles.linkItem} href="/"><Icon className={styles.iconeItem} icon="ph:house-light"/>Início</a></li>
                <li className={styles.item}><a className={styles.linkItem} href="/trabalho"><Icon className={styles.iconeItem} icon="octicon:project-roadmap-24"/>Trabalho</a></li>
                <li className={styles.item}><a className={styles.linkItem} href="/orientadores"><Icon className={styles.iconeItem} icon="mdi:human-male-board"/>Orientadores</a></li>
                <li className={styles.item}><a className={styles.linkItem} href="/trabalhos"><Icon className={styles.iconeItem} icon="mdi:note-multiple-outline"/>Trabalhos</a></li>
                <li className={styles.item}><a className={styles.linkItem} href="/solicitacoes"><Icon className={styles.iconeItem} icon="material-symbols:notifications-outline"/>Solicitações</a></li>
                <li className={styles.item}><a className={styles.linkItem} href="/tipos-de-trabalho"><Icon className={styles.iconeItem} icon="ph:squares-four-light"/>Tipos de trabalho</a></li>
                <li className={styles.item}><a className={styles.linkItem} href="/login"><Icon className={styles.iconeItem} icon="ph:sign-in-light"/>Entrar</a></li>
                <li className={styles.item}><a className={styles.linkItem} href="http://suporte.fateczl.edu.br"><Icon className={styles.iconeItem} icon="formkit:help"/>Suporte</a></li>
            </ul>
        </nav>
    ) 
}

export default NavBarMobile