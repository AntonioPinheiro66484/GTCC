import React from "react"
import styles from "./SearchBar.module.css"

const SearchBar =()=>{
    return(
        <div className={styles.caixa}>
            <input className={styles.searchBar}/>
        </div>
    ) 
}

export default SearchBar