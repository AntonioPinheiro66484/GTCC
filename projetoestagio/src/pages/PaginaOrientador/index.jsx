import React from "react"
import Acessibilidade from '../../components/Acessibilidade'
import Header from '../../components/Header'
import NavBar from '../../components/NavBar'
import LogosFooter from '../../components/LogosFooter'
import MapaFooter from '../../components/MapaFooter'
import InfoFooter from '../../components/InfoFooter'
import ConteudoOrientador from "../../components/Conteudos/ConteudoOrientador"


const PaginaOrientador =()=>{
    return(
        <div>
            <Acessibilidade/>
            <Header/>
            <NavBar/>
            <ConteudoOrientador/>
            <MapaFooter/>
            <LogosFooter/>
            <InfoFooter/>
        </div>
    )
}

export default PaginaOrientador