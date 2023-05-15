import React,{useState} from 'react'
import styles from './styles.module.css'
import {Icon} from '@iconify/react'
import Logo3 from '../../assets/images/Logo3.png'
import MenuHamburguer from '../MenuHamburguer'

const NavBar =()=>{
    const [open, setOpen] = useState(true)

    return(
        <nav className={open ? styles.navBar : styles.navBarClosed} onClick={() => setOpen(false)}>
            <div className={styles.topoNavBar}>
                {/*
                <button className={styles.menuHamburguer} onClick={() => setOpen(!open)}>
                    <Icon icon="ic:baseline-menu"/>
                </button>
                */}
                <MenuHamburguer value={false}/>
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
            <div vw class="enabled">
            <div vw-access-button class="active"></div>
            <div vw-plugin-wrapper>
            <div class="vw-plugin-top-wrapper"></div>
        </div>
         </div>
         <div>

        </div>
        </nav>
    ) 
}

export default NavBar 