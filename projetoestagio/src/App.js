import './App.css';
import Home from './pages/Home';
import PaginaAluno from './pages/PaginaAluno'
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/PaginaAluno" element={<PaginaAluno/>}/>
      </Routes>
     </Router>
   
    </div>
  );
}

export default App;
