import styles from "./App.css";
import Rotas from "./routes";
import BarraAcessibilidade from "./components/BarraAcessibilidade";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import BotaoAcessibilidade from "./components/BotaoAcessibilidade";
import Footer from "./components/Footer";


function App() {
    return (
        <div className="App">
            <BarraAcessibilidade/>
            <Header/>
            <BotaoAcessibilidade/>
            <NavBar/>
            <Rotas/>
            <Footer/>
        </div>
    )
}

export default App
