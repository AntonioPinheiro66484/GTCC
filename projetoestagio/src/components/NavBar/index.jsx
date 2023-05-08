import React from 'react'
import styles from './styles.module.css'

const NavBar =()=>{
    return(
        <nav className={styles.navBar}>
            <ul className={styles.paiItens}>
                <li className={styles.item}><a className={styles.linkItem} href="/">Início</a></li>
                <li className={styles.item}><a className={styles.linkItem} href="/trabalho">Trabalho</a></li>
                <li className={styles.item}><a className={styles.linkItem} href="/orientadores">Orientadores</a></li>
                <li className={styles.item}><a className={styles.linkItem} href="/trabalhos">Trabalhos</a></li>
                <li className={styles.item}><a className={styles.linkItem} href="/solicitacoes">Solicitações</a></li>
                {/*
                <li className={styles.item}><a className={styles.linkItem}>Categorias</a></li>
                */}
                <li className={styles.item}><a className={styles.linkItem} href="/login">Entrar</a></li>
                <li className={styles.item}><a className={styles.linkItem} href="http://suporte.fateczl.edu.br">Suporte</a></li>
            </ul> 
        </nav>
    ) 
}

export default NavBar 