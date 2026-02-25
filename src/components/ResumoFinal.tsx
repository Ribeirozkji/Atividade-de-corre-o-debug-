import { useState } from "react";


 const ResumoFinal = () => {

 
  const [historico, setHistorico] = useState<string[]>([]);
const [valor, setValor] = useState<number>(0);

  
  function registrar(acao: string) {
  const novoItem = `${acao} -> ${valor}`;
    const novo = [...historico, novoItem];
    setHistorico(novo);
  }
  
  

  function aumentar() {
    
    setValor(valor + 1);
    registrar("aumentou");
  }

  function zerar() {
    setValor(0);
    setHistorico([]);
  }

  return (
    <div>
      <h2>Resumo Final</h2>

      <p>Valor atual: <strong>{valor}</strong></p>

      <button onClick={aumentar}>Aumentar</button>
      <button onClick={zerar}>Zerar</button>

      <h3>Histórico</h3>
      <ul>
       
        {historico.map((h, i) => (
          <li key={i}>{h}</li>
        ))}
      </ul>

      
    </div>
  );

};

export default ResumoFinal;