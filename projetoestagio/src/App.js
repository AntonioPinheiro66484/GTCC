import './App.css'
import Home from './pages/Home'
import PaginaTrabalho from './pages/PaginaTrabalho'
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import PaginaIntegrantes from './pages/PaginaIntegrantes'
import PaginaEtapas from './pages/PaginaEtapas'
import PaginaOrientador from './pages/PaginaOrientador'
import PaginaSolicitacoes from './pages/PaginaSolicitacoes'
import PaginaTrabalhos from './pages/PaginaTrabalhos'
import PaginaEditar from './pages/PaginaEditar'
import PaginaLogin from './pages/PaginaLogin'
import PaginaOrientadores from './pages/PaginaOrientadores'

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
          <Route path='/PaginaLogin' element={<PaginaLogin/>}/>
          <Route path='/PaginaOrientadores' element={<PaginaOrientadores/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App
