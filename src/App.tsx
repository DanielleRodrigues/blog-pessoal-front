import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Title } from './Componentes/title/title'
import { Text } from './Componentes/Text/Text'

function App() {
  const nome =  'Danielle';

  return (
    <>
    
   <Title nome={nome} />
   <Text />
    </>
  );
}

export default App;
