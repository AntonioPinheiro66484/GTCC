import React from "react"
import styles from "./SearchBar.module.css"
import { Icon } from '@iconify/react';

const SearchBar =()=>{
    return(
        // <div className={styles.caixa}>
        //     <input className={styles.searchBar} placeholder="Pesquisar"/>
        // </div>
        <div className={styles.caixa}>
            <fieldset className={styles.searchBar}>
                <input className={styles.searchInput} placeholder="Pesquisar"/>
                <button className={styles.searchButton}>
                    <Icon icon="ph:magnifying-glass-bold"/>
                </button>
            </fieldset>
        </div>
    ) 
}

export default SearchBar