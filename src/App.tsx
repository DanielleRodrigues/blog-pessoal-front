import React from 'react';
import './App.css';
import{ BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Title } from './Componentes/estaticos/title/title';
import { Text } from './Componentes/estaticos/Text/Text';
import Navbar from './Componentes/estaticos/Navbar/Navbar';
import { Home } from './paginas/Home/Home';
import { About } from './paginas/About/About';




function App() {
  const nome =  'Danielle';

  return (
    <Router> {/*Router // orquestrador - */}
    <Navbar/>
    {/* // lista de rotas da aplicação */}
   <Routes> 
   {/* route //caminho */}
    <Route path='/' element={ <Home />}/> 
    <Route path='/home' element={ <Home />}/>
    <Route path='/about' element={ <About />}/>
   </Routes>
   </Router>
  );
}

export default App;
