import React from 'react'
import styles from './Home.module.css'
import Acessibilidade from '../../components/Acessibilidade'
import Header from '../../components/Header'
import NavBar from '../../components/NavBar'
import SearchBar from '../../components/SearchBar'
import LogosFooter from '../../components/LogosFooter'
import Mapafooter from '../../components/MapaFooter'
import InfoFooter from '../../components/InfoFooter'
import ConteudoHome from '../../components/Conteudos/ConteudoHome'

const Home =()=>{
    return(
        <div className={styles.caixa}>
            <Acessibilidade></Acessibilidade>
            <Header></Header>
            <NavBar></NavBar>
            <ConteudoHome></ConteudoHome>
            <Mapafooter></Mapafooter>
            <LogosFooter></LogosFooter>
            <InfoFooter></InfoFooter>
        </div>
    )
}

export default Home