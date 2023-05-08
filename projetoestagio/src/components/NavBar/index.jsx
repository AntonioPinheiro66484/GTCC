import React from 'react'
import styles from './NavBar.module.css'

const NavBar =()=>{
    return(
        <nav className={styles.navBar}>
            <ul className={styles.paiItens}>
                <li className={styles.item}><a className={styles.linkItem} href="/">Início</a></li>
                <li className={styles.item}><a className={styles.linkItem} href="/Trabalho">Trabalho</a></li>
                <li className={styles.item}><a className={styles.linkItem} href="/Orientadores">Orientadores</a></li>
                <li className={styles.item}><a className={styles.linkItem} href="/Trabalhos">Trabalhos</a></li>
                <li className={styles.item}><a className={styles.linkItem} href="/Solicitacoes">Solicitações</a></li>
                {/*
                <li className={styles.item}><a className={styles.linkItem}>Categorias</a></li>
                <li className={styles.item}><a className={styles.linkItem}>Professores</a></li>
                */}
                <li className={styles.item}><a className={styles.linkItem} href="/Login">Entrar</a></li>
                <li className={styles.item}><a className={styles.linkItem} href="http://suporte.fateczl.edu.br">Suporte</a></li>
            </ul> 
        </nav>
    ) 
}

export default NavBar 