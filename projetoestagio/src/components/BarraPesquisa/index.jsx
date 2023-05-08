import React from 'react'
import styles from './styles.module.css'
import {Icon} from '@iconify/react'

const BarraPesquisa =()=>{
    return(
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

export default BarraPesquisa