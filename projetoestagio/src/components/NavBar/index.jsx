import React from "react"
import styles from "./NavBar.module.css"

const NavBar =()=>{
    return(
        <nav className={styles.navBar}>
            <ul className={styles.paiItens}>
                <li className={styles.item}>Trabalho</li>
                <li className={styles.item}>Trabalhos</li>
                <li className={styles.item}>Solicitações</li>
                <li className={styles.item}>Categorias</li>
                <li className={styles.item}>Professores</li>
                <li className={styles.item}>Entrar</li>
                <li className={styles.item}>Contatos</li>
                <li className={styles.item}>Suporte</li>
            </ul>
        </nav>
    ) 
}

export default NavBar 