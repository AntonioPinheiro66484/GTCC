import React from "react";
import styles from "./styles.module.css";
import { Icon } from "@iconify/react";

const BarraPesquisa =()=>{
    return(
        /*<div className={styles.caixa}>*/
            <div className={styles.searchBar}>
                <input className={styles.searchInput} placeholder="Pesquisar"/>
                <button className={styles.searchButton}>
                    <Icon icon="ph:magnifying-glass-bold"/>
                </button>
            </div>
        /*</div>*/
    ) 
}

export default BarraPesquisa