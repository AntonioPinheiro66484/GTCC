import React from "react"
import Acessibilidade from '../../components/Acessibilidade'
import Header from '../../components/Header'
import NavBar from '../../components/NavBar'
import SearchBar from '../../components/SearchBar'
import LogosFooter from '../../components/LogosFooter'
import MapaFooter from '../../components/MapaFooter'
import InfoFooter from '../../components/InfoFooter'
import ConteudoEtapas from "../../components/Conteudos/ConteudoEtapas"

const PaginaEtapas =()=>{
    return(
        <div>
            <Acessibilidade></Acessibilidade>
            <Header></Header>
            <NavBar></NavBar>
            <SearchBar></SearchBar>
            <ConteudoEtapas></ConteudoEtapas>
            <MapaFooter></MapaFooter>
            <LogosFooter></LogosFooter>
            <InfoFooter></InfoFooter>
        </div>
    )
}

export default PaginaEtapas