import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "../pages/Home";
import Trabalho from "../pages/Trabalho";
import Integrantes from "../pages/Integrantes";
import Etapas from "../pages/Etapas";
import Orientador from "../pages/Orientador";
import Solicitacoes from "../pages/Solicitacoes";
import Trabalhos from "../pages/Trabalhos";
import EditarTrabalho from "../pages/EditarTrabalho";
import Login from "../pages/Login";
import Orientadores from "../pages/Orientadores";
import TiposTrabalho from "../pages/TiposTrabalho";
import EditarTipoTrabalho from "../pages/EditarTipoTrabalho";
import CadastrarTipoTrabalho from "../pages/CadastrarTipoTrabalho";
import Acessibilidade from "../pages/Acessibilidade";
import EditarEtapa from "../pages/EditarEtapa";

function Rotas() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/trabalho" element={<Trabalho/>}/>
                <Route path="/integrantes" element={<Integrantes/>}/>
                <Route path='/etapas' element={<Etapas/>}/>
                <Route path='/orientador' element={<Orientador/>}/>
                <Route path='/solicitacoes' element={<Solicitacoes/>}/>
                <Route path='/trabalhos' element={<Trabalhos/>}/>
                <Route path='/editar-trabalho' element={<EditarTrabalho/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/orientadores' element={<Orientadores/>}/>
                <Route path='/tipos-de-trabalho' element={<TiposTrabalho/>}/>
                <Route path='/editar-tipo-de-trabalho' element={<EditarTipoTrabalho/>}/>
                <Route path='/cadastrar-tipo-de-trabalho' element={<CadastrarTipoTrabalho/>}/>
                <Route path='/acessibilidade' element={<Acessibilidade/>}/>
                <Route path='/editar-etapa' element={<EditarEtapa/>}/>
            </Routes>
        </Router>
    )
}

export default Rotas
