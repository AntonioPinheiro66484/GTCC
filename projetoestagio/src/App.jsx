import Rotas from "./routes";
import BarraAcessibilidade from "./components/BarraAcessibilidade";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import BotaoAcessibilidade from "./components/BotaoAcessibilidade";

function App() {
    return (
        <div className="App">
            <aside>
                <NavBar/>
            </aside>
            <main>
                <Header/>
                <Rotas/>
            </main>
            <BotaoAcessibilidade/>
        </div>
    )
}

export default App
