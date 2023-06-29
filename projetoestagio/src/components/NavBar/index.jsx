import React from "react";
import styles from "./styles.module.css";
import { Icon } from "@iconify/react";

const NavBar =(/*{active}*/)=>{
    /*const closeNavBar =()=>{
        active(false)
    }*/

    return(
        /*<div className={styles.caixa}>
            <span className={styles.sombra} onClick={closeNavBar}></span>*/
            <nav className={styles.navBar} /*navBar={active}*/>
                {/*<div className={styles.topoNavBar}>
                    <button className={styles.menuHamburguer} onClick={closeNavBar}>
                        <Icon icon="ic:baseline-menu"/>
                    </button>
                </div>*/}
                <ul className={styles.paiItens}>
                    <li className={styles.item}><a className={styles.linkItem} href="/trabalho"><Icon className={styles.iconeItem} icon="octicon:project-roadmap-24"/>Meu trabalho</a></li>
                    <li className={styles.item}><a className={styles.linkItem} href="/trabalhos"><Icon className={styles.iconeItem} icon="mdi:note-multiple-outline"/>Trabalhos</a></li>
                    <li className={styles.item}><a className={styles.linkItem} href="/orientadores"><Icon className={styles.iconeItem} icon="mdi:human-male-board"/>Orientadores</a></li>
                    {/*<li className={styles.item}><a className={styles.linkItem} href="/solicitacoes"><Icon className={styles.iconeItem} icon="material-symbols:notifications-outline"/>Notificações</a></li>*/}
                    <li className={styles.item}><a className={styles.linkItem} href="/tipos-de-trabalho"><Icon className={styles.iconeItem} icon="ph:squares-four-light"/>Tipos de trabalho</a></li>
                    <li className={styles.item}><a className={styles.linkItem} href="http://suporte.fateczl.edu.br" target="_blank" rel="noopener noreferrer"><Icon className={styles.iconeItem} icon="formkit:help"/>Ajuda</a></li>
                </ul>
            </nav>
        /*</div>*/
    ) 
}

export default NavBar