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
      <Acessibilidade/>
      <Header/>
      <NavBar/>
      <ConteudoLogin/>
      <MapaFooter/>
      <LogosFooter/>
      <InfoFooter/>
    </div>
  )
}

export default PaginaLogin