import React, { useState } from 'react';
import AgregarNotasForm from './components/AgregarNotasForm';
import NotaList from './components/NotaList';
import Filtrar from './components/Filtrar';
import useLocalStorage from './hooks/useLocalStorage';
import './styles.css';

const App = () => {
  const [notas, setNotas] = useLocalStorage('notas', []);
  const [filtro, setFiltro] = useState('');

  const agregarNota = (nota) => {
    setNotas([...notas, { ...nota, id: Date.now() }]);
  };

  const eliminarNota = (id) => {
    setNotas(notas.filter(nota => nota.id !== id));
  };

  const notasFiltradas = notas.filter(nota =>
    nota.titulo.toLowerCase().includes(filtro.toLowerCase()) || 
    nota.descripcion.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div className="app">
      <h1>Post It Simulator!</h1>
      <Filtrar setFiltro={setFiltro} />
      <AgregarNotasForm agregarNotas={agregarNota} />
      <NotaList notas={notasFiltradas} eliminarNota={eliminarNota} />
    </div>
  );
};

export default App;
