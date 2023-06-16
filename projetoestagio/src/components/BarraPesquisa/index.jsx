import React from "react";
import styles from "./styles.module.css";
import { Icon } from "@iconify/react";

const BarraPesquisa =()=>{
    return(
        <div className={styles.searchBar}>
            <div className={styles.searchButton}>
                <Icon icon="ph:magnifying-glass-bold"/>
            </div>
            <input className={styles.searchInput} placeholder="Pesquisar"/>
        </div>
    ) 
}

export default BarraPesquisa