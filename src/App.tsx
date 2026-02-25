
import './App.css'
import PainelDebug from "./components/PainelDebug";
import ControleTexto from "./components/ControleTexto";
import ContadorDuplo from "./components/ContadorDuplo";
import { ListaTarefas } from "./components/ListaTarefas";
import ResumoFinal from "./components/ResumoFinal";

export default function App() {
  return (
    <div>
      <h1>Laboratório de Debug React</h1>

      <PainelDebug />
      <hr />

      <ControleTexto />
      <hr />

      <ContadorDuplo />
      <hr />

      <ListaTarefas />
      <hr />

      <ResumoFinal />
    </div>
  );
}