import React from 'react'
import styles from './styles.module.css'
import {Icon} from '@iconify/react'
import Logo3 from '../../assets/images/Logo3.png'

const NavBar =()=>{
    return(
        <nav className={styles.navBar}>
            <div className={styles.topoNavBar}>
                <button className={styles.menuHamburguer}>
                    <Icon icon="ic:baseline-menu"/>
                </button>
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

export default NavBar 