import { useState } from 'react';

function useLocalStorage(clave, valorInicial) {
  const [valorAlmacenado, setValorAlmacenado] = useState(() => {
    try {
      const item = window.localStorage.getItem(clave);
      return item ? JSON.parse(item) : valorInicial;
    } catch (error) {
      console.error(error);
      return valorInicial;
    }
  });

  const setValor = (valor) => {
    try {
      const valorAAlmacenar = valor instanceof Function ? valor(valorAlmacenado) : valor;
      setValorAlmacenado(valorAAlmacenar);
      window.localStorage.setItem(clave, JSON.stringify(valorAAlmacenar));
    } catch (error) {
      console.error(error);
    }
  };

  return [valorAlmacenado, setValor];
}

export default useLocalStorage;
