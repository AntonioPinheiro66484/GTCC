import React from 'react'
import Acessibilidade from '../../components/Acessibilidade'
import Header from '../../components/Header'
import NavBar from '../../components/NavBar'
import SearchBar from '../../components/SearchBar'
import LogosFooter from '../../components/LogosFooter'
import MapaFooter from '../../components/MapaFooter'
import InfoFooter from '../../components/InfoFooter'
import ConteudoTrabalho from "../../components/Conteudos/ConteudoTrabalho"


const PaginaTrabalho =()=>{
    return(
        <div>
            <Acessibilidade></Acessibilidade>
            <Header></Header>
            <NavBar></NavBar>
            <SearchBar></SearchBar>
            <ConteudoTrabalho></ConteudoTrabalho>
            <MapaFooter></MapaFooter>
            <LogosFooter></LogosFooter>
            <InfoFooter></InfoFooter>
        </div>
    )
}

export default PaginaTrabalho