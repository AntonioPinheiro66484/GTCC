import React from 'react'
import styles from './Home.module.css'
import Acessibilidade from '../../components/Acessibilidade'
import Header from '../../components/Header'
import NavBar from '../../components/NavBar'
import SearchBar from '../../components/SearchBar'
import LogosFooter from '../../components/LogosFooter'
import MapaFooter from '../../components/MapaFooter'

const Home =()=>{
    return(
        <div className={styles.caixa}>
            <Acessibilidade></Acessibilidade>
            <Header></Header>
            <NavBar></NavBar>
            <SearchBar></SearchBar>
            <MapaFooter></MapaFooter>
            <LogosFooter></LogosFooter> 
        </div>
    )
}

export default Home