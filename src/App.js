import React, { useState } from 'react';
import Cabecera from './components/Cabecera';
import Listado from './components/Listado';

function App() {

  const [cantidad, setCantidad] = useState(0)

  const sumar = () => {
    setCantidad(cantidad + 1)
  }

  return (
    <div className="App">
      <Cabecera cantidad={cantidad}/>
      <Listado func={sumar}/>
    </div>
  );
}

export default App;
