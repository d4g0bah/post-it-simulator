import React from 'react';
import Nota from './Nota'; 

const ListaDeNotas = ({ notas, eliminarNota }) => {
  return (
    <div className="note-list">
      {notas.map(nota => (
        <Nota
          key={nota.id}
          nota={nota}
          eliminarNota={eliminarNota}
        />
      ))}
    </div>
  );
};

export default ListaDeNotas;
