import React, { useState } from "react";

export default function ControleTexto() {
  const [texto, setTexto] = useState("");
  const [saida, setSaida] = useState("...");

  function aoDigitar(e: React.ChangeEvent<HTMLInputElement>) {
    setTexto(e.target.value);

    
    const novo = normalizaTexto(e.target.value);
    setSaida(novo);
  }

 
  function normalizaTexto(valor: string) {
    const v = valor.trim();

    if (v.length === 0) return "vazio";

   
    return v.toLowerCase();
  }

  function limpar() {
    setTexto("");
    setSaida("...");
  }

  return (
    <div>
      <h2>Controle de Texto</h2>

      <label>Digite:</label>
      <input value={texto} onChange={aoDigitar} />

      <p>Saída normalizada:</p>
      <pre>{saida}</pre>

      <button onClick={limpar}>Limpar</button>
    </div>
  );
}