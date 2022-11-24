import './App.css';
import { Title } from './Componentes/title/title'
import { Text } from './Componentes/Text/Text'
import Navbar from './Componentes/Navbar/Navbar';

function App() {
  const nome =  'Danielle';

  return (
    <>
    <Navbar/>
   <Title nome={nome} />
   <Text />
    </>
  );
}

export default App;
