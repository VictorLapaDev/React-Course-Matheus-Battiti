import { useState, useEffect } from "react";

const List = ({ getItens }) => {

  // Estado que armazena os itens retornados da função
  const [myItens, setMyItens] = useState([]);

  // useEffect executa sempre que a referência de getItens mudar
  useEffect(() => {
    console.log("Buscando itens do DB...");

    // Chamamos a função recebida por props
    // e salvamos o retorno no estado
    setMyItens(getItens());
  }, [getItens]);

  return (
    <div>
      {myItens.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </div>
  );
};

export default List;
