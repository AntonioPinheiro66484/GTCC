import './App.css'
import Home from './pages/Home'
import PaginaTrabalho from './pages/PaginaAluno'
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import PaginaIntegrantes from './pages/PaginaIntegrantes'
import PaginaEtapas from './pages/PaginaEtapas'
import PaginaOrientador from './pages/PaginaOrientador'
import PaginaSolicitacoes from './pages/PaginaSolicitacoes'
import PaginaTrabalhos from './pages/PaginaTrabalhos'
import PaginaEditar from './pages/PaginaEditar'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/PaginaTrabalho" element={<PaginaTrabalho/>}/>
          <Route path="/PaginaIntegrantes" element={<PaginaIntegrantes/>}/>
          <Route path='/PaginaEtapas' element={<PaginaEtapas/>}/>
          <Route path='/PaginaOrientador' element={<PaginaOrientador/>}/>
          <Route path='/PaginaSolicitacoes' element={<PaginaSolicitacoes/>}/>
          <Route path='/PaginaTrabalhos' element={<PaginaTrabalhos/>}/>
          <Route path='/PaginaEditar' element={<PaginaEditar/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App
