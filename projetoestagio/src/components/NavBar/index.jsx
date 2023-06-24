import React from "react";
import styles from "./styles.module.css";

const NavBar =()=>{
    return(
        <nav className={styles.navBar}>
            <ul className={styles.caixaItens}>
                <li className={styles.item}><a className={styles.linkItem} href="/">Início</a></li>
                <li className={styles.item}><a className={styles.linkItem} href="">Vestibular</a></li>
                <li className={styles.item}>
                    <a className={styles.linkItem} href="">Cursos</a>
                    <ul>
                        <li><a>Análise e Desenvolvimento de Sistemas</a></li>
                        <li><a>AMS - Análise e Desenvolvimento de Sistemas</a></li>
                        <li><a>Comércio exterior</a></li>
                        <li><a>Desenvolvimento de Produtos Plásticos</a></li>
                        <li><a>Desenvolvimento de Software Multiplataforma</a></li>
                        <li><a>Gestão empresarial</a></li>
                        <li><a>Gestão de Recursos Humanos</a></li>
                        <li><a>Logística</a></li>
                        <li><a>Polímeros</a></li>
                    </ul>
                </li>
                <li className={styles.item}><a className={styles.linkItem} href="/trabalhos">Trabalhos</a></li>
                <li className={styles.item}><a className={styles.linkItem} href="/solicitacoes">Solicitações</a></li>
                <li className={styles.item}><a className={styles.linkItem} href="/tipos-de-trabalho">Tipos de trabalho</a></li>
                <li className={styles.item}><a className={styles.linkItem} href="/login">Entrar</a></li>
                <li className={styles.item}><a className={styles.linkItem} href="http://suporte.fateczl.edu.br" target="_blank" rel="noopener noreferrer">Suporte</a></li>
            </ul>
        </nav>
    ) 
}

export default NavBar 