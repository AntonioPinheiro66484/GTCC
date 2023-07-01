import "./App.css";
import Rotas from "./routes";
import BarraAcessibilidade from "./components/BarraAcessibilidade";
import Header from "./components/Header";
/*import NavBar from "./components/NavBar";*/
import BotaoAcessibilidade from "./components/BotaoAcessibilidade";

function App() {
    return (
        <div className="App">
            {/*<NavBar/>*/}
            <div className={styles.caixa}>
                <Header/>
                <Rotas/>
            </div>
            <BotaoAcessibilidade/>
        </div>
    )
}

export default App
