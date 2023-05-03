import React from "react";
import Acessibilidade from "../../components/Acessibilidade";
import Header from '../../components/Header'
import NavBar from '../../components/NavBar'
import SearchBar from '../../components/SearchBar'
import LogosFooter from '../../components/LogosFooter'
import MapaFooter from '../../components/MapaFooter'
import InfoFooter from '../../components/InfoFooter'
import ConteudoTrabalhos from "../../components/Conteudos/ConteudoTrabalhos"


const PaginaTrabalhos =()=>{
    return(
        <div>
            <Acessibilidade/>
            <Header/>
            <NavBar/>
            <SearchBar/>
            <ConteudoTrabalhos/>
            <MapaFooter/>
            <LogosFooter/>
            <InfoFooter/>
        </div>
    )
}

export default PaginaTrabalhos