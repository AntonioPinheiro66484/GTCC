import React from "react";
import Acessibilidade from '../../components/Acessibilidade'
import Header from '../../components/Header'
import NavBar from '../../components/NavBar'
import SearchBar from '../../components/SearchBar'
import LogosFooter from '../../components/LogosFooter'
import MapaFooter from '../../components/MapaFooter'
import InfoFooter from '../../components/InfoFooter'
import ConteudoOrientadores from '../../components/Conteudos/ConteudoOrientadores'

const PaginaOrientadores =()=>{
    return(
        <div>
            <Acessibilidade/>
            <Header/>
            <NavBar/>
            <SearchBar/>
            <ConteudoOrientadores/>
            <MapaFooter/>
            <LogosFooter/>
            <InfoFooter/>
        </div>
    )
}

export default PaginaOrientadores