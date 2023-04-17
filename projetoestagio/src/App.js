import './App.css';
import Home from './components/Acessibilidade'
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path="/" element={<Home/>}>

        </Route>
      </Routes>
     </Router>
   
    </div>
  );
}

export default App;
