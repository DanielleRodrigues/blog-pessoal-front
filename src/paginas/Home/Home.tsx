import React, { useState } from 'react'
import './Home.css'

function Home() {
  const [num, setNum] = useState(0);

  return (
    <>
      <div>vc clicou {num} vezes </div>
      <button onClick={()=> setNum(num + 1)}>click here</button>
    </>
  );
}

export {Home}