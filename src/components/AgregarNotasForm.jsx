import React, { useState } from 'react';

const AgregarNotasForm = ({ agregarNotas }) => {
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [importante, setImportante] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!descripcion) return;
    agregarNotas({
      titulo,
      descripcion,
      importante,
    });
    setTitulo('');
    setDescripcion('');
    setImportante(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Título"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />
      <textarea
        placeholder="Descripción"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
        required
      />
      <label>
        Importante!
        <input
          type="checkbox"
          checked={importante}
          onChange={(e) => setImportante(e.target.checked)}
        />
      </label>
      <button type="submit">AGREGAR</button>
    </form>
  );
};

export default AgregarNotasForm;
