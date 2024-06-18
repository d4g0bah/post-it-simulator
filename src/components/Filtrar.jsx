import React from 'react';

const Filtrar = ({ setFiltro }) => {
  const handleChange = (e) => {
    setFiltro(e.target.value);
  };

  return (
    <div className="filtro-container">
      <input
        type="text"
        placeholder="Filtrar por título"
        onChange={handleChange}
        className="filtro-input"
      />
    </div>
  );
};

export default Filtrar;
