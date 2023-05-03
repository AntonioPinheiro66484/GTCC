import React from 'react'
import Acessibilidade from '../../components/Acessibilidade'
import Header from '../../components/Header'
import NavBar from '../../components/NavBar'
import LogosFooter from '../../components/LogosFooter'
import MapaFooter from '../../components/MapaFooter'
import InfoFooter from '../../components/InfoFooter'
import ConteudoLogin from '../../components/Conteudos/ConteudoLogin'

const PaginaLogin =() =>{
  return (
    <div>
        <Acessibilidade></Acessibilidade>
        <Header></Header>
        <NavBar></NavBar>
        <ConteudoLogin></ConteudoLogin>
        <MapaFooter></MapaFooter>
        <LogosFooter></LogosFooter>
        <InfoFooter></InfoFooter>
</div>
  )
}

export default PaginaLogin