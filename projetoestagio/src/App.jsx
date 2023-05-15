import './App.css'
import Rotas from './routes'
import Acessibilidade from './components/Acessibilidade'
import Header from './components/Header'
import NavBar from './components/NavBar'
import LogosFooter from './components/LogosFooter'
import MapaFooter from './components/MapaFooter'
import InfoFooter from './components/InfoFooter'
import VLibras from './components/VLibras'

function App() {
    return (
        <div className="App">

            <Acessibilidade/>
            <Header/>
            <NavBar/>
            <Rotas/>
            <MapaFooter/>
            <LogosFooter/>
            <InfoFooter/>
            <VLibras/>
        </div>
    )
}

export default App
