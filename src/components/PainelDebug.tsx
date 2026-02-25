import { useState } from "react";

export default function PainelDebug() {
  const [status, setStatus] = useState("parado");
  const [vezes, setVezes] = useState(0);

  function alternar() {
   
    const proximo = status === "parado" ? "rodando" : "parado";

    setStatus(proximo);
    setVezes(vezes + 1);
  }

  function resetar() {
    setStatus("parado");
    setVezes(0);
  }

  return (
    <div>
      <h2>Painel de Debug</h2>

      <p>Status: <strong>{status}</strong></p>
      <p>Cliques: <strong>{vezes}</strong></p>

      <button onClick={alternar}>Alternar</button>
      <button onClick={resetar}>Resetar</button>

      <div>
        <p>
          Regra: quando estiver "rodando", mostre "Em execução".
          Quando estiver "parado", mostre "Aguardando".
        </p>
        <p>
          Saída:{" "}
          <strong>
            {status === "rodando" ? "Em execução" : "Aguardando"}
          </strong>
        </p>
      </div>
    </div>
  );
}