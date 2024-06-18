import React from 'react';

const Nota = ({ nota, eliminarNota }) => {
  return (
    <div className={`note ${nota.importante ? 'important' : ''}`}>
      <h3>{nota.titulo}</h3>
      <p>{nota.descripcion}</p>
      <button onClick={() => eliminarNota(nota.id)}>X</button>
    </div>
  );
};

export default Nota;
