import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Trabalho from '../pages/Trabalho'
import Integrantes from '../pages/Integrantes'
import Etapas from '../pages/Etapas'
import Orientador from '../pages/Orientador'
import Solicitacoes from '../pages/Solicitacoes'
import Trabalhos from '../pages/Trabalhos'
import Editar from '../pages/Editar'
import Login from '../pages/Login'
import Orientadores from '../pages/Orientadores'

function Rotas() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Trabalho" element={<Trabalho/>}/>
                <Route path="/Integrantes" element={<Integrantes/>}/>
                <Route path='/Etapas' element={<Etapas/>}/>
                <Route path='/Orientador' element={<Orientador/>}/>
                <Route path='/Solicitacoes' element={<Solicitacoes/>}/>
                <Route path='/Trabalhos' element={<Trabalhos/>}/>
                <Route path='/Editar' element={<Editar/>}/>
                <Route path='/Login' element={<Login/>}/>
                <Route path='/Orientadores' element={<Orientadores/>}/>
            </Routes>
        </Router>
    )
}

export default Rotas
