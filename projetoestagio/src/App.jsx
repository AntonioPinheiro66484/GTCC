import Rotas from "./routes";
import BarraAcessibilidade from "./components/BarraAcessibilidade";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import BotaoAcessibilidade from "./components/BotaoAcessibilidade";
import MapaFooter from "./components/MapaFooter";
import LogosFooter from "./components/LogosFooter";
import InfoFooter from "./components/InfoFooter";

function App() {
    return (
        <div className="App">
            {/*<BarraAcessibilidade/>*/}
            <Header/>
            <BotaoAcessibilidade/>
            <NavBar/>
            <Rotas/>
            {/*<MapaFooter/>
            <LogosFooter/>
            <InfoFooter/>*/}
        </div>
    )
}

export default App
