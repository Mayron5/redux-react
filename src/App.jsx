import './App.css';
import Card from './components/Card';
import Conselho from './components/Conselho';

import Intervalo from './components/Intervalo';
import Media from './components/Media'
import Soma from './components/Soma'
import Sorteio from './components/Sorteio'

function App() {
  return (
    <div className="App">
      <h2>Exercício React-Redux (Simples)</h2>
      <div className="row">
        <Intervalo />
      </div>
      <div className="row">
        <Media />
        <Soma />
        <Sorteio />
      </div>
      <div className="row">
        <Conselho />
      </div>
    </div>
  );
}

export default App;
