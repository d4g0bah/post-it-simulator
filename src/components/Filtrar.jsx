import React from 'react';

const Filtrar = ({ setFiltro }) => {
  return (
    <input
      type="text"
      placeholder="Filtrar"
      onChange={(e) => setFiltro(e.target.value)}
    />
  );
};

export default Filtrar;
