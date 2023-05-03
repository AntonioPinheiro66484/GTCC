import React from "react"
import styles from "./NavBar.module.css"

const NavBar =()=>{
    return(
        <nav className={styles.navBar}>
            <ul className={styles.paiItens}>
                <li className={styles.item}><a className={styles.linkItem} href="/">Início</a></li>
                <li className={styles.item}><a className={styles.linkItem} href="/PaginaTrabalho">Trabalho</a></li>
                <li className={styles.item}><a className={styles.linkItem} href="/PaginaTrabalhos">Trabalhos</a></li>
                <li className={styles.item}><a className={styles.linkItem} href="/PaginaSolicitacoes">Solicitações</a></li>
                {/*
                <li className={styles.item}><a className={styles.linkItem}>Categorias</a></li>
                <li className={styles.item}><a className={styles.linkItem}>Professores</a></li>
                */}
                <li className={styles.item}><a className={styles.linkItem} href="/PaginaLogin">Entrar</a></li>
                <li className={styles.item}><a className={styles.linkItem}>Suporte</a></li>
            </ul>
        </nav>
    ) 
}

export default NavBar 