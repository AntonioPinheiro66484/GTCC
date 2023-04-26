import React from "react";
import styles from './PaginaAluno.module.css'
import Acessibilidade from "../../components/Acessibilidade";
import SearchBar from "../../components/SearchBar";
import LogosFooter from "../../components/LogosFooter";
import MapaFooter from "../../components/MapaFooter";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import ConteudoAluno from "../../components/Conteudos/ConteudoAluno";


const PaginaAluno =()=>{
    return(
        <div className={styles.caixa}>
            <Acessibilidade></Acessibilidade>
            <Header></Header>
            <NavBar></NavBar>
            <SearchBar></SearchBar>
            <ConteudoAluno></ConteudoAluno>
            <LogosFooter></LogosFooter>
            <MapaFooter></MapaFooter>
        </div>
    )
}

export default PaginaAluno