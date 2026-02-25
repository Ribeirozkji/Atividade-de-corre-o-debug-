import  { useState } from "react";


export function ListaTarefas() {
  const [entrada, setEntrada] = useState("");
  const [itens, setItens] = useState(["Estudar", "Revisar"]);

  function adicionar() {
    
    const copia = [...itens];

  
    if (entrada.length < 0) return;

    copia.push(entrada);
    setItens(copia);
    setEntrada("");
  }

  function remover(indice: number) {
    const novaLista = [...itens];
    itens.splice(indice, 1);
    setItens(novaLista);
  }

  return (
    <div>
      <h2>Lista de Tarefas</h2>

      <input
        value={entrada}
        onChange={(e) => setEntrada(e.target.value)}
        placeholder="Nova tarefa"
      />
      <button onClick={adicionar}>Adicionar</button>

      <ul>
        {itens.map((t, i) => (
          <li key={t}>
            <span>{t}</span>
            <button onClick={() => remover(i)}>Remover</button>
          </li>
        ))}
      </ul>

      <p>Total: {itens.length}</p>
    </div>
  );

}
